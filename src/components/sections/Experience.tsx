import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { experience } from "@/data";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading badge="Experience" title="Work" highlight="History" subtitle="My professional journey and what I've built along the way." />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500/50 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex gap-6"
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.2 }}
                    className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${job.color} text-white shadow-lg`}
                  >
                    <Briefcase className="h-5 w-5" />
                  </motion.div>
                </div>

                {/* Card */}
                <div className="flex-1 rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elevated transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{job.role}</h3>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${job.color} bg-clip-text text-transparent`}>{job.company}</p>
                    </div>
                    <div className="flex flex-col gap-1 text-xs text-muted-foreground shrink-0">
                      <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{job.period}</span>
                      <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{job.location}</span>
                      <span className="inline-flex items-center justify-end">
                        <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium bg-gradient-to-r ${job.color} bg-clip-text text-transparent border border-indigo-500/20`}>
                          {job.type}
                        </span>
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{job.description}</p>

                  <ul className="space-y-2 mb-4">
                    {job.achievements.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-indigo-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {job.tech.map((t) => (
                      <span key={t} className="rounded-full border border-indigo-500/20 bg-indigo-500/5 px-2.5 py-0.5 text-[11px] font-medium text-indigo-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
