import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/shared/LoadingScreen";
import BackToTop from "@/components/shared/BackToTop";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import GitHubStats from "@/components/sections/GitHubStats";
import Contact from "@/components/sections/Contact";
import { personal } from "@/data";

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{personal.name} — Full Stack Developer</title>
        <meta name="description" content={`${personal.name}: ${personal.tagline}`} />
        <meta name="keywords" content="Full Stack Developer, React, Node.js, TypeScript, PostgreSQL, Bangladesh" />
        <meta name="author" content={personal.name} />
        <meta property="og:title" content={`${personal.name} — Full Stack Developer`} />
        <meta property="og:description" content={personal.tagline} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://mojammel.dev" />
      </Helmet>

      <LoadingScreen />

      <div className="relative min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <GitHubStats />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </HelmetProvider>
  );
}
