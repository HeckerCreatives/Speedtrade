'use client'
import { error, success } from '@/components/common/Toast'
import React, { useState } from 'react'

import { useRouter } from 'next/navigation'
import { Eye, EyeOff } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Register, registeruser } from '@/app/validation/schema'
import { zodResolver } from '@hookform/resolvers/zod'

export default function page() {
    const [username, setUsername] = useState('')
    const [password, SetPassword] = useState('')
    const [showpassword, setShowpassword] = useState('password')
    const [showconfirm, setShowconfirm] = useState('password')
    const router = useRouter()

    const {
    register,
    handleSubmit,
    setValue,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Register>({
    resolver: zodResolver(registeruser),
  });

  const onSubmit = (data: Register) => {
    console.log(data); // Handle form submission
  };


  


  return (
    <div className=' relative w-full h-screen flex items-center justify-center overflow-hidden'
    style={{backgroundImage: "url(/assets/BG.png)"}}
    >
        <div className=' absolute w-full h-screen bg-zinc-950/50'>

        </div>

        <img src="/assets/Wave Shape.png" alt="" className=' absolute left-0 h-[150vh] -translate-x-20' />

        <div className=' relative z-20 max-w-[1240px] w-full grid-cols-1 grid lg:grid-cols-[450px,1fr] gap-12 place p-4'>
            <div className=' w-full h-auto p-6 flex flex-col items-center justify-start bg-zinc-800 shadow-lg rounded-md'>
                <img loading='lazy' src="/assets/Full logo.png" alt="" width={250} />
                <p className=' text-sm font-semibold border-b-2 border-green-500 uppercase mt-6'>Register</p>

                <form onSubmit={handleSubmit(onSubmit)} className=' w-full lg:w-[90%] flex flex-col gap-1 mt-6'>
                    <label htmlFor="" className=' text-xs text-zinc-300'>Username</label>
                    <input maxLength={25} type="text" placeholder='Username' className=' text-sm w-full bg-white rounded-full p-2 text-black' {...register('username')} />
                    {errors.username && <p className=' text-[.6em] text-red-400'>{errors.username.message}</p>}

                    <label htmlFor="" className=' text-xs text-zinc-300'>Phone</label>
                    <input  maxLength={11} type="number" placeholder='Phone' className=' text-sm w-full bg-white rounded-full p-2 text-black' {...register('phone')} />
                    {errors.phone && <p className=' text-[.6em] text-red-400'>{errors.phone.message}</p>}


                    <div className=' flex items-start gap-2 mt-1'>
                        <div className=' flex flex-col gap-1'>
                            <label htmlFor="" className=' text-xs text-zinc-300'>Password</label>
                                <div className=' w-full relative'>
                                    <input type={showpassword} placeholder='Password' className=' text-sm w-full bg-white rounded-full p-2 text-black' {...register('password')} />
                                    {errors.password && <p className=' text-[.6em] text-red-400'>{errors.password.message}</p>}

                                    {showpassword === 'password' ? (
                                    <button onClick={() => setShowpassword('text')} className=' absolute top-[7px] right-2 bg-zinc-300 p-1 rounded-full text-black'><EyeOff size={15}/></button>
                                    
                                    ) : (
                                    <button onClick={() => setShowpassword('password')} className=' absolute top-[7px] right-2 bg-zinc-300 p-1 rounded-full text-black'><Eye size={15}/></button>

                                    )}
                                </div>
                            </div>

                            <div className=' flex flex-col gap-1'>
                                <label htmlFor="" className=' text-xs text-zinc-300'>Confirm Password</label>
                                <div className=' w-full relative'>
                                    <input maxLength={20} type={showconfirm} placeholder='Confirm Password' className=' text-sm w-full bg-white rounded-full p-2 text-black' {...register('confirm')} />
                                    {errors.confirm && <p className=' text-[.6em] text-red-400'>{errors.confirm.message}</p>}

                                    {showconfirm === 'password' ? (
                                    <button onClick={() => setShowconfirm('text')} className=' absolute top-[7px] right-2 bg-zinc-300 p-1 rounded-full text-black'><EyeOff size={15}/></button>
                                    
                                    ) : (
                                    <button onClick={() => setShowconfirm('password')} className=' absolute top-[7px] right-2 bg-zinc-300 p-1 rounded-full text-black'><Eye size={15}/></button>

                                    )}
                                </div>
                        </div>
                    </div>

                    <label htmlFor="" className=' text-xs text-zinc-300'>Referral</label>
                    <input disabled type="number" placeholder='Referral' className=' text-sm w-full bg-white rounded-full p-2 text-black' />

                    
                    

                    
                   
                  
                    <button  className=' p-2 w-full bg-green-600 text-white font-semibold text-sm rounded-full mt-6'>Register</button>
                   <p className=' text-xs text-center mt-8'>Already have an account?<a href="/" className=' text-green-500'>Sign In</a></p>

                   

                </form>

                
            </div>

            <div className=' hidden lg:flex flex-col items-center justify-end relative w-full h-[550px]'>
                <img loading='lazy' src="/assets/Rapid-miner.png" alt="" width={350} className=' z-20 absolute top-12 ' />
                <img loading='lazy' src="/assets/quick-miner.png" alt="" width={350} className=' z-10 absolute top-12 left-0 ' />
                <img loading='lazy' src="/assets/Swift-miner.png" alt="" width={350} className=' z-10 absolute top-12 right-0 ' />
                <img loading='lazy' src="/assets/Techno Pattern.png" alt="" width={350} className=' opacity-50 rotate-180 z-0 absolute left-0 top-20 -translate-y-[90%]' />
                <img loading='lazy' src="/assets/Techno Pattern.png" alt="" width={350} className=' opacity-50 z-0 absolute right-0 bottom-0 translate-y-[60%]' />

                {/* <p className=' text-3xl font-extrabold text-green-400'>Powering Tommorow,One Block at a Time</p>
                <p className=' text-3xl font-extrabold text-nowrap'>Security Methods Used in Crypto</p> */}


            </div>
        </div>

    </div>
  )
}
