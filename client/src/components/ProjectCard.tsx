import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Link } from "wouter";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ 
        rotateX: 5, 
        rotateY: 5, 
        translateY: -10,
        transition: { duration: 0.3 }
      }}
      className="project-card"
    >
      <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="relative overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">{project.title}</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className={index % 2 === 0 ? "bg-blue-500/20 text-blue-600 dark:text-blue-400" : "bg-green-500/20 text-green-600 dark:text-green-400"}
              >
                {tech}
              </Badge>
            ))}
          </div>
          <Link href={`/project/${project.id}`}>
            <button className="text-blue-600 dark:text-blue-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 flex items-center">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Case Study
            </button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
