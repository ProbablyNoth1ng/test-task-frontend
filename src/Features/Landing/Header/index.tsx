import { useNavigate } from 'react-router-dom'
import './index.css'


export const Header = () => {
    const navigate = useNavigate()
    return (
        <>
            <header className="landing-header   ">
                <div className="text-container container text-center ">
                    <h2 className="font-bold text-white text-[25px] sm:text-[40px] md:text-[48px] lg:text-[64px]">The chemical  negatively charged</h2>
                    <p className="font-normal  text-white max-w-[1000px] mx-auto mt-2 text-[18px] lg:text-[24px]">Numerous calculations predict, and experiments confirm, that the force field reflects the beam, while the mass defect is not formed. The chemical compound is negatively charged. Twhile the mass defect is </p>
                    <button onClick={() => navigate('/login')} className="font-bold border border-white text-white py-2 px-5 rounded-lg mt-5  hover:bg-white hover:text-black">Get Started</button>
                </div>
            </header>
        </>
    )
}