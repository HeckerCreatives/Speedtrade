'use client'
import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ArrowLeft, ArrowRight, EllipsisVertical, Eye, EyeOff, OctagonAlert, RectangleEllipsis, Search } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Pagination from '@/components/common/Pagination'



export default function UserTable() {
  const [shownew, setShownew] = useState('password')
  const [showconfirm, setShowconfirm] = useState('password')

  return (
    <div className=' relative w-full flex flex-col items-center max-w-[1440px] h-[500px] mt-12 bg-slate-900 p-6'>
        <div className=' flex md:flex-row flex-col gap-4 items-center justify-between sticky top-0 w-[98%] bg-gradient-to-r from-green-700 to-green-500 p-2 rounded-sm -translate-y-12'>
            <Select>
            <SelectTrigger className="w-[200px] bg-zinc-900">
                <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="Comission History">Active</SelectItem>
                <SelectItem value="Referral History">Banned</SelectItem>
              
            </SelectContent>
            </Select>

            <div className=' flex flex-wrap items-center justify-center gap-2'>
              <button className=' px-8 p-2 bg-red-600 rounded-sm text-white text-xs'>Ban</button>
                <input type="text" placeholder='Search Username' className=' p-2 rounded-sm text-xs bg-zinc-900 border-none' />
                <button className=' p-2 bg-green-700 rounded-sm'><Search size={15}/></button>
            </div>


        </div>
        <Table className=''>
        <TableCaption className=' text-xs'>No data</TableCaption>
        <TableHeader className=' border-slate-700'>
            <TableRow>
            <TableHead className=' text-center' >Select</TableHead>
            <TableHead className=' text-center' >Date Joined</TableHead>
            <TableHead className=' text-center'>Username</TableHead>
            <TableHead className=' text-center'>Phone no.</TableHead>
            <TableHead className=' text-center' >Sponsor</TableHead>
            <TableHead className=' text-center' >Status</TableHead>
            <TableHead className=' text-center' >Action</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
            <TableCell className="font-medium flex items-center justify-center">
              <input type="checkbox" />
            </TableCell>
            <TableCell className="font-medium text-center">test</TableCell>
            <TableCell className="font-medium text-center">test</TableCell>
            <TableCell className="font-medium text-center">test</TableCell>
            <TableCell className="font-medium text-center">test</TableCell>
            <TableCell className="font-medium text-center">test</TableCell>
            <TableCell className="font-medium text-center flex items-center justify-center gap-2">

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <button className=' bg-slate-800 p-1 rounded-sm'><Eye size={15}/></button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View User Account</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              

              <Dialog>
                  <DialogTrigger>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <button className=' bg-slate-800 p-1 rounded-sm text-red-500'><OctagonAlert size={15}/></button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Ban User</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className=' text-red-500'>Are you absolutely sure, you want to ban this user?</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. This will permanently ban the user account.
                        </DialogDescription>
                      </DialogHeader>

                      <button className=' px-8 py-2 text-sm font-semibold rounded-sm bg-red-600 mt-4 w-fit'>Ban</button>
                  </DialogContent>
              </Dialog>

              <Dialog>
                  <DialogTrigger>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <button className=' bg-slate-800 p-1 rounded-sm text-blue-300'><RectangleEllipsis size={15}/></button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Change Password</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className=''>Change password</DialogTitle>
                        <DialogDescription>
                          
                        </DialogDescription>
                      </DialogHeader>

                      <div className=' w-full flex flex-col gap-1 mt-2'>
                        <label htmlFor="" className=' text-xs text-zinc-300'>New password</label>
                        <div className=' w-full relative text-black'>
                          <input type={shownew} placeholder='New password' className=' p-2 text-xs rounded-sm w-full' />
                          { shownew === 'password' ? (
                          <button onClick={() => setShownew('text')} className=' top-1 right-1 absolute bg-zinc-200 text-black p-1 rounded-sm '><EyeOff size={15}/></button>
                          ) : (
                          <button onClick={() => setShownew('password')} className=' top-1 right-1 absolute bg-zinc-200 text-black p-1 rounded-sm '><Eye size={15}/></button>

                          )}
                        </div>

                        <label htmlFor="" className=' text-xs text-zinc-300 mt-2'>Confirm password</label>
                        <div className=' w-full relative text-black'>
                          <input type={showconfirm} placeholder='Confirm password' className=' p-2 text-xs rounded-sm w-full' />
                           { showconfirm === 'password' ? (
                            <button onClick={() => setShowconfirm('text')} className=' top-1 right-1 absolute bg-zinc-200 text-black p-1 rounded-sm '><EyeOff size={15}/></button>
                            ) : (
                            <button onClick={() => setShowconfirm('password')} className=' top-1 right-1 absolute bg-zinc-200 text-black p-1 rounded-sm '><Eye size={15}/></button>

                            )}

                        </div>

                      </div>

                      <button className=' px-6 py-2 text-sm font-semibold rounded-sm bg-gradient mt-4 w-fit'>Save Changes</button>
                  </DialogContent>
              </Dialog>

            </TableCell>
            
            </TableRow>
        </TableBody>
        </Table>

        {/* <div className=' flex items-center gap-1 text-xs'>
            <button className=' bg-green-500 text-white p-2 rounded-sm'><ArrowLeft size={15}/></button>

            <p className=' p-2 bg-slate-700 aspect-square w-8 h-8 text-center rounded-sm'>0</p>
            <button className=' bg-green-500 text-white p-2 rounded-sm'><ArrowRight size={15}/></button>


        </div> */}

       
    </div>
  )
}
