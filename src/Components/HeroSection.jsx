import { ArrowDown } from "lucide-react"
import { useState } from "react"
import khushiImage from "../assets/khushi.png"

export const HeroSection = () => {
    const [imageLoaded, setImageLoaded] = useState(false)

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
            {/* Background gradient orbs */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-delay"></div>

            <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16 z-10">
                {/* Left Side - Image */}
                <div className="flex-1 flex justify-center md:justify-start order-1 md:order-1">
                    <div className="relative">
                        {/* Animated rings */}
                        <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-spin-slow" style={{ transform: 'scale(1.2)' }}></div>
                        <div className="absolute inset-0 border border-primary/20 rounded-full animate-spin-reverse" style={{ transform: 'scale(1.4)' }}></div>
                        
                        {/* Glow */}
                        <div className="absolute inset-0 bg-primary/15 rounded-full blur-2xl animate-pulse"></div>
                        
                        {/* Image container */}
                        <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl transition-all duration-1000 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                            <img
                                src={khushiImage}
                                alt="Khushi"
                                className="w-full h-full object-cover"
                                onLoad={() => setImageLoaded(true)}
                            />
                        </div>
                        
                        {/* Floating badges */}
                        <div className="absolute -top-6 -right-6 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-sm font-medium animate-bounce">
                            Developer 💻
                        </div>
                        <div className="absolute -bottom-4 -left-6 px-4 py-2 bg-primary/15 backdrop-blur-sm rounded-full text-sm font-medium animate-bounce" style={{ animationDelay: '0.5s' }}>
                            React & Java 🌟
                        </div>
                    </div>
                </div>

                {/* Right Side - Text */}
                <div className="flex-1 text-center md:text-left order-2 md:order-2 space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'M</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Khushi</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Nalband</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3 leading-relaxed">
                        A Passionate Developer shaping ideas with Java & React.
                        I build impactful, scalable, and modern web solutions.
                        Driven by curiosity, fueled by innovation.
                    </p>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button inline-block">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-6 w-8 text-primary"></ArrowDown>
            </div>
        </section>
    )
}