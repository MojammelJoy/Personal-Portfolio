import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { education, certifications } from "@/data";

export default function Education() {
  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading badge="Education" title="Academic" highlight="Background" subtitle="My educational journey and continuous learning." />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-14">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elevated transition-shadow"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${edu.color} text-2xl shadow-md`}>
                  {edu.icon}
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-0.5">
                    <Calendar className="h-3 w-3" />{edu.period}
                  </div>
                  <span className="text-xs font-medium text-indigo-400">{edu.grade}</span>
                </div>
              </div>
              <h3 className="font-bold text-foreground mb-1">{edu.degree}</h3>
              <p className={`text-sm font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mb-3`}>{edu.institution}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{edu.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {edu.highlights.map((h) => (
                  <span key={h} className="rounded-md border border-border bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">{h}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <SectionHeading badge="Certifications" title="Credentials &" highlight="Achievements" center />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="rounded-2xl border border-border bg-card p-5 shadow-card text-center hover:shadow-elevated transition-all"
            >
              <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${cert.color} text-2xl shadow-md`}>
                {cert.icon}
              </div>
              <h3 className="text-sm font-bold text-foreground leading-snug mb-1">{cert.title}</h3>
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              <span className={`mt-2 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold bg-gradient-to-r ${cert.color} text-white`}>
                {cert.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
