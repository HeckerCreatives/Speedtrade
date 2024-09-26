import Productcard from '@/components/common/Productcard'
import React from 'react'

export default function Product() {
  return (
    <div className=' w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <Productcard name={'Quick Miner'} percentage={'30'} duration={'5'} min={500} max={2000} img={'/assets/quick-miner.png'} size={'160'}/>
        <Productcard name={'Swift Lane'} percentage={'80'} duration={'10'} min={2000} max={20000} img={'/assets/Swift-miner.png'} size={'150'}/>
        <Productcard name={'Rapid Lane'} percentage={'200'} duration={'20'} min={20000} max={2000000} img={'/assets/Rapid-miner.png'} size={'130'}/>
    </div>
  )
}
