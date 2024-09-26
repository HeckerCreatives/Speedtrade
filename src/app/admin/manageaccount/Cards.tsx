import Card from '@/components/common/Card'
import ManageCard from '@/components/common/Managecard'
import { Wallet } from 'lucide-react'
import React from 'react'

export default function Cards() {
  return (
    <div className=' max-w-[1240px] h-auto w-full grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-8 mt-6'>

        <ManageCard icon={<Wallet size={30} />} iconbg={' bg-orange-500'} title={'Total Active Users'} amount={'999'} subtitle={'Current total active users'} text={''}/>
        <ManageCard icon={<Wallet size={30} />} iconbg={' bg-green-500'} title={'Active Users'} amount={'999'} subtitle={'Current active users'} text={''}/>
        <ManageCard icon={<Wallet size={30} />} iconbg={' bg-red-500'} title={'Banned Users'} amount={'999'} subtitle={'Current Banned users'} text={''}/>
        
    </div>
  )
}
