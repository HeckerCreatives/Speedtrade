'use client'
import React, { useState } from 'react'
import Countdown from 'react-countdown';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Spinner from './Spinner';


type Props = {
    id: string
    name: string
    percentage: string
    duration: number
   
    img: string
    size: string
    max: number

}

export default function MinerCard( prop: Props) {
    const router = useRouter()
    const [slider, setSlider] = useState(0)
    const [duration, setDuration] = useState(0)

    const [loading, setLoading] = useState(false)
    const [dialog, setDialog] = useState(false)

    const editminer = async () => {
        setLoading(true)
    try {
      const request = axios.post(`${process.env.NEXT_PUBLIC_URL}/miner/editminer`,{
        minerid: prop.id,
        duration: duration
      },{
        withCredentials: true
      })
      setDialog(false)

       const response = await toast.promise(request, {
          loading: 'Editing duration....',
          success: `Successfully edited`,
          error: 'Error while editing duration',
      });

      if(response.data.message === 'success'){
        window.location.reload()
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




  return (

    <div className=' relative w-full max-w-[400px] flex max-h-[205px] '>
        <div className=' relative w-full  flex flex-col bg-slate-800 rounded-sm p-6 h-auto'>
            <div className=' relative w-full grid grid-cols-2 gap-4 h-auto'>
                <div className=' w-full relative flex items-center justify-center'>
                    <img src={prop.img} alt="" width={prop.size} className='' />

                </div>

                <div className=' w-full flex flex-col gap-1'>
                    <p className=' text-sm font-semibold text-white'>{prop.name}</p>
                    <p className=' text-xs text-green-500'>{prop.percentage}% Profit</p>
                    <label htmlFor="" className=' mt-2 text-xs'>Duration (days)</label>
                    <input defaultValue={prop.duration} onChange={(e) => setDuration(e.target.valueAsNumber)}  placeholder='Duration' type="number" className=' p-1 bg-slate-700 rounded-sm text-xs'/>


                    <button onClick={editminer} disabled={loading} className=' btn-gradient w-fit mt-2 flex items-center justify-center gap-2'>
                    {loading === true && ( <div className='spinner'></div>)}
                        Save</button>
                </div>
            </div>

            
        </div>
    </div>
    
  )
}
