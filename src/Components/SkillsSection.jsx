import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Database, Wrench, Zap, Star, Sparkles } from "lucide-react"

const skills = [
  { name: "React", level: 95, category: "Frontend", icon: "⚛️" },
  { name: "JavaScript", level: 90, category: "Frontend", icon: "🟨" },
  { name: "Tailwind CSS", level: 92, category: "Frontend", icon: "🎨" },
  { name: "HTML/SCSS", level: 98, category: "Frontend", icon: "📝" },
  
  { name: "Java", level: 88, category: "Backend", icon: "☕" },
  { name: "Spring Boot", level: 85, category: "Backend", icon: "🌱" },
  { name: "Hibernate", level: 82, category: "Backend", icon: "🔄" },
  { name: "SQL", level: 90, category: "Backend", icon: "📊" },
  
  { name: "VS Code", level: 95, category: "Tools", icon: "💻" },
  { name: "Git/GitHub", level: 92, category: "Tools", icon: "🔗" },
  { name: "STS", level: 85, category: "Tools", icon: "🛠️" },
  { name: "Postman", level: 88, category: "Tools", icon: "📫" },
  { name: "Eclipse AI", level: 80, category: "Tools", icon: "🤖" },
]

const categories = [
  { id: "all", label: "All Skills", icon: Zap },
  { id: "Frontend", label: "Frontend", icon: Code },
  { id: "Backend", label: "Backend", icon: Database },
  { id: "Tools", label: "Tools", icon: Wrench },
]

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 18,
      },
    },
  }

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none"></div>
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  group relative px-5 py-2.5 rounded-full font-medium transition-all duration-300
                  flex items-center gap-2
                  ${activeCategory === category.id
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                  }
                `}
              >
                <span
                  className={`
                    absolute inset-0 rounded-full transition-all duration-300
                    ${activeCategory === category.id
                      ? "bg-primary"
                      : "bg-secondary/70 hover:bg-secondary"
                    }
                  `}
                ></span>
                <Icon className="h-4 w-4 relative z-10" />
                <span className="relative z-10">{category.label}</span>
              </button>
            )
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                {/* Card */}
                <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20">
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 bg-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Top section */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{skill.icon}</span>
                    <div className="p-1.5 rounded-lg bg-primary/10">
                      <Star className="h-3 w-3 text-primary" />
                    </div>
                  </div>

                  {/* Skill name */}
                  <h3 className="font-semibold text-lg text-foreground mb-4">{skill.name}</h3>

                  {/* Progress bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="text-primary font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: 0.2 + index * 0.03, ease: "easeOut" }}
                        className="h-full rounded-full bg-primary relative"
                      >
                        {/* Subtle shine */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 right-3">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/50 text-muted-foreground">
                      {skill.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}