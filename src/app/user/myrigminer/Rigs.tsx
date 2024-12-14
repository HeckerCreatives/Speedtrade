import MyRigCard from '@/components/common/Myrigcard'
import Pagination from '@/components/common/Pagination'
import Productcard from '@/components/common/Productcard'
import Spinner from '@/components/common/Spinner'
import { Item } from '@radix-ui/react-dropdown-menu'
import axios, { AxiosError } from 'axios'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'


type Inventory ={
  buyprice: number
duration: number
earnings: number
minerid: string
profit: number
purchasedate: string
remainingtime: number
type: string
}

export default function Rigs() {
   const params = useSearchParams()
  const state = params.get('state')

  const quick = '/assets/quick-miner.png'
  const swift = '/assets/Swift-miner.png'
  const rapid = '/assets/Rapid-miner.png'

  const [list, setList] = useState<Inventory[]>([])
  const [totalpage, setTotalPage] = useState(0)
  const [currentpage, setCurrentPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setLoading(true)
    const getInventory = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/inventory/getinventory?page=${currentpage}&limit=6`,{
          withCredentials: true
          })
        setList(res.data.data.miners)
        setTotalPage(res.data.data.totalPages)
        
        setLoading(false)
        
      } catch (error) {
        //  if (axios.isAxiosError(error)) {
        //         const axiosError = error as AxiosError<{ message: string, data: string }>;
        //             if (axiosError.response && axiosError.response.status === 401) {
        //             toast.error(`${axiosError.response.data.data}`)
        //             router.push('/')  
        //             }    
        //         } 
        
      }
     
    }
    getInventory()
  },[state, currentpage])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }


  return (

    <div className=' w-full flex flex-col gap-8 items-center justify-center'>
      {Object.values(list).length === 0 ? (
        <div className=' w-full flex items-center justify-center h-[200px]'>
          <p className=' text-sm text-zinc-400'>No Inventory</p>

        </div>
      ): (
        <>
        {loading ? (
          <div className=' w-full h-[500px] flex items-center justify-center'>
            <Spinner/>
          </div>
        ): (
          <div className=' w-full max-w-[1440px] grid lg:grid-cols-2 xl:grid-cols-3 gap-4'>

            {Object.values(list).map((item, index) => (
              <MyRigCard id={item.minerid} key={index} name={`${item.type === 'quick_miner' && 'Quick Miner' || item.type === 'swift_lane' && 'Swift Miner' || item.type === 'rapid_lane' && 'Rapid Miner'}`} percentage={`${item.profit * 100}`} duration={item.duration} img={`${item.type === 'quick_miner' && quick || item.type === 'swift_lane' && swift || item.type === 'rapid_lane' && rapid}`} size={`${item.type === 'quick_miner' && '180' || item.type === 'swift_lane' && '150' || item.type === 'rapid_lane' && '140' }`} earnings={item.earnings} timeleft={item.remainingtime} purchase={new Date(item.purchasedate).toLocaleString()} max={item.buyprice}/>

            ))}

        </div>
        )}
        
        </>
        
      )}

      {Object.values(list).length !== 0 && (
       <Pagination onPageChange={handlePageChange} total={totalpage} currentPage={currentpage}/>

      )}
    </div>
   
  )
}
