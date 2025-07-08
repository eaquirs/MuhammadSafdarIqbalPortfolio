import { motion } from "framer-motion";
import { testimonials } from "@/lib/testimonials";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Building, Stethoscope, ShoppingCart, Shield, Factory, Store, TrendingUp, Quote } from "lucide-react";

const getIndustryIcon = (industry: string) => {
  switch (industry) {
    case "Technology":
      return Building;
    case "Healthcare":
      return Stethoscope;
    case "Retail & Food":
      return ShoppingCart;
    case "Government":
      return Shield;
    case "Manufacturing":
      return Factory;
    case "Multi-Retail":
      return Store;
    default:
      return Building;
  }
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Client Success Stories</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Real results from real clients across diverse industries. See how strategic technology partnerships 
            drive measurable business growth and operational excellence.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const IconComponent = getIndustryIcon(testimonial.industry);
            return (
                             <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: index * 0.1 }}
                 viewport={{ once: true }}
                 whileHover={{ 
                   translateY: -2,
                   transition: { duration: 0.2 }
                 }}
                 className="h-full"
               >
                 <Card className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 h-full flex flex-col">
                  <CardContent className="p-6 flex flex-col h-full">
                                         {/* Header with Industry Icon and Stars */}
                     <div className="flex items-center justify-between mb-4">
                       <div className="flex items-center space-x-2">
                         <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg transition-colors duration-300">
                           <IconComponent className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                         </div>
                        <Badge variant="secondary" className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                          {testimonial.industry}
                        </Badge>
                      </div>
                                             <div className="flex text-yellow-400">
                         {[...Array(5)].map((_, i) => (
                           <Star key={i} className="w-4 h-4 fill-current" />
                         ))}
                       </div>
                    </div>

                    {/* Project Type and Result Metric */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="font-medium text-blue-600 dark:text-blue-400">{testimonial.projectType}</span>
                        <div className="flex items-center text-green-600 dark:text-green-400">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          <span className="font-semibold">{testimonial.resultMetric}</span>
                        </div>
                      </div>
                    </div>

                                         {/* Testimonial Content */}
                     <div className="relative mb-6 flex-grow">
                       <Quote className="absolute -top-2 -left-1 w-6 h-6 text-blue-200 dark:text-blue-800" />
                       <p className="text-slate-600 dark:text-slate-300 leading-relaxed pl-6 italic">
                         {testimonial.content}
                       </p>
                     </div>

                                         {/* Client Information */}
                     <div className="flex items-center mt-auto">
                       <div className={`w-12 h-12 ${testimonial.avatarBg} rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-lg`}>
                         {testimonial.initials}
                       </div>
                      <div className="flex-grow">
                        <div className="font-semibold text-slate-900 dark:text-slate-200">{testimonial.name}</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</div>
                        <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Building Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 border-blue-200 dark:border-slate-600">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Join These Successful Organizations
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 max-w-3xl mx-auto">
                Ready to achieve similar results for your business? Let's discuss how proven expertise 
                can transform your operations and drive measurable growth.
              </p>
              
              {/* Success Metrics Summary */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">6</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Industries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">95%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Avg. Performance Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">100%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">24/7</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Support Available</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1">
                  ✓ Government Approved
                </Badge>
                <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1">
                  ✓ Enterprise Grade
                </Badge>
                <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1">
                  ✓ Multi-Industry Experience
                </Badge>
                <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-3 py-1">
                  ✓ Crisis Management Expert
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
