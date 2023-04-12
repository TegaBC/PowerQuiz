import { useRef, useState } from "react"

export default function LoginPage() {
    const email = useRef()
    const password = useRef()

    function onSubmit(e) {
        e.preventDefault()
        
        // send login to server
    }
    
    return (
    <div className="flex bg-main h-screen items-center justify-center">
        <div className="bg-white h-full sm:h-auto flex flex-col px-8 justify-center
        box-border py-12 w-full sm:w-[450px] sm:rounded-xl shadow-md">
        
            <div className="mb-10">
                <h1 className="text-2xl font-semibold">Login</h1>
                <p className="text-md">Welcome back, we missed you.</p>
        </div>

            <form onSubmit={onSubmit} className="flex flex-col gap-6 mb-4 font-medium">
                <input ref={email} className="h-12 px-4 border-2 border-slate-300 rounded-md"  
                type="email" placeholder="Enter Email" required/>

                <input ref={password} className="h-12 px-4 border-2 border-slate-300 rounded-md"  
                type="password" placeholder="Enter Password" required/>
                
                <button className="bg-main rounded-md h-12
                text-white font-semibold hover:bg-main2 transition-colors" type="submit">
                    Login
                </button>
            </form>

        </div>
    </div>
    )
}