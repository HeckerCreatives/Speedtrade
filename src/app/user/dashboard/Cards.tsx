
import Card from '@/components/common/Card'
import axios from 'axios'
import { Wallet } from 'lucide-react'
import React, { useEffect, useState } from 'react'


type Wallets = {
    data : {
        "creditwallet": number
        "minecoinwallet": number
        "commissionwallet": number
    }
    
}

type TotalEarnings = {
    data:{
        mining: number
        referral: number
        unilevel: number
    }

}

type Unclaimed = {
    data: {
        unclaimedearnings: number

    }
}

export default function Cards() {


    const [wallets, setWallets] = useState<Wallets>()
    const [earnings, setEarnings] = useState<TotalEarnings>()
    const [totalearnings, setTotalearnings] = useState(0)
    const [withdrawables, setWithdrawables] = useState(0)
  

    useEffect(() => {
    const getRequestHistory = async () => {
      const wallet = await axios.get(`${process.env.NEXT_PUBLIC_URL}/wallets/userwallets`,{
        withCredentials: true
      })
    
      setWallets(wallet.data)
      setWithdrawables(wallet.data.data.commissionwallet + wallet.data.data.minecoinwallet)
     
    }
    getRequestHistory()
  },[])

  useEffect(() => {
    const getRequestHistory = async () => {
     
      const earning = await axios.get(`${process.env.NEXT_PUBLIC_URL}/wallethistory/getwallettotalearnings`,{
        withCredentials: true
      })
     
      setEarnings(earning.data)
      setTotalearnings(earning.data.data.mining + earning.data.data.referral + earning.data.data.unilevel)

    }
    getRequestHistory()
  },[])



  return (
    <div className=' max-w-[1440px] h-auto w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-6'>

        <Card icon={<Wallet size={30} />} iconbg={' bg-orange-500'} title={'Top Up Balance'} amount={`${wallets?.data.creditwallet.toLocaleString()}`} subtitle={'Use to purchase miner set up'} text={''}/>
        <Card icon={<Wallet size={30} />} iconbg={' bg-green-500'} title={'Total Withdrawables'} amount={`${withdrawables.toLocaleString()}`} subtitle={'The sum of comission wallet & miner wallet'} text={''}/>
        <Card icon={<Wallet size={30} />} iconbg={' bg-red-500'} title={'Rig Miner Total Earning'} amount={`${earnings?.data.mining.toLocaleString()}`} subtitle={'Total income from miners'} text={''}/>
        <Card icon={<Wallet size={30} />} iconbg={' bg-blue-500'} title={'Rig miner Wallet'} amount={`${wallets?.data.minecoinwallet.toLocaleString()}`} subtitle={'Unclaim value'} text={'100,000'}/>
        <Card icon={<Wallet size={30} />} iconbg={' bg-pink-500'} title={'Referral Total Comission'} amount={`${earnings?.data.referral.toLocaleString()}`} subtitle={'Total accumulated comission from direct refferal'} text={''}/>
        <Card icon={<Wallet size={30} />} iconbg={' bg-purple-500'} title={'Unilevel Total Comission'} amount={`${earnings?.data.unilevel.toLocaleString()}`} subtitle={'Total accumulated comission from lvl 2 to lvl 10'} text={''}/>
        <Card icon={<Wallet size={30} />} iconbg={' bg-cyan-500'} title={'Comission Wallet'} amount={`${wallets?.data.commissionwallet.toLocaleString()}`} subtitle={'Withdrawable value from direct referral & unilevel'} text={''}/>
        <Card icon={<Wallet size={30} />} iconbg={' bg-cyan-500'} title={'Total Earnings'} amount={`${totalearnings.toLocaleString()}`} subtitle={'The sum of referral commission, unilevel & rig miner total earning'} text={''}/>

    </div>
  )
}
