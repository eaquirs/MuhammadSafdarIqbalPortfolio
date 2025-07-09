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
  relationship: string; // Added to highlight long-term relationships
}

export const testimonials: Testimonial[] = [
  // Long-term Client - 9+ Years Partnership
  {
    name: "Adeel",
    role: "CEO & Founder",
    company: "Gman Group",
    content: "I've been working with Muhammad Safdar Iqbal for over 9 years across multiple projects - from our tailoring software to interiors management system and ecommerce platform. His consistency in delivering professional solutions and understanding our evolving business needs has made him our go-to technology partner. The tailoring software still runs perfectly after all these years.",
    projectType: "Multi-Project Portfolio",
    resultMetric: "9+ years partnership",
    initials: "AD",
    avatarBg: "bg-blue-600",
    industry: "Fashion & Design",
    relationship: "9+ Years"
  },
  
  // Government Recognition
  {
    name: "Malik Imtiaz",
    role: "Manager",
    company: "Cholistan Wool Union",
    content: "The digital transformation platform Muhammad Safdar Iqbal delivered exceeded all expectations. We received appreciation calls from the District Cooperative Inspector and inquiries from other district departments wanting similar solutions. The 69-year heritage digitalization with virtual factory tours has positioned us internationally.",
    projectType: "Government Digital Platform",
    resultMetric: "Official government recognition",
    initials: "MI",
    avatarBg: "bg-indigo-600",
    industry: "Government Cooperative",
    relationship: "Official Recognition"
  },

  // Healthcare Excellence
  {
    name: "Dr. Javaid Khan",
    role: "Medical Director",
    company: "Health Wellness Nutrition",
    content: "Muhammad Safdar Iqbal developed our complete ecommerce platform that serves as Pakistan's leading organic superfoods destination. The platform handles our 5,000+ customers seamlessly and the WooCommerce integration with custom features has driven significant business growth. His understanding of healthcare e-commerce is exceptional.",
    projectType: "Healthcare E-commerce Platform",
    resultMetric: "5,000+ customers served",
    initials: "JK",
    avatarBg: "bg-green-600",
    industry: "Healthcare & Nutrition",
    relationship: "Long-term Partnership"
  },

  // Real Estate - Multiple Projects
  {
    name: "Ch. Alamgir Gujjar",
    role: "CEO",
    company: "Hussain Developers",
    content: "We've purchased the Turner Real Estate software for 7 different projects over the years. The system's ability to handle multiple housing projects simultaneously with comprehensive management features has been invaluable. Muhammad's solution scales perfectly as our business grows.",
    projectType: "Multi-Project Real Estate ERP",
    resultMetric: "7 projects managed",
    initials: "AG",
    avatarBg: "bg-orange-600",
    industry: "Real Estate Development",
    relationship: "Multiple Projects"
  },

  // Hospital Crisis Management
  {
    name: "Rashid Gujjar",
    role: "Hospital Manager",
    company: "Healthcare Facility",
    content: "When our previous hospital management system failed completely, Muhammad stepped in during a crisis and delivered a comprehensive replacement in record time. The new system with 35+ medical reports and zero-downtime transition saved our operations. His crisis management skills are exceptional.",
    projectType: "Hospital Management System",
    resultMetric: "Zero downtime transition",
    initials: "RG",
    avatarBg: "bg-red-600",
    industry: "Healthcare",
    relationship: "Crisis Resolution"
  },

  // Retail Success Story
  {
    name: "Dr. Abu Huzaifa",
    role: "Medical Director",
    company: "Abu Huzaifa Clinic",
    content: "I replaced my pharmacy system vendor with Muhammad's X2 Retail solution and the difference is remarkable. His professionalism and the system's robust pharmacy management features have streamlined our entire operation. The transition was smooth and the results immediate.",
    projectType: "Pharmacy Management System",
    resultMetric: "Professional vendor upgrade",
    initials: "AH",
    avatarBg: "bg-purple-600",
    industry: "Medical Retail",
    relationship: "Vendor Replacement"
  },

  // Manufacturing Excellence - 5+ Years
  {
    name: "Ch. Zaffar",
    role: "CEO & Partners",
    company: "Ace Protein Factory",
    content: "Muhammad delivered our complete manufacturing ERP system that revolutionized our production operations. With 5+ years of reliable service, the system handles everything from inventory to financial reporting. The 4-tier chart of accounts and automated workflows have increased our efficiency by 95%.",
    projectType: "Manufacturing ERP System",
    resultMetric: "95% efficiency increase",
    initials: "CZ",
    avatarBg: "bg-teal-600",
    industry: "Food Manufacturing",
    relationship: "5+ Years"
  },

  // Multi-Location Retail
  {
    name: "Jamshaid",
    role: "CEO",
    company: "Jamshaid Solars",
    content: "The X2 Universal POS system has been perfect for our solar and electronics business. The system handles our complex inventory of solar panels, electronics, and installation services effortlessly. Muhammad's solution adapted to our unique business requirements perfectly.",
    projectType: "Solar & Electronics POS",
    resultMetric: "Complete business automation",
    initials: "JS",
    avatarBg: "bg-yellow-600",
    industry: "Solar & Electronics",
    relationship: "Specialized Solution"
  },

  // Real Estate Portfolio Client
  {
    name: "Syed Ahmad Alam",
    role: "CEO",
    company: "Al Ahmad Builders",
    content: "We've used Turner Real Estate software for 2 major projects and the results speak for themselves. The comprehensive project management, financial tracking, and customer management features have streamlined our operations significantly. Muhammad's ongoing support has been exceptional.",
    projectType: "Real Estate Management",
    resultMetric: "2 major projects completed",
    initials: "SA",
    avatarBg: "bg-cyan-600",
    industry: "Construction & Real Estate",
    relationship: "Multiple Projects"
  },

  // Petroleum Industry
  {
    name: "Ch. Asad Masood",
    role: "CEO",
    company: "Shamim Petroleum (Attock Pump)",
    content: "Muhammad developed our fuel station management system that handles everything from inventory to financial operations. The system's reliability and comprehensive reporting have made our fuel station operations much more efficient and profitable. His understanding of the petroleum industry is impressive.",
    projectType: "Fuel Station Management",
    resultMetric: "Complete automation",
    initials: "AM",
    avatarBg: "bg-gray-600",
    industry: "Petroleum & Energy",
    relationship: "Industry Expertise"
  },

  // Food Industry Success
  {
    name: "Shakeel",
    role: "CEO",
    company: "Satluj Foods",
    content: "The X2 Retail POS system Muhammad implemented for our food business has exceeded expectations. The system handles our inventory, sales, and customer management perfectly. The real-time reporting gives us insights we never had before about our business performance.",
    projectType: "Food Industry POS",
    resultMetric: "Real-time business insights",
    initials: "SH",
    avatarBg: "bg-emerald-600",
    industry: "Food & Beverage",
    relationship: "Ongoing Partnership"
  },

  // International Client
  {
    name: "Ashfaq",
    role: "CEO",
    company: "Turner Yazman Builder",
    content: "Even while living in Germany, I can manage my Pakistani real estate projects effortlessly through Muhammad Safdar Iqbal's Turner software. The system's remote accessibility and comprehensive project management features allow me to stay connected with every aspect of my business from abroad.",
    projectType: "International Real Estate Management",
    resultMetric: "Global accessibility",
    initials: "AS",
    avatarBg: "bg-violet-600",
    industry: "International Real Estate",
    relationship: "Global Solution"
  },

  // Food & Cafe Industry
  {
    name: "Ch. Usman",
    role: "CEO",
    company: "Khalid Cafe",
    content: "Muhammad Safdar Iqbal delivered an excellent X2 Retail POS system for our cafe operations. The system perfectly handles our food inventory, customer orders, and daily sales reporting. The user-friendly interface made staff training effortless, and the real-time reporting helps us track our cafe's performance throughout the day.",
    projectType: "Cafe POS System",
    resultMetric: "Streamlined operations",
    initials: "CU",
    avatarBg: "bg-amber-600",
    industry: "Food & Beverage",
    relationship: "Complete Solution"
  },

  // Real Estate - Munawar Builder
  {
    name: "Munawar",
    role: "CEO",
    company: "Munawar Builder",
    content: "Muhammad Safdar Iqbal's Turner Real Estate software has been perfect for managing our Taskeen Garden project. The comprehensive project management features, customer tracking, and financial reporting have streamlined our entire development process. The system's reliability has made our operations much more professional.",
    projectType: "Real Estate Project Management",
    resultMetric: "Project streamlined",
    initials: "MU",
    avatarBg: "bg-emerald-600",
    industry: "Real Estate Development",
    relationship: "Single Project Success"
  },

  // Real Estate - Ajmal Developers
  {
    name: "Ch. Akmal",
    role: "CEO",
    company: "Ajmal Developers",
    content: "We've used Muhammad Safdar Iqbal's Turner software for 2 major projects and the results have been outstanding. The system's ability to handle multiple project phases, customer management, and financial tracking simultaneously has been invaluable for our growing business.",
    projectType: "Multi-Project Development",
    resultMetric: "2 projects managed",
    initials: "CA",
    avatarBg: "bg-lime-600",
    industry: "Real Estate Development",
    relationship: "Multiple Projects"
  },

  // Real Estate - Al Arfat Builders
  {
    name: "Ch. Asad Shakir",
    role: "CEO",
    company: "Al Arfat Builders",
    content: "Muhammad Safdar Iqbal's Turner Real Estate solution has transformed our construction business operations. The comprehensive project management and financial tracking capabilities have given us complete control over our development projects. The system's reliability is exceptional.",
    projectType: "Construction Management System",
    resultMetric: "Complete control achieved",
    initials: "AS",
    avatarBg: "bg-teal-600",
    industry: "Construction & Real Estate",
    relationship: "Trusted Partnership"
  },

  // Real Estate - Al Qamar Builders
  {
    name: "Irfan",
    role: "CEO",
    company: "Al Qamar Builders",
    content: "Muhammad Safdar Iqbal delivered Turner software for our 2 real estate projects and exceeded our expectations. The system's project tracking, customer management, and automated reporting have significantly improved our operational efficiency and customer satisfaction.",
    projectType: "Dual Project Management",
    resultMetric: "2 projects optimized",
    initials: "IR",
    avatarBg: "bg-indigo-600",
    industry: "Real Estate Development",
    relationship: "Multiple Projects"
  },

  // Real Estate - Wali Builders
  {
    name: "Sohail Kamran",
    role: "CEO",
    company: "Wali Builders",
    content: "Muhammad Safdar Iqbal's Turner Real Estate software has been excellent for managing our construction project. The comprehensive features for project management, customer relations, and financial tracking have made our operations much more professional and efficient.",
    projectType: "Construction Project System",
    resultMetric: "Professional operations",
    initials: "SK",
    avatarBg: "bg-cyan-600",
    industry: "Construction & Real Estate",
    relationship: "Project Success"
  },

  // Real Estate - Royal Builders
  {
    name: "Mubashir Kamran",
    role: "CEO",
    company: "Royal Builders",
    content: "The Turner Real Estate system Muhammad Safdar Iqbal developed has been instrumental in managing our construction projects. The system's comprehensive project tracking and customer management features have elevated our business operations to a professional level.",
    projectType: "Royal Construction Management",
    resultMetric: "Professional elevation",
    initials: "MK",
    avatarBg: "bg-rose-600",
    industry: "Construction & Real Estate",
    relationship: "Business Enhancement"
  },

  // Electronics - Qayoom Electronics
  {
    name: "Qayoom",
    role: "CEO",
    company: "Qayoom Electronics",
    content: "Muhammad Safdar Iqbal's X2 Retail POS system has been perfect for our electronics business. The system handles our diverse inventory of electronic items efficiently and the reporting features give us clear insights into our sales performance and stock management.",
    projectType: "Electronics Retail POS",
    resultMetric: "Inventory optimized",
    initials: "QA",
    avatarBg: "bg-blue-600",
    industry: "Electronics Retail",
    relationship: "Efficient Operations"
  },

  // Pharmacy - Azmat Pharmacy
  {
    name: "Ch. Asad Masood",
    role: "Owner",
    company: "Azmat Pharmacy",
    content: "Muhammad Safdar Iqbal's X2 Retail system has transformed our pharmacy operations. The specialized pharmacy features, medicine inventory management, and customer tracking have made our daily operations smooth and professional. The system handles all our pharmaceutical requirements perfectly.",
    projectType: "Pharmacy Management System",
    resultMetric: "Operations transformed",
    initials: "AM",
    avatarBg: "bg-green-600",
    industry: "Medical Retail",
    relationship: "Professional Operations"
  },

  // Pharmacy - Al Rahim Pharmacy
  {
    name: "Muhammad Muzair",
    role: "Owner",
    company: "Al Rahim Pharmacy",
    content: "The X2 Retail solution Muhammad Safdar Iqbal provided has been excellent for our pharmacy business. The system's medicine inventory management, expiry tracking, and customer management features have significantly improved our service quality and operational efficiency.",
    projectType: "Pharmacy Retail System",
    resultMetric: "Service quality improved",
    initials: "MM",
    avatarBg: "bg-emerald-600",
    industry: "Medical Retail",
    relationship: "Quality Enhancement"
  },

  // Electronics - Tariq Electronics
  {
    name: "Tariq",
    role: "CEO",
    company: "Tariq Electronics",
    content: "Muhammad Safdar Iqbal's X2 Retail POS has been fantastic for our electronics store. The system manages our diverse electronic inventory efficiently and the sales reporting gives us valuable insights into our business performance. The reliability has been outstanding.",
    projectType: "Electronics Store POS",
    resultMetric: "Business insights gained",
    initials: "TA",
    avatarBg: "bg-purple-600",
    industry: "Electronics Retail",
    relationship: "Outstanding Reliability"
  },

  // Book Store - Student Book Shop
  {
    name: "Sheikh Umar Rasheed",
    role: "Manager",
    company: "Student Book Shop",
    content: "Muhammad Safdar Iqbal's X2 Retail system has been perfect for managing our bookstore operations. The system handles our extensive book inventory, student customer management, and academic sales cycles efficiently. The reporting features help us track seasonal demand patterns.",
    projectType: "Bookstore Management System",
    resultMetric: "Academic sales optimized",
    initials: "UR",
    avatarBg: "bg-orange-600",
    industry: "Educational Retail",
    relationship: "Academic Excellence"
  },

  // Iron Store
  {
    name: "Ch. Arslan",
    role: "Owner",
    company: "Iron Store",
    content: "Muhammad Safdar Iqbal developed an excellent X2 Retail solution for our iron and steel business. The system handles our heavy inventory management, weight-based calculations, and construction industry customer management perfectly. The robust system has improved our operational efficiency significantly.",
    projectType: "Iron & Steel Retail System",
    resultMetric: "Heavy inventory managed",
    initials: "AR",
    avatarBg: "bg-gray-600",
    industry: "Construction Materials",
    relationship: "Robust Operations"
  },

  // Expense Management
  {
    name: "Ch. Alam Gujjar",
    role: "CEO",
    company: "Business Operations",
    content: "Muhammad Safdar Iqbal's Expense Management System has revolutionized how we track and control our business expenses. The comprehensive reporting and categorization features give us complete visibility into our spending patterns and help us make informed financial decisions.",
    projectType: "Expense Management System",
    resultMetric: "Financial control achieved",
    initials: "AG",
    avatarBg: "bg-slate-600",
    industry: "Financial Management",
    relationship: "Financial Revolution"
  },

  // Petroleum - ZIC Petroleum
  {
    name: "Ch. Zaffar",
    role: "CEO",
    company: "ZIC Petroleum",
    content: "Muhammad Safdar Iqbal delivered an excellent fuel station management system for our petroleum business. The system handles fuel inventory, sales tracking, and financial management with precision. The reliability and accuracy have improved our station operations significantly.",
    projectType: "Petroleum Station Management",
    resultMetric: "Station operations improved",
    initials: "CZ",
    avatarBg: "bg-yellow-600",
    industry: "Petroleum & Energy",
    relationship: "Precision Operations"
  }
];
