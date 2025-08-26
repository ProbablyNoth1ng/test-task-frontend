import { useNavigate } from "react-router-dom"
import type { RootState } from '../../../store/store';
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../store/features/userLogin/userLoginSlice";
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";

export const Nav = () => {
    const [isLogged, setIsLogged] = useState(() => Cookies.get('logged') === 'true')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userLogin = useSelector((state: RootState) => state.userLogin)

    useEffect(() => {
    setIsLogged(Cookies.get('logged') === 'true')
    }, [])

    const handleLogout = () => {
        Cookies.remove('logged');
        setIsLogged(false)
        dispatch(login(false))
    }

    return (
        <>
             <nav className="landing-nav  bg-[#172234] py-[20px]">
                <div className="container flex justify-end mx-auto">
                    {
                        userLogin.value || isLogged ?
                        <button onClick={handleLogout} className="py-2 px-15 text-[#B29F7E] border-[#B29F7E] border-2 rounded-md font-bold hover:bg-[#B29F7E] hover:text-white text-[16px]">Logout</button>
                        :
                        <button onClick={() => navigate('/login')} className="py-2 px-15 text-[#B29F7E] border-[#B29F7E] border-2 rounded-md font-bold hover:bg-[#B29F7E] hover:text-white text-[16px]">Log In</button>
                    }
                    
                    <button onClick={() => navigate('/signup')} className="ml-2 py-2 px-15 text-white rounded-md bg-[#B29F7E] font-bold hover:bg-transparent hover:border-[#B29F7E] hover:border-2 text-[16px]">Sign Up</button>  
                </div>
            </nav>
        </>
    )
}