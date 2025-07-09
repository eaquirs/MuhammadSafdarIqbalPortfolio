import { motion } from "framer-motion";
import { skills } from "@/lib/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900 container-safe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Technical Skills</h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-responsive">
            Comprehensive expertise across the modern web development stack
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className={`text-lg sm:text-xl font-semibold mb-6 ${category.color} text-responsive`}>
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ 
                      translateY: -2,
                      transition: { duration: 0.2 }
                    }}
                    className="skill-badge bg-white dark:bg-slate-900 p-3 sm:p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 border border-slate-200 dark:border-slate-700"
                  >
                    <skill.icon className={`text-2xl sm:text-3xl ${skill.iconColor} mb-2 mx-auto`} />
                    <div className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base text-responsive">{skill.name}</div>
                    <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-responsive">{skill.level}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
