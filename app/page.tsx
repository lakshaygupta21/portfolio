'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Palette,
  Cpu,
  Globe,
  Layers,
  ArrowRight,
  Zap
} from "lucide-react";
interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  images?: string[];
}

const PROJECTS: Project[] = [
  {
    title: "Medpho - Healthcare Platform",
    description: "Architected and implemented the entire backend infrastructure for this medical-tech startup, ensuring robust data management",
    tags: ["Node.js", "PostgreSQL", "Backend Architecture", "Healthcare Tech"],
    link: "https://www.medpho.com/?lang=en",
    github: "#",
    images: ["/projects/medpho.webp"],
  },
  {
    title: "Lead Outreach Automation",
    description: "Developed a custom automation tool that daily synchronizes leads from Google Sheets to trigger personalized WhatsApp outreach via AISensy API, boosting conversion rates.",
    tags: ["Node.js", "Google Sheets API", "AISensy", "Automation"],
    link: "#",
    github: "#",
    images: [
      "/projects/medpho.webp",
      "/projects/google sheets aisensy medpho/sheets.png",
      "/projects/google sheets aisensy medpho/whatsapp.png",
      "/projects/google sheets aisensy medpho/o23jhxuys457hg29.png"
    ],
  },
  {
    title: "Merlin - AI Email Guardian",
    description: "Built an AI-powered disposable email detection engine for lead quality. Selected for Cloudflare's $5,000 Startup Programme for its innovative use of Edge computing.",
    tags: ["AI/ML", "Cloudflare Workers", "Next.js", "Security"],
    link: "https://spendinbox.com/merlin",
    github: "#",
    images: ["/projects/merlin.png"],
  },
  {
    title: "Patent: Dynamic Codec Management",
    description: "Invented a method for managing dynamic codec configurations in broadcast audio streams (WO2025116552A1). Enables seamless, real-time codec switching without interrupting the ongoing broadcast.",
    tags: ["Patent", "Wireless Audio", "Codec Optimization", "Systems Engineering", "Bluetooth", "LE Audio"],
    link: "https://patents.google.com/patent/WO2025116552A1",
    github: "#",
    images: ["/projects/patent.jpg"],
  }
];

