import { useRef, useState } from "react"

export default function OptionForm( {binQuestion, finalizeQuestion} ) {
    const [options, setOptions] = useState(
        ["Option 1" , "Option 2"]
    )
    const [correctAnswer, setCorrectAnswer] = useState(null)
    const questionName = useRef()

    // Creates a new basic option
    const addNewOption = () => {
        const optionCount = options.length
        setOptions([...options, `Option ${optionCount + 1}`])
    }
    
    // Updates option to target
    const changeOption = (e, index) => {
        const newOptions = [...options]
        newOptions[index] = e.target.value
        setOptions(newOptions)
    }

    // Gets the question payload and uses callback function
    const getQuestion = () => {
        if (correctAnswer === null) {
            alert("Option questions require an answer, check the box of the correct answer")
            return
        } 

        const payload = {
            answer: correctAnswer,
            question: questionName.current.value || questionName.current.placeholder,
            options: options,
            type: "option"
        }
        finalizeQuestion(payload)
    }

    return (
    <form className="bg-slate-200 p-3 rounded-xl">
        <input ref={questionName} className="mb-3 p-1 text-xl text-black placeholder-slate-500 bg-slate-300 rounded-md"  
                type="text" placeholder="Question"/>
       
        <div className=" flex flex-col gap-3">
            {options.map((option, index) => {
                return (
                    <div key={index} className="flex items-center gap-2"> 
                       <button onClick={() => setCorrectAnswer(index)} type="button">
                            {correctAnswer === index ? 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
                                </svg> 
                            }
                       </button>

                        <input onChange={(e) => changeOption(e, index)} className="p-1 text-md text-black placeholder-slate-500 bg-slate-300 rounded-md"  
                        type="text" placeholder={option}/>
                    </div>
                )
            })}
        </div>
        
        <div className="flex items-center  mt-6 justify-between">
            <button type="button" onClick={addNewOption} className="hover:text-blue-500 flex gap-2 font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>

            <button type="button" onClick={getQuestion} className="hover:text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLineJoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
            </button>

            <button type="button" className="hover:text-red-500" onClick={binQuestion}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </button>
        </div>
    </form>
   )
}