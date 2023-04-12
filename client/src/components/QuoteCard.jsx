

export default function QuoteCard( { quote } ) {
    return(
        <div className="flex flex-col items-center min-h-[500px] 
        max-w-sm bg-zinc-800 text-white px-5 py-10 rounded-3xl">
            <img className=" max-w-[120px] object-cover aspect-square rounded-full" src={quote.img} alt="Image of person for testimonial." />
            <h1 className="font-bold text-2xl mt-2">{quote.heading}</h1>
            <h2>{quote.subheading}</h2>
            <p className="mt-4 max-w-lg text-lg font-medium max-w-[20rem] text-center">"{quote.body}"</p>
        </div>
    )
}