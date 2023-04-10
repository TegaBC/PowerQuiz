import NavBar from "../components/Navbar"
import HeroSection from "../components/Hero"
import StackFeatureDisplay from "../components/StackFeatureDisplay"

const featureDisplay = [
    {
        headline: "Create beautiful quizzes quickly.",
        info: "Use our simple quiz creator to whip up quizzes on the fly within minutes!"
    },
    {
        headline: "Create beautiful quizzes quickly.",
        info: "Use our simple quiz creator to whip up quizzes on the fly within minutes!"
    },
    {
        headline: "Create beautiful quizzes quickly.",
        info: "Use our simple quiz creator to whip up quizzes on the fly within minutes!"
    },
]

export default function HomePage() {
   return(
    <>
        <NavBar />
        <HeroSection />
        <StackFeatureDisplay features={featureDisplay}/>
    </>
    )
}