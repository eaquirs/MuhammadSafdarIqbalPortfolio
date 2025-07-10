import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";

import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
      }
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Muhammad Safdar Iqbal | Enterprise Software Architect</title>
        <meta name="description" content="Portfolio of Muhammad Safdar Iqbal, Pakistan's leading enterprise software architect. Explore case studies, blog insights, and proven technology solutions." />
        <meta name="keywords" content="Muhammad Safdar Iqbal, enterprise software, software architect, Pakistan, case studies, technology blog, ERP, POS, web development, consulting" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://your-portfolio-domain.com/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta property="og:title" content="Muhammad Safdar Iqbal | Enterprise Software Architect" />
        <meta property="og:description" content="Portfolio of Muhammad Safdar Iqbal, Pakistan's leading enterprise software architect. Explore case studies, blog insights, and proven technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio-domain.com/" />
        <meta property="og:image" content="https://your-portfolio-domain.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Muhammad Safdar Iqbal | Enterprise Software Architect" />
        <meta name="twitter:description" content="Portfolio of Muhammad Safdar Iqbal, Pakistan's leading enterprise software architect." />
        <meta name="twitter:image" content="https://your-portfolio-domain.com/og-image.png" />
        {/* Structured Data: Website & Person */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://your-portfolio-domain.com/",
            "name": "Muhammad Safdar Iqbal Portfolio",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://your-portfolio-domain.com/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}</script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Muhammad Safdar Iqbal",
            "url": "https://your-portfolio-domain.com/",
            "image": "https://your-portfolio-domain.com/og-image.png",
            "sameAs": [
              "https://www.linkedin.com/in/your-linkedin/",
              "https://github.com/your-github/"
            ],
            "jobTitle": "Enterprise Software Architect",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance / Consulting"
            },
            "description": "Pakistan's leading enterprise software architect. Specialized in ERP, POS, and custom business solutions."
          }
        `}</script>
      </Helmet>
      <div className="min-h-screen" id="main-content">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
