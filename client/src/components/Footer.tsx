import { Mail, MapPin, Heart } from "lucide-react";
import { SiLinkedin, SiGithub, SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-50 border-t border-slate-200 dark:border-slate-800 container-safe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400 mb-4 text-responsive">
              Muhammad Safdar Iqbal
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed text-sm sm:text-base text-responsive">
              Expert MERN Stack Developer & Enterprise Solutions Architect
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-sm sm:text-base text-responsive">
              Building scalable web applications with modern technologies. 
              Transforming business ideas into powerful digital solutions that drive growth and success.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-slate-600 dark:text-slate-400 text-responsive">Contact for professional inquiries</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-slate-600 dark:text-slate-400 text-responsive">Pakistan • Remote Work Available</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-responsive">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/#home" },
                { name: "About", href: "/#about" },
                { name: "Projects", href: "/#projects" },
                { name: "Blog", href: "/blog" },
                { name: "Skills", href: "/#skills" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 text-sm text-responsive"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4 text-responsive">Services</h4>
            <ul className="space-y-2">
              {[
                "MERN Stack Development",
                "Enterprise Web Apps",
                "API Development",
                ".NET Applications",
                "Database Design",
                "Technical Consulting"
              ].map((service) => (
                <li key={service}>
                  <span className="text-slate-600 dark:text-slate-400 text-sm text-responsive">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-200 dark:border-slate-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <p className="text-slate-600 dark:text-slate-400 text-sm text-responsive">
              © 2024 Muhammad Safdar Iqbal. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            {/* <span className="text-slate-600 dark:text-slate-400 text-sm flex items-center text-responsive">
              <Heart className="w-4 h-4 text-red-500 mr-1 flex-shrink-0" />
              Made with passion in Pakistan
            </span> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
