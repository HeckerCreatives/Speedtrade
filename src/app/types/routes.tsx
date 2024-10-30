import { Banknote, Cable, ChartColumn, Cog, HandCoins, LayoutGrid, MessageCircleQuestion, Pickaxe, ShoppingCart, TicketCheck, Users, WalletMinimal, Waypoints } from "lucide-react";

export const user = [
    {name:'Dashboard', icon: <LayoutGrid width={15} height={15}/>, route:'/user/dashboard'},
    {name:'My Connections', icon: <Waypoints width={15} height={15}/>, route:'/user/myconnection'},
    {name:'Request Payout', icon: <Banknote width={15} height={15}/>, route:'/user/requestpayout'},
    {name:'Purchase Rig Miner', icon: <ShoppingCart width={15} height={15}/>, route:'/user/purchase'},
    {name:'My Rig Miner', icon: <Pickaxe width={15} height={15}/>, route:'/user/myrigminer'},
    {name:'FAQ', icon: <MessageCircleQuestion width={15} height={15}/>, route:'/user/faq'},
]

export const superadmin = [
    {name:'Dashboard', icon: <LayoutGrid width={15} height={15}/>, route:'/superadmin/dashboard'},
    {name:'Manage Account', icon: <Users width={15} height={15}/>, route:'/superadmin/manageaccount'},
    // {name:'Sales', icon: <ChartColumn width={15} height={15}/>, route:'/superadmin/sales'},
    // {name:'Maintenance', icon: <Cable width={15} height={15}/>, route:'/superadmin/maintenance'},
    {name:'Deposit', icon: <HandCoins width={15} height={15}/>, route:'/superadmin/deposit'},
    {name:'Withdrawal', icon: <WalletMinimal width={15} height={15}/>, route:'/superadmin/withdrawal'},
    {name:'Master Key', icon: <TicketCheck width={15} height={15}/>, route:'/superadmin/masterkey'},
    {name:'Settings', icon: <Cog width={15} height={15}/>, route:'/superadmin/settings'},
]


export const admin = [
    {name:'Dashboard', icon: <LayoutGrid width={15} height={15}/>, route:'/admin/dashboard'},
    {name:'Manage Account', icon: <Users width={15} height={15}/>, route:'/admin/manageaccount'},
    {name:'Withdrawal', icon: <WalletMinimal width={15} height={15}/>, route:'/admin/withdrawal'},
    {name:'Settings', icon: <Cog width={15} height={15}/>, route:'/admin/settings'},
]