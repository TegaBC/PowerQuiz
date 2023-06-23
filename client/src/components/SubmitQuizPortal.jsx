import { useRef } from "react"
import ReactDom from "react-dom"

export default function SubmitQuizPortal( { open, closeModal, action } ) {
    if (!open) return null
    
    const name = useRef()
    const feedback = useRef()

    function actionButtonClick() {
        const quizFeedbackPayload = {
            feedback: feedback.current.value,
            name: name.current.value
        }

        action(quizFeedbackPayload)
    }

    return ReactDom.createPortal(
        <div onClick={closeModal} className="mouse fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-60 flex justify-center items-center">
            <svg className="cursor-pointer fixed top-20 right-20 w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <div className="min-h-[200px] w-[300px] bg-white p-8 font-medium flex flex-col gap-2 rounded-md justify-between">
                <div>
                    <label>Enter your name</label>
                    <input ref={name} type="text" className="bg-slate-100 p-1 rounded-md w-full" onClick={e => e.stopPropagation()}/>
                </div>
                <div>
                    <label>Feedback</label>
                    <textarea ref={feedback} placeholder="Leave feedback about the quiz for your teacher." type="text" className="bg-slate-100 px-1 min-h-[100px] rounded-md resize-none w-full" onClick={e => e.stopPropagation()}/>
                </div>
                <button onClick={actionButtonClick} className="bg-green-500 py-2 rounded-xl hover:bg-green-600 transition-colors text-white">
                    Complete Quiz
                </button>
            </div>
        </div>, document.getElementById("portal"))
}
