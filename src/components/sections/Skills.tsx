import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { skills } from "@/data";

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading badge="Skills" title="Technical" highlight="Expertise" subtitle="Technologies and tools I use to build modern applications." />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, ci) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
              className="rounded-2xl border border-border bg-card p-5 shadow-card hover:shadow-elevated transition-shadow"
            >
              {/* Header */}
              <div className="mb-4 flex items-center gap-2.5">
                <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <div className="h-2.5 w-2.5 rounded-full bg-white/80" />
                </div>
                <h3 className="font-semibold text-foreground">{category.category}</h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, si) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: ci * 0.08 + si * 0.05 }}
                    whileHover={{ scale: 1.05, y: -1 }}
                    className="rounded-lg border border-border bg-muted px-3 py-1.5 text-xs font-medium text-foreground hover:border-indigo-500/40 hover:text-indigo-400 hover:bg-indigo-500/5 transition-all cursor-default"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
