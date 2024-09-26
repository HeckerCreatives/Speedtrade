'use client'
import { Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'

export default function Changepassword() {
    const [shownew, setShownew] = useState('password')
    const [showconfirm, setShowconfirm] = useState('password')

  return (
    <div className=' w-full max-w-[1440px] flex flex-col'>
        <div className=' flex flex-col max-w-[500px] w-full h-auto bg-slate-800 rounded-sm p-6 shadow-lg'>
            <p className=' text-sm font-semibold'>Change Password</p>

            <div className=' w-full flex flex-col gap-1  text-xs mt-6'>
                <label htmlFor="" className=' text-zinc-300'>New password</label>
                <div className=' relative w-full'>
                    <input type={shownew} placeholder='New Password' className=' p-2 text-xs rounded-sm w-full text-black' />
                    {shownew === 'password' ? 
                    (
                    <button onClick={() => setShownew('text')} className=' absolute right-1 top-1 bg-slate-300 p-1 rounded-sm text-black'><EyeOff size={15}/></button>
                    ):(
                    <button onClick={() => setShownew('password')} className=' absolute right-1 top-1 bg-slate-300 p-1 rounded-sm text-black'><Eye size={15}/></button>
                    )}
                    
                </div>
                <label htmlFor="" className=' text-zinc-300 mt-4'>Confirm password</label>
                <div className=' relative w-full'>
                    <input type={showconfirm} placeholder='Confirm Password' className=' p-2 text-xs rounded-sm w-full text-black' />
                    {showconfirm === 'password' ? 
                        (
                        <button onClick={() => setShowconfirm('text')} className=' absolute right-1 top-1 bg-slate-300 p-1 rounded-sm text-black'><EyeOff size={15}/></button>
                        ):(
                        <button onClick={() => setShowconfirm('password')} className=' absolute right-1 top-1 bg-slate-300 p-1 rounded-sm text-black'><Eye size={15}/></button>
                    )}
                        
                </div>

                <button className=' px-6 py-2 text-sm font-semibold rounded-sm bg-gradient w-fit mt-6'>Save</button>
            </div>
        </div>
    </div>
  )
}
