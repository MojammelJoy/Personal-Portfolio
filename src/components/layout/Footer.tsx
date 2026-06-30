import { Github, Linkedin, Mail, Code2, Heart, ArrowUp } from "lucide-react";
import { personal, navLinks } from "@/data";
import { useScrollToTop } from "@/hooks";

export default function Footer() {
  const { scrollToTop } = useScrollToTop();

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-card/50">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                <Code2 className="h-4 w-4" />
              </div>
              <span className="font-bold text-foreground">{personal.shortName}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {personal.tagline}
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Github,   href: personal.github   },
                { icon: Linkedin, href: personal.linkedin },
                { icon: Mail,     href: `mailto:${personal.email}` },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-indigo-500/50 transition-all">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button onClick={() => handleNav(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground uppercase tracking-wider">Get In Touch</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>{personal.email}</p>
              <p>{personal.location}</p>
              <p className="text-indigo-400 font-medium">Open to opportunities</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            © {new Date().getFullYear()} {personal.name}. Built with
            <Heart className="h-3 w-3 text-red-500 fill-red-500" />
            in Dhaka, Bangladesh.
          </p>
          <button
            onClick={scrollToTop}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
