import React, { useEffect, useState } from 'react'
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
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import Spinner from '@/components/common/Spinner'

type History = {
  date : string
grossamount : number
netammount : number
status : string
withdrawalfee: number
}

export default function PayoutTable() {

  const [history, setHistory] = useState<History[]>([])

  const [totalpage, setTotalpage] = useState(0)
  const [currentpage, setCurrentpage] = useState(0)
  const params = useSearchParams()
  const state = params.get('state')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const getRequestHistory = async () => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/payout/getrequesthistoryuser?page=${currentpage}&limit=10`,{
        withCredentials: true
      })

      setHistory(response.data.data.history)
      setTotalpage(response.data.data.totalPages)

      console.log(response.data)
    setLoading(false)

    }
    getRequestHistory()
  },[currentpage, state])

  const handlePageChange = (page: number) => {
    setCurrentpage(page)
  }

  


  return (
    <div className=' relative w-full flex flex-col items-center gap-8 max-w-[1440px] min-h-[500px] h-auto mt-12 bg-slate-800 p-6'>
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

            <p className=' text-sm text-white font-semibold'>Comission Payout History</p>


        </div>
        <Table className=' mt-8'>
           {history.length === 0 && (
              <TableCaption className=' text-xs'>No data</TableCaption>
            )}
             {loading === true && (
              <TableCaption className=' '>
                <Spinner/>
              </TableCaption>
            )}
        <TableHeader className=' border-slate-700'>
            <TableRow>
            <TableHead className=' text-center'>Date</TableHead>
            <TableHead className=' text-center'>Gross Amount</TableHead>
            <TableHead className=' text-center'>Net Amount</TableHead>
            <TableHead className=' text-center'>Withdrawal Fee</TableHead>
            <TableHead className=' text-center'>Status</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
          {loading === false && (
            <>
            {history.map((item, index) => (
            <TableRow key={index}>
            <TableCell className=" text-center">{new Date(item.date).toDateString()}</TableCell>
            <TableCell className=' text-center'>₱ {(item.grossamount || 0).toLocaleString()}</TableCell>
            <TableCell className=' text-center'>₱ {(item.netammount || 0).toLocaleString()}</TableCell>
            <TableCell className=" text-center">₱ {item.withdrawalfee.toLocaleString()}</TableCell>
            <TableCell className=" text-center">{item.status}</TableCell>
            </TableRow>
          ))}
            </>
          )}
          
            
        </TableBody>
        </Table>

        {history.length !== 0 && (
          <Pagination currentPage={currentpage} total={totalpage} onPageChange={handlePageChange}/>
        )}

    </div>
  )
}
