import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import Pagination from '@/components/common/Pagination'




export default function SalesTable() {
  return (
    <div className=' relative w-full flex flex-col items-center gap-8 max-w-[1440px] h-[500px] mt-4 bg-slate-800 p-6'>
        <div className=' flex md:flex-row flex-col gap-4 items-center justify-between absolute z-20 top-0 w-[98%] h-auto bg-gradient-to-r from-green-700 to-green-500 p-2 rounded-sm -translate-y-4'>
            <p className=' text-sm font-semibold'>Sales</p>

            <div className=' flex flex-wrap md:items-end items-center justify-center gap-2'>
              <div className=' flex flex-col text-xs'>
                <label htmlFor="">Start Date</label>
                <input type="date" className=' bg-zinc-100 text-black text-xs p-2 rounded-sm' />
              </div>

              <div className=' flex flex-col text-xs'>
                <label htmlFor="">End Date</label>
                <input type="date" className=' bg-zinc-100 text-black text-xs p-2 rounded-sm' />
              </div>
                {/* <input type="text" placeholder='Search Username' className=' p-2 rounded-sm text-xs bg-zinc-900 border-none' /> */}
                <button className=' p-2 bg-blue-700 rounded-sm text-xs'>Reset</button>
            </div>

        </div>
        <Table className=' mt-24 md:mt-12'>
        <TableCaption className=' text-xs'>No data</TableCaption>
        <TableHeader className=' border-slate-700'>
            <TableRow>
            <TableHead className=' text-center'>Date</TableHead>
          
            <TableHead className=' text-center' >Amount</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
            
            <TableCell className="font-medium text-center">00/00/00</TableCell>
            <TableCell className="font-medium text-center">9999</TableCell>
           
            </TableRow>
        </TableBody>
        </Table>

       

        <Pagination currentPage={0} total={0}/>

    </div>
  )
}
