import { Link } from "react-router-dom"

export default function HeroSection() {
    return(
        <div className="flex flex-col text-5xl items-center mx-5 mt-20 sm:mt-36">
            <h1 className="text-center text-4xl sm:text-8xl font-bold sm:mt-16 mb-8 max-w-7xl">
                <span className="text-cyan-500">Create.</span>
                <span className="text-lime-500"> Discover.</span>
                <span className="text-fuchsia-500"> Learn. </span>
                Empower classrooms with <span className="text-main">PowerQuiz.</span>
            </h1>   
            <p className="text-center text-lg sm:text-xl font-normal max-w-2xl text-slate-500">
                Join other teachers, empowering their classroom and students by creating and completing pop quizzes!    
            </p>      
            <Link to="/register" className="bg-main rounded-full py-4 px-7 mt-12 text-base font-bold text-white transition-colors hover:bg-main2">
                Get started for free
            </Link>
        </div>
    )
}