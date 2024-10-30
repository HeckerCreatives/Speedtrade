import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export default function MasterkeyHistory() {
  return (
    <div className=' w-full flex flex-col gap-6 bg-secondary p-6 rounded-md'>
        <p className=' text-sm'>Master Key History</p>
        <Table className=''>
         {/* {loading === true && (
            <TableCaption className=' '>
              <Spinner/>
            </TableCaption>
          )}
          {sales.length === 0 && (
          <TableCaption className=' text-xs'>No data</TableCaption>
          )} */}
        <TableHeader className=' border-slate-700'>
            <TableRow>
            <TableHead className=' text-center'>Ip address</TableHead>
          
            <TableHead className=' text-center' >Date changed</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
          {/* {sales.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-center">{new Date(item._id).toDateString()}</TableCell>
              <TableCell className="font-medium text-center">₱ {item.totalValue.toLocaleString()}</TableCell>
            </TableRow>
          ))} */}


            
        </TableBody>
        </Table>
    </div>
  )
}
