import {z} from 'zod';

export const registeruser = z.object({
    username: z.string().max(20).nonempty('Username is empty'),
    phonenumber: z.string().max(11).nonempty('Phone is empty'),
    password: z.string().max(20).nonempty('Password is empty'),
    confirm: z.string().max(20).nonempty('Confirm your password').optional(),
    referral: z.string()
    
})



export const payout = z.object({
  paymentmethod: z.string().nonempty('Please select a payment method'),
  accountname: z.string().nonempty('Please enter your account name'),
  accountnumber: z.string().nonempty('Please enter your account number'),
  payoutvalue: z.number()

})

export type Register = z.infer<typeof registeruser>;
export type RequestPayout = z.infer<typeof payout>
