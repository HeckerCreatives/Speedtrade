
import axios from 'axios'
import toast from 'react-hot-toast';
import { Payout } from '../types/types';
import { GetServerSideProps } from 'next';

type Wallets = {
    data : {
        "creditwallet": number
        "minecoinwallet": number
        "commissionwallet": number
    }
    
}


//dasboard -------------------------

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/wallets/userwallets`, {
    method: 'GET',  // Optional: Specify the HTTP method
    cache: 'no-store',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json'
      },
    })
  const wallets = await res.json()
 
  return { props: { wallets } }
}
  

