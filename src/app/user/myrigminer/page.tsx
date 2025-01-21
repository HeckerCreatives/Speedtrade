"use client"
import UserLayout from "@/components/layout/Userlayout"
import ClaimHistoryTable from "./Table"
import Rigs from "./Rigs"
import { useEffect, useState } from "react"
import axios, { AxiosError } from "axios"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

interface Pool {
  currentvalue: number
pricepool: number
}


export default function page() {
  const router = useRouter()
  const [pool, setPool] = useState<Pool>()
  const [qualify, setQualify] = useState(false)

  useEffect(() => {
    const handler = setTimeout( async () => {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/pricepool/usergetpricepool`,{
          withCredentials:true
          })

          console.log(response.data)
          setPool(response.data.data)
          setQualify(response.data.boolean)
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

  return (

    <UserLayout>
        <div className=" bg-slate-900 w-full h-full flex flex-col items-center p-8">
          {qualify === true && (
            <p className=" text-green-500 text-lg font-semibold"> You qualify to receive a share of the  ₱{pool?.pricepool.toLocaleString()} price pool.</p>
          )}
          <Rigs/>
          <ClaimHistoryTable/>
        </div>
      
    </UserLayout>
  )
}
