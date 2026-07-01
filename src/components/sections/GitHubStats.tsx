import { motion } from "framer-motion";
import { Github, GitFork, Star, GitCommit, Code2, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { personal } from "@/data";

const stats = [
  { label: "Public Repos",   value: "20+",   icon: GitFork,    color: "from-indigo-500 to-purple-500" },
  { label: "Total Stars",    value: "50+",   icon: Star,       color: "from-amber-500 to-orange-500"  },
  { label: "Commits (2024)", value: "500+",  icon: GitCommit,  color: "from-emerald-500 to-teal-500"  },
  { label: "Contributions",  value: "800+",  icon: TrendingUp, color: "from-cyan-500 to-blue-500"     },
];

const languages = [
  { name: "TypeScript", percent: 42, color: "#3178c6" },
  { name: "JavaScript", percent: 28, color: "#f7df1e" },
  { name: "CSS",        percent: 14, color: "#563d7c" },
  { name: "HTML",       percent: 10, color: "#e34c26" },
  { name: "Other",      percent:  6, color: "#6b7280" },
];

export default function GitHubStats() {
  return (
    <section id="github" className="section-padding">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading badge="GitHub" title="Open Source" highlight="Activity" subtitle="My GitHub profile and contributions to the developer community." />

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-8">
          {stats.map(({ label, value, icon: Icon, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.04 }}
              className="rounded-2xl border border-border bg-card p-5 text-center shadow-card"
            >
              <div className={`mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white`}>
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-2xl font-bold text-foreground">{value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* GitHub Contribution Image + Top Languages */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 rounded-2xl border border-border bg-card p-6 shadow-card"
          >
            <div className="mb-4 flex items-center gap-2">
              <Code2 className="h-4 w-4 text-indigo-400" />
              <h3 className="text-sm font-semibold text-foreground">Contribution Graph</h3>
            </div>
            <img
              src={`https://ghchart.rshah.org/4f46e5/MojammelJoy`}
              alt="GitHub Contributions"
              className="w-full rounded-xl"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              <span>Less</span>
              <div className="flex items-center gap-1">
                {["bg-muted", "bg-indigo-200/30", "bg-indigo-400/60", "bg-indigo-500", "bg-indigo-600"].map((c, i) => (
                  <span key={i} className={`h-3 w-3 rounded-sm ${c}`} />
                ))}
              </div>
              <span>More</span>
            </div>
          </motion.div>

          {/* Top Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-border bg-card p-6 shadow-card"
          >
            <h3 className="mb-4 text-sm font-semibold text-foreground">Top Languages</h3>
            {/* Bar */}
            <div className="flex h-3 w-full overflow-hidden rounded-full mb-4">
              {languages.map((lang) => (
                <div key={lang.name} style={{ width: `${lang.percent}%`, background: lang.color }} />
              ))}
            </div>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: lang.color }} />
                    <span className="text-foreground font-medium">{lang.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a href={personal.github} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors">
            <Github className="h-4 w-4" /> @MojammelJoy on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
