import React from 'react'
import SuperAdminLayout from '@/components/layout/SuperadminLayout'
import AdminLayout from '@/components/layout/AdminLayout'
import Cards from './Cards'
import { Charts } from './Charts'


export default function page() {
  return (
    <AdminLayout>
        <div className=" bg-slate-900 w-full h-auto flex flex-col items-center p-8">
           <Cards/>
           <Charts/>
        </div>
    </AdminLayout>
  )
}
