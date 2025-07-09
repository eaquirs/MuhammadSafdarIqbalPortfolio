import { useParams } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, Mail, Target, Clock, DollarSign } from "lucide-react";
import { Link } from "wouter";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useEffect, useState } from "react";

export default function Project() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleProjectInquiry = (inquiryType: string) => {
    const phoneNumber = "+923322060667";
    let message = "";

    if (inquiryType === "similar") {
      message = `🚀 Hi Muhammad Safdar Iqbal! I'm interested in a project similar to "${project?.title}"

📋 *Project of Interest:* ${project?.title}
💡 *Interest Type:* Similar Project Development

🎯 *My Requirements:*
- Industry: [Please specify your industry]
- Scale: [Small/Medium/Large scale]
- Timeline: [Your preferred timeline]
- Budget Range: [Your budget range]

📝 *Additional Details:*
[Please describe what specific features or modifications you need compared to the showcased project]

🔧 *Preferred Technologies:* ${project?.technologies.slice(0, 3).join(", ")} or open to suggestions

Looking forward to discussing this exciting project with you!`;
    } else if (inquiryType === "consultation") {
      message = `💬 Hi Muhammad Safdar Iqbal! I'd like a consultation about a project inspired by "${project?.title}"

📋 *Reference Project:* ${project?.title}
🤔 *Consultation Type:* Technical Feasibility & Strategy

💭 *My Situation:*
- Current Challenge: [Describe your current situation]
- Desired Outcome: [What you want to achieve]
- Timeline: [When you need this completed]

❓ *Key Questions:*
- Can this approach work for my industry?
- What would be the estimated timeline and budget?
- What technologies would you recommend?
- Any potential challenges I should be aware of?

Looking forward to your expert advice!`;
    } else if (inquiryType === "custom") {
      message = `⚡ Hi Muhammad Safdar Iqbal! I was impressed by "${project?.title}" and need something custom

📋 *Inspired by:* ${project?.title}
🎯 *Project Type:* Custom Solution

🛠 *My Custom Requirements:*
- Industry/Domain: [Your industry]
- Core Functionality: [Main features needed]
- User Base: [Number of expected users]
- Integration Needs: [Systems to integrate with]

📊 *Success Metrics I Need:*
- Performance targets: [Your performance goals]
- Security requirements: [Your security needs]
- Scalability needs: [Expected growth]

💰 *Project Details:*
- Timeline: [Your timeline]
- Budget: [Your budget range]
- Priority Features: [Must-have vs nice-to-have]

Ready to build something amazing together!`;
    }

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailInquiry = () => {
    const subject = `Project Inquiry: Similar to ${project?.title}`;
    const body = `Hi Muhammad Safdar Iqbal,

I was impressed by your work on "${project?.title}" and would like to discuss a similar project for my business.

Project Details:
- Industry: [Your Industry]
- Scale: [Project Scale]
- Timeline: [Your Timeline]
- Budget: [Your Budget Range]

Key Requirements:
[Please describe your specific requirements]

I would appreciate the opportunity to discuss this project with you.

Best regards,
[Your Name]`;

    const emailUrl = `mailto:eaquirseaquirs@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(emailUrl, '_blank');
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-slate-400 mb-8">The project you're looking for doesn't exist.</p>
            <Link href="/">
              <Button variant="outline" className="border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50">
      <Navigation />
      <div className="container mx-auto px-4 py-20">
        <div className="mb-8">
          <a href="/#projects">
            <Button variant="outline" className="border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="relative group">
            {/* Enhanced Image Container with Professional Styling */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 aspect-[4/3]">
              <img 
                src={project.image} 
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
              />
              
              {/* Professional Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating Tech Stack Indicator */}
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/50 dark:border-slate-600/50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      {project.technologies.length} Technologies
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Project Status Badge */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                <div className="bg-blue-500/90 backdrop-blur-sm rounded-full px-3 py-1 border border-blue-400/50">
                  <span className="text-xs font-semibold text-white">Live Project</span>
                </div>
              </div>
              
              {/* Bottom Gradient Border */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
            </div>
            
            {/* Professional Caption */}
            <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                Professional solution built with modern technologies
              </p>
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">{project.title}</h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="bg-blue-500/20 text-blue-400">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-8">
          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.fullDescription}</ReactMarkdown>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-green-600 dark:text-green-400">Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-slate-700 dark:text-slate-300 flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-yellow-600 dark:text-yellow-400">Challenges & Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">{challenge.challenge}</h4>
                    <p className="text-slate-700 dark:text-slate-300">{challenge.solution}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Project-Specific Inquiry Section */}
          <div className="relative mt-20">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-green-600/10 rounded-3xl blur-3xl"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-green-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
            
            <Card className="relative bg-gradient-to-br from-white via-blue-50/50 to-green-50/50 dark:from-slate-800 dark:via-slate-800/95 dark:to-slate-700/95 border-2 border-blue-200/50 dark:border-blue-700/50 shadow-2xl backdrop-blur-sm">
              <CardHeader className="text-center pb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 rounded-full blur-lg opacity-75 animate-pulse"></div>
                    <div className="relative bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-full">
                      <MessageSquare className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-4">
                  Ready to Build Something Amazing?
                </CardTitle>
                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  Transform your business with a custom solution inspired by <span className="font-semibold text-blue-600 dark:text-blue-400">"{project.title}"</span>. 
                  Let's discuss how we can adapt this proven approach for your unique needs.
                </p>
              </CardHeader>
              
              <CardContent className="px-8 pb-8">
                {/* Main action cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="relative p-6 bg-white dark:bg-slate-800 rounded-2xl border border-blue-200 dark:border-slate-600 hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:border-blue-400">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3 text-center">Similar Project</h4>
                      <p className="text-slate-600 dark:text-slate-400 mb-4 text-center leading-relaxed">
                        Get the exact same powerful solution adapted perfectly for your business requirements
                      </p>
                      <div className="flex items-center justify-center mb-4">
                        <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 font-medium">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                          Proven Success Formula
                        </div>
                      </div>
                      <Button 
                        onClick={() => handleProjectInquiry("similar")}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Start Similar Project
                      </Button>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="relative p-6 bg-white dark:bg-slate-800 rounded-2xl border border-green-200 dark:border-slate-600 hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:border-green-400">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Clock className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3 text-center">Free Consultation</h4>
                      <p className="text-slate-600 dark:text-slate-400 mb-4 text-center leading-relaxed">
                        Get expert insights on feasibility, timeline, costs, and the best technical approach
                      </p>
                      <div className="flex items-center justify-center mb-4">
                        <div className="flex items-center text-sm text-green-600 dark:text-green-400 font-medium">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                          100% Free Strategy Session
                        </div>
                      </div>
                      <Button 
                        onClick={() => handleProjectInquiry("consultation")}
                        className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Book Free Consultation
                      </Button>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="relative p-6 bg-white dark:bg-slate-800 rounded-2xl border border-purple-200 dark:border-slate-600 hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:border-purple-400">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <DollarSign className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3 text-center">Custom Solution</h4>
                      <p className="text-slate-600 dark:text-slate-400 mb-4 text-center leading-relaxed">
                        Need something unique? Let's create a completely custom solution tailored to your vision
                      </p>
                      <div className="flex items-center justify-center mb-4">
                        <div className="flex items-center text-sm text-purple-600 dark:text-purple-400 font-medium">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
                          Unlimited Possibilities
                        </div>
                      </div>
                      <Button 
                        onClick={() => handleProjectInquiry("custom")}
                        className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Discuss Custom Build
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Success metrics section */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-2xl p-6 mb-8 border border-slate-200 dark:border-slate-600">
                  <h3 className="text-lg font-bold text-center text-slate-800 dark:text-slate-200 mb-4">Why Choose This Proven Approach?</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">95%</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Performance Boost</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">2-8 Weeks</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Delivery Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">24/7</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Support Available</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">100%</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Satisfaction Rate</div>
                    </div>
                  </div>
                </div>

                {/* Bottom section with contact options */}
                <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-slate-200 dark:border-slate-600">
                  <div className="text-center md:text-left">
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center justify-center md:justify-start">
                      <Mail className="w-5 h-5 mr-2 text-blue-500" />
                      Prefer Email Discussion?
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                      Send a detailed project inquiry and get a comprehensive response with timeline and cost estimates.
                    </p>
                    <Button 
                      onClick={handleEmailInquiry}
                      variant="outline" 
                      className="w-full md:w-auto border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 font-medium px-6"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email Inquiry
                    </Button>
                  </div>
                  
                  <div className="text-center md:text-right">
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center justify-center md:justify-end">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      Response Guarantee
                    </h4>
                    <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <p>⚡ <span className="font-medium">WhatsApp:</span> Within 30 minutes</p>
                      <p>📧 <span className="font-medium">Email:</span> Within 2-4 hours</p>
                      <p>🚀 <span className="font-medium">Currently accepting</span> new projects</p>
                    </div>
                  </div>
                </div>

                {/* Technologies reference */}
                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-600">
                  <p className="text-center text-sm text-slate-500 dark:text-slate-400 mb-3">
                    This project was built with proven technologies:
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.technologies.slice(0, 6).map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-600">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-700">
                        +{project.technologies.length - 6} more
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}