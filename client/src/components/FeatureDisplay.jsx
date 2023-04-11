
function createFeatures(feature) {
    return (
        <div className="flex items-center gap-10 h-30">
            {/* Add in image here for the icons */}
            <img className="max-h-24"  src={feature.img} alt="Feature Icon" />
            <div className="flex flex-col max-w-md justify-center">
                <h1 className="font-bold text-2xl">{feature.headline}</h1>
                <p className="font-medium">{feature.info}</p>
            </div>  
       </div>  
    )
}

export default function FeatureDisplay ( { features } ) {
    return (
        <div className="flex justify-center mt-24 mx-8 ">
            <div className="flex gap-10 max-w-[1400px] 
            items-center justify-center flex-wrap">
            {features.map(createFeatures)}
            </div>
        </div>
    )
}