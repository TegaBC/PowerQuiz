

export default function LoginPage() {
    return (
    <div className="flex bg-main h-screen items-center justify-center">
        <div className="bg-white flex flex-col px-8 
        box-border py-12 w-full sm:w-[450px]  rounded-2xl shadow-md">
        
            <div className="mb-10">
                <h1 className="text-2xl font-semibold">Login</h1>
                <p className="text-md">Welcome back, we missed you.</p>
        </div>

            <form className="flex flex-col gap-6 mb-4 font-medium">
                <input className="h-12 px-4 border-2 border-slate-300 rounded-md"  
                type="email" placeholder="Enter Email" />
                <input className="h-12 px-4 border-2 border-slate-300 rounded-md"  
                type="password" placeholder="Enter Password" />
                <button className="bg-main rounded-md h-12
                text-white font-semibold hover:bg-main2 transition-colors" type="submit">
                    Login
                </button>
            </form>

        </div>
    </div>
    )
}