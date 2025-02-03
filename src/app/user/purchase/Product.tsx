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
    }
    getState()
 },[])

 const quick = list.find((item) => item.name === 'Quick Miner')
 const swift = list.find((item) => item.name === 'Switf Lane')
 const rapid = list.find((item) => item.name === 'Rapid Lane')
 const flash = list.find((item) => item.name === 'Flash Miner')



  return (
    <div className=' w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <Productcard name={'Quick Miner'} percentage={`${(quick?.profit || 0) * 100}`} duration={`${quick?.duration}`} min={quick?.min || 0} max={quick?.max || 0} img={'/assets/quick-miner.png'} size={'160'} b1t1={quick?.isBuyonetakeone || ''}/>
        <Productcard name={'Swift Miner'} percentage={`${(swift?.profit || 0) * 100}`} duration={`${swift?.duration}`} min={swift?.min || 0} max={swift?.max || 0} img={'/assets/Swift-miner.png'} size={'150'} b1t1={swift?.isBuyonetakeone || ''}/>
        <Productcard name={'Rapid Miner'} percentage={`${(rapid?.profit || 0) * 100}`} duration={`${rapid?.duration}`} min={rapid?.min || 0} max={rapid?.max || 0} img={'/assets/Rapid-miner.png'} size={'130'} b1t1={rapid?.isBuyonetakeone || ''}/>
        <Productcard name={'Flash Miner'} percentage={`${(flash?.profit || 0) * 100}`} duration={`${flash?.duration}`} min={flash?.min || 0} max={flash?.max || 0} img={'/assets/flash-miner.png'} size={'180'} b1t1={flash?.isBuyonetakeone || ''}/>
    </div>
  )
}
