import axios from 'axios'
import toast from 'react-hot-toast';
import { Payout } from '../types/types';
import { useRouter } from 'next/router';



//auth ----------------------------
export const login = async (username: string, password: string) => {


    const request = axios.get(`${process.env.NEXT_PUBLIC_URL}/auth/login?username=${username}&password=${password}`,{
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

    console.log(response.data)

    if(response.data.data.auth === 'user'){
       window.location.href='/user/dashboard'
    }

}

export const logout = async () => {
    const request = axios.get(`${process.env.NEXT_PUBLIC_URL}/auth/logout`,{
        withCredentials: true,
        headers: {
        'Content-Type': 'application/json'
        }
    })

    const response = await toast.promise(request, {
          loading: 'Logging out....',
          success: `Successfully logged out`,
          error: 'Error while logging out',
    });

}