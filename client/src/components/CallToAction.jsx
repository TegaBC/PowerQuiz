export default function CallToAction( { action, onButtonClick } ) {
    return(
        <div className="flex flex-wrap justify-center gap-20 items-start mb-10">
            <h1 className="text-6xl font-bold">{action.heading[0]}<br /> {action.heading[1]}</h1>
            <div className="flex flex-col items-center max-w-lg gap-8">
                <p className="text-xl font-medium text-center">{action.body}</p>
                <button className="bg-main text-white font-semibold h-16 py-2 px-6 rounded-full w-1/2">Sign Up for free</button> 
            </div>
        </div>
    )
}