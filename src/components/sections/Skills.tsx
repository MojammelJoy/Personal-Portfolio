import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { skills } from "@/data";
import { useInView } from "@/hooks";

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading badge="Skills" title="Technical" highlight="Expertise" subtitle="Technologies and tools I use to build modern applications." />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skills.map((category, ci) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elevated transition-shadow"
            >
              {/* Header */}
              <div className="mb-5 flex items-center gap-3">
                <div className={`h-2 w-8 rounded-full bg-gradient-to-r ${category.color}`} />
                <h3 className="font-semibold text-foreground">{category.category}</h3>
              </div>
              {/* Skills */}
              <div className="space-y-4">
                {category.items.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                    delay={si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Pills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 rounded-2xl border border-border bg-card p-8 shadow-card"
        >
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">All Technologies</p>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.flatMap((c) => c.items.map((i) => i.name)).map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05, y: -2 }}
                className="rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground cursor-default hover:border-indigo-500/40 hover:text-indigo-400 hover:bg-indigo-500/5 transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
