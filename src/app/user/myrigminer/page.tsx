"use client"
import UserLayout from "@/components/layout/Userlayout"
import ClaimHistoryTable from "./Table"
import Rigs from "./Rigs"
import { useEffect, useState } from "react"
import axios, { AxiosError } from "axios"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import PricePool from "@/components/pricepool/PricelPool"
import io from 'socket.io-client';
import { AnimatePresence, motion } from "framer-motion"
import Coin from "@/components/pricepool/Coins"


interface Pool {
  currentvalue: number
pricepool: number
}


export default function page() {
  const router = useRouter()
  const [pool, setPool] = useState<Pool>()
  const [qualify, setQualify] = useState(false)
  const [socket, setSocket] = useState<any>(null);
  const [currValue, setCurrValue] = useState(0)
  const [getCurrvalue, setGetcurrvalue] = useState(false)

  const [amount, setAmount] = useState(currValue)
  const [showCoins, setShowCoins] = useState(false)

  // Update amount and trigger coins when initialAmount changes
  useEffect(() => {
    setAmount(currValue) // Update the amount state
    setShowCoins(true) // Trigger coin animation
    const timer = setTimeout(() => setShowCoins(false), 1000) // Hide coins after 2 seconds
    return () => clearTimeout(timer)
  }, [currValue]) // Run this effect when initialAmount changes



  const generateCoins = () => {
    return [...Array(30)].map((_, i) => {
      const angle = (i / 30) * 360 // Distribute coins in a circle
      const radius = Math.random() * 150 + 50 // Random radius between 50 and 200
      const x = Math.cos((angle * Math.PI) / 180) * radius
      const y = Math.sin((angle * Math.PI) / 180) * radius

      return (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: 0,
            y: 0,
            scale: 0,
          }}
          animate={{
            x: x,
            y: y,
            scale: [0, 1, 1, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 1.5,
            ease: [0.23, 1, 0.32, 1], // Custom easing for explosive effect
            times: [0, 0.3, 0.8, 1], // Control timing of scale and opacity
          }}
        >
          <Coin />
        </motion.div>
      )
    })
  }
  


  useEffect(() => {
    const handler = setTimeout( async () => {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/pricepool/usergetpricepool`,{
          withCredentials:true
          })

          setPool(response.data.data)
          setQualify(response.data.boolean)
          setCurrValue(response.data.data.currentvalue)
          setGetcurrvalue(true)
        } catch (error) {
          if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError<{ message: string, data: string }>;
            if (axiosError.response && axiosError.response.status === 401) {
              toast.error(`${axiosError.response.data.data}`)
              router.push('/')  
              }    
            } 
        }
    }, 500)

    return () => {
      clearTimeout(handler)
    }
  },[])

  // useEffect(() => {
  //   if(pool){
  //   setCurrValue(pool?.pricepool)
  //   }
  // },[pool])

    // Initialize Socket.IO connection
    useEffect(() => {
      const newSocket = io(`${process.env.NEXT_PUBLIC_URL}`);
      setSocket(newSocket);
  
      return () => {
        newSocket.disconnect(); // Clean up socket connection
        console.log('disconnected')
      };
    }, []);

    useEffect(() => {
      if (!socket) return;
  
      // Join the conversation room
      socket.emit('login', 'User');

      socket.on('update-pricepool', (data: any) => {
        // Log the received data to the console
        console.log('Received update-pricepool data:', data);
  
        // Assuming `data` is a number (e.g., the price pool value)
       setCurrValue(data)
      });
  
      // Clean up the socket listener when the component unmounts
      return () => {
        socket.off('update-pricepool');
      };

  
    }, [socket]);

    console.log(currValue)

  return (

    <UserLayout>
        <div className=" bg-slate-900 w-full h-full flex flex-col items-center p-8">
          {qualify === true && (
            <div className="relative w-full max-w-md mx-auto mt-10 text-center flex flex-col items-center justify-center">
              <p className=" text-xs text-zinc-400 mb-2">Current value:</p>
            <motion.div className="text-5xl font-bold mb-4 text-green-500" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 0.3 }}>
              ₱{amount.toLocaleString()}
            </motion.div>
            <div className="text-lg mb-8"><p className="text-sm text-zinc-200 font-semibold"> You qualify to receive a share of the  ₱{pool?.pricepool.toLocaleString()} price pool.</p></div>
            

            <AnimatePresence>
              {showCoins && (
                <motion.div
                  className="absolute top-0 overflow-visible pointer-events-none"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {generateCoins()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          )}

          {/* {getCurrvalue === true && (
          <PricePool initialAmount={currValue} />

          )} */}


          <Rigs/>
          <ClaimHistoryTable/>
        </div>
      
    </UserLayout>
  )
}
