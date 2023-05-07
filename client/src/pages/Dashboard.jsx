// components
import NavBar from "../components/Navbar"
import DeletePortal from "../components/DeletePortal"
import QuizCard from "../components/QuizCard"

// hooks
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { useUser } from "../hooks/useUser"

export default function DashboardPage() {
    const navigator = useNavigate()
    const [quizzes, setQuizzes] = useState([])
    const [portalOpen, setPortalOpen] = useState(false)
    const promptedQuizDeleteId = useRef(null)
    const [isLoggedIn, user] = useUser()

    /**
     *  Quiz object
     * 
     *  name
     *  responses
     *  id
     */

    useEffect(() => {
        // GET quizzes
        if (!isLoggedIn) {
            navigator("/login")
            return
        }       
    }, [])
    
    // close portal, open portal when del is clicked
    const onPortalClose = () => {
        setPortalOpen(false)
        console.log("Modal closed, delete aborted.")
    }

    const promptDeleteQuiz = (e) => {
       // promptedQuizDeleteId.current = {some sort of uid}
        setPortalOpen(true)
    }

    const portalDelete = (e) => {
        setPortalOpen(false)
        // run logic to delete the quiz
        console.log("Deleted quiz")
       
        // stop event from bubbling up
        e.stopPropagation()
    }

    return (
        <>
            <NavBar />
            <div className="flex flex-col bg-slate-100 py-8 px-16 items-center h-screen">
                <p className="mb-8 font-light text-3xl">Hello, {user.name}</p>
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
                <DeletePortal open={portalOpen} closeModal={onPortalClose} onDelete={portalDelete}/>
                
                {quizzes.map(quiz => { 
                    <QuizCard />
                })}
            </div>
        </>
    )
}