import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { projects } from "@/data";

const CATEGORIES = ["All", "Full Stack", "Frontend", "Backend"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading badge="Projects" title="Featured" highlight="Work" subtitle="A selection of projects that showcase my skills and passion for building." />

        {/* Filter Tabs */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex rounded-xl border border-border bg-card p-1 gap-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  filter === cat ? "text-white" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter === cat && (
                  <motion.div layoutId="filter-pill" className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600" />
                )}
                <span className="relative">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-border bg-card overflow-hidden shadow-card hover:shadow-elevated transition-all"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-44">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {project.featured && (
                    <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-amber-500/90 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-black">
                      <Star className="h-3 w-3 fill-black" /> Featured
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-flex rounded-full bg-indigo-500/80 backdrop-blur px-2.5 py-0.5 text-[11px] font-semibold text-white">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-foreground text-base">{project.title}</h3>
                  <p className="text-xs text-indigo-400 font-medium mb-2">{project.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">{project.description}</p>

                  {/* Features */}
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.features.slice(0, 3).map((f) => (
                      <span key={f} className="text-[11px] rounded-md border border-border bg-muted px-2 py-0.5 text-muted-foreground">{f}</span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="text-[11px] rounded-md border border-border bg-muted px-2 py-0.5 text-muted-foreground">+{project.features.length - 3} more</span>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="mb-4 flex flex-wrap gap-1">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="text-[11px] rounded-full border border-indigo-500/20 bg-indigo-500/5 px-2.5 py-0.5 text-indigo-400 font-medium">{tag}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2 border-t border-border pt-4">
                    <a href={project.github} target="_blank" rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border py-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all">
                      <Github className="h-3.5 w-3.5" /> Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 py-2 text-xs font-semibold text-white hover:opacity-90 transition-opacity">
                      <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a href={`https://github.com/MojammelJoy`} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors">
            <Github className="h-4 w-4" /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
