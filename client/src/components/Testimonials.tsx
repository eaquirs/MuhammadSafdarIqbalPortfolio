import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { testimonials } from "@/lib/testimonials";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Building, Stethoscope, ShoppingCart, Shield, Factory, Store, TrendingUp, Quote, Palette, Heart, Fuel, Coffee, Globe, Award, ChevronLeft, ChevronRight, Zap, BookOpen, Wrench, Calculator } from "lucide-react";

const getIndustryIcon = (industry: string) => {
  switch (industry) {
    case "Fashion & Design":
      return Palette;
    case "Government Cooperative":
      return Shield;
    case "Healthcare & Nutrition":
    case "Healthcare":
    case "Medical Retail":
      return Heart;
    case "Real Estate Development":
    case "Construction & Real Estate":
    case "International Real Estate":
      return Building;
    case "Food Manufacturing":
    case "Manufacturing":
      return Factory;
    case "Solar & Electronics":
    case "Electronics Retail":
      return Zap;
    case "Petroleum & Energy":
      return Fuel;
    case "Food & Beverage":
      return Coffee;
    case "Educational Retail":
      return BookOpen;
    case "Construction Materials":
      return Wrench;
    case "Financial Management":
      return Calculator;
    default:
      return Store;
  }
};

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      containScroll: 'trimSnaps',
    }, 
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

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
          <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Real results from real clients across diverse industries. See how Muhammad Safdar Iqbal's strategic technology partnerships 
            drive measurable business growth and operational excellence.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative container-safe"
        >
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex -ml-2 sm:-ml-4">
              {testimonials.map((testimonial, index) => {
                const IconComponent = getIndustryIcon(testimonial.industry);
                return (
                  <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-2 sm:pl-4">
                    <Card className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 h-full flex flex-col mx-1 sm:mx-2">
                      <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                        {/* Header with Industry Icon and Stars */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg transition-colors duration-300">
                              <IconComponent className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            </div>
                            <Badge variant="secondary" className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hidden sm:inline-flex">
                              {testimonial.industry}
                            </Badge>
                          </div>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                            ))}
                          </div>
                        </div>

                        {/* Project Type and Result Metric */}
                        <div className="mb-4">
                          <div className="flex items-center justify-between text-sm mb-2 gap-2">
                            <span className="font-medium text-blue-600 dark:text-blue-400 text-xs sm:text-sm truncate">{testimonial.projectType}</span>
                            <div className="flex items-center text-green-600 dark:text-green-400 flex-shrink-0">
                              <TrendingUp className="w-3 h-3 mr-1" />
                              <span className="font-semibold text-xs sm:text-sm">{testimonial.resultMetric}</span>
                            </div>
                          </div>
                          {/* Relationship Badge */}
                          <div className="flex items-center space-x-2">
                            <Award className="w-3 h-3 text-purple-500" />
                            <Badge variant="outline" className="text-xs text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800">
                              {testimonial.relationship}
                            </Badge>
                          </div>
                        </div>

                        {/* Testimonial Content */}
                        <div className="relative mb-6 flex-grow">
                          <Quote className="absolute -top-2 -left-1 w-5 h-5 sm:w-6 sm:h-6 text-blue-200 dark:text-blue-800" />
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed pl-4 sm:pl-6 italic text-xs sm:text-sm text-responsive">
                            {testimonial.content}
                          </p>
                        </div>

                        {/* Client Information */}
                        <div className="flex items-center mt-auto">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 ${testimonial.avatarBg} rounded-full flex items-center justify-center text-white font-bold mr-3 sm:mr-4 shadow-lg text-sm sm:text-base flex-shrink-0`}>
                            {testimonial.initials}
                          </div>
                          <div className="flex-grow min-w-0">
                            <div className="font-semibold text-slate-900 dark:text-slate-200 text-sm sm:text-base truncate">{testimonial.name}</div>
                            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 truncate">{testimonial.role}</div>
                            <div className="text-xs text-blue-600 dark:text-blue-400 font-medium truncate">{testimonial.company}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full p-0 border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 dark:border-blue-800 dark:hover:border-blue-600 dark:hover:bg-blue-950"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            {/* Dots Pagination */}
            <div className="flex space-x-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? 'bg-blue-600 dark:bg-blue-400 scale-110'
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={scrollNext}
              className="w-10 h-10 rounded-full p-0 border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 dark:border-blue-800 dark:hover:border-blue-600 dark:hover:bg-blue-950"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

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
                Ready to achieve similar results for your business? Let's discuss how Muhammad Safdar Iqbal's proven expertise 
                can transform your operations and drive measurable growth.
              </p>
              
              {/* Success Metrics Summary */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">25+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Featured Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">9+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Years Partnership</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">10+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Industries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">100%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Client Retention</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1">
                  ✓ Government Recognition
                </Badge>
                <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1">
                  ✓ 9+ Years Experience
                </Badge>
                <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1">
                  ✓ International Clients
                </Badge>
                <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-3 py-1">
                  ✓ Long-term Partnerships
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
