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
        <Productcard name={'Quick Miner'} percentage={`${list[0]?.profit * 100}`} duration={`${list[0]?.duration}`} min={list[0]?.min || 0} max={list[1]?.max || 0} img={'/assets/quick-miner.png'} size={'160'}/>
        <Productcard name={'Swift Miner'} percentage={`${list[1]?.profit * 100}`} duration={`${list[1]?.duration}`} min={list[1]?.min || 0} max={list[1]?.max || 0} img={'/assets/Swift-miner.png'} size={'150'}/>
        <Productcard name={'Rapid Miner'} percentage={`${list[2]?.profit * 100}`} duration={`${list[2]?.duration}`} min={list[2]?.min || 0} max={list[2]?.max || 0} img={'/assets/Rapid-miner.png'} size={'130'}/>
        <Productcard name={'Flash Miner'} percentage={`${list[3]?.profit * 100}`} duration={`${list[3]?.duration}`} min={list[3]?.min || 0} max={list[3]?.max || 0} img={'/assets/flash-miner.png'} size={'180'}/>
    </div>
  )
}
