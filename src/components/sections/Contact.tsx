import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { personal } from "@/data";

const schema = z.object({
  name:    z.string().min(2, "Name must be at least 2 characters"),
  email:   z.string().email("Enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});
type FormData = z.infer<typeof schema>;

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [sending, setSending] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSending(true);
    // EmailJS integration — replace with your IDs
    try {
      await new Promise((r) => setTimeout(r, 1500)); // simulate
      // await emailjs.send("SERVICE_ID","TEMPLATE_ID", { ...data }, "PUBLIC_KEY");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputCls = (err?: { message?: string }) =>
    `w-full rounded-xl border px-4 py-3 text-sm bg-card text-foreground placeholder:text-muted-foreground outline-none transition-all focus:ring-2 ${
      err ? "border-red-500 focus:ring-red-500/20" : "border-border focus:border-indigo-500 focus:ring-indigo-500/20"
    }`;

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading badge="Contact" title="Let's Work" highlight="Together" subtitle="Have a project in mind or want to discuss opportunities? Let's connect!" />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card space-y-5">
              {[
                { icon: Mail,    label: "Email",    value: personal.email,    href: `mailto:${personal.email}` },
                { icon: MapPin,  label: "Location", value: personal.location, href: undefined },
                { icon: Github,  label: "GitHub",   value: "@MojammelJoy",   href: personal.github },
                { icon: Linkedin,label: "LinkedIn",  value: "Md. Mojammel Haque", href: personal.linkedin },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10">
                    <Icon className="h-4.5 w-4.5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    {href ? (
                      <a href={href} target="_blank" rel="noreferrer" className="text-sm font-medium text-foreground hover:text-indigo-400 transition-colors">{value}</a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-6">
              <h3 className="font-semibold text-foreground mb-2">Open to Work 🟢</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I'm actively seeking Full Stack Developer opportunities. Available for full-time roles, contract work, and interesting freelance projects.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <h3 className="text-lg font-bold text-foreground mb-6">Send a Message</h3>

              {status === "success" && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 flex items-center gap-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-4">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                  <p className="text-sm font-medium text-emerald-400">Message sent! I'll reply within 24 hours.</p>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 flex items-center gap-3 rounded-xl bg-red-500/10 border border-red-500/30 p-4">
                  <AlertCircle className="h-5 w-5 text-red-400 shrink-0" />
                  <p className="text-sm font-medium text-red-400">Something went wrong. Please try again.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <input {...register("name")} placeholder="Your Name" className={inputCls(errors.name)} />
                    {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
                  </div>
                  <div>
                    <input {...register("email")} type="email" placeholder="your@email.com" className={inputCls(errors.email)} />
                    {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
                  </div>
                </div>
                <div>
                  <input {...register("subject")} placeholder="Subject" className={inputCls(errors.subject)} />
                  {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>}
                </div>
                <div>
                  <textarea {...register("message")} rows={5} placeholder="Tell me about your project or opportunity…" className={inputCls(errors.message)} />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
                </div>
                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 hover:opacity-90 disabled:opacity-60 transition-all"
                >
                  {sending ? (
                    <><span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />Sending…</>
                  ) : (
                    <><Send className="h-4 w-4" />Send Message</>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
