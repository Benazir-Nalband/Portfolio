import { AboutSection } from "../Components/AboutMe"
import { ContactSection } from "../Components/ContactUs"
import { HeroSection } from "../Components/HeroSection"
import { Navbar } from "../Components/Navbar"
import ProjectSec, { ProjectSection1 } from "../Components/Project"

import { SkillsSection } from "../Components/SkillsSection"
import { StarBackground } from "../Components/StarBackground"
import { ThemeToggle } from "../Components/ThemeToggle"

export const Home=()=>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        
        <ThemeToggle/>
        <StarBackground/>
       <Navbar/>
       <main>
        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
    <ProjectSection1/>
    <ContactSection/>
       </main>
       {/* <Footer/> */}
      
    </div>
}