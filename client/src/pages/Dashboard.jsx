import { Link } from "react-router-dom"
import NavBar from "../components/Navbar"
import BackgroundImage from "../images/backgroundquiz.png"
import { useEffect } from "react"

export default function DashboardPage() {
    useEffect(() => {
        // GET quizzes
        
        /* 
            If no cookie gets sent along, send back unauthorized and redirect to login page and
            If cookie is not valid then return and clear cookie, then redirect to login page

            If auth, then return quizzes to user.
        */
        
    }, [])
    
    return (
        <>
            <NavBar />
            <div className="flex flex-col bg-slate-100 py-8 px-16 items-center h-screen">
                
                <p className="mb-8 font-light text-3xl">Hello, Tega.</p>

                <div className="mb-8">
                    <Link className="bg-main p-3 rounded-xl text-white font-semibold flex justify-center 
                    gap-2 max-w-[170px] transition-colors hover:bg-main2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Create Quiz
                    </Link>
                </div>

                <h1 className="font-medium">View Quizzes</h1>

                <div className="mt-4 flex flex-wrap gap-8">
                    <Link className="flex flex-col min-w-xs rounded-xl border-2 
                    min-h-[230px] min-w-[200px] overflow-hidden border-slate-300 hover:border-slate-700 transition-colors">
                        <div className="bg-main h-[60%] w-60 overflow-clip">
                        <img className="h-full w-full object-cover" src={BackgroundImage} alt="" />

                        </div>
                        <div className="flex bg-white flex-grow items-center justify-between pl-4 pr-8">
                            <div className=" flex flex-col justify-center">
                                <h1 className="font-medium">1999 Quiz</h1>
                                <p className="text-sm">22 Responses</p>
                            </div>
                            <button className="transition-colors hover:text-red-500" href="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}