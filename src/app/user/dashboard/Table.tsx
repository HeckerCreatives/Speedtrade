import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ArrowLeft, ArrowRight } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Pagination from '@/components/common/Pagination'



export default function DashboardTable() {
  const [tab, setTab] = useState('Comission History')
  return (
    <div className=' relative w-full flex flex-col items-center gap-8 max-w-[1440px] h-[500px] mt-12 bg-slate-800 p-6'>
        <div className=' absolute top-0 w-[98%] bg-gradient-to-r from-green-700 to-green-500 p-2 rounded-sm -translate-y-4'>
            <Select value={tab} onValueChange={setTab}>
            <SelectTrigger className="w-[200px] bg-zinc-900">
                <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="Comission History">Comission History</SelectItem>
                <SelectItem value="Referral History">Referral History</SelectItem>
                <SelectItem value="Rig Miner History">Rig Miner History</SelectItem>
                <SelectItem value="Comission Withdraw History">Comission Withdraw History</SelectItem>
                <SelectItem value="Rig Miner Withdraw History">Rig Miner Withdraw History</SelectItem>
            </SelectContent>
            </Select>


        </div>

        { tab === 'Comission History' && (
          <>
           <Table className=' mt-8'>
            <TableCaption className=' text-xs'>No data</TableCaption>
            <TableHeader className=' border-slate-700'>
                <TableRow>
                <TableHead className=' text-center'>Date</TableHead>
                <TableHead className=' text-center'>Amount</TableHead>
                <TableHead className=' text-center'>Username</TableHead>
                <TableHead className=' text-center'>Rig miner</TableHead>
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

            <Pagination currentPage={0} total={0}/>
         
          </>
         
        )}

        { tab === 'Referral History' && (
          <>
           <Table className=' mt-8'>
            <TableCaption className=' text-xs'>No data</TableCaption>
            <TableHeader className=' border-slate-700'>
                <TableRow>
                <TableHead className=' text-center'>Date</TableHead>
                <TableHead className=' text-center'>Amount</TableHead>
                <TableHead className=' text-center'>Username</TableHead>
                <TableHead className=' text-center'>Rig miner</TableHead>
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
          </>
         
        )}

        { tab === 'Rig Miner History' && (
          <>
           <Table className=' mt-8'>
            <TableCaption className=' text-xs'>No data</TableCaption>
            <TableHeader className=' border-slate-700'>
                <TableRow>
                <TableHead className=' text-center'>Date</TableHead>
                <TableHead className=' text-center'>Rig miner claimed</TableHead>
                <TableHead className=' text-center'>Amount</TableHead>
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
          </>
         
        )}

        { tab === 'Comission Withdraw History' && (
          <>
           <Table className=' mt-8'>
            <TableCaption className=' text-xs'>No data</TableCaption>
            <TableHeader className=' border-slate-700'>
                <TableRow>
                <TableHead className=' text-center'>Date</TableHead>
                <TableHead className=' text-center'>Gross Amount</TableHead>
                <TableHead className=' text-center'>Withdrwal Fee</TableHead>
                <TableHead className=' text-center'>Net Amount</TableHead>
                <TableHead className=' text-center'>Status</TableHead>
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

            <Pagination currentPage={0} total={0} />
          </>
         
        )}

        { tab === 'Rig Miner Withdraw History' && (
          <>
           <Table className=' mt-8'>
            <TableCaption className=' text-xs'>No data</TableCaption>
            <TableHeader className=' border-slate-700'>
                <TableRow>
                <TableHead className=' text-center'>Date</TableHead>
                <TableHead className=' text-center'>Gross Amount</TableHead>
                <TableHead className=' text-center'>Withdrwal Fee</TableHead>
                <TableHead className=' text-center'>Net Amount</TableHead>
                <TableHead className=' text-center'>Status</TableHead>
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
          </>
         
        )}
        

        

    </div>
  )
}
