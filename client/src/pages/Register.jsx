import { Link } from "react-router-dom"

export default function RegisterPage() {
    return (<div className="flex bg-main h-screen items-center justify-center">
        <div className="bg-white flex flex-col px-8 
        box-border py-12 min-h-[600px] w-full sm:w-[450px]  rounded-2xl shadow-md">
           
            <div className="mb-8">
                <h1 className="text-2xl font-semibold">Create account</h1>
                <p className="text-md">You're one step away from changing your classroom!</p>
           </div>

            <form className="flex flex-col gap-6 mb-4 font-medium">
                <input className="h-12 px-4 border-2 border-slate-300 rounded-md "  
                type="text" placeholder="Enter Name" />
                <input className="h-12 px-4 border-2 border-slate-300 rounded-md"  
                type="email" placeholder="Enter Email" />
                <input className="h-12 px-4 border-2 border-slate-300 rounded-md"  
                type="password" placeholder="Create Password" />
                <input className="h-12 px-4 border-2 border-slate-300 rounded-md"  
                type="password" placeholder="Confirm Password" />
                <button className="bg-main rounded-md h-12
                 text-white font-semibold hover:bg-main2 transition-colors" type="submit">
                    Sign Up!
                </button>
            </form>

            <p className="font-semibold text-sm">Already have an account? <Link to="/login" className="text-main underline hover:text-main2 transition-colors">Login</Link></p>
        </div>
    </div>)
}