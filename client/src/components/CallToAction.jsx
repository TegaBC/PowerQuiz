import { Link } from "react-router-dom";

// Renders either a button with a function or a link tag to an internal domain

function renderAction(actionInfo, action) {
    if (typeof action === "function") {
        return (<button onClick={action} className="bg-main rounded-full py-5 px-16 text-white font-semibold transition-colors hover:bg-main2">
            {actionInfo.buttonText}
            </button>
        )
    } else {
        return (
            <Link to={action} className="bg-main rounded-full py-5 px-16 text-white font-semibold transition-colors hover:bg-main2">
                {actionInfo.buttonText}
            </Link>
        )
    }
}

export default function CallToAction( { actionInfo, action} ) {
    return(
        <div className="flex flex-wrap justify-center gap-20 items-start mb-10">
            <h1 className="text-6xl font-bold text-center">{actionInfo.heading[0]}<br /> {actionInfo.heading[1]}</h1>
            <div className="flex flex-col items-center max-w-lg gap-8">
                <p className="text-xl font-medium text-center">{actionInfo.body}</p>
                { renderAction(actionInfo, action) } 
            </div>
        </div>
    )
}