const SKILLS = [
  { name: "Full-Stack Development", icon: <Globe size={20} />, list: ["Custom Web Apps", "MVP Development", "React/Next.js", "Tailwind"] },
  { name: "Architecture & Scale", icon: <Cpu size={20} />, list: ["System Design", "Cloud Migration", "Microservices", "Java/Node.js"] },
  { name: "Security & Edge", icon: <Zap size={20} />, list: ["Cloudflare Infrastructure", "API Security", "Database Design", "MongoDB"] },
  { name: "Mobile Development", icon: <Layers size={20} />, list: ["Android Apps", "Kotlin Experts", "Performance Audits", "UX Strategy"] },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const Pressable = ({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => (
  <motion.div
    whileTap={{ scale: 0.96 }}
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    className={className}
    onClick={onClick}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const [index, setIndex] = useState(0);
  const words = ["Scalable", "Reliable", "Performant"];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mesh-gradient min-h-screen relative flex flex-col items-center selection:bg-accent/20 selection:text-accent overflow-x-hidden">
      {/* Decorative Orbs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-accent/5 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-secondary/5 rounded-full blur-[100px]"
        />
      </div>

      <nav className="fixed top-6 w-full max-w-2xl z-50 px-4">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="glass px-6 py-3 rounded-full flex items-center justify-between"
        >
          <span className="font-bold tracking-tighter text-lg text-zinc-900 border-b-2 border-accent">PORTFOLIO</span>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-500">
            <Pressable><a href="#about" className="hover:text-accent transition-colors">About</a></Pressable>
            <Pressable><a href="#projects" className="hover:text-accent transition-colors">Projects</a></Pressable>
            <Pressable><a href="#skills" className="hover:text-accent transition-colors">Skills</a></Pressable>
            <Pressable><a href="#contact" className="hover:text-accent transition-colors">Contact</a></Pressable>
          </div>
          <Pressable className="md:hidden text-zinc-800"><Layers size={20} /></Pressable>
        </motion.div>
      </nav>

      <main className="max-w-6xl w-full flex flex-col px-6 pt-48 pb-20 gap-40">
        {/* Hero Section */}
        <section id="about" className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 flex flex-col gap-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 w-fit mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] font-bold text-accent tracking-[0.2em] uppercase">Freelance Software Architect</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-zinc-900 leading-[0.9]">
              Engineering <br />
              <span className="relative inline-block h-[1.1em] overflow-hidden align-top">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="inline-block text-accent"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br /> Solutions.
            </h1>
            <p className="text-xl text-zinc-600 max-w-xl leading-relaxed font-normal">
              Former Software Engineer at Amazon and Samsung, now helping founders and enterprises build bulletproof digital products. I bring big-tech engineering standards to your unique vision.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Pressable>
                <a href="mailto:guptalakshay025@gmail.com">
                  <button className="px-8 py-4 rounded-3xl bg-zinc-900 text-white font-bold hover:shadow-xl hover:shadow-accent/20 transition-all flex items-center gap-2">
                    Hire for your project <ArrowRight size={18} />
                  </button>
                </a>
              </Pressable>
              <div className="flex items-center gap-3 px-6 py-4 rounded-3xl glass">
                <Pressable><a href="https://github.com/lakshaygupta21" target="_blank" rel="noopener noreferrer"><Github size={20} className="text-zinc-400 hover:text-accent cursor-pointer transition-colors" /></a></Pressable>
                <Pressable><a href="https://linkedin.com/in/lakshaygupta21" target="_blank" rel="noopener noreferrer"><Linkedin size={20} className="text-zinc-400 hover:text-accent cursor-pointer transition-colors" /></a></Pressable>
                <Pressable><a href="mailto:guptalakshay025@gmail.com"><Mail size={20} className="text-zinc-400 hover:text-accent cursor-pointer transition-colors" /></a></Pressable>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full max-w-[400px] aspect-square relative"
          >
            {/* Photo Placeholder */}
            <div className="w-full h-full glass rounded-[3rem] overflow-hidden p-3 rotate-3 hover:rotate-0 transition-transform duration-700">
              <div className="w-full h-full bg-zinc-100 rounded-[2.2rem] overflow-hidden flex items-center justify-center">
                <img
                  src="/profile/IMG-20260124-WA0116.jpg"
                  alt="Software Engineer Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl shadow-2xl flex flex-col items-center rotate-[-3deg]">
              <span className="text-4xl font-black text-accent">5+</span>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Years of XP</span>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <motion.section id="skills" {...fadeIn} className="flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-bold text-accent tracking-[0.3em] uppercase">Core Strength</h2>
            <p className="text-4xl font-bold text-zinc-900 tracking-tight">Technical Arsenal</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILLS.map((skill, i) => (
              <Pressable key={i} className="h-full">
                <div className="glass p-10 rounded-[2.5rem] flex flex-col h-full gap-8 transition-all hover:bg-white/90 shadow-sm hover:shadow-xl">
                  <div className="w-14 h-14 rounded-2xl bg-accent/5 flex items-center justify-center text-accent">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-5 text-zinc-900">{skill.name}</h4>
                    <ul className="flex flex-col gap-3">
                      {skill.list.map(item => (
                        <li key={item} className="text-zinc-500 flex items-center gap-3 text-sm font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Pressable>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section id="projects" {...fadeIn} className="flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-bold text-accent-secondary tracking-[0.3em] uppercase">The Portfolio</h2>
            <p className="text-4xl font-bold text-zinc-900 tracking-tight">Impactful Contributions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PROJECTS.map((project, i) => (
              <Pressable key={i}>
                <div className="glass group overflow-hidden rounded-[3rem] transition-all duration-700 h-full">
                  <div className="aspect-[21/9] bg-zinc-50 overflow-hidden relative border-b border-zinc-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                    {project.images && project.images.length > 0 ? (() => {
                      const imgs = project.images;
                      const len = imgs.length;
                      return (
                        <div className={`grid w-full h-full gap-1 ${len === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                          {imgs.map((img, idx) => (
                            <div
                              key={idx}
                              className={`relative overflow-hidden ${len === 3 && idx === 0 ? 'row-span-2' : ''}`}
                            >
                              <img
                                src={img}
                                alt={`${project.title} ${idx + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                            </div>
                          ))}
                        </div>
                      );
                    })() : (
                      <div className="flex items-center justify-center h-full text-zinc-200 text-7xl font-black select-none pointer-events-none uppercase">
                        {project.title.split(' ')[0]}
                      </div>
                    )}
                  </div>
                  <div className="p-10 flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-3xl font-bold tracking-tight text-zinc-900">{project.title}</h3>
                      <div className="flex gap-4 text-zinc-400">
                        {project.github !== "#" && (
                          <Pressable><a href={project.github} target="_blank" rel="noopener noreferrer"><Github size={24} className="hover:text-accent cursor-pointer transition-colors" /></a></Pressable>
                        )}
                        {project.link !== "#" && (
                          <Pressable><a href={project.link} target="_blank" rel="noopener noreferrer"><ExternalLink size={24} className="hover:text-accent cursor-pointer transition-colors" /></a></Pressable>
                        )}
                      </div>
                    </div>
                    <p className="text-zinc-600 leading-relaxed text-lg font-normal max-w-3xl">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 rounded-xl bg-accent/5 text-[10px] font-bold text-accent uppercase tracking-widest">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Pressable>
            ))}
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section
          id="contact"
          {...fadeIn}
          className="glass p-16 md:p-32 rounded-[4rem] text-center flex flex-col items-center gap-10 overflow-hidden relative shadow-2xl shadow-accent/5 border-none"
        >
          <div className="absolute inset-0 bg-accent/[0.02] -z-10" />
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-zinc-900">
            Building the next <br /> big thing? <span className="text-accent underline decoration-accent/20">Let's talk.</span>
          </h2>
          <Pressable>
            <a href="mailto:guptalakshay025@gmail.com">
              <button className="px-16 py-5 rounded-full bg-zinc-900 text-white font-bold text-xl hover:shadow-2xl hover:shadow-accent/40 transition-all duration-500 flex items-center gap-4">
                Send an Email <Mail size={24} />
              </button>
            </a>
          </Pressable>
        </motion.section>

        <footer className="flex flex-col md:flex-row items-center justify-between pt-16 border-t border-zinc-100 gap-10 text-sm text-zinc-400 font-bold uppercase tracking-widest">
          <p>© 2026 Engineer Portfolio. Built for scale.</p>
          <div className="flex items-center gap-10">
            <Pressable><a href="https://github.com/lakshaygupta21" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a></Pressable>
            <Pressable><a href="https://linkedin.com/in/lakshaygupta21" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a></Pressable>
          </div>
        </footer>
      </main>
    </div>
  );
}
