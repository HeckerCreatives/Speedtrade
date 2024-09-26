import Card from '@/components/common/Card'
import { Wallet } from 'lucide-react'
import React from 'react'

export default function Cards() {
  return (
    <div className=' max-w-[1440px] h-auto w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-6'>

        {/* <div className=' w-full h-auto bg-slate-800 p-3'>
            <div className=' w-full grid grid-cols-2 border-b-[1px] border-slate-700 rounded-sm'>
                <div className=' p-2 w-fit h-fit bg-orange-400 rounded-sm -translate-y-8'>
                    <Wallet size={30}/>

                </div>
                <div className=' w-full flex flex-col gap-2 items-end text-zinc-100 py-2'>
                    <p className=' text-xs'>Top Up Balance</p>
                    <p className=' text-lg text-yellow-200'>P 200,000.00</p>
                </div>
            </div>
            <p className=' text-xs mt-2 text-orange-300'>Use to purchase miner set up</p>
        </div> */}

        <Card icon={<Wallet size={30} />} iconbg={' bg-orange-500'} title={'Top Up Balance'} amount={'200,200'} subtitle={'Use to purchase miner set up'} text={''}/>
        <Card icon={<Wallet size={30} />} iconbg={' bg-green-500'} title={'Total Withdrawables'} amount={'200,200'} subtitle={'The sum of comission wallet & miner wallet'} text={''}/>
        <Card icon={<Wallet size={30} />} iconbg={' bg-red-500'} title={'Rig Miner Total Earning'} amount={'200,200'} subtitle={'Total income from miners'} text={''}/>
        <Card icon={<Wallet size={30} />} iconbg={' bg-blue-500'} title={'Rig miner Wallet'} amount={'200,200'} subtitle={'Unclaim value'} text={'100,000'}/>
        <Card icon={<Wallet size={30} />} iconbg={' bg-pink-500'} title={'Referral Total Comission'} amount={'200,200'} subtitle={'Total accumulated comission from direct refferal'} text={''}/>
        <Card icon={<Wallet size={30} />} iconbg={' bg-purple-500'} title={'Unilevel Total Comission'} amount={'200,200'} subtitle={'Total accumulated comission from lvl 2 to lvl 10'} text={''}/>
        <Card icon={<Wallet size={30} />} iconbg={' bg-cyan-500'} title={'Comission Wallet'} amount={'200,200'} subtitle={'Withdrawable value from direct referral & unilevel'} text={''}/>
        <Card icon={<Wallet size={30} />} iconbg={' bg-cyan-500'} title={'Total Earnings'} amount={'200,200'} subtitle={'The sum of referral commission, unilevel & rig miner total earning'} text={''}/>

    </div>
  )
}
