'use client'
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
import { ArrowLeft, ArrowRight, EllipsisVertical, Eye, EyeOff, OctagonAlert, RectangleEllipsis, RefreshCcw, Search } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useForm } from 'react-hook-form'
import { createAdmin, CreateAdmin } from '@/app/validation/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import axios, { AxiosError } from 'axios'
import toast from 'react-hot-toast'
import { useRouter, useSearchParams } from 'next/navigation'
import Spinner from '@/components/common/Spinner'
import Pagination from '@/components/common/Pagination'
import { setPriority } from 'os'
import ChangePasswordAdminForm from './ChangePasswordAdminForm'

interface  Commissions {
    _id: string
    amount: number,
    count: number,
    createdAt: string
    username: string
    referrer: {
        username: string,
    }
}


export default function CommissionTable() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [list, setList] = useState<Commissions[]>([])
  const [totalpage, setTotalpage] = useState(0)
  const [currentpage, setCurrentpage] = useState(0)
  const params = useSearchParams()
  const state = params.get('state')
  const [date, setDate] = useState('')





  useEffect(() => {
    setLoading(true)
    const handler = setTimeout( async () => {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/analytics/getcommissionlist?date=${date}&page=${currentpage}&limit=10`,{
          withCredentials:true
          })
         console.log(response.data)
         setList(response.data.data.data)
         setTotalpage(response.data.data.totalpages)
    setLoading(false)


        
        } catch (error) {
          if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError<{ message: string, data: string }>;
            if (axiosError.response && axiosError.response.status === 401) {
              toast.error(`${axiosError.response.data.data}`)
              router.push('/')  
              }    
            } 
        }
    }, 500)

    return () => {
      clearTimeout(handler)
    }
  },[currentpage, date])



  const handlePageChange = (page: number) => {
    setCurrentpage(page)
  }



  return (
    <div className=' relative w-full flex flex-col items-center max-w-[1440px] min-h-[500px] h-auto mt-12 bg-slate-900 p-6'>
       <div className=' flex flex-col gap-1 items-start w-full'>
        <p className=' text-xs text-slate-500'>Filter by date:</p>
        <div className=' flex gap-1'>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className='bg-slate-800 text-white p-1 etxt-xs rounded-sm' />
            <button onClick={() => {setDate(''),setCurrentpage(0)}} className=' bg-green-600 p-2 rounded-sm aspect-square'><RefreshCcw size={20}/></button>
        </div>
        
       </div>


        <Table className=' mt-6'>
        {list.length === 0 &&  
          <TableCaption className=' text-xs'>No data</TableCaption>
          }

          {loading === true && (
            <TableCaption className=' '>
              <Spinner/>
            </TableCaption>
          )}
        <TableHeader className=' border-slate-700'>
            <TableRow>
            <TableHead className=' text-center' >Created At</TableHead>
            <TableHead className=' text-center'>Username</TableHead>
            <TableHead className=' text-center'>Commissions</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>

          {list.map((item, index) => (
            <TableRow key={index}>
             

              <TableCell className="font-medium text-center">{new Date(item.createdAt).toDateString()}</TableCell>
              <TableCell className="font-medium text-center">{item.referrer.username}</TableCell>
              <TableCell className={`font-medium text-center`}>₱{item.amount.toLocaleString()}</TableCell>
             
            
            </TableRow>
          ))}
            
        </TableBody>
        </Table>

        {list.length !== 0 && (
        <div className=' mt-12'>
          <Pagination onPageChange={handlePageChange} total={totalpage} currentPage={currentpage}/>
        </div>
        )}

        


       


    </div>
  )
}
