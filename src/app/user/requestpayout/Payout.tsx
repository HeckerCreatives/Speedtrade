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



export default function Payout() {
  return (
    <div className=' relative w-full flex flex-col items-center gap-8 max-w-[1440px] h-auto mt-12 bg-slate-800 p-4 md:p-6'>
        <div className=' flex items-center justify-between absolute top-0 w-[98%] bg-gradient-to-r from-green-700 to-green-500 p-2 rounded-sm -translate-y-4'>
            <Select>
            <SelectTrigger className="w-[200px] bg-zinc-900">
                <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value='Payout Comission'>Payout Comission</SelectItem>
                <SelectItem value='Payout Rig Miner'>Payout Rig Miner</SelectItem>

                
            </SelectContent>
            </Select>

            

        </div>

        <div className=' w-full flex flex-col items-center justify-center'>
            <div className=' max-w-[400px] w-full h-[150px] bg-slate-700 mt-8 rounded-sm flex flex-col gap-2 items-center justify-center'>
                <p className=' text-sm'>Comission Wallet Balance</p>
                <p className=' text-2xl font-semibold text-green-500'>P 100,000.00</p>

            </div>

            <div className=' w-full grid grid-cols-2 gap-2 md:gap-4 mt-4'>

                <div className=' w-full flex flex-col gap-1 md:p-4'>
                    <Select>
                    <SelectTrigger className="w-full bg-zinc-100 text-black">
                        <SelectValue placeholder="Select Payment Method" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value='Gcash'>Gcash</SelectItem>
                        <SelectItem value='Paymaya'>GoTyme</SelectItem>
                    </SelectContent>
                    </Select>
                    <p className=' text-[.6rem] md:text-xs text-orange-300'>*Select payment method</p>

                    <input type="text" className=' p-3 text-xs rounded-sm text-black mt-6' placeholder='Account number' />
                    <p className=' text-[.6rem] md:text-xs text-orange-300'>*Make sure you enter a valid account number</p>


                </div>

                <div className=' w-full flex flex-col gap-1 md:p-4'>
                    <input type="text" className=' p-3 text-xs rounded-sm text-black' placeholder='Account name' />
                   
                    <p className=' text-[.6rem] md:text-xs text-orange-300'>*Make sure you enter a correct account name</p>

                    <input type="number" className=' p-3 text-xs rounded-sm text-black mt-2 md:mt-6' placeholder='Enter amount' />
                    <p className=' text-[.5rem] md:text-xs text-orange-300'></p>


                </div>

            </div>

            <div className=' w-full flex items-center justify-end px-4'>
                <button className=' px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-green-700 to-green-500 rounded-sm'>Request</button>

            </div>

        </div>
        {/* <Table className=' mt-8'>
        <TableCaption className=' text-xs'>No data</TableCaption>
        <TableHeader className=' border-slate-700'>
            <TableRow>
            <TableHead className="">Id</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Username</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
          
        </TableBody>
        </Table>

        <div className=' flex items-center gap-1 text-xs'>
            <button className=' bg-green-500 text-white p-2 rounded-sm'><ArrowLeft size={15}/></button>

            <p className=' p-2 bg-slate-700 aspect-square w-8 h-8 text-center rounded-sm'>0</p>
            <button className=' bg-green-500 text-white p-2 rounded-sm'><ArrowRight size={15}/></button>


        </div> */}

    </div>
  )
}
