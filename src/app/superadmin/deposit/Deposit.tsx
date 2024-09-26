import React from 'react'

export default function Deposit() {
  return (
    <div className=' max-w-[400px] h-auto p-6 w-full bg-slate-800 rounded-sm flex flex-col'>
        <p className=' text-sm font-semibold mb-4'>Top Up</p>
        <form action="" className=' w-full flex flex-col gap-1 text-sm'>
            <label htmlFor="" className=' text-xs text-zinc-300'>Username</label>
            <input type="text" name="" placeholder=' Username' className=' w-full p-2 rounded-sm' />

            <label htmlFor="" className=' text-xs text-zinc-300 mt-2'>Amount</label>
            <input type="number" name="" placeholder=' Amount' className=' w-full p-2 rounded-sm' />
            <button className=' bg-gradient w-fit px-6 py-2 text-sm text-white font-semibold rounded-sm mt-6'>Send</button>
        </form>

    </div>
  )
}
