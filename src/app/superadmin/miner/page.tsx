'use client'
import React, { useEffect, useState } from 'react'
import SuperAdminLayout from '@/components/layout/SuperadminLayout'
import { Switch } from '@/components/ui/switch'
import MinerCard from '@/components/common/Minercard'
import axios, { AxiosError } from 'axios'
import { Turtle } from 'lucide-react'
import { Value } from '@radix-ui/react-select'
import { useRouter, useSearchParams } from 'next/navigation'
import toast from 'react-hot-toast'

type Miner = {
    duration: number
  id: string
  isBuyonetakeone: string
  max: number
  min: number
  name: string
  profit: number
  }


export default function page() {
    const [isChecked, setIsChecked] = useState(false);
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const params = useSearchParams()
    const refresh = params.get('state')

    const handleSwitchChange: React.Dispatch<React.SetStateAction<boolean>> = (event) => {
        setIsChecked(event);
        onOff(event)
      };

    useEffect(() => {

       const getState = async () => {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/maintenance/geteventmaintenance?type=b1t1`,{
            withCredentials: true
        })

        setIsChecked(response.data.data.value === "0" ? false : true)

        console.log(response.data)
       }
       getState()
    },[refresh])

  
    const onOff = async (newState: any) => {
            setLoading(true)
            router.push('?state=true')
            try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_URL}/maintenance/changemaintenance`,{
                    type: 'b1t1',
                    value: newState === true ? '1' : '0'
                },{
                    withCredentials:true,
                    headers:{
                    'Content-Type': 'application/json',
                    }
                })
    
                if( response.data.message === 'success'){
                    toast.success(`Buy one take one is now ${isChecked === true ? 'off' : 'on'}`) 
                    setLoading(false)
                    router.push('?state=false')

                }
    
    
    
            } catch (error) {
            setLoading(false)
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError<{ message: string, data: string }>;
                if (axiosError.response && axiosError.response.status === 401) {
                    toast.error(`${axiosError.response.data.data}`) 
                    router.push('/')    
                }
    
                if (axiosError.response && axiosError.response.status === 400) {
                    toast.error(`${axiosError.response.data.data}`)     
                        
                }
    
                if (axiosError.response && axiosError.response.status === 402) {
                    toast.error(`${axiosError.response.data.data}`)          
                            
                }
    
                if (axiosError.response && axiosError.response.status === 403) {
                    toast.error(`${axiosError.response.data.data}`)              
                    
                }
    
                if (axiosError.response && axiosError.response.status === 404) {
                    toast.error(`${axiosError.response.data.data}`)             
                }
        } 
    
                
            }
    }

    const [list, setList] = useState<Miner[]>([])

  useEffect(() => {

    const getState = async () => {
     const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/miner/getminer`,{
         withCredentials: true
     })
     setList(response.data.data)
     console.log(response.data)
    }
    getState()
 },[])
   

    
    
  return (
    <SuperAdminLayout>
        <div className=" bg-slate-900 w-full h-full flex flex-col gap-12 p-8">
           <div className=' bg-slate-800 w-full max-w-[300px] h-auto p-4 flex flex-col gap-4'
        
           >
            {/* <div className=' relative w-full h-[150px] overflow-hidden flex items-center justify-center'>
                <img src="/assets/quick-miner.png" alt="" width={100} height={100} className=' absolute translate-x-12'/>
                <img src="/assets/rapid-miner.png" alt="" width={100} height={100} className=' absolute z-20'/>
                <img src="/assets/swift-miner.png" alt="" width={100} height={100} className=' absolute -translate-x-12'/>
            </div> */}

            <div className=' w-full h-full flex flex-col gap-4'>
                <h2 className=' text-xl font-bold'>Buy one take one <span className=' text-green-500 text-sm'>({isChecked === true ? 'on' : 'off'})</span></h2>
                <Switch disabled={loading} checked={isChecked} onCheckedChange={handleSwitchChange}/>
            </div>
           </div>

           <div className=' w-full flex items-center flex-wrap gap-4'>
            <MinerCard id={list[0]?.id} name={'Quick Miner'} percentage={'20'} duration={list[0]?.duration} img={'/assets/quick-miner.png'} size={'150'} max={0}/>
            <MinerCard id={list[1]?.id} name={'Swift Miner'} percentage={'60'} duration={list[1]?.duration} img={'/assets/Swift-miner.png'} size={'120'} max={0}/>
            <MinerCard id={list[2]?.id} name={'Rapid Miner'} percentage={'150'} duration={list[2]?.duration} img={'/assets/Rapid-miner.png'} size={'110'} max={0}/>
           </div>
        </div>
    </SuperAdminLayout>
  )
}
