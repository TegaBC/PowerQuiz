
function createFeatures(feature) {
    return (
        <div className="flex items-top gap-3">
            {/* Add in image here for the icons */}
            <div className="flex flex-col max-w-md">
                <h1 className="font-semibold text-xl">{feature.headline}</h1>
                <p>{feature.info}</p>
            </div>  
       </div>  
    )
}

export default function StackFeatureDisplay( { features } ) {
    return (
        <div className="flex flex-col gap-5 items-center mt-32">
            {features.map(createFeatures)}
        </div>
    )
}