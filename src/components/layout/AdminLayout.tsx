"use client"
import React from 'react'
import Link from "next/link"
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,FolderKanban,Component,User,ListCheck,
  List,
  UserRoundPlus,
  Box,
  Mail,
  CalendarCheck,
  LayoutGrid,
  Waypoints,
  Banknote,
  Pickaxe,
  MessageCircleQuestion,
  LogOut
} from "lucide-react"

import { usePathname } from 'next/navigation'
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
import { admin } from '@/app/types/routes'




export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const path = usePathname()
  const params = useSearchParams()

  const page = path.includes('/admin/dashboard') && '' || path.includes('/admin/manageaccount') && 'Manage Account' || path.includes('/admin/withdrawal') && 'Withdrawal'

  return (
      <div className="grid min-h-screen w-full lg:grid-cols-[220px_1fr] overflow-hidden">
        <div className=" hidden lg:block">
          <div className=" relative flex h-full max-h-screen flex-col gap-2 bg-primary"
          style={{backgroundImage: "url(/assets/BG.png)"}}
          > <div className=' absolute w-full h-screen bg-slate-800/70 z-0'></div>
             <div className=' relative z-10 w-full flex items-center justify-center h-[74px] gap-2 text-white p-4 border-b-[1px] px-2 border-slate-800'>
                <img src="/assets/Full logo.png" alt="" width={180} />
              </div>
            <div className=" relative z-10flex-1 mt-4 overflow-y-auto">
              <nav className=" flex flex-col gap-4 px-2 text-sm font-medium lg:px-4">

                {admin.map((item, index) => (
                  <Link
                  key={index}
                  href={item.route}
                  className={` ${path === item.route ? ' bg-gradient' : 'text-zinc-100'}  text-sm flex items-center gap-3 rounded-sm px-3  py-2 hover:bg-gradient-to-r from-green-800 to-green-500`}
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
          <header className=" sticky top-0 z-50 flex h-14 border-b-[1px] border-slate-800 bg-slate-900 items-center justify-between gap-4 bg-secondary lg:h-[74px] px-4 lg:px-6">
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
                    {admin.map((item, index) => (
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
                <p className=' text-xs text-white'>Admin</p>
                <div className=' p-2 bg-slate-700 rounded-full'>
                  <img src="/assets/logo.png" alt="" width={20}/>
                </div>

              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <a href="/">
              <DropdownMenuItem className=' flex items-center gap-2'><LogOut size={15}/>Logout</DropdownMenuItem>
              </a>
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
