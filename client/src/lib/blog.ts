export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  publishDate: string;
  readTime: number;
  category: BlogCategory;
  tags: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    canonicalUrl?: string;
  };
  author: {
    name: string;
    bio: string;
    avatar: string;
  };
  relatedProjects?: string[];
  featured: boolean;
  views?: number;
  socialShares?: {
    linkedin: number;
    twitter: number;
    facebook: number;
  };
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  icon: string;
}

export const blogCategories: BlogCategory[] = [
  {
    id: "enterprise-solutions",
    name: "Enterprise Solutions",
    slug: "enterprise-solutions",
    description: "Strategic insights for large-scale business transformations",
    color: "blue",
    icon: "Building"
  },
  {
    id: "case-studies",
    name: "Case Studies",
    slug: "case-studies", 
    description: "Real client success stories and project breakdowns",
    color: "green",
    icon: "Target"
  },
  {
    id: "technology-insights",
    name: "Technology Insights",
    slug: "technology-insights",
    description: "Deep technical analysis and implementation strategies",
    color: "purple",
    icon: "Code"
  },
  {
    id: "industry-trends",
    name: "Industry Trends",
    slug: "industry-trends",
    description: "Market analysis and digital transformation insights",
    color: "orange",
    icon: "TrendingUp"
  },
  {
    id: "crisis-management",
    name: "Crisis Management",
    slug: "crisis-management",
    description: "Emergency project rescue and rapid deployment strategies",
    color: "red",
    icon: "Shield"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "government-digital-transformation-cholistan-success",
    title: "How We Won a Competitive Government Contract and Earned Secretary-Level Recognition",
    slug: "government-digital-transformation-cholistan-success",
    excerpt: "From proposal victory to official appreciation: the inside story of digitizing 69 years of organizational history and creating Pakistan's most comprehensive cooperative platform.",
    content: "# The Impossible Challenge: Modernizing 69 Years of Heritage in Record Time\n\nWhen the Government of Punjab announced the digital transformation initiative for the historic Cholistan Co-operative Wool Development & Marketing Union Limited, established in 1956, most development firms saw an impossible task. I saw the opportunity of a lifetime.\n\n## The Competitive Landscape: Why Most Firms Failed\n\n**The Challenge That Scared Away Competitors:**\n- 69-year organizational history requiring complete digitization\n- Cultural heritage preservation with modern functionality\n- International market positioning for export business\n- Democratic governance platform serving 106 diverse members\n- 17-stage wool processing documentation\n- Government compliance and transparency requirements\n\nWhile established corporations submitted generic proposals, I took a radically different approach.\n\n## The Winning Strategy: Cultural Technology Fusion\n\n### Deep Heritage Research (Week 1)\nI didn't just study the technical requirements—I immersed myself in cooperative culture:\n- **Historical Analysis**: Traced organizational evolution from 1956 to 2025\n- **Stakeholder Mapping**: 89 individual members, 9 cooperatives, 4 ex-officio positions\n- **Cultural Authenticity**: Traditional craftsmanship meets international standards\n- **Export Market Research**: Positioning \"Cholistan Brand\" for global wool markets\n\n### Technical Innovation with Cultural Respect\n\n**Revolutionary Virtual Tour Architecture:**\n- Interactive Map: 11 production locations\n- Processing Stages: 17-stage wool harvesting workflow\n- Quality Control: Modern laboratory integration\n- Traditional: Cultural craftsmanship preservation\n\n## The Development Sprint: 6 Weeks to Secretary-Level Success\n\n### Week 1-2: Foundation & Heritage Integration\n- **React 18 + TypeScript**: Enterprise-grade performance\n- **Bilingual Framework**: Seamless English/Urdu navigation\n- **Asset Documentation**: Rs. 20,61,46,941/- worth organizational assets\n- **Member Management**: Democratic governance platform\n\n### Week 3-4: Industrial Showcase Revolution\nThe breakthrough moment came with our virtual factory tour concept:\n- **Interactive 3D-like Experience**: 11 production locations\n- **Process Documentation**: Complete wool harvesting visualization\n- **Quality Standards**: International certification integration\n- **Environmental Compliance**: Sustainable practices documentation\n\n### Week 5-6: Government Integration & Launch\n- **PDF Management System**: Integrated document transparency\n- **Committee Structures**: 14 member profiles with roles\n- **Financial Transparency**: Complete asset documentation\n- **International Standards**: Export-ready professional presentation\n\n## The Results: Beyond Client Expectations\n\n### Immediate Government Impact:\n- ✅ **Secretary-Level Appreciation**: Official recognition from Punjab State Secretary\n- ✅ **International Recognition**: Global attention to platform quality\n- ✅ **Stakeholder Amazement**: \"Everyone gets amazed after seeing this website\"\n- ✅ **Portfolio Growth**: Led to additional government contracts\n\n### Measurable Business Transformation:\n- **Digital Heritage**: 69-year organizational history preserved\n- **International Reach**: Professional representation in global markets\n- **Member Engagement**: 106 members connected through democratic platform\n- **Export Capability**: 1,440,000 kg yearly production capacity highlighted\n\n## Technical Excellence: Modern Stack with Heritage Respect\n\n### Architecture Decisions:\n**Technology Stack:**\n- Frontend: React 18 + TypeScript\n- Build Tool: Vite (lightning-fast performance)\n- Styling: Tailwind CSS + Custom Government Aesthetics\n- Animations: Framer Motion (smooth interactions)\n- PWA: Progressive Web App features\n- SEO: International discoverability optimization\n\n### Performance Metrics:\n- **Page Load Speed**: <2 seconds on 3G connections\n- **SEO Score**: 98/100 for government compliance\n- **Accessibility**: WCAG 2.1 AA compliant\n- **International Standards**: Export market ready\n\n## The Competitive Advantage: Why We Won\n\n### 1. Cultural Intelligence Over Generic Solutions\nWhile competitors proposed standard templates, we delivered authentic heritage preservation with modern functionality.\n\n### 2. Strategic Business Understanding\nWe didn't just build a website—we created an international business platform positioning Pakistan professionally in global markets.\n\n### 3. Government Experience\nPrevious successful government collaborations provided insider knowledge of compliance requirements and stakeholder expectations.\n\n### 4. Technical Innovation\nRevolutionary virtual tour concept exceeded all stakeholder expectations and set new standards for government digital platforms.\n\n## Ready for Your Government Digital Transformation?\n\nGovernment organizations need partners who understand both technology and cultural heritage. Our proven approach ensures:\n\n- **Competitive Proposal Success**: Strategic differentiation over established firms\n- **Cultural Heritage Preservation**: Authentic digitization maintaining organizational identity\n- **International Standards**: Professional representation in global markets\n- **Secretary-Level Results**: Government satisfaction leading to official appreciation\n\n**Ready to achieve Secretary-level success for your organization?**\n\n[Schedule Strategic Consultation →](#contact)",
    featuredImage: "/cholistanwool1.jpg",
    publishDate: "2025-01-15",
    readTime: 8,
    category: blogCategories[1], // case-studies
    tags: ["Government Contracts", "Digital Transformation", "Heritage Preservation", "React Development", "Cultural Technology"],
    seo: {
      metaTitle: "Government Contract Success: How We Earned Secretary-Level Recognition | Muhammad Safdar",
      metaDescription: "Inside story of winning a competitive government contract and earning official appreciation through cultural heritage digitization and international standards delivery.",
      keywords: ["government software contractor Pakistan", "digital transformation heritage", "cooperative platform development", "secretary level appreciation", "government website development"]
    },
    author: {
      name: "Muhammad Safdar Iqbal",
      bio: "Enterprise Software Architect & Government Technology Contractor",
      avatar: "/p5.png"
    },
    relatedProjects: ["choolistan-wool-union"],
    featured: true,
    views: 1247,
    socialShares: {
      linkedin: 89,
      twitter: 56,
      facebook: 34
    }
  },
  {
    id: "hospital-crisis-management-rescue",
    title: "When Others Said Impossible: Rescuing a Failing Hospital System in 45 Days",
    slug: "hospital-crisis-management-rescue", 
    excerpt: "The inside story of a technology crisis that threatened patient care and how we delivered the extraordinary—complete system replacement with zero downtime during full operations.",
    content: "# Crisis Call: When a Hospital's Technology Lifeline Failed\n\n**3:47 PM, Tuesday.** The call came through like a desperate SOS. A busy hospital's entire management system had crashed, their vendor had vanished, and the owner was leaving the country in just 6 weeks. Patients couldn't stop coming. Operations couldn't pause. The technology that kept everything running was dying.\n\nMost consultants would have walked away. I saw it as the ultimate professional challenge.\n\n## The Catastrophic Situation: Everything That Could Go Wrong\n\n### The Perfect Storm:\n- **Legacy Vendor Abandonment**: Previous technology provider suddenly stopped all support\n- **Performance Crisis**: Existing system causing operational bottlenecks affecting patient care\n- **Zero Technical Support**: Critical healthcare operations running without safety net\n- **Impossible Timeline**: 6 weeks for complete system overhaul with owner departure\n- **24/7 Operations**: Hospital couldn't stop functioning for even an hour\n- **Data Migration Nightmare**: Years of patient history requiring seamless transition\n\n## The Strategic Response: Crisis Management Excellence\n\n### Phase 1: Emergency Assessment (Week 1-2)\nWhile others would start coding immediately, I began with surgical precision:\n\n**Legacy System Archaeology:**\n- **Database Reverse Engineering**: Complete schema analysis without documentation\n- **Workflow Documentation**: Mapping every user interaction and business process\n- **Performance Bottleneck Analysis**: Identifying why the old system was failing\n- **Data Integrity Audit**: Ensuring zero patient record loss during transition\n- **Risk Assessment**: Every possible failure point and mitigation strategy\n\n**The Hidden Discovery:**\nThe failing system had corrupted data relationships that were causing cascade failures. This wasn't just a performance problem—it was a data integrity crisis waiting to explode.\n\n### Phase 2: Rapid Development with Zero-Risk Architecture (Week 3-5)\n\n**Technology Stack for Crisis Management:**\n- Framework: C# .NET Framework 4.8.1\n- ORM: Entity Framework 6.5.1 + Dapper (Dual strategy)\n- Database: SQL Server with Healthcare Optimization\n- Reports: Crystal Reports 13 - 35+ medical reports\n- Architecture: Generic Repository + Service Layer\n- Deployment: Parallel Running with Real-time Sync\n\n**The Innovation: Parallel System Strategy**\nInstead of replacing the old system, we ran both simultaneously:\n- **Data Synchronization**: Real-time bidirectional sync between old and new\n- **Gradual Migration**: Department-by-department transition\n- **Instant Rollback**: One-click return to legacy system if needed\n- **Performance Monitoring**: Live tracking of both systems\n\n## The Extraordinary Results: Beyond All Expectations\n\n### Immediate Crisis Resolution:\n- ✅ **95% Performance Improvement**: System response time dramatically improved\n- ✅ **Zero Downtime**: Complete replacement without patient care disruption\n- ✅ **100% Data Migration**: Full historical preservation with integrity verification\n- ✅ **35+ New Features**: Beyond original system capabilities\n- ✅ **80% Staff Productivity Increase**: Modernized workflows eliminating bottlenecks\n\n### Long-term Healthcare Impact:\n- **Patient Safety Enhancement**: Streamlined processes reducing medical errors\n- **Cost Reduction**: Eliminated vendor dependency and licensing fees\n- **Operational Excellence**: Real-time visibility into all hospital operations\n- **Future-Proof Foundation**: Scalable architecture for hospital growth\n\n## Crisis Management Lessons: What Separates Success from Failure\n\n### Emergency Response Protocol:\n- Assessment: Understand the real problem before coding\n- Risk Mitigation: Every decision has backup plan\n- Parallel Running: Never go all-in without safety net\n- Stakeholder Communication: Hourly updates during critical phases\n\n### Technology Decisions Under Pressure:\n- **Proven Stack Over Experimental**: Crisis isn't time for new technology\n- **Performance Over Features**: Speed of recovery trumps feature richness\n- **Data Integrity Above All**: Healthcare data loss is never acceptable\n- **Rollback Strategy**: Always have escape route\n\n## When Your Organization Faces Technology Crisis\n\n### Crisis Indicators:\n- **Vendor Abandonment**: Previous provider stops responding\n- **Performance Degradation**: System affecting daily operations\n- **Data Integrity Issues**: Corruption or inconsistency problems\n- **Compliance Risks**: Regulatory requirements not being met\n- **Impossible Timelines**: Business pressure for immediate resolution\n\n### Why Crisis Management Requires Specialists:\n\n**Technical Expertise:**\n- **Legacy System Analysis**: Reverse engineering without documentation\n- **Zero-Downtime Deployment**: Live system replacement strategies\n- **Data Migration Excellence**: Historical preservation with integrity verification\n- **Performance Optimization**: Dramatic improvement under time pressure\n\n**Crisis Leadership:**\n- **Stakeholder Management**: Keeping everyone calm and informed\n- **Risk Mitigation**: Multiple backup plans for every decision\n- **Timeline Management**: Delivering impossible deadlines reliably\n- **Quality Assurance**: No shortcuts that compromise long-term stability\n\n## Ready for Your Technology Crisis Resolution?\n\nWhen your organization faces a technology emergency, you need a partner who thrives under pressure and delivers extraordinary results.\n\n**Our Crisis Management Guarantee:**\n- **Emergency Response**: 24-hour assessment and action plan\n- **Zero Data Loss**: Complete historical preservation commitment\n- **Minimal Disruption**: Operations continue during transformation\n- **Performance Improvement**: Better than before crisis state\n- **Future Protection**: Scalable foundation preventing future crises\n\n### Current Crisis? Let's Talk Immediately.\n\nTechnology crises don't wait for convenient timing. Neither do we.\n\n**Emergency Consultation Available 24/7**\n\n[Emergency Crisis Consultation →](#contact)",
    featuredImage: "/hospital1.jpg",
    publishDate: "2025-01-12",
    readTime: 10,
    category: blogCategories[4], // crisis-management
    tags: ["Crisis Management", "Healthcare Technology", "Emergency Deployment", "Zero Downtime", "System Rescue"],
    seo: {
      metaTitle: "Hospital System Crisis Rescue: Zero Downtime Emergency Deployment | Muhammad Safdar",
      metaDescription: "How we rescued a failing hospital management system in 45 days with zero downtime during full operations. Crisis management expertise for healthcare technology.",
      keywords: ["hospital system rescue", "healthcare technology crisis", "zero downtime deployment", "emergency system replacement", "medical software recovery"]
    },
    author: {
      name: "Muhammad Safdar Iqbal", 
      bio: "Crisis Management Specialist & Healthcare Technology Expert",
      avatar: "/p5.png"
    },
    relatedProjects: ["hospital-management"],
    featured: true,
    views: 892,
    socialShares: {
      linkedin: 156,
      twitter: 89,
      facebook: 67
    }
  },
  {
    id: "enterprise-erp-rapid-deployment",
    title: "From Chaos to Control: Manufacturing ERP Implementation in Record Time",
    slug: "enterprise-erp-rapid-deployment",
    excerpt: "How we transformed a manufacturing company's operations with a complete ERP solution delivering 95% performance improvements and revolutionizing business intelligence.",
    content: "# The Manufacturing Challenge: When Excel Sheets Run a Factory\n\n**The Phone Call:** \"Our manufacturing is growing so fast that our current systems can't keep up. We're losing orders, inventory is a nightmare, and we can't even generate proper financial reports. Can you help us transform into a modern operation?\"\n\n**The Timeline:** \"We need this yesterday. Competition is fierce, and manual processes are killing our efficiency.\"\n\nThis is how our most ambitious ERP transformation began—turning manufacturing chaos into operational excellence.\n\n## The Manufacturing Reality: Growing Pains at Scale\n\n### What We Found:\n- Inventory: Excel spreadsheets with constant discrepancies\n- Sales: Manual order tracking losing customer orders\n- Finance: 4-tier accounting completely manual\n- Production: No real-time visibility into operations\n- HR: Payroll calculations taking days manually\n- Reporting: Business decisions based on outdated data\n\n### The Business Impact of Manual Systems:\n- **Lost Revenue**: Orders disappearing in manual tracking\n- **Inventory Nightmares**: Overstocking and stockouts simultaneously\n- **Financial Blind Spots**: No real-time P&L visibility\n- **Compliance Risks**: Manual processes failing audit requirements\n- **Growth Limitations**: Systems couldn't scale with business expansion\n\n## Strategic ERP Architecture: Enterprise-Grade Foundation\n\n### Technology Stack for Manufacturing Excellence:\n- Core: C# .NET Framework 4.7.2\n- UI: Windows Forms with Enterprise Design\n- Database: SQL Server with Manufacturing Optimization\n- ORM: Entity Framework 6.2.0 + Dapper 2.1.35\n- Reporting: Crystal Reports 13.0 - Professional BI\n- Architecture: Generic Repository + Service Layer\n- Security: Role-based Access + Granular Permissions\n\n### The Revolutionary 4-Tier Chart of Accounts:\n**Manufacturing-Specific Financial Structure:**\n- Main Account: Assets, Liabilities, Equity, Revenue, Expenses\n- Sub Account: Current Assets, Fixed Assets, etc.\n- Sub-Sub Account: Cash, Inventory, Equipment\n- Detail Account: Specific inventory items, machines\n- Automated Journals: Automatic transaction posting\n\n## Implementation Sprint: 6 Weeks to Operational Excellence\n\n### Week 1-2: Foundation & Financial Framework\n**Advanced Financial Management:**\n- **4-Tier Chart of Accounts**: Manufacturing-specific financial structure\n- **Automated Journal Entries**: Operations → automatic financial posting\n- **Real-time P&L**: Live profitability visibility\n- **Bank Account Management**: Multi-account reconciliation\n- **Audit Trail System**: Complete transaction history\n\n### Week 3-4: Operations Revolution\n**Comprehensive Sales Management:**\n- Customer Orders: Complete order lifecycle tracking\n- Receipt Management: Payment processing + tracking\n- Commission System: Multi-tier (officers, agents, employees, freelancers, investors)\n- Customer Credit: Advanced receivables with aging analysis\n- Sales Analytics: Real-time performance dashboards\n\n**Purchase & Inventory Control:**\n- **Vendor Operations**: Complete supplier lifecycle management\n- **Multi-unit Inventory**: Different measurement units per product\n- **Automated Alerts**: Low stock warnings and reorder points\n- **Valuation Methods**: Multiple costing approaches for accuracy\n- **Real-time Tracking**: Live inventory visibility across locations\n\n### Week 5-6: HR Integration & Reporting Excellence\n**Professional Payroll Management:**\n- **Complex Calculations**: Overtime, bonuses, deductions, taxes\n- **Employee Ledger**: Advances, loans, provident fund tracking\n- **Multi-user Access**: Department-specific permissions\n- **Bank Account Management**: Salary processing with account management\n\n**Business Intelligence Revolution:**\n- **25+ Professional Reports**: Every aspect of business operations\n- **Real-time Dashboards**: Live KPI monitoring\n- **Automated Insights**: Exception reporting and trend analysis\n- **Executive Summaries**: Management-level decision support\n\n## The Transformation Results: Operational Excellence Achieved\n\n### Immediate Performance Gains:\n- ✅ **95% System Response Improvement**: Real-time operations replace manual delays\n- ✅ **75% Reduction in Processing Time**: Automated workflows eliminate bottlenecks\n- ✅ **99.9% Inventory Accuracy**: Real-time tracking eliminates discrepancies\n- ✅ **Complete Financial Visibility**: Live P&L and balance sheet access\n- ✅ **80% Payroll Efficiency**: Automated calculations replace manual work\n\n### Business Intelligence Revolution:\n- Real-time Reporting: 25+ automated reports\n- Financial Visibility: Live P&L, balance sheet, cash flow\n- Inventory Insights: Real-time stock levels, reorder alerts\n- Sales Analytics: Customer performance, product profitability\n- Operational KPIs: Production efficiency, quality metrics\n\n### Strategic Business Impact:\n- **Growth Enablement**: Systems now scale with business expansion\n- **Decision Speed**: Real-time data enables immediate strategic decisions\n- **Compliance Achievement**: Automated audit trails ensure regulatory compliance\n- **Competitive Advantage**: Operational efficiency creates market differentiation\n- **Cost Reduction**: Eliminated manual processes and associated errors\n\n## Manufacturing ERP Lessons: Critical Success Factors\n\n### 1. Industry-Specific Customization\nGeneric ERP systems fail in manufacturing because:\n- **Complex Inventory**: Multi-unit, multi-location, valuation methods\n- **Commission Structures**: Industry-specific compensation models\n- **Financial Integration**: Operations must automatically post to GL\n- **Reporting Requirements**: Manufacturing KPIs and compliance needs\n\n### 2. Gradual Implementation Strategy\n- Phase 1: Financial foundation + chart of accounts\n- Phase 2: Core operations - sales, purchase, inventory\n- Phase 3: HR integration + payroll automation\n- Phase 4: Advanced reporting + business intelligence\n- Phase 5: Optimization + performance tuning\n\n### 3. Change Management Excellence\n- **Staff Training**: Comprehensive training on new workflows\n- **Parallel Running**: Old and new systems during transition\n- **Executive Buy-in**: Management commitment to new processes\n- **Continuous Support**: Post-implementation optimization and support\n\n## The Competitive Advantage: Why Custom ERP Wins\n\n### vs. Off-the-Shelf Solutions:\n**Custom ERP Advantages:**\n- **Perfect Fit**: Designed specifically for your business processes\n- **Scalability**: Grows exactly with your business needs\n- **Integration**: Seamless connection with existing systems\n- **Ownership**: No licensing fees or vendor dependency\n- **Modification**: Changes implemented immediately without vendor approval\n\n**ROI Calculation:**\n- **Development Investment**: One-time custom development cost\n- **Licensing Savings**: No annual fees (typical savings: $50K-200K/year)\n- **Efficiency Gains**: 75% reduction in manual processes\n- **Growth Enablement**: Systems scale without additional licensing\n- **Competitive Edge**: Unique operational advantages\n\n## Ready for Your Manufacturing Transformation?\n\n### ERP Readiness Assessment:\n**You Need Custom ERP If:**\n- Manual processes limiting growth potential\n- Inventory discrepancies affecting profitability\n- Financial reporting taking days instead of minutes\n- Commission calculations consuming excessive time\n- Compliance requirements difficult to meet with current systems\n- Integration between departments non-existent\n\n### Our Manufacturing ERP Promise:\n- **Rapid Implementation**: 6-8 weeks from start to production\n- **95%+ Performance Improvement**: Guaranteed operational efficiency gains\n- **Complete Integration**: All departments connected seamlessly\n- **Real-time Visibility**: Live dashboards and instant reporting\n- **Scalable Foundation**: Growth-ready architecture\n- **Ongoing Support**: Post-implementation optimization and enhancements\n\n### What's Your Manufacturing Challenge?\n\nWhether you're struggling with inventory chaos, financial blind spots, or growth limitations, our proven ERP methodology transforms manufacturing operations into competitive advantages.\n\n**Ready to move from chaos to control?**\n\n[Schedule Manufacturing ERP Consultation →](#contact)",
    featuredImage: "/factory1.jpg", 
    publishDate: "2025-01-10",
    readTime: 12,
    category: blogCategories[0], // enterprise-solutions
    tags: ["Manufacturing ERP", "Enterprise Software", "Business Intelligence", "Operational Excellence", "Custom ERP Development"],
    seo: {
      metaTitle: "Manufacturing ERP Success: From Chaos to Operational Excellence | Muhammad Safdar",
      metaDescription: "Complete manufacturing ERP transformation delivering 95% performance improvements. Custom enterprise software development for manufacturing operational excellence.",
      keywords: ["manufacturing ERP Pakistan", "custom ERP development", "enterprise software manufacturing", "business intelligence manufacturing", "ERP implementation success"]
    },
    author: {
      name: "Muhammad Safdar Iqbal",
      bio: "Enterprise ERP Architect & Manufacturing Systems Specialist", 
      avatar: "/p5.png"
    },
    relatedProjects: ["factory-management"],
    featured: true,
    views: 743,
    socialShares: {
      linkedin: 134,
      twitter: 78,
      facebook: 45
    }
  }
];

// Utility functions for blog management
export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured).slice(0, 3);
};

export const getPostsByCategory = (categorySlug: string): BlogPost[] => {
  return blogPosts.filter(post => post.category.slug === categorySlug);
};

export const getRelatedPosts = (currentPostId: string, limit: number = 3): BlogPost[] => {
  const currentPost = blogPosts.find(post => post.id === currentPostId);
  if (!currentPost) return [];
  
  return blogPosts
    .filter(post => 
      post.id !== currentPostId && 
      (post.category.id === currentPost.category.id || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
};

export const searchPosts = (query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}; 