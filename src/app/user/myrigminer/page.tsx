"use client"
import UserLayout from "@/components/layout/Userlayout"
import ClaimHistoryTable from "./Table"
import Rigs from "./Rigs"



export default function page() {

  return (

    <UserLayout>
        <div className=" bg-slate-900 w-full h-full flex flex-col items-center p-8">
          <Rigs/>
          <ClaimHistoryTable/>
        </div>
      
    </UserLayout>
  )
}
