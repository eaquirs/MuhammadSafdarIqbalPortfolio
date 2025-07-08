import { motion } from "framer-motion";
import { Code, Clock, Handshake, Rocket } from "lucide-react";


export default function About() {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Maintainable & Scalable",
      color: "text-blue-400",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Reliable & Professional",
      color: "text-green-400",
    },
    {
      icon: Handshake,
      title: "Client-Focused",
      description: "Understanding Your Needs",
      color: "text-blue-400",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Cutting-Edge Solutions",
      color: "text-green-400",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-100 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="p5.png"
              alt="Muhammad Safdar Iqbal - Professional Developer"
              className="rounded-2xl shadow-lg w-full max-w-md mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-700 p-2"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
              Your Trusted Technology Partner
            </h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I don't just build software – I solve business problems. With 7+
              years of experience, I've helped businesses streamline operations,
              increase revenue, and gain competitive advantages through custom
              technology solutions. From government contracts to international
              mobile apps, I deliver results that matter.
            </p>

            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong className="text-blue-600 dark:text-blue-400">
                Proven Track Record:
              </strong>{" "}
              I have successfully delivered projects for a diverse range of
              clients, including enterprises and organizations across various
              sectors. I understand the importance of meeting deadlines,
              managing budgets effectively, and maintaining clear communication
              throughout the development process.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-900 p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-300 border border-slate-200 dark:border-slate-700"
                >
                  <feature.icon className={`${feature.color} text-2xl mb-2`} />
                  <h4 className="font-semibold">{feature.title}</h4>
                  <p className="text-sm text-slate-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
