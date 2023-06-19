import { useState } from "react"

export default function ChoiceQuestion( { question, setAnswer, id } ) {
    const [chosenAnswer, setChosenAnswer] = useState(null)

    // The chosen answer is the same index as the option in the options array
    function selectAnswer(index) {
        setChosenAnswer(index) 
        setAnswer(id, index)
    }

    return (
        <div className="flex flex-col items-center justify-center gap-2 bg-slate-200 pt-2 rounded-sm min-w-[300px] m-4">
            <h1 className="text-xl text-center">{question.question}</h1> 
            <div className="bg-slate-300 min-h-[100px] w-full p-1 rounded-sm">
                {question.options.map((option, index) => {
                    return <span onClick={() => selectAnswer(index)} key={index} className="flex gap-2 hover:cursor-pointer items-center"> 
                                {chosenAnswer === index ?  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg> 
                                : 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
                                    </svg>
                                }
                        <span className="text-lg">{option}</span>
                    </span>
                })}
            </div>  
        </div>
    )
}