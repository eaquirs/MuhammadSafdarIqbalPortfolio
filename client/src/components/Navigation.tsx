import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useLocation } from "wouter";
import { Link } from "wouter";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home", href: "/#home" },
    { id: "about", label: "About", href: "/#about" },
    { id: "projects", label: "Projects", href: "/#projects" },
    { id: "blog", label: "Blog", href: "/blog" },
    { id: "skills", label: "Skills", href: "/#skills" },
    { id: "testimonials", label: "Testimonials", href: "/#testimonials" },
    { id: "contact", label: "Contact", href: "/contact" },
  ];

  // Helper to handle nav click
  const handleNavClick = (id: string) => {
    if (location === "/") {
      scrollToSection(id);
    } else {
      window.location.href = `/#${id}`;
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">Muhammad Safdar Iqbal</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                item.id === "contact" || item.id === "blog" ? (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-slate-700 dark:text-slate-300"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-slate-700 dark:text-slate-300"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 border border-slate-200 dark:border-slate-800">
              {navItems.map((item) => (
                item.id === "contact" || item.id === "blog" ? (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="block w-full text-left px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="block w-full text-left px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
