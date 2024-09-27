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
import { ArrowLeft, ArrowRight } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Pagination from '@/components/common/Pagination'
import axios from 'axios'
import Spinner from '@/components/common/Spinner'

type Miner = {
  amount: number
createdAt: string
fromusername: string
minername: string
type: string
username: string
}

type TabData = {
  commissionwallet: Miner[];
  creditwallet: Miner[];
  minecoinwallet: Miner[];
  directcommissionwallet: Miner[];
};

type TabKeys = keyof TabData;

export default function DashboardTable() {

  const [tab, setTab] = useState<TabKeys>('commissionwallet')


  const [list, setList] = useState<TabData[keyof TabData]>([])
  const [totalpage, setTotalPage] = useState(0)
  const [currentpage, setCurrentPage] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const getBuyHistory = async () => {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/wallethistory/userwallethistory?type=${tab}&page=${currentpage}&limit=10`,{
      withCredentials: true
      })
     console.log('History',res.data)
     setList(res.data.data.history)
     setTotalPage(res.data.data.pages)
     setLoading(false)
    }
    getBuyHistory()
  },[ currentpage, tab])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  
  return (
    <div className=' relative w-full flex flex-col items-center gap-8 max-w-[1440px] h-[500px] mt-12 bg-slate-800 p-6'>
        <div className=' absolute top-0 w-[98%] bg-gradient-to-r from-green-700 to-green-500 p-2 rounded-sm -translate-y-4'>
            <Select value={tab} onValueChange={(value) => setTab(value as keyof TabData)}>
            <SelectTrigger className="w-[200px] bg-zinc-900">
                <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="commissionwallet">Comission Wallet History</SelectItem>
                <SelectItem value="directcommissionwallet">Direct Comission Wallet History</SelectItem>
                <SelectItem value="minecoinwallet">Miner Wallet History</SelectItem>
                <SelectItem value="creditwallet">Credit Wallet History</SelectItem>
            </SelectContent>
            </Select>


        </div>

        { tab === 'commissionwallet' && (
          <>
           <Table className=' mt-8'>
            {list.length === 0 && (
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
                <TableHead className=' text-center'>Amount</TableHead>
                <TableHead className=' text-center'>Username</TableHead>
                <TableHead className=' text-center'>Rig miner</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
              {list.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium"></TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
              ))}
                
            </TableBody>
            </Table>

             {list.length !== 0 && (
            < Pagination currentPage={currentpage} total={totalpage} onPageChange={handlePageChange}/>

            )}
         
          </>
         
        )}

        { tab === 'directcommissionwallet' && (
          <>
           <Table className=' mt-8'>
            {list.length === 0 && (
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
                <TableHead className=' text-center'>Amount</TableHead>
                <TableHead className=' text-center'>Username</TableHead>
                <TableHead className=' text-center'>Rig miner</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {list.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium"></TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
              ))}
            </TableBody>
            </Table>
             {list.length !== 0 && (
            < Pagination currentPage={currentpage} total={totalpage} onPageChange={handlePageChange}/>

            )}
          </>
         
        )}

        { tab === 'minecoinwallet' && (
          <>
           <Table className=' mt-8'>
            {list.length === 0 && (
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
                <TableHead className=' text-center'>From</TableHead>
                <TableHead className=' text-center'>Type</TableHead>
                <TableHead className=' text-center'>Amount</TableHead>
                <TableHead className=' text-center'>Wallet type</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
               {list.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className=' text-center'>{new Date(item.createdAt).toDateString()}</TableCell>
                  <TableCell className=' text-center'>{item.fromusername}</TableCell>
                  <TableCell className=' text-center'>{item.minername}</TableCell>
                  <TableCell className=' text-center'>₱ {item.amount.toLocaleString()}</TableCell>
                  <TableCell className=' text-center'>{item.type}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            </Table>

             {list.length !== 0 && (
            < Pagination currentPage={currentpage} total={totalpage} onPageChange={handlePageChange}/>

            )}

          </>
         
        )}

        { tab === 'creditwallet' && (
          <>
           <Table className=' mt-8'>
            {list.length === 0 && (
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
           

            {list.length !== 0 && (
            <Pagination currentPage={currentpage} total={totalpage} onPageChange={handlePageChange}/>

            )}
          </>
         
        )}


        

    </div>
  )
}
