"use client"
import UserLayout from "@/components/layout/Userlayout"
import MyConnectionTable from "./Table"


export default function page() {

  return (

    <UserLayout>
        <div className=" bg-slate-900 w-full h-full flex flex-col items-center p-8">
            <MyConnectionTable/>
        </div>
      
    </UserLayout>
  )
}
