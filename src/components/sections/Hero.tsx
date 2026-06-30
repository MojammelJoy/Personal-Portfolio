import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Download, ExternalLink, Sparkles } from "lucide-react";
import { personal } from "@/data";
import { useTypewriter } from "@/hooks";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export default function Hero() {
  const typedText = useTypewriter(personal.roles, 80, 2200);

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-background to-purple-950 dark:from-indigo-950/60 dark:via-background dark:to-purple-950/40" />
        {/* Orbs */}
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-3xl" />
        <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-1/4 -right-32 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-3xl" />
        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-3xl" />
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 pt-24 pb-16">
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <motion.div {...fadeUp(0.1)} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300">
              <Sparkles className="h-3.5 w-3.5" />
              Available for opportunities
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75" /><span className="relative h-2 w-2 rounded-full bg-green-400" /></span>
            </span>
          </motion.div>

          {/* Avatar */}
          <motion.div {...fadeUp(0.15)} className="mb-8">
            <div className="relative inline-block">
              <div className="h-28 w-28 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-cyan-500 p-1 shadow-2xl shadow-indigo-500/30">
                <div className="h-full w-full rounded-xl bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center text-4xl font-bold text-white">
                  MH
                </div>
              </div>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-2xl border border-indigo-500/30 border-dashed" />
            </div>
          </motion.div>

          {/* Name */}
          <motion.div {...fadeUp(0.2)}>
            <p className="text-sm font-medium text-muted-foreground mb-2 tracking-wider">Hello, I'm</p>
            <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {personal.name.split(" ").map((word, i) => (
                <span key={i} className={i === 1 ? "gradient-text" : ""}>{word} </span>
              ))}
            </h1>
          </motion.div>

          {/* Animated Role */}
          <motion.div {...fadeUp(0.3)} className="mt-4 h-12 flex items-center gap-2">
            <span className="text-xl font-semibold text-muted-foreground sm:text-2xl">I'm a </span>
            <span className="text-xl font-bold text-indigo-400 sm:text-2xl min-w-[240px] text-left">
              {typedText}
              <span className="animate-pulse text-indigo-300 ml-0.5">|</span>
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p {...fadeUp(0.4)} className="mt-6 max-w-xl text-base text-muted-foreground leading-relaxed sm:text-lg">
            {personal.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div {...fadeUp(0.5)} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => handleNav("#projects")}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 hover:opacity-90 transition-all hover:shadow-indigo-500/50 hover:scale-105"
            >
              <ExternalLink className="h-4 w-4" /> View Projects
            </button>
            <a
              href={personal.cvUrl}
              download="Mojammel_Haque_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 backdrop-blur px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-all hover:scale-105"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
            <button
              onClick={() => handleNav("#contact")}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 backdrop-blur px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-all hover:scale-105"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div {...fadeUp(0.6)} className="mt-8 flex items-center gap-4">
            {[
              { icon: Github, href: personal.github, label: "GitHub" },
              { icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" title={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all">
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div {...fadeUp(0.7)} className="mt-10 flex flex-wrap justify-center gap-2">
            {["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Redis"].map((tech) => (
              <span key={tech} className="rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1 text-xs font-medium text-muted-foreground">
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={() => handleNav("#about")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowDown className="h-4 w-4" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
