'use client'
import React, { useState } from 'react'
import { Slider } from "@/components/ui/slider"


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

  return (

    <div className=' w-full flex items-end justify-end h-[360px] max-w-[470px]'>
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
                <Slider onValueChange={(i) => setVal(i)} defaultValue={val} min={prop.min} max={prop.max} step={1} />
                <div className=' w-full flex items-center justify-between text-xs mt-2'>
                    <p>P{(prop.min).toLocaleString()}</p>
                    <p>P{(prop.max).toLocaleString()}</p>

                </div>

                <div className=' w-full flex md:flex-row flex-col gap-6 md:items-center justify-between mt-2'>
                    <p className=' text-sm font-semibold'>Selected price : <span className=' text-orange-300'>P{val.toLocaleString()}</span></p>
                    <button className=' px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-green-700 to-green-500 rounded-sm'>Request</button>

                </div>
            </div>


        
        </div>
    </div>
    
  )
}
