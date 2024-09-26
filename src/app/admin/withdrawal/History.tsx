import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ComissionHsitory from './ComissionHsitory'
import RigminerHsitory from './RigminerHistory'


export default function History() {
  return (
    <div className='relative w-full flex flex-col max-w-[1440px]'>
        <Tabs defaultValue="comission" className="w-full h-full">
        <TabsList>
            <TabsTrigger value="comission">Comission</TabsTrigger>
            <TabsTrigger value="rigminer">Rig Miner</TabsTrigger>
        </TabsList>
        <TabsContent value="comission">
            <ComissionHsitory/>
        </TabsContent>
        <TabsContent value="rigminer">
            <RigminerHsitory/>
        </TabsContent>
        </Tabs>

    </div>
  )
}
