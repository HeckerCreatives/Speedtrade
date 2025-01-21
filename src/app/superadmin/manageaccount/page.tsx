import React from 'react'
import SuperAdminLayout from '@/components/layout/SuperadminLayout'
import Cards from './Cards'
import UserTable from './Table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AdminTable from './Admintable'
import CommissionTable from './Commision'


export default function page() {
  return (
    <SuperAdminLayout>
        <div className=" bg-slate-900 w-full h-full flex flex-col items-center p-8">

          <Tabs defaultValue="admin" className=" w-full bg-slate-800 p-2 md:p-6 max-w-[1440px] rounded-sm">
            <TabsList className=' bg-slate-900'>
              <TabsTrigger value="admin">Admins</TabsTrigger>
              <TabsTrigger value="user">Users</TabsTrigger>
              <TabsTrigger value="commissions">Comissions</TabsTrigger>

            </TabsList>
            <TabsContent value="user" className=' mt-12'>
              <>
              <Cards/>
              <UserTable/>
              </>
            </TabsContent>
            <TabsContent value="admin">
              <>
              <AdminTable/>
              </>
            </TabsContent>

            <TabsContent value="commissions">
              <CommissionTable/>
            </TabsContent>
          </Tabs>

            
        </div>
    </SuperAdminLayout>
  )
}
