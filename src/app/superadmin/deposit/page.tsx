import React from 'react'
import SuperAdminLayout from '@/components/layout/SuperadminLayout'
import UserTable from './Table'
import Deposit from './Deposit'

export default function page() {
  return (
    <SuperAdminLayout>
        <div className=" bg-slate-900 w-full h-full flex flex-col items-center p-8">
            <Deposit/>
            <UserTable/>
        </div>
    </SuperAdminLayout>
  )
}
