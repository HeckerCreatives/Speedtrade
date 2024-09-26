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
import { ArrowLeft, ArrowRight, EllipsisVertical, Search } from 'lucide-react'

import Pagination from '@/components/common/Pagination'




export default function Righistory() {
  return (
    <div className=' relative w-full flex flex-col items-center gap-8 max-w-[1440px] h-[500px] mt-12 bg-slate-900 p-6'>
        <div className=' flex md:flex-row flex-col items-center justify-between absolute top-0 w-[98%] gap-2 h-auto md:h-[55px] bg-gradient-to-r from-green-700 to-green-500 p-2 rounded-sm -translate-y-4'>
            <p className=' text-sm font-semibold'>Rig History</p>

            <div className=' flex items-center gap-2'>
                <input type="text" placeholder='Search Username' className=' p-2 rounded-sm text-xs bg-zinc-900 border-none' />
                <button className=' p-2 bg-green-700 rounded-sm'><Search size={15}/></button>
            </div>

        </div>
        <Table className=' mt-10 md:mt-8'>
        <TableCaption className=' text-xs'>No data</TableCaption>
        <TableHeader className=' border-slate-700'>
            <TableRow>
            <TableHead className=' text-center'>Date</TableHead>
            <TableHead className=' text-center'>Username</TableHead>
            <TableHead className=' text-center'>Phone no.</TableHead>
            <TableHead className=' text-center'>Status</TableHead>
            <TableHead className=' text-center'>Amount</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
            
            <TableCell className="font-medium text-center">test</TableCell>
            <TableCell className="font-medium text-center">test</TableCell>
            <TableCell className="font-medium text-center">test</TableCell>
            <TableCell className="font-medium text-center">test</TableCell>
            <TableCell className="font-medium text-center">test</TableCell>
            
            </TableRow>
        </TableBody>
        </Table>

        {/* <div className=' flex items-center gap-1 text-xs'>
            <button className=' bg-green-500 text-white p-2 rounded-sm'><ArrowLeft size={15}/></button>

            <p className=' p-2 bg-slate-700 aspect-square w-8 h-8 text-center rounded-sm'>0</p>
            <button className=' bg-green-500 text-white p-2 rounded-sm'><ArrowRight size={15}/></button>


        </div> */}
        

    </div>
  )
}
