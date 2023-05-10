import { useState } from "react"
import NavBar from "../components/Navbar"

export default function CreateQuizPage() {
    const [isMakingQuestion, setMakingQuestion] = useState(false) // false if not making, 0 if text, 1 if multiple choice, true if starting
    const [questions, setQuestions] = useState([])

    // question creation flow

    // 1- pick text or normal question
    // 2- name question
    // 3- give options (skip if text question)
    return (
        <>
        <NavBar />

        <div className="flex items-center justify-center flex-col">
        {!isMakingQuestion && <button onClick={() => setMakingQuestion(true)} className="bg-main px-2 py-1 rounded-lg text-white hover:bg-main2 transition-colors font-medium">Add question</button>}
            
        {isMakingQuestion === true && <div className="bg-main m-1 text-lg flex flex-col gap-1 p-5 rounded-lg">
            <label className="text-white font-semibold">Type of question </label>
            <button onClick={() => setMakingQuestion(0)} className="bg-white p-1 rounded-md hover:bg-slate-100 transition-all">Text answer</button>
            <button onClick={() => setMakingQuestion(1)} className="bg-white p-1 rounded-md hover:bg-slate-100 transition-all">Multiple Choice</button>
        </div>}

        {isMakingQuestion === 0 && <div className="bg-main m-1 text-lg flex flex-col gap-1 p-5 rounded-lg">
            <label className="text-white font-semibold">Type of question </label>
            <button onClick={() => setMakingQuestion(0)} className="bg-white p-1 rounded-md hover:bg-slate-100 transition-all">Text answer</button>
            <button onClick={() => setMakingQuestion(1)} className="bg-white p-1 rounded-md hover:bg-slate-100 transition-all">Multiple Choice</button>
        </div>}

        </div>
        </>
    )
}