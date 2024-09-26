import React from 'react'
import SuperAdminLayout from '@/components/layout/SuperadminLayout'
import List from './List'

export default function page() {
  return (
    <SuperAdminLayout>
        <div className=" bg-slate-900 w-full h-full flex flex-col items-center p-4 md:p-8">
           <List/>
        </div>
    </SuperAdminLayout>
  )
}
