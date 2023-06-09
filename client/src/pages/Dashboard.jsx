// components
import NavBar from "../components/Navbar"
import DeletePortal from "../components/DeletePortal"
import QuizCard from "../components/QuizCard"

// hooks
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { useUser } from "../hooks/useUser"

import { serverAddress } from "../config"

export default function DashboardPage() {
    const navigator = useNavigate()
    const [quizzes, setQuizzes] = useState([])
    const [portalOpen, setPortalOpen] = useState(false)
    const promptedQuizDeleteId = useRef(null)
    const [isLoggedIn, user] = useUser()

    useEffect(() => {
        async function fetchData() {
            if (!isLoggedIn) {
                navigator("/login")
            }    
            
            try {
                const allQuizFetch = await fetch(`${serverAddress}/quiz/`, {
                    method: "GET",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                })

                const body = await allQuizFetch.json()
                setQuizzes(body)
            } catch (err) {
                alert("Could not get quizzes.")
                console.log(err)
            }
        }
        
       fetchData()
    }, [])
    
    // close portal, open portal when del is clicked
    const onPortalClose = () => {
        setPortalOpen(false)
        console.log("Modal closed, delete aborted.")
    }

    const promptDeleteQuiz = (id) => {
        promptedQuizDeleteId.current = id
        setPortalOpen(true)
    }

    const portalDelete = async (e) => {
        setPortalOpen(false)

        try {
            const deleteRequest = await fetch(`${serverAddress}/quiz/delete`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({id: promptedQuizDeleteId.current})
            })

            const body = await deleteRequest.json()

            if (deleteRequest.ok) {
                alert(body.message)
                location.reload() // show updated list 
            } else {
                alert(body.message)
            }
        } catch(err) {
            console.log(err)
            alert("Delete request failed to send")
        }
       
        // stop event from bubbling up
        e.stopPropagation()
    }

    if (!isLoggedIn) return null // will be redirected to login

    return (
        <>
            <NavBar />
            <div className="flex flex-col bg-slate-100 py-8 px-16 items-center h-screen">
                <p className="mb-8 font-light text-3xl text-center">Hello, {user.name}</p>
                <div className="mb-8">
                    <Link to="/quiz/create" className="bg-main p-3 rounded-xl text-white font-semibold flex justify-center 
                    gap-2 max-w-[170px] transition-colors hover:bg-main2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Create Quiz
                    </Link>
                </div>

                <h1 className="font-medium text-center">View Quizzes</h1>
                <DeletePortal open={portalOpen} closeModal={onPortalClose} onDelete={portalDelete}/>

                <div className="flex gap-4 flex-wrap items-center justify-center">
                {quizzes.map(quiz => <QuizCard key={quiz._id} deleteClick={() => promptDeleteQuiz(quiz._id)} quiz={quiz} /> )}
                </div>
            </div>
        </>
    )
}