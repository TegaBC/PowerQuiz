import { useEffect, useRef, useState } from "react"
import { serverAddress } from "../config"
import NavBar from "../components/Navbar"
import OptionForm from "../components/QuizBuilder/OptionForm"
import TextForm from "../components/QuizBuilder/TextForm"
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom"


export default function CreateQuizPage() {
    // MODE: 1 = choice, 2 = text
    const quizName = useRef()
    const [questions, setQuestions] = useState([])
    const [creatingNewQuestion, setCreatingNewQuestion] = useState(false)
    const [newQuestionMode, setNewQuestionMode] = useState(null)
    const navigator = useNavigate()
    
    // Prompts the user if they want a choice or text question to be added
    const promptQuestionType = (mode) => {
        setCreatingNewQuestion(false)
        setNewQuestionMode(mode)
    }

    // given to question form to trash it and go back.
    const trashNewQuestion = () => {
        setNewQuestionMode(false)
    }

    // trash an existing question
    const trashExistingQuestion = (index) => {
        const currentQuestions = [...questions]
        currentQuestions.splice(index, 1)
        setQuestions(currentQuestions)
    }

    // finish creating a new question
    const finalizeNewQuestion = (payload) => {
        setNewQuestionMode(false)
        setQuestions([...questions, payload])
    }

    // submit quiz to server
    const submitQuiz = async () => {
        // send along cookie and questions to the server, server should handle auth
        const quizPayload = {name: quizName.current.value || quizName.current.placeholder, 
            questions: questions}
        
            try {
                const postRequest = await fetch(`${serverAddress}/quiz/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem("token")}`
                    },
                body: JSON.stringify(quizPayload),
                });
 
                const body = await postRequest.json()

                if (postRequest.ok) {
                    alert(body.message)
                    navigator("/dashboard")
                } else {
                    alert(body.message)
                }
            } catch (e) {
                alert("Error, please try again")
            }
    }

    return (
        <>
        <NavBar />
        <div className="h-screen">
            <div className="flex justify-center">
                <div className="flex items-center justify-center flex-col bg-slate-100 max-w-4xl rounded-md py-6">
                    
                    <input ref={quizName} className="mb-4 p-1 text-center text-4xl text-black placeholder-slate-500 bg-transparent"  
                    type="text" placeholder="Untitled Quiz"/>
                    
                    {questions.map((payload, index) => {
                        return <div key={index} 
                        className="flex flex-col gap-2 bg-slate-200 p-2 rounded-lg w-[75%] m-4">
                        <span className="flex justify-evenly mb-2 max-w-xs">
                                <h1 className="text-xl font-normal">{payload.question}</h1>      
                        </span>

                        {payload.type == "option" ? payload.options.map((option, index) => {
                                return (
                                    <span key={index} className="flex gap-2"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLineap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
                                        </svg>
                                        {option} 
                                    </span>
                                )
                        }) :
                        <div className="bg-slate-300 min-h-[70px] rounded-lg text-slate-400 italic p-2">Answer goes here...</div>
                        }

                        <div className="mt-1 flex justify-around">
                                <button onClick={() => trashExistingQuestion(index)}  className="hover:text-red-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </button>
                        </div>
                        </div>
                    })}

                    {newQuestionMode === 1 && <OptionForm binQuestion={trashNewQuestion} finalizeQuestion={finalizeNewQuestion} />}
                    {newQuestionMode === 2 && <TextForm finalizeQuestion={finalizeNewQuestion} binQuestion={trashNewQuestion}/>}

                    {!creatingNewQuestion ? 
                    <div className="flex gap-2">
                        <button onClick={() => setCreatingNewQuestion(true)} className="mt-4 bg-main p-2 rounded-xl 
                        text-white font-medium text-lg hover:bg-main2">New Question</button> 
                        <button onClick={submitQuiz} className="mt-4 bg-green-400 p-2 rounded-xl 
                        text-white font-medium text-lg hover:bg-green-600">Finish Quiz</button> 
                    </div>
                    : 
                    <div className="flex flex-col gap-2 mt-4 p-4 text-white font-medium text-lg border-slate-200 border-4 rounded-xl">
                        <span className="text-black">Type of question</span>
                        <button onClick={() => promptQuestionType(1)} className="bg-main p-2 rounded-md">Choice</button>
                        <button onClick={() => promptQuestionType(2)} className="bg-main p-2 rounded-md">Text</button>
                    </div>}
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}