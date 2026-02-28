import { Code, User, Briefcase, Download, Monitor, Database, Server, Layers, Zap } from "lucide-react"
import { useState } from "react"

export const AboutSection = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null)

    const techCategories = [
        {
            icon: Monitor,
            title: "Frontend",
            skills: [
                { name: "React", icon: "⚛️" },
                { name: "JavaScript", icon: "🟨" },
                { name: "Tailwind CSS", icon: "🎨" },
                { name: "HTML/SCSS", icon: "📝" }
            ]
        },
        {
            icon: Server,
            title: "Backend",
            skills: [
                { name: "Java", icon: "☕" },
                { name: "Spring Boot", icon: "🌱" },
                { name: "Hibernate", icon: "🔄" }
            ]
        },
        {
            icon: Database,
            title: "Database",
            skills: [
                { name: "SQL", icon: "📊" },
                { name: "MySQL", icon: "🐬" },
                { name: "PostgreSQL", icon: "🐘" }
            ]
        },
        {
            icon: Layers,
            title: "Tools & IDEs",
            skills: [
                { name: "VS Code", icon: "💻" },
                { name: "STS", icon: "🛠️" },
                { name: "Postman", icon: "📫" },
                { name: "Eclipse AI", icon: "🤖" },
                { name: "Git", icon: "🔗" }
            ]
        }
    ]

    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="text-primary">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full"></div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Column - Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">
                                Passionate Web Developer & Software Developer
                            </h3>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    I'm <span className="text-primary font-medium">Khushi Nalband</span>, 
                                    a dedicated and result-oriented Web Developer at <span className="font-medium">Nebula Technology</span>.
                                </p>
                                <p>
                                    With expertise in <span className="font-medium">HTML, SCSS, Tailwind, 
                                    JavaScript, React, Java, Hibernate, Spring Boot, and SQL</span>, I craft 
                                    scalable, efficient, and user-centric applications.
                                </p>
                                <p>
                                    Passionate about <span className="font-medium">problem-solving 
                                    and clean coding practices</span>, I constantly sharpen my skills to become 
                                    a versatile developer ready to deliver impactful solutions.
                                </p>
                            </div>
                        </div>

                        {/* Tech Stack Grid */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold flex items-center gap-2">
                                <Zap className="h-5 w-5 text-primary" />
                                Tech Stack
                            </h4>
                            <div className="grid grid-cols-2 gap-4">
                                {techCategories.map((category) => (
                                    <div 
                                        key={category.title}
                                        className="rounded-xl border border-border/50 p-4 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="p-1.5 rounded-lg bg-primary/10">
                                                <category.icon className="h-4 w-4 text-primary" />
                                            </div>
                                            <span className="font-medium text-sm">{category.title}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {category.skills.map((skill) => (
                                                <span
                                                    key={skill.name}
                                                    onMouseEnter={() => setHoveredSkill(skill.name)}
                                                    onMouseLeave={() => setHoveredSkill(null)}
                                                    className={`px-2 py-1 text-xs rounded-md transition-all duration-300 cursor-default ${
                                                        hoveredSkill === skill.name
                                                            ? "bg-primary text-primary-foreground"
                                                            : "bg-secondary/50 text-muted-foreground"
                                                    }`}
                                                >
                                                    {skill.icon} {skill.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Info Cards */}
                    <div className="space-y-5">
                        {/* Card 1 */}
                        <div className="rounded-xl border border-border/50 p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="p-2.5 rounded-lg bg-primary/10">
                                    <Code className="h-5 w-5 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold mb-1.5">Frontend & Backend Development</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Proficient in building responsive and dynamic web applications
                                        using modern technologies and best practices.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-xl border border-border/50 p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="p-2.5 rounded-lg bg-primary/10">
                                    <User className="h-5 w-5 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold mb-1.5">User-Centric Design</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Focused on creating intuitive and engaging user experiences 
                                        with a keen eye for design and usability.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="rounded-xl border border-border/50 p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="p-2.5 rounded-lg bg-primary/10">
                                    <Briefcase className="h-5 w-5 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold mb-1.5">Project Management</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Experienced in managing projects from conception to deployment,
                                        ensuring timely delivery and quality standards.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Buttons - Below Project Management */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <a href="#contact" className="cosmic-button text-center flex-1">
                                Get In Touch
                            </a>
                            <a
                                href="/Benazir Resume.docx"
                                download="Khushi_Resume.docx"
                                className="px-6 py-3 rounded-full border border-primary text-primary 
                                hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2 flex-1"
                            >
                                <Download className="h-4 w-4" />
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}