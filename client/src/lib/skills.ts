import { 
  SiReact, 
  SiNodedotjs, 
  SiJavascript, 
  SiHtml5, 
  SiMongodb, 
  SiPostgresql, 
  SiDocker, 
  SiGit,
  SiDotnet,
  SiFirebase,
  SiWordpress,
  SiPhp
} from "react-icons/si";
import { Database, Server, Code, Cloud } from "lucide-react";

export interface Skill {
  name: string;
  level: string;
  icon: any;
  iconColor: string;
}

export interface SkillCategory {
  category: string;
  color: string;
  items: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    color: "text-blue-400",
    items: [
      {
        name: "React.js",
        level: "Advanced",
        icon: SiReact,
        iconColor: "text-blue-400"
      },
      {
        name: "JavaScript",
        level: "Expert",
        icon: SiJavascript,
        iconColor: "text-yellow-400"
      },
      {
        name: "HTML5/CSS3",
        level: "Expert",
        icon: SiHtml5,
        iconColor: "text-orange-400"
      },
      {
        name: "WordPress",
        level: "Advanced",
        icon: SiWordpress,
        iconColor: "text-blue-400"
      }
    ]
  },
  {
    category: "Backend",
    color: "text-green-400",
    items: [
      {
        name: "Node.js",
        level: "Advanced",
        icon: SiNodedotjs,
        iconColor: "text-green-400"
      },
      {
        name: "C# .NET",
        level: "Expert",
        icon: SiDotnet,
        iconColor: "text-purple-400"
      },
      {
        name: "REST APIs",
        level: "Expert",
        icon: Code,
        iconColor: "text-blue-400"
      }
    ]
  },
  {
    category: "Mobile Development",
    color: "text-purple-400",
    items: [
      {
        name: ".NET MAUI",
        level: "Advanced",
        icon: SiDotnet,
        iconColor: "text-purple-400"
      },
      {
        name: "Cross-Platform Apps",
        level: "Advanced",
        icon: Code,
        iconColor: "text-blue-400"
      }
    ]
  },
  {
    category: "Databases",
    color: "text-blue-400",
    items: [
      {
        name: "MongoDB",
        level: "Advanced",
        icon: SiMongodb,
        iconColor: "text-green-400"
      },
      {
        name: "SQL Server",
        level: "Expert",
        icon: Database,
        iconColor: "text-blue-400"
      },
      {
        name: "PostgreSQL",
        level: "Advanced",
        icon: SiPostgresql,
        iconColor: "text-blue-400"
      }
    ]
  },
  {
    category: "DevOps & Tools",
    color: "text-green-400",
    items: [
      {
        name: "Docker",
        level: "Advanced",
        icon: SiDocker,
        iconColor: "text-blue-400"
      },
      {
        name: "Git/GitHub",
        level: "Expert",
        icon: SiGit,
        iconColor: "text-orange-400"
      },
      {
        name: "Azure/AWS",
        level: "Intermediate",
        icon: Cloud,
        iconColor: "text-blue-400"
      }
    ]
  }
];
