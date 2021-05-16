import React from "react"
import Header from "./views/header/Header"
import HeroSection from "./views/hero/HeroSection"
import About from "./views/about/About"
import Fact from "./views/fact/Fact"
import Skill from "./views/skill/Skill"
import Resume from "./views/resume/Resume"
import Portfolio from "./views/portfolio/Portfolio"
import Service from "./views/service/Service"
import Testimonials from "./views/testimonials/Testimonials"
import Contact from "./views/contact/Contact"
import Footer from "./views/footer/Footer"
import Certification from "./views/certification/Certification"
function App() {
    return (<div>
        <Header />
        <HeroSection />
        <main id="main">
        <Skill />
        <About />
        <Resume />
        <Certification />
        {/* <Portfolio /> */}
        {/* <Service /> */}
        {/* <Testimonials /> */}
        {/* <Fact /> */}
        <Contact />
        <Footer />
        </main>
    </div>)
}

export default App