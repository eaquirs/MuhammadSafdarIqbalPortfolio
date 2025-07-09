import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye, Code, Zap } from "lucide-react";
import { Link } from "wouter";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="project-card h-full group"
    >
      <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative">
        {/* Enhanced Image Container with Consistent Aspect Ratio */}
        <div className="relative overflow-hidden aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800">
          <img 
            src={project.image} 
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />
          
          {/* Professional Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* Floating Action Button */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30">
              <Eye className="w-4 h-4 text-white" />
            </div>
          </div>
          
          {/* Tech Stack Preview */}
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <div className="flex gap-1">
              {project.technologies.slice(0, 2).map((tech, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-md border border-white/30"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 2 && (
                <span className="px-2 py-1 bg-blue-500/80 backdrop-blur-sm text-white text-xs rounded-md border border-blue-400/50">
                  +{project.technologies.length - 2}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Enhanced Content Section */}
        <CardContent className="p-6 flex flex-col flex-grow">
          {/* Title with Professional Styling */}
          <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100 min-h-[2.5rem] leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          
          {/* Description with Enhanced Typography */}
          <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 flex-grow leading-relaxed text-sm">
            {project.description}
          </p>
          
          {/* Technology Badges with Professional Styling */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className={`
                  text-xs font-medium transition-all duration-300 hover:scale-105
                  ${index % 3 === 0 
                    ? "bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50 hover:bg-blue-500/25" 
                    : index % 3 === 1
                    ? "bg-green-500/15 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700/50 hover:bg-green-500/25"
                    : "bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700/50 hover:bg-purple-500/25"
                  }
                `}
              >
                {tech}
              </Badge>
            ))}
          </div>
          
          {/* Enhanced CTA Button */}
          <Link href={`/project/${project.id}`}>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group/button"
            >
              <Code className="w-4 h-4 transition-transform duration-300 group-hover/button:rotate-12" />
              <span>View Case Study</span>
              <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" />
            </motion.button>
          </Link>
        </CardContent>

        {/* Professional Border Accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </Card>
    </motion.div>
  );
}
