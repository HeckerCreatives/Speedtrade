import axios from 'axios'
import toast from 'react-hot-toast';
import { Payout } from '../types/types';



//dasboard -------------------------

async function getCardValue() {
  const res = await fetch(`https://...`, { cache: 'no-store' })
  const cardvalue = await res.json()
 
  return cardvalue
}

async function getComissionHistory() {
  const res = await fetch(`https://...`, { cache: 'no-store' })
  const comission = await res.json()
 
  return comission
}

async function getReferralHistory() {
  const res = await fetch(`https://...`, { cache: 'no-store' })
  const referral = await res.json()
 
  return referral
}

async function getRigMinerHistory() {
  const res = await fetch(`https://...`, { cache: 'no-store' })
  const miner = await res.json()
 
  return miner
}

async function getComissionWithdrawHistory() {
  const res = await fetch(`https://...`, { cache: 'no-store' })
  const withdraw = await res.json()
 
  return withdraw
}

async function getMinerWithdrawHistory() {
  const res = await fetch(`https://...`, { cache: 'no-store' })
  const minerwithdraw = await res.json()
 
  return minerwithdraw
}

//end dashboard ----------------------------




//my connections ----------------------------

async function getConnections() {
  const res = await fetch(`https://...`, { cache: 'no-store' })
  const connections = await res.json()
 
  return connections
}

//end my connections -------------------------





//payout ----------------------------------

export const payout = async (data: Payout) => {
     const request = axios.post(``,{
        withCredentials: true,
        headers: {
        'Content-Type': 'application/json'
        }
    })

    const response = await toast.promise(request, {
          loading: 'Logging in....',
          success: `Successfully logged in`,
          error: 'Error while logging in',
    });
}

// end payout -----------------------------




//purchase --------------------------------

export const purchase = async (type:string, price: number) => {
     const request = axios.post(``,{
        withCredentials: true,
        headers: {
        'Content-Type': 'application/json'
        }
    })

    const response = await toast.promise(request, {
          loading: 'Purchasing miner...',
          success: `Successfuly purchased`,
          error: 'Theres an error while purchasing',
    });
}

//end purchase -----------------------------




// my rig miner ---------------------------

export const claim = async (id: string) => {
     const request = axios.post(``,{
        withCredentials: true,
        headers: {
        'Content-Type': 'application/json'
        }
    })

    const response = await toast.promise(request, {
          loading: 'Logging in....',
          success: `Successfully logged in`,
          error: 'Error while logging in',
    });
}


async function getMyrigs() {
  const res = await fetch(`https://...`, { cache: 'no-store' })
  const myrigs = await res.json()
 
  return myrigs
}

//end my rig miner -----------------------




//use case
// export default async function Dashboard() {
//   const projects = await getProjects()
 
//   return (
//     <ul>
//       {projects.map((project) => (
//         <li key={project.id}>{project.name}</li>
//       ))}
//     </ul>
//   )
// }