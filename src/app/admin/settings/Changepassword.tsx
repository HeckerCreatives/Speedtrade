'use client'
import { Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'

export default function Changepassword() {
    const [shownew, setShownew] = useState('password')
    const [showconfirm, setShowconfirm] = useState('password')
    
  return (
    <div className=' max-w-[500px] w-full bg-slate-800 p-6 rounded-sm'>
        <p className=' text-sm font-semibold'>Change Password</p>
        

        <div className=' w-full flex flex-col gap-1 text-xs mt-4'>
            <label htmlFor="">New Password</label>
            <div className=' relative w-full'>
                <input type={shownew} placeholder='New Password' className=' text-black p-2 rounded-sm w-full' />
                {shownew === 'password' ? 
                    (
                        <button onClick={() => setShownew('text')} className=' absolute right-1 top-1 bg-slate-300 p-1 rounded-sm text-black'><EyeOff size={15}/></button>
                    ):(
                    <button onClick={() => setShownew('password')} className=' absolute right-1 top-1 bg-slate-300 p-1 rounded-sm text-black'><Eye size={15}/></button>
                )}
            </div>

            <label htmlFor="" className=' mt-2'>Confirm Password</label>
            <div className=' w-full relative'>
                <input type={showconfirm} placeholder='Confirm Password' className=' text-black p-2 rounded-sm w-full' />
                 {showconfirm === 'password' ? 
                    (
                        <button onClick={() => setShowconfirm('text')} className=' absolute right-1 top-1 bg-slate-300 p-1 rounded-sm text-black'><EyeOff size={15}/></button>
                    ):(
                    <button onClick={() => setShowconfirm('password')} className=' absolute right-1 top-1 bg-slate-300 p-1 rounded-sm text-black'><Eye size={15}/></button>
                )}
            </div>

            <button className=' bg-gradient text-sm py-2 font-semibold w-fit px-6 rounded-sm mt-4'>Save</button>

        </div>

    </div>
  )
}
