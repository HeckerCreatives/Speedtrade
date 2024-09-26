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
import { ArrowLeft, ArrowRight, Search } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { levels } from '@/app/types/data'
import Pagination from '@/components/common/Pagination'



export default function PurchaseHistoryTable() {
  return (
    <div className=' relative w-full flex flex-col items-center gap-8 max-w-[1440px] h-[500px] mt-12 bg-slate-800 p-6'>
        <div className=' h-[55px] flex items-center justify-between absolute top-0 w-[98%] bg-gradient-to-r from-green-700 to-green-500 p-2 rounded-sm -translate-y-4'>
            {/* <Select>
            <SelectTrigger className="w-[200px] bg-zinc-900">
                <SelectValue placeholder="Select Levels" />
            </SelectTrigger>
            <SelectContent>
                {levels.map((item, index) => (
                <SelectItem key={index} value={item.value}>{item.name}</SelectItem>

                ))}
                
            </SelectContent>
            </Select>

            <div className=' flex items-center gap-2'>
                <input type="text" placeholder='Search Username' className=' p-2 rounded-sm text-xs bg-zinc-900 border-none' />
                <button className=' p-2 bg-green-700 rounded-sm'><Search size={15}/></button>
            </div> */}

            <p className=' text-sm text-white font-semibold'>Purchase History</p>


        </div>
        <Table className=' mt-8'>
        <TableCaption className=' text-xs'>No data</TableCaption>
        <TableHeader className=' border-slate-700'>
            <TableRow>
            <TableHead className=' text-center'>Date</TableHead>
            <TableHead className=' text-center'>Rig miner</TableHead>
            <TableHead className=' text-center'>Price</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {/* <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
            </TableRow> */}
        </TableBody>
        </Table>

        {/* <div className=' flex items-center gap-1 text-xs'>
            <button className=' bg-green-500 text-white p-2 rounded-sm'><ArrowLeft size={15}/></button>

            <p className=' p-2 bg-slate-700 aspect-square w-8 h-8 text-center rounded-sm'>0</p>
            <button className=' bg-green-500 text-white p-2 rounded-sm'><ArrowRight size={15}/></button>
        </div> */}

        <Pagination currentPage={0} total={0}/>

    </div>
  )
}
