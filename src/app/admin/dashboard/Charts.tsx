"use client"

import { Barcharts } from "./Barchart"
import Linechart from "./Linechart"


export function Charts() {
  return (

    <div className=" w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <Linechart/>
        <Barcharts/>
    </div>
    
  )
}
