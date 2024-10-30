import React from 'react'

export default function Form() {
  return (
    <div className=' w-full flex'>
        <form className=' flex flex-col gap-1 bg-secondary max-w-[500px] w-full h-auto p-6 lg:p-10 rounded-md'>
            <label htmlFor="" className=' text-xs text-zinc-400'>Master key</label>
            <input type="text" placeholder='Enter master key' className=' text-sm p-2 rounded-md bg-slate-600' />
            <div className=' w-full flex ite justify-end mt-6'>
                <button className='btn-gradient'>Save</button>
            </div>
        </form>
    </div>
   
  )
}
