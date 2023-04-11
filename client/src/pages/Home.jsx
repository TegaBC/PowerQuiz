// components
import NavBar from "../components/Navbar"
import HeroSection from "../components/Hero"
import FeatureDisplay from "../components/FeatureDisplay"
import QuoteCard from "../components/QuoteCard"

// images for features
import imgGroup from "../images/group.png"
import imgPencil from "../images/pencil.png"
import imgStickyNote from "../images/stickynote.png"

// images for quotes
import imgMale1 from "../images/teacher.png"
import imgMale2 from "../images/teacher1.png"
import imgFemale from "../images/teacher2.png"
import CallToAction from "../components/CallToAction"

// features for component
const featureDisplay = [
    {
        headline: "Save time with automated grading!",
        info: "Simple pop quizzes can be automatically graded so students get instant feedback, and you save time marking.",
        img: imgPencil
    },
    {
        headline: "Create beautiful quizzes quickly!",
        info: "Use our simple quiz creator to whip up quizzes on the fly and send them out to your students within minutes!",
        img: imgStickyNote
    },
    {
        headline: "Get feedback from students.",
        info: "Students can give feedback right after completing their quiz, you can view that alongside analytical data at your dashboard.",
        img: imgGroup
    },
]

// quotes for component
const quotes = [
    {
        heading: "Richard",
        subheading: "Year 9 Teacher",
        body: "The automated grading feature has been a lifesaver. It saves me so much time and ensures that grading is fair and accurate. Plus it gives my students instant feedback.",
        img: imgMale1
    },
    {
        heading: "Laura",
        subheading: "Year 11 Teacher",
        body: "I love the flexibility of this quiz creator! It allows me to create quizzes with different question types like multiple choice questions and questions where text is required.",
        img: imgFemale
    },
    {
        heading: "Lucas",
        subheading: "Grade 12 Teacher",
        body: "The analytics dashboard is fantastic. It gives me valuable insights into how my students are doing and helps me tailor my lessons to their needs.",
        img: imgMale2
    },
]

// call to action object
const action = {
    heading: ["Empower Teachers.", "Inspire Students."],
    body: "Now you're already at the bottom of the page, lets sign you up to start creating your pop quizzes for your class today!"
}

export default function HomePage() {
   return(
    <>
        <NavBar />
        <HeroSection />
        <FeatureDisplay features={featureDisplay}/>
        <h1 className="text-center text-6xl font-bold mt-24">
            See what others have to say about us.
        </h1>
        <div className="flex justify-center gap-12 mt-10 mb-24 flex-wrap p-4">
            <QuoteCard quote={quotes[0]}/>
            <QuoteCard quote={quotes[1]}/>
            <QuoteCard quote={quotes[2]}/>
        </div>
        <CallToAction action={action} />
    </>
    )
}