'use client'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import React, { useState } from 'react'

type Pagination = {
    currentPage: number
    total: number
}

export default function Pagination(prop: Pagination) {
    const [nextdisable , setNextDisable] = useState(false)
    const [prevdisable , setPrevDisable] = useState(false)

    const next = () => {
        if(prop.total === prop.currentPage){
            setNextDisable(true)
        } else (
            prop.currentPage + 1
        )
    }

    const prev = () => {
        if(prop.currentPage === 1){
            setPrevDisable(true)
        } else{
            prop.currentPage - 1
        }
    }
    
  return (
    <div className=' flex items-center gap-1 text-xs'>
        <button onClick={prev} disabled={prevdisable} className=' bg-green-500 text-white p-2 rounded-sm'><ArrowLeft size={15}/></button>
        <p className=' p-2 bg-slate-700 aspect-square w-12 h-8 text-center rounded-sm'>{prop.currentPage} / {prop.total}</p>
        <button  onClick={next} disabled={nextdisable} className=' bg-green-500 text-white p-2 rounded-sm'><ArrowRight size={15}/></button>
    </div>
  )
}