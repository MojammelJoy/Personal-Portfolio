import { motion } from "framer-motion";
import { MapPin, BookOpen, Target, Briefcase } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { personal } from "@/data";
import profileImage from "@/assets/image.jpg";

const stats = [
  { label: "Projects",     value: personal.projectsCompleted, icon: Briefcase,  color: "from-indigo-500 to-purple-500" },
  { label: "Repositories", value: personal.githubRepos,       icon: BookOpen,   color: "from-cyan-500 to-blue-500"    },
  { label: "Technologies", value: personal.technologies,      icon: Target,     color: "from-emerald-500 to-teal-500" },
  { label: "Years Coding", value: personal.yearsOfCoding,     icon: Briefcase,  color: "from-orange-500 to-amber-500" },
];

const info = [
  { icon: MapPin, label: "Location", value: personal.location },
  { icon: BookOpen, label: "Education", value: "BSc in CS & Telecommunication" },
  { icon: Target, label: "Seeking", value: "Full Stack Developer roles" },
  { icon: Briefcase, label: "Experience", value: `${personal.yearsOfCoding} years` },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading badge="About Me" title="Who" highlight="I Am" subtitle="A passionate developer who loves building things that matter." />

        {/* ── MOBILE LAYOUT (hidden on lg+) ── */}
        <div className="flex flex-col items-center gap-6 lg:hidden">

          {/* 1. Circular image */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="h-44 w-44 rounded-full border-4 border-indigo-500/40 p-1 bg-card shadow-elevated">
              <img
                src={profileImage}
                alt={personal.name}
                className="h-full w-full rounded-full object-cover object-top"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                  (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex";
                }}
              />
              <div className="h-full w-full rounded-full hidden items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-2xl font-bold text-white">
                MH
              </div>
            </div>
            {/* 2. Name plate */}
            <div className="mt-3 text-center">
              <p className="text-lg font-bold text-foreground">{personal.name}</p>
              <p className="text-sm text-indigo-400 font-medium">{personal.title}</p>
              <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center gap-1">
                <MapPin className="h-3 w-3" /> {personal.location}
              </p>
            </div>
          </motion.div>

          {/* 3. Heading + bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full space-y-3"
          >
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                Full Stack Developer <span className="text-indigo-400">&amp; Problem Solver</span>
              </h3>
              <div className="h-1 w-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{personal.bio}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{personal.objective}</p>
          </motion.div>

          {/* 4. Info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full space-y-2.5"
          >
            {info.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10">
                  <Icon className="h-4 w-4 text-indigo-400" />
                </div>
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-xs text-muted-foreground w-20 shrink-0">{label}</span>
                  <span className="text-xs text-muted-foreground">—</span>
                  <span className="text-sm font-medium text-foreground truncate">{value}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* 5. Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full grid grid-cols-2 gap-3"
          >
            {stats.map(({ label, value, icon: Icon, color }) => (
              <div key={label} className="rounded-2xl border border-border bg-card px-4 py-4 flex items-center gap-3 shadow-card">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground leading-none">{value}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* 6. Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full flex flex-wrap gap-3"
          >
            <a
              href={personal.cvUrl}
              download="Mojammel_Haque_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-all shadow-lg shadow-indigo-500/25"
            >
              Download CV
            </a>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-2.5 text-sm font-semibold text-foreground hover:bg-muted transition-all"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* ── DESKTOP LAYOUT (hidden below lg) ── */}
        <div className="hidden lg:grid grid-cols-[1fr_1.5fr] gap-24 items-start">

          {/* Left: Portrait card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="w-full rounded-2xl border border-border bg-card p-2 shadow-elevated">
              <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-950" style={{ aspectRatio: "4/5" }}>
                <img
                  src={profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                    (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex";
                  }}
                />
                <div className="absolute inset-0 hidden items-center justify-center flex-col gap-2">
                  <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white">
                    MH
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg font-bold text-foreground">{personal.name}</p>
              <p className="text-sm text-indigo-400 font-medium">{personal.title}</p>
              <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center gap-1">
                <MapPin className="h-3 w-3" /> {personal.location}
              </p>
            </div>
          </motion.div>

          {/* Right: Information */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-1">
                Full Stack Developer <span className="text-indigo-400">&amp; Problem Solver</span>
              </h3>
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
            </div>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p className="text-base">{personal.bio}</p>
              <p className="text-base">{personal.objective}</p>
            </div>
            <div className="space-y-2.5">
              {info.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10">
                    <Icon className="h-4 w-4 text-indigo-400" />
                  </div>
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-xs text-muted-foreground w-20 shrink-0">{label}</span>
                    <span className="text-xs text-muted-foreground">—</span>
                    <span className="text-sm font-medium text-foreground truncate">{value}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={personal.cvUrl}
                download="Mojammel_Haque_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-indigo-500/25"
              >
                Download CV
              </a>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-2.5 text-sm font-semibold text-foreground hover:bg-muted transition-all hover:scale-105"
              >
                Contact Me
              </button>
            </div>
          </motion.div>
        </div>

        {/* Stats row — full width, desktop only */}
        <div className="hidden lg:grid mt-12 grid-cols-4 gap-4">
          {stats.map(({ label, value, icon: Icon, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl border border-border bg-card px-4 py-5 flex items-center gap-4 shadow-card"
            >
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}>
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground leading-none">{value}</p>
                <p className="text-xs text-muted-foreground mt-1">{label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
