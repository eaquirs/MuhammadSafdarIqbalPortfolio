import { motion } from "framer-motion";
import { skills } from "@/lib/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-100 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks for full-stack development
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className={`text-xl font-semibold mb-6 ${category.color}`}>
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
                    className="skill-badge bg-white dark:bg-slate-900 p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 border border-slate-200 dark:border-slate-700"
                  >
                    <skill.icon className={`text-3xl ${skill.iconColor} mb-2 mx-auto`} />
                    <div className="font-semibold text-slate-900 dark:text-white">{skill.name}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">{skill.level}</div>
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
