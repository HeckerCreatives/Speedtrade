'use client'
import React, { useState } from 'react'
import { Slider } from "@/components/ui/slider"
import axios, { AxiosError } from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Spinner from './Spinner'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"



type Props = {
    name: string
    percentage: string
    duration: string
    min: number
    max: number
    img: string
    size: string

}

export default function Productcard( prop: Props) {
    const [slider, setSlider] = useState(0)
    const [val, setVal] = useState([prop.min]);
    const type = prop.name === 'Quick Miner' && 'quick_miner' || prop.name === 'Swift Miner' && 'swift_lane' || prop.name === 'Rapid Miner' && 'rapid_lane'
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const [dialog, setDialog] = useState(false)


    const buyRigminer = async () => {
        setDialog(false)
        setLoading(true)
        router.push('?state=true')
        try {
            const request = axios.post(`${process.env.NEXT_PUBLIC_URL}/inventory/buyminer`,{
                type: type, // quick_miner, switf_lane, rapid_lane
                priceminer: val[0]
            },{
                withCredentials: true,
                headers:{
                    'Content-Type':'Application/json'
                }
            })

            const response = await toast.promise(request, {
                loading: `Purchasing ${prop.name}...`,
                success: `You succesfully purchased ${prop.name}`,
                error: `Error while purchasing ${prop.name}`,
            });
            if(response.data.message === 'success'){
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


  return (

    <div className=' w-full flex items-end justify-end h-[420px] max-w-[470px] mt-10'>
        <div className=' relative w-full flex flex-col bg-slate-800 rounded-sm p-6 h-auto'>
            <div className=' relative w-full grid grid-cols-2 h-auto gap-4'>
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
                <p className=' text-sm text-green-500'>Price</p>
                <Slider onValueChange={(i) => setVal(i)} value={val} defaultValue={val} min={prop.min} max={prop.max} step={1} />
                <label htmlFor="" className=' text-xs text-zinc-400 mt-4'>Or input ammount here</label>
                <input type="text" min={prop.min} max={prop.max} value={val[0]} onChange={(e) => setVal([Number(e.target.value)])}  placeholder='Input ammount here' className=' text-sm p-2 rounded-md bg-slate-700'/>
                <div className=' w-full flex items-center justify-between text-xs mt-2'>
                    <p className=' text-xs text-zinc-400'>min:₱ {(prop.min).toLocaleString()}</p>
                    <p className=' text-xs text-zinc-400'>max:₱ {(prop.max).toLocaleString()}</p>

                </div>

                <div className=' w-full flex md:flex-row flex-col gap-6 md:items-center justify-between mt-2'>
                    <p className=' text-sm font-semibold'>Selected price : <span className=' text-orange-300'>P{val.toLocaleString()}</span></p>
                    

                    <Dialog open={dialog} onOpenChange={setDialog}>
                    <DialogTrigger>
                        <button  disabled={loading} className=' px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-green-700 to-green-500 rounded-sm flex items-center gap-2'>
                        {loading === true && (
                        <Spinner/>
                        )}
                        Purchase</button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                        <DialogTitle>Are you absolutely sure you want to purchase <span className=' text-green-500'>{prop.name}</span> ?</DialogTitle>
                        <DialogDescription>
                            
                        </DialogDescription>
                        </DialogHeader>
                        <div className=' w-full flex flex-col'>
                            <p className=' text-sm text-green-500'>{prop.percentage}% Profit</p>
                            <p className=' text-sm text-green-500'>{prop.duration} days duration</p>
                            <p className=' text-sm text-white'>Selected Price: <span className=' text-green-500'>P {val[0].toLocaleString()}</span></p>

                            <div className=' w-full flex items-end justify-end gap-4'>
                                <button onClick={buyRigminer} className=' btn-gradient'>Continue</button>

                            </div>
                        </div>
                    </DialogContent>
                    </Dialog>


                </div>
            </div>


        
        </div>
    </div>
    
  )
}
