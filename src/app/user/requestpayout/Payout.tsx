import React, { useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import axios, { AxiosError } from 'axios'
import toast from 'react-hot-toast'
import { error, success } from '@/components/common/Toast'
import { useRouter, useSearchParams } from 'next/navigation'
import Spinner from '@/components/common/Spinner'
import { RequestPayout, payout } from '@/app/validation/schema'
// import { payout, RequestPayout } from '@/app/validation/schema'


type Wallets = {
    "creditwallet": number
    "minecoinwallet": number
    "commissionwallet": number
    
}



export default function Payout() {
    const [type, setType] = useState('commissionwallet')
    const router = useRouter()

    const [wallet, setWallet] = useState<Wallets>()
    const [loading, setLoading] = useState(false)
    const params = useSearchParams()
    const state = params.get('state')

    const {
    register,
    handleSubmit,
    setValue,
    reset,
    trigger,
    formState: { errors },
  } = useForm<RequestPayout>({
    resolver: zodResolver(payout),
  });

  const onSubmit = async (data: RequestPayout) => {
    setLoading(true)
    router.push('?state=true')
     try {
        
        const request = axios.post(`${process.env.NEXT_PUBLIC_URL}/payout/requestuserpayout`,{
            "type": type, // commissionwallet, minecoinwallet
            "payoutvalue": data.payoutvalue,
            "paymentmethod": data.paymentmethod, // Gcash, Gotyme
            "accountname": data.accountname,
            "accountnumber": data.accountnumber
            },{
                withCredentials: true,
                headers: {
                'Content-Type': 'application/json'
                }
            })
         
            const response = await toast.promise(request, {
                loading: 'Requesting payout ....',
                success: `Payout request success`,
                error: 'Error while requesting payout',
            });
            reset()
            console.log(response.data)

            if(response.data.message === 'success'){
                setLoading(false)
                router.push('?state=false')
            }


            if(response.data.message === 'failed'){
                setLoading(false)
                error(response.data.data)
            }
            
    } catch (error) {
            setLoading(false)
            reset()
                if (axios.isAxiosError(error)) {
                    const axiosError = error as AxiosError<{ message: string, data: string }>;
                    if (axiosError.response && axiosError.response.status === 401) {
                        toast.error(`${axiosError.response.data.data}`) 
                        router.push('/')    
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
    };
  }

    const payoutRequest = async (amount: string, number: string, name: string, paymentmethod: string, type: string) => {
        if(paymentmethod === ''){
            toast.error('Please select a payment method')
        } else if( amount === ''){
            toast.error('Please enter the amount')
        } else if(number === ''){
            toast.error('Please enter your account number')
        } else if(name === ''){
            toast.error('Please enter your account name')
        } else{
            setLoading(true)
            try {
            const request = axios.post(`${process.env.NEXT_PUBLIC_URL}/payout/requestuserpayout`,{
            "type": type, // commissionwallet, minecoinwallet
            "payoutvalue": amount,
            "paymentmethod": paymentmethod, // Gcash, Gotyme
            "accountname": name,
            "accountnumber": number
            },{
                withCredentials: true,
                headers: {
                'Content-Type': 'application/json'
                }
            })

            const response = await toast.promise(request, {
                loading: 'Requesting payout ....',
                success: `Payout request success`,
                error: 'Error while requesting payout',
            });

            console.log(response.data)
            setLoading(false)


            if(response.data.message === 'failed'){
            setLoading(false)

                error(response.data.data)
            }
            
            } catch (error) {
            setLoading(false)

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
        
     
    }

    useEffect(() => {
        const walletBalance = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/wallets/userwallets`,{
                withCredentials: true
                })
                console.log(res.data)
                setWallet(res.data.data)
            } catch (error) {
                // if (axios.isAxiosError(error)) {
                // const axiosError = error as AxiosError<{ message: string, data: string }>;
                //     if (axiosError.response && axiosError.response.status === 401) {
                //     toast.error(`${axiosError.response.data.data}`)
                //     router.push('/')  
                //     }    
                // } 
            }
            
        }

        walletBalance()
    },[state])

    console.log(loading)



  
  return (
    <div className=' relative w-full flex flex-col items-center gap-8 max-w-[1440px] h-auto mt-12 bg-slate-800 p-4 md:p-6'>
        <div className=' flex items-center justify-between absolute top-0 w-[98%] bg-gradient-to-r from-green-700 to-green-500 p-2 rounded-sm -translate-y-4'>
            <Select value={type} onValueChange={setType}>
            <SelectTrigger className="w-[200px] bg-zinc-900">
                <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value='commissionwallet'>Payout Comission</SelectItem>
                <SelectItem value='minecoinwallet'>Payout Rig Miner</SelectItem>
            </SelectContent>
            </Select>

            

        </div>

        <div className=' w-full flex flex-col items-center justify-center'>
            <div className=' max-w-[400px] w-full h-[150px] bg-slate-700 mt-8 rounded-sm flex flex-col gap-2 items-center justify-center'>
                {type === 'commissionwallet' ? (
                    <>
                    <p className=' text-sm'>Comission Wallet Balance</p>
                    <p className=' text-2xl font-semibold text-green-500'>₱ {wallet?.commissionwallet.toLocaleString()}</p>
                    </>

                ): (
                    <>
                    <p className=' text-sm'>Miner Wallet Balance</p>
                    <p className=' text-2xl font-semibold text-green-500'>₱ {wallet?.minecoinwallet.toLocaleString()}</p>

                    </>

                )}

            </div>

            {/* <form onSubmit={handleSubmit(onSubmit)} className=' w-full grid grid-cols-2 gap-2 md:gap-4 mt-4'>

                <div className=' w-full flex flex-col gap-1 md:p-4'>
                    <Select value={paymentmethod} onValueChange={setPaymentmethod} {...register('paymentmethod')}>
                    <SelectTrigger className="w-full bg-zinc-100 text-black">
                        <SelectValue placeholder="Select Payment Method" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value='Gcash'>Gcash</SelectItem>
                        <SelectItem value='Paymaya'>GoTyme</SelectItem>
                    </SelectContent>
                    </Select>
                    <p className=' text-[.6rem] md:text-xs text-orange-300'>*Select payment method</p>
                    {errors.paymentmethod && <p className=' text-[.6em] text-red-400'>{errors.paymentmethod.message}</p>}

                    
                    

                    <input type="text" className=' p-3 text-xs rounded-sm text-black mt-6' placeholder='Account number' value={number} onChange={(e) => setNumber(e.target.value)} />
                    <p className=' text-[.6rem] md:text-xs text-orange-300'>*Make sure you enter a valid account number</p>



                </div>

                <div className=' w-full flex flex-col gap-1 md:p-4'>
                    <input type="text" className=' p-3 text-xs rounded-sm text-black' placeholder='Account name' value={name} onChange={(e) => setName(e.target.value)}  />
                   
                    <p className=' text-[.6rem] md:text-xs text-orange-300'>*Make sure you enter a correct account name</p>


                    <input type="number" className=' p-3 text-xs rounded-sm text-black mt-2 md:mt-6' placeholder='Enter amount' value={amount} onChange={(e) => setAmount(e.target.value)}/>
                    <p className=' text-[.5rem] md:text-xs text-orange-300'></p>



                </div>

                <button>Submit</button>

                

            </form> */}

             <form onSubmit={handleSubmit(onSubmit)} className=' w-full  mt-4'>
                <div className='grid grid-cols-2 gap-2 md:gap-4'>
                    <div className=' w-full flex flex-col gap-2 md:p-4'>

                        <div className=' w-full flex flex-col gap-1 items-start h-[65px]'>
                             <Select onValueChange={(value) => setValue('paymentmethod', value)} {...register('paymentmethod')}>
                            <SelectTrigger className="w-full bg-zinc-100 text-black" >
                                <SelectValue placeholder="Select Payment Method" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='Gcash'>Gcash</SelectItem>
                                <SelectItem value='GoTyme'>GoTyme</SelectItem>
                            </SelectContent>
                            </Select>
                            <p className=' text-[.6rem] md:text-xs text-orange-300'>*Select payment method</p>
                            {errors.paymentmethod && <p className=' text-[.6em] text-red-400'>{errors.paymentmethod.message}</p>}
                        </div>

                        <div className='w-full flex flex-col items-start gap-1 h-[65px] mt-2'>
                            <input type="text" className=' p-3 text-xs rounded-sm text-black w-full' placeholder='Account number' {...register('accountnumber')}/>
                            <p className=' text-[.6rem] md:text-xs text-orange-300'>*Make sure you enter a valid account number</p>
                            {errors.accountnumber && <p className=' text-[.6em] text-red-400'>{errors.accountnumber.message}</p>}
                        </div>
                       

                    </div>

                    <div className=' w-full flex flex-col gap-2 md:p-4'>

                        <div className='w-full flex flex-col gap-1 items-start h-[65px]'>
                            <input type="text" className=' p-3 text-xs rounded-sm text-black w-full' placeholder='Account name' {...register('accountname')}/>
        
                            <p className=' text-[.6rem] md:text-xs text-orange-300'>*Make sure you enter a correct account name</p>
                            {errors.accountname && <p className=' text-[.6em] text-red-400'>{errors.accountname.message}</p>}
                        </div>

                        <div className=' w-full flex flex-col gap-1 items-start h-[65px] mt-2'>
                            <input type="number" className=' p-3 text-xs rounded-sm text-black w-full' placeholder='Enter amount' {...register('payoutvalue')}/>
                            <p className=' text-[.5rem] md:text-xs text-orange-300'></p>
                            {errors.payoutvalue && <p className=' text-[.6em] text-red-400'>{errors.payoutvalue.message}</p>}
                        </div>
                        

                    </div>
                </div>
                 <div className=' w-full flex items-end justify-end px-4'>
                    <button disabled={loading} className=' btn-gradient flex items-center justify-center gap-2'>
                        {loading == true && (
                            <Spinner/>
                        )}
                        Request</button>

                 </div>

                

            </form>

            {/* <div className=' w-full flex items-end justify-end px-4'>
                    <button disabled={loading} onClick={() => payoutRequest(amount,number,name, paymentmethod, type)} className=' px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-green-700 to-green-500 rounded-sm flex items-center justify-center gap-2'>
                        {loading === true && (
                            <Spinner/>
                        )}
                        Request</button>

                </div> */}



            

        </div>
    
    </div>
  )
}
