'use client'
import React, { useState } from 'react'

import { useRouter } from 'next/navigation'
import { Eye, EyeOff } from 'lucide-react'

import axios, { AxiosError } from 'axios'
import toast from 'react-hot-toast'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, SetPassword] = useState('')
    const [showpassword, setShowpassword] = useState('password')
    const router = useRouter()

    // const login = () => {
    //     if (username === 'speedtradeplayer' && password === 'dev123') {
    //         success('Successfully logged in')
    //         router.push('/user/dashboard')
    //         success('Welcome User')
    //     }else if (username === 'speedtradesuperadmin' && password === 'dev123') {
    //         success('Successfully logged in')
    //         router.push('/superadmin/dashboard')
    //         success('Welcome Superadmin')

    //     } else if (username === 'speedtradeadmin' && password === 'dev123') {
    //         router.push('/admin/dashboard')
    //         success('Welcome Admin')

    //     } else {
    //         error('Invalid username or password')
    //         localStorage.setItem('auth','false')

    //     }
    // }

    const login = async () => {
        try {
            const request = axios.get(`${process.env.NEXT_PUBLIC_URL}/auth/login?username=${username}&password=${password}`)

            const response = await toast.promise(request, {
            loading: 'Log in account....',
            success: `Successfully loged in`,
            error: 'Error while logging your account',
        });

            console.log(response.data)

        if (response.data.message === 'success' ){
            router.push('/user/dashboard')
        }
            
        } catch (error) {
             if (axios.isAxiosError(error)) {
                    const axiosError = error as AxiosError<{ message: string, data: string }>;
                    if (axiosError.response && axiosError.response.status === 401) {
                        toast.error(`${axiosError.response.data.data}`)     
                    }

                    if (axiosError.response && axiosError.response.status === 400) {
                        toast.error(`${axiosError.response.data.data}`)     
                            
                    }

                    if (axiosError.response && axiosError.response.status === 402) {
                        toast.error(`${axiosError.response.data.data}`)          
                                
                    }

                    if (axiosError.response && axiosError.response.status === 403) {
                        toast.error(`${axiosError.response.data.data}`)              
                        
                    }

                    if (axiosError.response && axiosError.response.status === 404) {
                        toast.error(`${axiosError.response.data.data}`)             
                    }
            } 
            
        }
    }



  return (
    <div className=' relative w-full h-screen flex items-center justify-center overflow-hidden'
    style={{backgroundImage: "url(/assets/BG.png)"}}
    >
        <div className=' absolute w-full h-screen bg-zinc-950/50'>

        </div>

        <img src="/assets/Wave Shape.png" alt="" className=' absolute left-0 h-[150vh] -translate-x-20' />

        <div className=' relative z-20 max-w-[1240px] w-full grid-cols-1 grid lg:grid-cols-[400px,1fr] gap-12 place p-4'>
            <div className=' w-full max-h-[500px] h-full p-6 flex flex-col items-center justify-start bg-zinc-800 shadow-lg rounded-md'>
                <img loading='lazy' src="/assets/Full logo.png" alt="" width={250} />
                <p className=' text-sm font-semibold border-b-2 border-green-500 uppercase mt-6'>Sign In</p>

                <div className=' w-full lg:w-[90%] flex flex-col gap-1 mt-6'>
                    <label htmlFor="" className=' text-xs text-zinc-300'>Username</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} maxLength={25} type="text" placeholder='Username' className=' text-sm w-full bg-white rounded-full p-2 text-black' />


                    <label htmlFor="" className=' text-xs text-zinc-300 mt-2'>Password</label>
                    <div className=' w-full relative'>
                        <input value={password} onChange={(e) => SetPassword(e.target.value)} maxLength={20} type={showpassword} placeholder='Password' className=' text-sm w-full bg-white rounded-full p-2 text-black' />
                        {showpassword === 'password' ? (
                        <button onClick={() => setShowpassword('text')} className=' absolute top-[7px] right-2 bg-zinc-300 p-1 rounded-full text-black'><EyeOff size={15}/></button>
                        
                        ) : (
                        <button onClick={() => setShowpassword('password')} className=' absolute top-[7px] right-2 bg-zinc-300 p-1 rounded-full text-black'><Eye size={15}/></button>

                        )}
                    </div>
                   
                  
                    <button onClick={login} className=' p-2 w-full bg-green-600 text-white font-semibold text-sm rounded-full mt-6'>Sign In</button>
                   {/* <p className=' text-xs text-center mt-8'>Do you have an account? <a href="/auth/register" className=' text-green-500'>Register</a></p> */}

                </div>

                
            </div>

            <div className=' hidden lg:flex flex-col items-center justify-end relative w-full h-[550px]'>
                <img loading='lazy' src="/assets/Rapid-miner.png" alt="" width={350} className=' z-20 absolute top-0 ' />
                <img loading='lazy' src="/assets/quick-miner.png" alt="" width={350} className=' z-10 absolute top-0 left-0 ' />
                <img loading='lazy' src="/assets/Swift-miner.png" alt="" width={350} className=' z-10 absolute top-0 right-0 ' />
                <img loading='lazy' src="/assets/Techno Pattern.png" alt="" width={350} className=' opacity-50 rotate-180 z-0 absolute left-0 top-20 -translate-y-[90%]' />
                <img loading='lazy' src="/assets/Techno Pattern.png" alt="" width={350} className=' opacity-50 z-0 absolute right-0 bottom-0 translate-y-[60%]' />

                <p className=' text-3xl font-extrabold text-green-400'>Powering Tommorow,One Block at a Time</p>
                <p className=' text-3xl font-extrabold text-nowrap'>Security Methods Used in Crypto</p>


            </div>
        </div>

    </div>
  )
}
