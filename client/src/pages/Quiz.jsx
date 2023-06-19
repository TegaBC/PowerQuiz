import Navbar from "../components/Navbar"
import Footer from  "../components/Footer"
import { useEffect } from "react"
import { Await, useParams } from "react-router-dom"
import { serverAddress } from "../config"

export default function QuizPage() {
    const { id } = useParams()

    useEffect(() => {
        //TODO: Finish function to get quiz from the server
        async function fetchQuiz() {
            try {
                const getQuizFetch = await fetch(`${serverAddress}/quiz/fromId`)
                const body = await getQuizFetch.json()

                if(getQuizFetch.ok) {
                    console.log("Quiz details: ", body.quiz)
                    

                } else { 
                    alert(body.message)
                }
            } catch (err) {
                alert("Failed to get quiz")
                console.log(err)
            }
        }

        fetchQuiz()
    }, [])
    
    return <>
        <Navbar />
        <div className="h-screen">

        </div>
        <Footer />
    </>
}