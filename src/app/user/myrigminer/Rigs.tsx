import MyRigCard from '@/components/common/Myrigcard'
import Productcard from '@/components/common/Productcard'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'

export default function Rigs() {
  return (

    <div className=' w-full flex flex-col gap-8 items-center justify-center'>
       <div className=' w-full max-w-[1440px] grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <MyRigCard name={'Quick Miner'} percentage={'30'} duration={'5'} img={'/assets/quick-miner.png'} size={'180'} earnings={1000} timeleft={1727203680} purchase={'00/00/00'} max={2000}/>
          <MyRigCard name={'Swift Lane'} percentage={'80'} duration={'10'} img={'/assets/Swift-miner.png'} size={'160'} earnings={9999} timeleft={1729362224} purchase={'00/00/00'} max={20000}/>
          <MyRigCard name={'Rapid Lane'} percentage={'200'} duration={'20'} img={'/assets/Rapid-miner.png'} size={'140'} earnings={159000} timeleft={1729362224} purchase={'00/00/00'} max={2000000}/>
      </div>

       <div className=' flex items-center gap-1 text-xs'>
            <button className=' bg-green-500 text-white p-2 rounded-sm'><ArrowLeft size={15}/></button>

            <p className=' p-2 bg-slate-700 aspect-square w-8 h-8 text-center rounded-sm'>0</p>
            <button className=' bg-green-500 text-white p-2 rounded-sm'><ArrowRight size={15}/></button>


        </div>
    </div>
   
  )
}
