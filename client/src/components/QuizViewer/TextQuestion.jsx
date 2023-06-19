
export default function TextQuestion( { question, setAnswer, id } ) {
    return (
        <div className="flex flex-col items-center justify-center gap-2 bg-slate-200 pt-2 rounded-sm min-w-[300px] m-4">
            <h1 className="text-xl text-center">{question.question}</h1> 
            <textarea onChange={e => setAnswer(id, e.target.value)} className="bg-slate-300 min-h-[100px] w-full resize-none p-1 rounded-sm" placeholder="Answer here..." type="text" />  
        </div>
    )
} 