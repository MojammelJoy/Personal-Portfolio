import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({ badge, title, highlight, subtitle, center = true }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("mb-12 lg:mb-16", center && "text-center")}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base text-muted-foreground lg:text-lg mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
