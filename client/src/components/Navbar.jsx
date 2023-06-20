import { useUser } from "../hooks/useUser"

import { Link } from "react-router-dom"
import Logo from "../assets/logo.png"
import { useState } from "react"


export default function NavBar() {
    const [isLoggedIn, user] = useUser()
    const [navOpen, setNavOpen] = useState(false)

    const navClassList = "bg-slate-200 w-full py-5 sm:flex sm:py-0 sm:w-auto sm:bg-white sm:flex-row flex-col justify-evenly items-center gap-5 font-semibold"

    return (
        <div className="flex flex-col sm:flex-row min-h-[4rem] m-2 justify-around items-center">
            <div className="flex justify-around items-center w-full sm:block sm:w-auto">
                <Link to="/">
                    <img src={Logo} alt="PowerQuiz logo" className="h-16" />
                </Link>
                <span className="block sm:hidden" onClick={() => {setNavOpen(!navOpen)}}>
                    <svg className="w-6 h-6 sm:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </span>
            </div>
            
            <div className={`${navClassList} ${navOpen ? "flex" : "hidden"}`}>
                {isLoggedIn ?  
                    <>
                        <Link to="/dashboard" className="text-slate-500 hover:text-black transition-colors">Dashboard</Link>
                    </> 
                    :
                    <>
                        <Link to="/login" className="text-slate-500 hover:text-black transition-colors">Login</Link>
                        <Link to="/register" className="text-slate-500 sm:bg-main sm:rounded-full sm:py-3 sm:px-4 sm:text-white transition-colors hover:bg-main2">Get Started</Link>
                    </> 
                }
            </div> 
               
           
        </div>
    )
}
