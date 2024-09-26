import React from 'react'
import { Switch } from "@/components/ui/switch"


type Props = {
    icon: React.ReactElement
    name: string
    value: number

}

export default function Maintenancecard( prop: Props) {
  return (
    <div className=' w-full h-auto p-4 flex items-center gap-4 bg-slate-800 rounded-sm'>
        
        <div className='flex items-center justify-center bg-slate-900 p-4 rounded-sm text-green-500'>
            {prop.icon}
        </div>
      

        <div className=' flex flex-col gap-3'>
            <p className=' text-sm font-semibold'>{prop.name}</p>
            <Switch/>
        </div>

    </div>
  )
}
