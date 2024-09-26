import {z} from 'zod';

export const registeruser = z.object({
    username: z.string().max(20).nonempty('Username is empty'),
    phone: z.string().max(11).nonempty('Phone is empty'),
    password: z.string().max(20).nonempty('Password is empty'),
    confirm: z.string().max(20).nonempty('Confirm your password')
    
})

.refine((data) => data.password === data.confirm, {
  message: 'Passwords do not match',
  path: ['confirm'],
});

export type Register = z.infer<typeof registeruser>;
