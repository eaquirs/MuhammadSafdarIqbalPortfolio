import { Mail } from "lucide-react";
import { SiLinkedin, SiGithub, SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-blue-400 mb-2">Muhammad Safdar Iqbal</h3>
            <p className="text-slate-400">Full-Stack Developer & Software Engineer</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
            >
              <SiLinkedin className="text-2xl" />
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
            >
              <SiGithub className="text-2xl" />
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
            >
              <SiX className="text-2xl" />
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Mail className="text-2xl" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>&copy; 2024 Muhammad Safdar Iqbal. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
