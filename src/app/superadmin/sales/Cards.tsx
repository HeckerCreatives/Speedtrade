import Card from '@/components/common/Card'
import { Wallet } from 'lucide-react'
import React from 'react'

export default function Cards() {
  return (
    <div className=' max-w-[1040px] h-auto w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-6'>

        <Card icon={<Wallet size={30} />} iconbg={' bg-orange-500'} title={'Total Sales'} amount={'200,200'} subtitle={''} text={''}/>
        <Card icon={<Wallet size={30} />} iconbg={' bg-green-500'} title={'Total profit'} amount={'200,200'} subtitle={''} text={''}/>
        <Card icon={<Wallet size={30} />} iconbg={' bg-red-500'} title={'Company Comission'} amount={'200,200'} subtitle={''} text={''}/>

    </div>
  )
}
