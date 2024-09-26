import axios from 'axios'
import toast from 'react-hot-toast';
import { Payout } from '../types/types';

//auth ----------------------------
export const login = async (username: string, password: string) => {
    const request = axios.get(``,{
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

export const logout = async () => {
    const request = axios.get(``,{
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