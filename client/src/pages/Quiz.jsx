import Navbar from "../components/Navbar"
import Footer from  "../components/Footer"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { serverAddress } from "../config"
import TextQuestion from "../components/QuizViewer/TextQuestion"
import ChoiceQuestion from "../components/QuizViewer/ChoiceQuestion"
import SubmitQuizPortal from "../components/SubmitQuizPortal"

export default function QuizPage() {
    const { id } = useParams()
    const [quizName, setQuizName] = useState("")
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([])
    const [portalOpen, setPortalOpen] = useState(false)
    const navigator = useNavigate()

    useEffect(() => {
        //TODO: Finish function to get quiz from the server
        async function fetchQuiz() {
            try {
                const getQuizFetch = await fetch(`${serverAddress}/quiz/${id}`)
                const body = await getQuizFetch.json()

                if(getQuizFetch.ok) {
                    console.log("Quiz details: ", body.quiz)
                    setQuizName(body.name)
                    setQuestions(body.quiz)
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
    
    const setClientAnswer = (index, answer) => {
        const allAnswers = [...answers]
        allAnswers[index] = answer // answer index matches the question index
        setAnswers(allAnswers)
    }

    // Portal settings
    const onPortalClose = () => {
        setPortalOpen(false)
    }

    const submitQuiz = async (quizPayload) => {
        setPortalOpen(false)

        quizPayload.answers = answers // add answers and id to payload before sending to the server
        quizPayload.id = id

        try {
            const submitRequest = await fetch(`${serverAddress}/quiz/submit`, {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(quizPayload)
            })

            const body = await submitRequest.json()

            if (submitRequest.ok) {
                alert("Quiz completed!")
                navigator("/")
            } else {
                alert(body.message)
            }
        } catch (err) {
            alert(err)
        }
    }

    return <>
        <Navbar />
        <div className="h-screen">
            <div className="flex justify-center">
                <div className="flex items-center justify-center flex-col bg-slate-100 max-w-4xl rounded-md py-6">
                    
                    <h1 className="px-6 text-center text-4xl text-black bg-transparent min-w-[300px]">{quizName}</h1>
                    
                    <div>
                        {questions.map((question, index) => {
                            if (question.type === "text") {
                                // render text question
                                return <TextQuestion question={question} key={index} id={index} setAnswer={setClientAnswer}/>
                            } else {
                                // render choice question
                                return <ChoiceQuestion question={question} key={index} id={index} setAnswer={setClientAnswer}/>
                            }
                        })}
                    </div>

                    <div>
                        <button onClick={() => setPortalOpen(true)} className="mt-4 bg-green-400 p-2 rounded-xl 
                        text-white font-medium text-lg hover:bg-green-600">Finish Quiz</button> 
                    </div>
                    <SubmitQuizPortal open={portalOpen} closeModal={onPortalClose} action={submitQuiz} />
                </div>
            </div>
        </div>
        <Footer />
    </>
}