import { Link } from "react-router-dom"
import Logo from "../assets/logo.png"

export default function NavBar() {
    return (
        <div className="flex h-16 m-2 justify-around items-center">
            <img src={Logo} alt="PowerQuiz logo" className="h-16" />
            <svg className="w-6 h-6 sm:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            <div className="hidden sm:flex justify-evenly gap-5 font-semibold max-h-8 items-center">
              
                <Link to="/login" className="text-slate-500 hover:text-black transition-colors">Login</Link>
                <Link to="/register" className="bg-main rounded-full py-3 px-4 text-white transition-colors hover:bg-main2">Get Started</Link>
            </div>
        </div>
    )
}
