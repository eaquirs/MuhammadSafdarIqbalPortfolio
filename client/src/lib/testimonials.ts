export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  projectType: string;
  resultMetric: string;
  initials: string;
  avatarBg: string;
  industry: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ahmed Hassan",
    role: "CEO & Founder",
    company: "UAE Tech Solutions",
    content: "Muhammad delivered an exceptional ERP solution that transformed our entire business operations. His technical expertise, attention to detail, and ability to understand complex business requirements are remarkable. The system handles 500+ daily transactions flawlessly.",
    projectType: "Enterprise ERP System",
    resultMetric: "75% efficiency improvement",
    initials: "AH",
    avatarBg: "bg-blue-600",
    industry: "Technology"
  },
  {
    name: "Dr. Sarah Khan",
    role: "Medical Director",
    company: "Eye Care Center",
    content: "Outstanding work on our comprehensive hospital management system. The solution is robust, user-friendly, and has significantly improved our patient care workflow. The system now manages 200+ patients daily with zero downtime since deployment.",
    projectType: "Hospital Management System",
    resultMetric: "95% performance improvement",
    initials: "SK",
    avatarBg: "bg-green-600",
    industry: "Healthcare"
  },
  {
    name: "Maria Rodriguez",
    role: "Operations Manager",
    company: "Café Chain International",
    content: "The comprehensive POS system Muhammad developed for our restaurant chain exceeded all expectations. It's lightning-fast, completely reliable, and the detailed reporting features provide insights we never had before. Managing 15+ locations is now seamless.",
    projectType: "Multi-Location POS System",
    resultMetric: "90% operational efficiency",
    initials: "MR",
    avatarBg: "bg-purple-600",
    industry: "Retail & Food"
  },
  {
    name: "Muhammad Ali Khan",
    role: "Government Official",
    company: "Cholistan Development Authority",
    content: "Muhammad's work on the Cholistan Wool Union digital platform was exemplary and received official government appreciation. The project successfully digitalized our 69-year heritage wool trade operations and created a virtual tour of 11 factory locations.",
    projectType: "Government Digital Platform",
    resultMetric: "100% digital transformation",
    initials: "MAK",
    avatarBg: "bg-indigo-600",
    industry: "Government"
  },
  {
    name: "James Wilson",
    role: "Production Manager",
    company: "Ace Protein Factory",
    content: "The comprehensive ERP system Muhammad delivered in just 2 months was nothing short of exceptional. With 8 major modules and 25+ Crystal Reports, it handles our entire production pipeline. The system processes 1000+ daily transactions without any issues.",
    projectType: "Production ERP System",
    resultMetric: "60% productivity increase",
    initials: "JW",
    avatarBg: "bg-orange-600",
    industry: "Manufacturing"
  },
  {
    name: "Alex Thompson",
    role: "Business Owner",
    company: "Multi-Industry Retail Group",
    content: "The X2 Universal POS system Muhammad developed is deployed across our bookstores, electronics stores, pharmacies, and food chains. The system handles diverse inventory needs perfectly and the 80+ business intelligence reports provide incredible insights.",
    projectType: "Universal POS System",
    resultMetric: "90% efficiency improvement",
    initials: "AT",
    avatarBg: "bg-teal-600",
    industry: "Multi-Retail"
  }
];
