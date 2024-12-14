'use client'
import Productcard from '@/components/common/Productcard'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

type Miner = {
  duration: number
id: string
isBuyonetakeone: string
max: number
min: number
name: string
profit: number
}

export default function Product() {
  const [list, setList] = useState<Miner[]>([])

  useEffect(() => {

    const getState = async () => {
     const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/miner/getminer`,{
         withCredentials: true
     })
     setList(response.data.data)
     console.log(response.data)
    }
    getState()
 },[])

  return (
    <div className=' w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <Productcard name={'Quick Miner'} percentage={'20'} duration={`${list[0]?.duration}`} min={500} max={2000} img={'/assets/quick-miner.png'} size={'160'}/>
        <Productcard name={'Swift Miner'} percentage={'60'} duration={`${list[1]?.duration}`} min={2000} max={20000} img={'/assets/Swift-miner.png'} size={'150'}/>
        <Productcard name={'Rapid Miner'} percentage={'150'} duration={`${list[2]?.duration}`} min={20000} max={2000000} img={'/assets/Rapid-miner.png'} size={'130'}/>
    </div>
  )
}
