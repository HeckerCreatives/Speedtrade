import AdminLayout from '@/components/layout/AdminLayout'
import React from 'react'
import Changepassword from './Changepassword'

export default function page () {
  return (
    <AdminLayout>
        <div className=" bg-slate-900 w-full h-full flex flex-col items-center p-8">
            <div className=' w-full flex-col '>
                <Changepassword/>

            </div>
        </div>
    </AdminLayout>
)}
