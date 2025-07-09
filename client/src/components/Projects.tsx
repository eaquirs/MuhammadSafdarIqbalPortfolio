import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Handshake, 
  Rocket, 
  Clock, 
  Shield, 
  Star, 
  MessageCircle,
  Calendar,
  Zap,
  Award,
  TrendingUp
} from "lucide-react";

export default function Projects() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // WhatsApp direct project inquiry
  const handleStartProject = () => {
    const phoneNumber = "+923322060667";
    const message = `🚀 Hi Muhammad Safdar Iqbal! I'm ready to start a new project and would like to discuss:

📋 Project Type: [Please specify - ERP, POS, Website, Custom Software, etc.]
⏰ Timeline: [Your preferred deadline]
💼 Business Type: [Your industry/business description]
📊 Key Requirements: [Brief description of what you need]

I saw your amazing portfolio and would love to work with you!`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // WhatsApp consultation inquiry  
  const handleFreeConsultation = () => {
    const phoneNumber = "+923322060667";
    const message = `💬 Hi Muhammad Safdar Iqbal! I'd like to schedule a FREE consultation to discuss:

🤔 Project Idea: [Brief description of your project concept]
❓ Questions: [Any specific questions about your services]
📅 Preferred Time: [When would be convenient for you?]
💡 Challenges: [Any specific business challenges you're facing]

Looking forward to learning more about how you can help my business!`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Featured Projects</h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-6">
            Explore my portfolio of successful projects, from enterprise solutions to innovative web applications
          </p>
          
          {/* Blog CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 px-6 py-3 rounded-full border border-blue-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            onClick={() => window.location.href = '/blog'}
          >
            <MessageCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-slate-700 dark:text-slate-300 font-medium">Read detailed case studies & insights</span>
            <Badge className="bg-blue-600 text-white">New!</Badge>
            <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400 transition-transform group-hover:translate-x-1" />
          </motion.div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        
        {/* Advanced Call-to-Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-700 border-blue-200 dark:border-slate-600 overflow-hidden">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 text-white rounded-full mb-6 mx-auto"
                >
                  <Rocket className="w-10 h-10" />
                </motion.div>
                
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto mb-8">
                  Join the ranks of successful businesses that have achieved 
                  <span className="font-semibold text-blue-600 dark:text-blue-400"> extraordinary results</span> with 
                  my proven freelance expertise. From crisis rescues to enterprise transformations.
                </p>
              </div>

              {/* Value Proposition Grid */}
              <div className="grid md:grid-cols-4 gap-6 mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg mb-3">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Rapid Delivery</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Impossible deadlines met consistently</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-3">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Crisis Management</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Rescuing failed technology projects</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg mb-3">
                    <Award className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Enterprise Quality</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">9+ years proven partnerships</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-lg mb-3">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Measurable ROI</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">40-90% efficiency improvements</p>
                </motion.div>
              </div>

              {/* Success Metrics */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2">
                  <Star className="w-4 h-4 mr-1" />
                  95% Performance Improvements
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2">
                  <Zap className="w-4 h-4 mr-1" />
                  12+ Industries Served
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-2">
                  <Award className="w-4 h-4 mr-1" />
                  Government Contracts Won
                </Badge>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={handleStartProject}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Handshake className="w-5 h-5 mr-2" />
                  Start Your Project Today
                </Button>
                
                <Button
                  onClick={handleFreeConsultation}
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Free Consultation
                </Button>
              </div>

              {/* Contact Methods Display */}
              <div className="text-center mt-8 p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  💬 <strong>WhatsApp:</strong> +92 332 2060667 • 
                  📧 <strong>Email:</strong> eaquirseaquirs@gmail.com
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-500">
                  Both buttons connect you directly via WhatsApp with pre-filled templates for faster communication
                </p>
              </div>

              {/* Urgency & Trust Builder */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-center mt-6"
              >
                <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Limited availability</span>
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
