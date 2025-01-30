"use client"
import React, { useEffect } from 'react'
import Link from "next/link"
import {
  Menu,
  LogOut
} from "lucide-react"
import { usePathname, useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Breadcrumb from '../common/Breadcrumb'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { superadmin } from '@/app/types/routes'
import axios, { AxiosError } from 'axios'
import toast from 'react-hot-toast'




export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const path = usePathname()
  const params = useSearchParams()
  const router = useRouter()

  const page = path.includes('/superadmin/dashboard') && '' || path.includes('/superadmin/manageaccount') && 'Manage Account' || path.includes('/superadmin/maintenance') && 'Maintenance' || path.includes('/superadmin/deposit') && 'Deposit' || path.includes('/superadmin/withdrawal') && 'Withdrawal' || path.includes('/superadmin/sales') && 'Sales' || path.includes('/superadmin/masterkey') && 'Master Key'


  const logout = async () => {
    const request = axios.get(`${process.env.NEXT_PUBLIC_URL}/auth/logout`,{
      withCredentials: true
    })

    const response = await toast.promise(request, {
      loading: 'Loging out....',
      success: `Logout successfully`,
      error: 'Error while logging out',
    });

    if(response.data.message === 'success'){
      router.push('/')
    }
  }


  
  return (
      <div className="grid min-h-screen w-full lg:grid-cols-[220px_1fr] overflow-hidden">
        <div className=" hidden lg:block">
          <div className=" relative flex h-full max-h-screen flex-col gap-2 bg-primary"
          style={{backgroundImage: "url(/assets/BG.png)"}}
          > <div className=' absolute w-full h-screen bg-slate-800/70 z-0'></div>
             <div className=' relative z-10 w-full flex items-center justify-center h-[74px] gap-2 text-white p-4 border-b-[1px] px-2 border-slate-800'>
                <img src="/full.png" alt="" width={160} />
              </div>
            <div className=" relative z-10flex-1 mt-4 overflow-y-auto">
              <nav className=" flex flex-col gap-4 px-2 text-sm font-medium lg:px-4">

                {superadmin.map((item, index) => (
                  <Link
                  key={index}
                  href={item.route}
                  className={` ${path.includes(item.route) ? ' bg-gradient' : 'text-zinc-100'}  text-sm flex items-center gap-3 rounded-sm px-3  py-2 hover:bg-gradient-to-r from-green-800 to-green-500`}
                >
                  {item.icon}
                  {item.name}
                </Link>
                ))}
                

               

               
               
              </nav>
            </div>
            
          </div>
        </div>
        <div className=" relative h-screen flex flex-col overflow-y-auto">
          <header className=" sticky top-0 z-50 flex h-14 border-b-[1px] border-slate-800 bg-slate-900 items-center justify-between gap-4 bg-secondary p-4 lg:h-[74px] lg:px-6">
            <div className=' flex items-center gap-4 h-[74px]'>
              <Sheet>
                <SheetTrigger asChild className=' lg:hidden block'>
                <button className=' p-1 bg-slate-800 rounded-sm text-green-500'><Menu size={15}/></button>
                </SheetTrigger>
                <SheetContent side="left" className=" flex flex-col bg-primary border-none bg-slate-900"
                //  style={{backgroundImage: "url(/assets/BG.png)"}}
                >
                  
                  <div className=' flex items-center gap-2 text-white p-4'>
                    <img src="/assets/Full logo.png" alt="" width={180} />
                  </div>
                  <nav className=" flex flex-col gap-4 px-2 text-sm font-medium lg:px-4">
                    {superadmin.map((item, index) => (
                      <Link
                      key={index}
                      href={item.route}
                      className={` ${path.includes(item.route) ? ' bg-gradient' : 'text-zinc-100'}  text-sm flex items-center gap-3 rounded-sm px-3  py-2 hover:bg-gradient-to-r from-green-800 to-green-500`}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                    ))}

                  
                  
                  </nav>
                
                </SheetContent>
              </Sheet>

              <Breadcrumb dashboard={'/admin/dashboard'} page={page}/>

            </div>
            
            {/* <Menu className="h-5 w-5 text-zinc-100 lg:block hidden" /> */}

            

            <DropdownMenu>
            <DropdownMenuTrigger className=' active:border-none focus:border-none'>
              <div className=' flex items-center gap-2'>
                <p className=' text-xs text-white'>Super Admin</p>
                <div className=' p-2 bg-slate-700 rounded-full'>
                  <img src="/C.png" alt="" width={25}/>
                </div>

              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              
              <DropdownMenuItem onClick={logout} className=' flex items-center gap-2'><LogOut size={15}/>Logout</DropdownMenuItem>
            
            </DropdownMenuContent>
          </DropdownMenu>

            
          </header>
          <main className=" relative flex flex-1 flex-col items-center gap-4 ">
              {children}
          </main>
        </div>
      </div>
  )
}
