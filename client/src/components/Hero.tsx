import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Rocket, Mail } from "lucide-react";
import { Link } from "wouter";


export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-24 md:pt-16">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="BG.avif"
          
          alt="Modern programming workspace" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="animate-float"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Muhammad Safdar Iqbal
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-slate-700 dark:text-slate-300">
            Full-Stack MERN Developer & .NET Specialist
          </h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          7+ years delivering enterprise-grade solutions that drive business growth. 
          From government projects to international mobile apps, I build scalable systems that exceed expectations.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12 max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Projects Delivered</div>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">100%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Customer Satisfaction</div>
            </div>
            <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">7+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white animate-glow"
          >
            <Rocket className="w-5 h-5 mr-2" />
            View My Projects
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
          >
            <Link href="/contact">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Link>
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex justify-center space-x-6"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">50+</div>
            <div className="text-sm text-slate-400">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">12</div>
            <div className="text-sm text-slate-400">Featured Here</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">5+</div>
            <div className="text-sm text-slate-400">Industries Served</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
