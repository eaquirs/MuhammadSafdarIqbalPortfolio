import { motion } from "framer-motion";
import { Code, Clock, Handshake, Rocket } from "lucide-react";


export default function About() {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Maintainable & Scalable",
      color: "text-green-400",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Reliable & Professional",
      color: "text-blue-400",
    },
    {
      icon: Handshake,
      title: "Client-Focused",
      description: "Understanding Your Needs",
      color: "text-green-400",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Cutting-Edge Solutions",
      color: "text-blue-400",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 container-safe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">About Me</h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <img
              src="/p5.png"
              alt="Muhammad Safdar Iqbal - Professional Developer"
              className="rounded-2xl shadow-lg w-full max-w-md mx-auto bg-gradient-to-br from-green-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 p-2"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800 dark:text-slate-200 text-responsive">
              Passionate <span className="text-green-600 dark:text-green-400">MERN Stack</span> Developer
            </h3>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-responsive">
              I'm Muhammad Safdar Iqbal, a dedicated MERN stack developer with over 7 years of experience 
              crafting exceptional digital solutions. My expertise spans across modern JavaScript frameworks, 
              database design, and scalable architecture patterns.
            </p>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-responsive">
              From startups to enterprise-level applications, I've successfully delivered 50+ projects 
              that combine cutting-edge technology with intuitive user experiences. My focus on clean code, 
              performance optimization, and industry best practices ensures robust solutions that scale with your business.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-lg shadow-md border border-green-100 dark:border-green-900/30">
                <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2 text-sm sm:text-base">Frontend Excellence</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-responsive">
                  React, Next.js, TypeScript, Tailwind CSS
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-lg shadow-md border border-blue-100 dark:border-blue-900/30">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2 text-sm sm:text-base">Backend Mastery</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-responsive">
                  Node.js, Express, RESTful APIs, Authentication
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-lg shadow-md border border-purple-100 dark:border-purple-900/30">
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2 text-sm sm:text-base">Database Design</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-responsive">
                  MongoDB, Mongoose, Data Modeling, Optimization
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-lg shadow-md border border-orange-100 dark:border-orange-900/30">
                <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2 text-sm sm:text-base">Enterprise Solutions</h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-responsive">
                  .NET, C#, ERP Systems, Legacy Integration
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
