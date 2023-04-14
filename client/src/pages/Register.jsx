import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { serverAddress } from "../config"

export default function RegisterPage() {
    const [serverError, setServerError] = useState("")
    const navigate = useNavigate()

    const nameField = useRef()
    const emailField = useRef()
    const passwordField = useRef()
    const confirmPasswordField = useRef()
   
    async function submitForm(e) {
        e.preventDefault()

        setServerError(false) // clear any errors

        // check for simple password mismatch, html will take care of the rest.
        if (passwordField.current.value !== confirmPasswordField.current.value) {
            confirmPasswordField.current.setCustomValidity("Passwords do not match.")
            return
        } 
        
        // submit register to server, redirect to log in page if successful or spit out error text if needed.
        try {
            const response = await fetch(`${serverAddress}/register` , {
                    method: "post",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: nameField.current.value,
                        email: emailField.current.value,
                        password: passwordField.current.value
                    })
                }
            )

            const body = await response.json()  
            response.ok ? navigate(body.redirectUrl) : setServerError(body.message)    
        } catch(err) {
            console.log(err)
        }
    }

    return (<div className="flex bg-main h-screen items-center justify-center">
        <div className="bg-white flex flex-col px-8 h-full sm:h-auto justify-center
        box-border py-12 min-h-[600px] w-full sm:w-[450px] sm:rounded-2xl shadow-md">
           
            <div className="mb-8">
                <h1 className="text-2xl font-semibold">Create account</h1>
                <p className="text-md">You're one step away from changing your classroom!</p>
           </div>

            <form onSubmit={submitForm} className="flex flex-col gap-6 mb-4 font-medium">
                <input ref={nameField} className="h-12 px-4 border-2 border-slate-300 rounded-md" 
                type="text" placeholder="Enter Name" minLength={3} maxLength={50} required/>
                
                <input ref={emailField} className="h-12 px-4 border-2 border-slate-300 rounded-md"  
                type="email" placeholder="Enter Email" required/>

                <input ref={passwordField} className="h-12 px-4 border-2 border-slate-300 rounded-md"  
                type="password" placeholder="Create Password" minLength={8} maxLength={128} required/>

                {/** When this input is typed in, clear the validity 
                 * so that they form can be submitted, validity will be checked before submission*/}
                <input ref={confirmPasswordField} onChange={() => { confirmPasswordField.current.setCustomValidity("")}} 
                className="h-12 px-4 border-2 border-slate-300 rounded-md"  
                type="password" placeholder="Confirm Password" minLength={8} required/>
                
                {serverError && <span className="text-red-500">{"Error: " + serverError}</span>}

                <button className="bg-main rounded-md h-12
                 text-white font-semibold hover:bg-main2 transition-colors" type="submit">
                    Sign Up!
                </button>
            </form>

            <p className="font-semibold text-sm">Already have an account? <Link to="/login" className="text-main underline hover:text-main2 transition-colors">Login</Link></p>
        </div>
    </div>)
}