'use client'
import React, { useState } from 'react'
import { Slider } from "@/components/ui/slider"
import { convertSecondsToTime, getTimerFromUnixTime } from '@/app/utils/Countdowntimer'
import Countdown from 'react-countdown';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';


type Props = {
    id: string
    name: string
    percentage: string
    duration: string
   
    img: string
    size: string
    max: number

    earnings: number
    timeleft: number
    purchase: string

}

export default function MyRigCard( prop: Props) {
    const router = useRouter()
    const [slider, setSlider] = useState(0)

    const progress = (prop.earnings / prop.max) * 100
    const widthString = `${progress.toFixed(2)}%`;
    const seconds = prop.timeleft; // your time in seconds
    const unixTime = prop.timeleft /  86400;



    const claimEarnings = async () => {
    try {
      const request = axios.post(`${process.env.NEXT_PUBLIC_URL}/inventory/claimminer`,{
        minerid: prop.id
      },{
        withCredentials: true
      })

       const response = await toast.promise(request, {
          loading: 'Claiming....',
          success: `Successfully claimed`,
          error: 'Error while claiming the earnings',
      });

      console.log(response.data)

    } catch (error) {
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

  return (

    <div className=' w-full flex items-end justify-end h-[330px] lg:h-[350px] max-w-[470px]'>
        <div className=' relative w-full flex flex-col bg-slate-800 rounded-sm p-6 h-auto'>
            <div className=' relative w-full grid grid-cols-2 gap-4 h-auto'>
                <div className=' w-full relative'>
                    <img src={prop.img} alt="" width={prop.size} className=' absolute -translate-y-12 md:-translate-y-16 lg:-translate-y-20' />

                </div>

                <div className=' w-full flex flex-col gap-1'>
                    <p className=' text-sm font-semibold text-white'>{prop.name}</p>
                    <p className=' text-xs text-green-500'>{prop.percentage}% Profit</p>
                    <p className=' text-xs text-green-500'>{prop.duration} days duration</p>

                </div>
            </div>

            <div className=' w-full flex flex-col gap-2 mt-16'>
                <p className=' text-sm text-zinc-100'>Earnings: <span className=' text-green-500'>₱ {(prop.earnings).toLocaleString()}</span></p>
                <div className=' w-full h-2 rounded-full bg-slate-900 overflow-hidden'>
                    <div className={`h-full bg-green-500 rounded-full overflow-hidden `}
                    style={{width: widthString}}
                    >
                        <div className=' loader w-full h-full'></div>
                    </div>
                </div>

                {/* <p className=' text-xs text-white mt-2'><span className=''>{getTimerFromUnixTime(prop.timeleft)}</span> </p> */}
                <Countdown
                className=' mt-2'
                    date={Date.now() + (prop.timeleft * 1000)}
                    renderer={({ days, hours, minutes, seconds }) => (
                        <span className=' text-xs'>
                        Time left: {days} days : {hours} hours : {minutes} minutes : {seconds} seconds
                        </span>
                    )}
                    />
                

                <div className=' w-full flex items-center justify-between mt-2'>
                    <p className=' text-sm text-white font-medium'>Purchase Date: <span className=' text-orange-300'>{prop.purchase}</span></p>
                    <button onClick={claimEarnings} className=' px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-green-700 to-green-500 rounded-sm'>Claim</button>

                </div>
            </div>

        </div>
    </div>
    
  )
}
