import axios from 'axios'
import './index.css'
const API_URL = import.meta.env.VITE_BACKEND_URL

import { useNavigate } from 'react-router-dom';
export const Main = () => {
    const navigate = useNavigate()
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const data = {
            email: formData.get('email'),
            password: formData.get('password'),
        };  

        try {
            const res = await axios.post(`${API_URL}/signup`, data);
            
            console.log('Register success:', res.data);
            navigate('/login')
        } catch (err) {
            console.error('Login failed:', err);
        }
    };


    return (
        <>
            <main className="login-form flex justify-end"  >
                <form onSubmit={handleSubmit} className='login bg-white w-[700px] flex  justify-center min-h-screen flex-col px-[20px] md:px-[120px]'>
             
                        <h6 className='text-[28px] pb-3 font-bold'>Registration</h6>

                        <label htmlFor="email" className='text-[14px] pb-1 font-bold' >Email</label>
                        <input type="email" id="email" name="email" placeholder='Email' className='text-color-[#172234] bg-[#E0E0E0] px-5 py-3 w-full rounded-sm'/>

                        <label htmlFor="password" className='text-[14px] pb-1 font-bold pt-5' >Password</label>
                        <input type="password" id="password" name="password" placeholder='Password' className='text-color-[#172234] bg-[#E0E0E0] px-5 py-3 w-full rounded-sm'/>

                        <div className='forgot pt-2 flex justify-end'>
                            <a href='#' className='text-[#B29F7E] font-semibold'>Forgot password?</a>
                        </div>
        
                        <button type='submit' className=" mt-7 py-3 w-full text-white rounded-md bg-[#B29F7E] font-bold cursor-pointer hover:border-black hover:border-2  text-[16px] leading-[22px]">Sign up</button>  
                 
                        <div className='font-semibold flex justify-center pt-2'>Don’t have account? <a href="#" className='text-[#B29F7E] '>&nbsp; Sign Up</a> </div>
                    
                   

                </form>
            </main>
        </>
    )
}