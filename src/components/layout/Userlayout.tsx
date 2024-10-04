"use client"
import React, { useEffect, useState } from 'react'
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
  LogOut,
  Copy
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
import { success } from '../common/Toast'
import { user } from '@/app/types/routes'
import axios, { AxiosError } from 'axios'
import toast from 'react-hot-toast'




export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const path = usePathname()
  const params = useSearchParams()

  const page = path.includes('/user/dashboard') && '' || path.includes('/user/myconnection') && 'My Connection' || path.includes('/user/requestpayout') && 'Request Payout' || path.includes('/user/purchase') && 'Purchase Rig Miner' || path.includes('/user/myrigminer') && 'My Rig Miner' || path.includes('/user/faq') && 'FAQ'

  const [username, setUsername] = useState('')
  const [id, setId] = useState('')
  const router = useRouter()
  const [referralstatus, setReferralStatus] = useState(false)


  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/user/getuserdata`,{
        withCredentials:true
        })
        setUsername(response.data.data.username)
        setId(response.data.data.referralid)
      } catch (error) {
        if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError<{ message: string, data: string }>;
                    if (axiosError.response && axiosError.response.status === 401) {
                    toast.error(`${axiosError.response.data.data}`)
                    router.push('/')  
                    }    
                } 
        
      }
      
    }
    getUserData()
  },[])

  useEffect(() => {
    const getReferralStatus = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/analytics/getreferrallinkstatus`,{
        withCredentials:true
        })
        setReferralStatus(response.data.data.status)
      } catch (error) {
        if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError<{ message: string, data: string }>;
                    if (axiosError.response && axiosError.response.status === 401) {
                    toast.error(`${axiosError.response.data.data}`)
                    router.push('/')  
                    }    
                } 
        
      }
      
    }
    getReferralStatus()
  },[])

  const copyReferral = () => {
    navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_REFERRAL}/auth/register?uid=${id}`)
    success('Referral link copied')
  }

  const logout = async () => {
    const request = axios.get(`${process.env.NEXT_PUBLIC_URL}/auth/logout`,{
      withCredentials: true
    })

    const response = await toast.promise(request, {
      loading: 'Loging out....',
      success: `Logout successfully`,
      error: 'Error while logging out',
    });
  }

  console.log(referralstatus)

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

                {user.map((item, index) => (
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
                <SheetContent side="left" className=" flex flex-col bg-slate-900 border-none"
                //  style={{backgroundImage: "url(/assets/BG.png)"}}
                >
                  
                  <div className=' flex items-center gap-2 text-white p-4'>
                    <img src="/assets/Full logo.png" alt="" width={180} />
                  </div>
                  <nav className=" flex flex-col gap-4 px-2 text-sm font-medium lg:px-4">

                   {user.map((item, index) => (
                    <Link
                    key={index}
                      href={item.route}
                      className={` ${path.includes(item.route) ? ' bg-gradient' : 'text-zinc-100'}  text-sm flex items-center gap-3 rounded-sm px-3  py-2 hover:bg-gradient-to-r from-green-800 to-green-500`}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}

                  {referralstatus === true && (
                    <button onClick={() => copyReferral()} className=' text-xs w-fit text-white bg-slate-800 p-2 rounded-sm flex items-center gap-1'><Copy size={15}/>Copy referral</button>
                  )}



                  
                  
                  </nav>
                
                </SheetContent>
              </Sheet>

              <Breadcrumb dashboard={'/user/dashboard'} page={page}/>

            </div>
            
            {/* <Menu className="h-5 w-5 text-zinc-100 lg:block hidden" /> */}

            <div className=' flex items-center gap-2'>
              {referralstatus === true && (
                <button onClick={() => copyReferral()} className=' text-xs w-fit text-white bg-slate-800 p-2 rounded-sm flex items-center gap-1'><Copy size={15}/>Copy referral</button>

              )}


              <DropdownMenu>
              <DropdownMenuTrigger className=' active:border-none focus:border-none'>
                <div className=' flex items-center gap-2'>
                  <div className=' flex flex-col'>
                    <p className=' text-xs text-white'>{username}</p>
                  </div>
                  <div className=' p-2 bg-slate-700 rounded-full'>
                    <img src="/C.png" alt="" width={25}/>
                  </div>

                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <a href="/">
                <DropdownMenuItem onClick={logout} className=' flex items-center gap-2'><LogOut size={15}/>Logout</DropdownMenuItem>
                
                </a>
              </DropdownMenuContent>
            </DropdownMenu>

            </div>

            

            

            
          </header>
          <main className=" relative flex flex-1 flex-col items-center gap-4 ">
              {children}
          </main>
        </div>
      </div>
  )
}
