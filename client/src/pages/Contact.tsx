import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageSquare, Send, Clock, CheckCircle, Star, Zap, Rocket, Shield, Award, TrendingUp, Handshake, MessageCircle, Calendar, Building, Users, Target, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Create WhatsApp message with form data
    const phoneNumber = "+923322060667";
    const whatsappMessage = `📬 *Business Inquiry from Portfolio*

👤 *Contact:* ${form.name}
🏢 *Company:* ${form.company || 'Not specified'}
📧 *Email:* ${form.email}

💼 *Project Details:*
${form.message}

---
*Sent via Portfolio Contact Form*
*Priority: Business Inquiry*`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Delay to show loading state, then open WhatsApp
    setTimeout(() => {
      setLoading(false);
      window.open(whatsappUrl, '_blank');
      
      // Show success message
      toast({
        title: "Message Prepared Successfully!",
        description: "Redirecting to WhatsApp for secure delivery. I'll respond within 2-4 hours.",
      });
      
      // Clear form
      setForm({ name: "", email: "", company: "", message: "" });
    }, 1000);
  };

  const handleStartProject = () => {
    const phoneNumber = "+923322060667";
    const message = `🚀 *Ready to Start a New Project*

Hi Muhammad Safdar Iqbal! I'm interested in initiating a business partnership and would like to discuss:

📋 *Project Category:* [ERP System / POS Solution / Web Application / Mobile App / Custom Software]
🏢 *Company/Industry:* [Your business type]
💰 *Investment Range:* [Your budget expectations]
📅 *Target Launch:* [Preferred completion timeline]
🎯 *Core Objectives:* [Key business goals to achieve]
📊 *Current Challenges:* [Problems you need solved]

I'm ready to move forward with a professional development partnership. When can we schedule a detailed discussion?

*Looking forward to building something exceptional together!*`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFreeConsultation = () => {
    const phoneNumber = "+923322060667";
    const message = `💬 *Request for Strategic Consultation*

Hi Muhammad Safdar Iqbal! I'd like to schedule a complimentary business consultation to explore:

🤔 *Business Vision:* [Brief overview of your project concept]
🏢 *Industry Sector:* [Your business domain]
🎯 *Strategic Goals:* [What you want to achieve]
📊 *Current Pain Points:* [Challenges you're facing]
🔍 *Specific Questions:* [Technical or strategic concerns]
📅 *Availability:* [Your preferred meeting times]

I'm interested in your professional expertise and proven track record. Looking forward to your strategic insights!

*Ready for a productive business discussion.*`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Contact | Muhammad Safdar Iqbal</title>
        <meta name="description" content="Contact Muhammad Safdar Iqbal for enterprise software development, consulting, and business partnerships. Response guaranteed within 2-4 hours." />
        <link rel="canonical" href="https://your-portfolio-domain.com/contact" />
        <meta property="og:title" content="Contact | Muhammad Safdar Iqbal" />
        <meta property="og:description" content="Contact Muhammad Safdar Iqbal for enterprise software development, consulting, and business partnerships. Response guaranteed within 2-4 hours." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio-domain.com/contact" />
        <meta property="og:image" content="https://your-portfolio-domain.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Muhammad Safdar Iqbal" />
        <meta name="twitter:description" content="Contact Muhammad Safdar Iqbal for enterprise software development, consulting, and business partnerships." />
        <meta name="twitter:image" content="https://your-portfolio-domain.com/og-image.png" />
      </Helmet>
      <section className="py-20 bg-white dark:bg-slate-900" id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Get in Touch</h1>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Ready to transform your business with proven technology solutions? Let's discuss how we can achieve extraordinary results together.
            </p>
          </motion.div>

          {/* Enterprise Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-blue-100 dark:border-slate-600">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Projects Delivered</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-green-100 dark:border-slate-600">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">7+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-purple-100 dark:border-slate-600">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">12+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Industries Served</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-orange-100 dark:border-slate-600">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">95%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <Card className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 border-slate-200 dark:border-slate-600">
              <CardContent className="p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Contact Information */}
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Let's Start a Professional Partnership</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                      Whether you need enterprise software development, system integration, or strategic technology consulting, 
                      I'm here to help you achieve measurable business results with proven expertise.
                    </p>
                    
                    {/* Contact Methods */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center text-slate-700 dark:text-slate-200">
                        <MessageSquare className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
                        <div>
                          <div className="font-medium">WhatsApp Business</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">+92 332 2060667 • Available 24/7</div>
                        </div>
                      </div>
                      <div className="flex items-center text-slate-700 dark:text-slate-200">
                        <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                        <div>
                          <div className="font-medium">Business Email</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">eaquirseaquirs@gmail.com</div>
                        </div>
                      </div>
                      <div className="flex items-center text-slate-700 dark:text-slate-200">
                        <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-3" />
                        <div>
                          <div className="font-medium">Response Guarantee</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">Within 2-4 hours • Business priority</div>
                        </div>
                      </div>
                      <div className="flex items-center text-slate-700 dark:text-slate-200">
                        <Globe className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-3" />
                        <div>
                          <div className="font-medium">Time Zone</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">PKT (UTC+5) • Flexible scheduling</div>
                        </div>
                      </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Currently accepting enterprise projects</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">7+ years proven track record</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">Government & enterprise clients</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Start Your Project Discussion</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleChange}
                            className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Business Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400"
                            placeholder="your.email@company.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Company/Organization
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400"
                          placeholder="Your company name (optional)"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Project Requirements *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 resize-none"
                          placeholder="Describe your project goals, timeline, budget range, and specific technical requirements. The more details you provide, the better I can assist you."
                        />
                      </div>
                      <Button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        {loading ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Preparing Message...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Send className="w-4 h-4" />
                            Send Business Inquiry
                          </div>
                        )}
                      </Button>
                      <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                        🔒 Your information is secure and will be handled with complete confidentiality
                      </p>
                    </form>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main CTA Section - Matching Projects Page */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-700 border-blue-200 dark:border-slate-600 overflow-hidden">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 text-white rounded-full mb-6 mx-auto"
                  >
                    <Rocket className="w-10 h-10" />
                  </motion.div>
                  
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    Ready to Transform Your Business?
                  </h2>
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
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
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
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
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
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg mb-3">
                      <Award className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Enterprise Quality</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Government & enterprise partnerships</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-lg mb-3">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Measurable ROI</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">40-95% efficiency improvements</p>
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
                    Strategic Consultation
                  </Button>
                </div>

                {/* Contact Methods Display */}
                <div className="text-center mt-8 p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    💬 <strong>WhatsApp Business:</strong> +92 332 2060667 • 
                    📧 <strong>Email:</strong> eaquirseaquirs@gmail.com
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500">
                    Both options connect you directly with structured templates for professional communication
                  </p>
                </div>

                {/* Urgency & Trust Builder */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="text-center mt-6"
                >
                  <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Limited availability • Currently accepting select enterprise projects</span>
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
} 