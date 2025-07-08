export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "gman-stitching",
    title: "Gman Stitching Platform",
    description:
      "Full-stack tailoring software with order management, customer profiles, and Docker deployment on VPS.",
    fullDescription:
      `A growing business management company was struggling with their existing enterprise management system. The application, originally built with PHP/Laravel and Vue.js, was experiencing significant performance issues and had become increasingly difficult to maintain and extend. The client had reached a critical point where their previous developer could no longer effectively implement necessary changes, leading them to seek a new development partner.\n\nAfter a thorough analysis of the existing system, I proposed a complete technology stack modernization and architectural redesign. The solution would focus on:\n\n1. Full Stack Transformation : Migrating from PHP/Laravel and Vue.js to a more scalable and performant Node.js/Express.js backend with a React.js frontend.\n2. Database Redesign : Implementing a flexible, normalized database schema that would ensure data integrity while allowing for future expansion.\n3. Modular Architecture : Restructuring the application using a clear separation of concerns with distinct controllers, services, and routes.\n4. Comprehensive Accounting Module : Leveraging my 7 years of experience in developing business software with C# to implement robust accounting functionality.\n5. Containerization : Implementing Docker for consistent development and deployment environments.\n\nImplementation Details Backend Transformation\nThe new backend was built using Node.js with Express.js, providing a lightweight and high-performance foundation. Key components included:\n\n- RESTful API Architecture : Clearly defined endpoints organized by business domain (customers, orders, designs, accounting, etc.)\n- Prisma ORM Integration : Type-safe database queries with efficient data handling\n- JWT Authentication : Secure user management with role-based access control\n- Middleware Pipeline : Custom middleware for authentication, request validation, and error handling\n- Swagger Documentation : Self-documenting API endpoints for easier integration and testing Database Redesign\nThe database was completely restructured to support:\n\n- Dynamic Configuration : Flexible schema allowing users to define custom job cards, size items, and other business-specific entities without developer intervention\n- Referential Integrity : Proper relationships between entities ensuring data consistency\n- Normalized Structure : Elimination of data redundancy while maintaining query performance\n- Scalable Design : Architecture that accommodates future growth and new feature additions Accounting Module Implementation\nLeveraging my extensive experience in financial software development, I implemented a comprehensive accounting system featuring:\n\n- Chart of Accounts : Multi-level account hierarchy with main, sub, and sub-sub accounts\n- General Ledger : Complete transaction tracking with proper double-entry bookkeeping\n- Financial Reporting : Balance sheets, profit & loss statements, and custom reports\n- Payment Processing : Integration with various payment methods and tracking Frontend Modernization\nThe frontend was rebuilt using React.js with modern UI components:\n\n- Ant Design Framework : Professional, consistent UI elements across the application\n- Redux State Management : Predictable state handling for complex data flows\n- Responsive Design : Mobile-friendly interface adapting to different screen sizes\n- Interactive Reporting : Dynamic charts and visualizations for business analytics\n\nResults & Business Impact\n1. Performance Improvement : Application response time decreased by approximately 70%, significantly enhancing user experience.\n2. Business Agility : The client can now independently configure new business entities (job cards, size items, etc.) without requiring developer assistance.\n3. Data Reliability : Improved data integrity ensures customer information is consistent and reliable across the system.\n4. Operational Efficiency : The new accounting module streamlined financial operations, reducing manual work and potential errors.\n5. Scalability : The system can now handle increased load and additional features without performance degradation.\n6. Maintenance Simplicity : The modular architecture makes future modifications and debugging significantly easier.\n\nTechnical Highlights\n- Node.js/Express Backend : Scalable server architecture with clear separation of concerns\n- React.js Frontend : Modern, component-based UI with efficient rendering\n- MySQL Database : Optimized relational database with Prisma ORM\n- Docker Containerization : Consistent deployment across environments\n- JWT Authentication : Secure, token-based user management\n- RESTful API Design : Well-structured endpoints following best practices\n- Swagger Documentation : Self-documenting API for easier integration\n\nClient Testimonial\n"After struggling with our previous system's limitations and the inability to implement necessary changes, the transformation has been remarkable. The application is now significantly faster, and we can adapt it to our evolving business needs without constant developer intervention. The addition of comprehensive accounting features has streamlined our operations considerably. We're extremely satisfied with the results."\n\nConclusion\nThis project demonstrates my ability to transform legacy systems into modern, scalable applications while addressing critical business needs. By combining technical expertise with a deep understanding of business requirements, I delivered a solution that not only resolved immediate performance and flexibility issues but also positioned the client for future growth and adaptation.\n\nThe successful implementation of this project showcases my full-stack development capabilities, database design expertise, and ability to translate business requirements into effective technical solutions. The modular, maintainable architecture ensures that the client can continue to evolve their business without the technical constraints they previously faced.`,
    image:
      "https://pixabay.com/get/g4ce9b2f165ccfab6acf713fdf003ddd3ea4279f4c7381f011064820cdcc972ad536feb994eaed0eea9df5a529c9223d41681f683d491f627c63125b94977d3a0_1280.jpg",
    technologies: ["Node.js", "Express.js", "React.js", "Prisma ORM", "Docker", "MySQL", "Ant Design", "Redux", "JWT"],
    features: [
      "Customer measurement management",
      "Order tracking and status updates",
      "Inventory management for fabrics",
      "Automated billing and invoicing",
      "Staff task assignment",
      "Mobile-friendly interface",
      "Backup and data recovery",
      "Multi-location support",
      "RESTful API Architecture",
      "Prisma ORM Integration",
      "JWT Authentication",
      "Middleware Pipeline",
      "Swagger Documentation",
      "Dynamic Configuration",
      "Referential Integrity",
      "Normalized Structure",
      "Scalable Design",
      "Chart of Accounts",
      "General Ledger",
      "Financial Reporting",
      "Payment Processing",
      "Ant Design Framework",
      "Redux State Management",
      "Responsive Design",
      "Interactive Reporting"
    ],
    challenges: [
      {
        challenge: "Performance Bottlenecks",
        solution:
          "Application response time decreased by approximately 70%, significantly enhancing user experience.",
      },
      {
        challenge: "Rigid Database Architecture",
        solution:
          "Implemented a flexible, normalized database schema that would ensure data integrity while allowing for future expansion.",
      },
      {
        challenge: "Technical Debt",
        solution:
          "Restructuring the application using a clear separation of concerns with distinct controllers, services, and routes.",
      },
      {
        challenge: "Missing Core Functionality",
        solution:
          "Leveraging my 7 years of experience in developing business software with C# to implement robust accounting functionality.",
      },
      {
        challenge: "Data Integrity Issues",
        solution:
          "Customer data, including profiles, measurements, and contact information, was not properly structured, leading to potential inconsistencies.",
      },
    ],
    liveUrl: "https://gman-stitching.com",
    githubUrl: "https://github.com/safdariqbal/gman-stitching",
  },
  {
    id: "hospital-management",
    title: "Eye Hospital Management",
    description:
      "Specialized healthcare system for ophthalmology with patient records, appointment scheduling, and treatment tracking.",
    fullDescription:
      "A specialized hospital management system designed specifically for eye care facilities. Includes patient history management, appointment scheduling, treatment protocols, and integration with medical equipment.",
    image:
      "https://pixabay.com/get/g78ab7e4a760545416bd452b739712c52b06723bffb5342f1c5a8cb48242f56fa670b74b589ef0a69b15b051d4876f2085b98f75777fbe69dbabc467eb0454000_1280.jpg",
    technologies: [
      "React Js",
      "SQL Server",
      ".NET Web API",
      "Entity Framework",
      "Dapper (ADO.NET)",
    ],
    features: [
      "Patient registration and history management",
      "Appointment scheduling system",
      "Treatment protocol management",
      "Prescription and billing integration",
      "Medical equipment integration",
      "Insurance claim processing",
      "Comprehensive reporting system",
      "Staff management and scheduling",
    ],
    challenges: [
      {
        challenge: "Integration with various medical equipment and devices",
        solution:
          "Developed custom APIs and drivers to interface with different ophthalmology equipment for seamless data transfer",
      },
      {
        challenge: "Ensuring HIPAA compliance and data security",
        solution:
          "Implemented robust encryption, access controls, and audit trails to meet healthcare data protection requirements",
      },
    ],
  },

  {
    id: "factory-management",
    title: "Factory Management Suite",
    description:
      "Complete ERP with 4-tier accounting, payroll system, and comprehensive vendor/customer/employee tracking.",
    fullDescription:
      "An enterprise-grade factory management system featuring multi-level accounting, comprehensive payroll processing, and complete supply chain management. Designed to handle complex manufacturing operations with detailed cost tracking.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: [
      "C# .NET",
      "SQL Server",
      "Crystal Reports",
      "WinForms",
      "RDLC",
    ],
    features: [
      "4-tier accounting system",
      "Complete payroll management",
      "Inventory and supply chain tracking",
      "Production planning and scheduling",
      "Quality control management",
      "Vendor and customer relationship management",
      "Financial reporting and analytics",
      "Employee attendance and performance tracking",
    ],
    challenges: [
      {
        challenge:
          "Implementing a complex 4-tier accounting system with proper audit trails",
        solution:
          "Designed a robust chart of accounts structure with automated journal entries and comprehensive audit logging",
      },
      {
        challenge: "Managing complex manufacturing workflows and dependencies",
        solution:
          "Created a flexible workflow engine that can adapt to different manufacturing processes and requirements",
      },
    ],
  },

  {
    id: "erp-recovery-system",
    title: "ERP Recovery System",
    description:
      "Enterprise solution deployed in Dubai for employee recruitment, payment processing, and workforce management.",
    fullDescription:
      "A comprehensive ERP system developed for international deployment in Dubai, focusing on workforce management, recruitment processes, and financial operations. Built to handle multi-currency transactions and compliance with UAE regulations.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: [
      "ASP.NET Core",
      "Azure",
      "SQL Server",
      "SignalR",
      "Entity Framework",
    ],
    features: [
      "Employee recruitment workflow",
      "Multi-currency payment processing",
      "Workforce analytics and reporting",
      "Document management system",
      "Compliance tracking for UAE regulations",
      "Real-time notifications",
      "Multi-language support (English/Arabic)",
      "Role-based access control",
    ],
    challenges: [
      {
        challenge:
          "Handling multi-currency transactions and exchange rate fluctuations",
        solution:
          "Implemented a robust currency conversion system with real-time exchange rates and proper financial reconciliation",
      },
      {
        challenge: "Compliance with UAE labor laws and regulations",
        solution:
          "Collaborated with legal experts to ensure all workflows meet UAE employment standards and regulations",
      },
    ],
    liveUrl: "https://erp-dubai.com",
  },

  {
    id: "pos-system",
    title: "Universal POS System",
    description:
      "Versatile point-of-sale solution for restaurants, cafes, bookstores, and retail environments with inventory management.",
    fullDescription:
      "A flexible point-of-sale system designed to work across multiple retail verticals. Features include inventory management, sales analytics, customer loyalty programs, and integration with various payment processors.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Socket.io"],
    features: [
      "Multi-business type support (restaurants, retail, etc.)",
      "Real-time inventory tracking",
      "Customer loyalty program integration",
      "Multiple payment method support",
      "Sales analytics and reporting",
      "Staff management and permissions",
      "Receipt printing and email notifications",
      "Offline mode capability",
    ],
    challenges: [
      {
        challenge:
          "Creating a flexible system that works for different business types",
        solution:
          "Developed a modular architecture with customizable workflows and business-specific features",
      },
      {
        challenge: "Ensuring system reliability for critical sales operations",
        solution:
          "Implemented offline mode with local data storage and automatic synchronization when connection is restored",
      },
    ],
    liveUrl: "https://universal-pos.com",
    githubUrl: "https://github.com/safdariqbal/universal-pos",
  },
  {
    id: "real-estate-management",
    title: "Real Estate Management System",
    description:
      "Comprehensive property management solution with client tracking, inventory management, and financial reporting.",
    fullDescription:
      "A complete real estate management platform built to streamline property operations, client relationships, and financial tracking. The system includes advanced search capabilities, automated reporting, and integration with popular payment gateways.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: [
      "winforms",
      "C#.net",
      "SQL Server",
      "SAp Crystal Report",
      "Janus GridEx",
      "Dapper ORM",
      "Entity Framework",
    ],
    features: [
      "Property listing and management",
      "Client relationship management (CRM)",
      "Financial reporting and analytics",
      "Automated contract generation",
      "Payment integration with Stripe",
      "Advanced search and filtering",
      "Document management system",
      "Mobile-responsive design",
    ],
    challenges: [
      {
        challenge:
          "Complex data relationships between properties, clients, and transactions",
        solution:
          "Implemented a well-structured MongoDB schema with proper indexing and aggregation pipelines for efficient queries",
      },
      {
        challenge:
          "Real-time updates for multiple users accessing the same properties",
        solution:
          "Integrated WebSocket connections for real-time notifications and updates across all connected clients",
      },
    ],
    liveUrl: "https://realestate-demo.com",
    githubUrl: "https://github.com/safdariqbal/real-estate-system",
  },

  {
    id: "fuel-station-management",
    title: "Fuel Station Management",
    description:
      "Comprehensive fuel management with dip chart integration, real-time monitoring, and detailed reporting systems.",
    fullDescription:
      "A specialized management system for fuel stations featuring tank level monitoring, dip chart calculations, sales tracking, and comprehensive reporting. Includes integration with fuel dispensers and automated inventory alerts.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: [
      ".NET Core",
      "IoT Integration",
      "SQL Server",
      "SignalR",
      "Crystal Reports",
    ],
    features: [
      "Real-time fuel level monitoring",
      "Dip chart calculations and calibration",
      "Sales transaction processing",
      "Inventory management and alerts",
      "Pump dispenser integration",
      "Shift management and reporting",
      "Fuel delivery tracking",
      "Automated reconciliation reports",
    ],
    challenges: [
      {
        challenge: "Accurate fuel level measurement and dip chart calculations",
        solution:
          "Developed precise algorithms for tank calibration and volume calculations using advanced mathematical models",
      },
      {
        challenge: "Integration with various pump and sensor hardware",
        solution:
          "Created a hardware abstraction layer that supports multiple pump manufacturers and sensor types",
      },
    ],
  },
  {
    id: "choolistan-wool-union",
    title: "Choolistanwoolunion.com",
    description:
      "Government website for Cholistan Wool Union built with React and TypeScript, receiving official appreciation from authorities.",
    fullDescription:
      "A modern government website developed for the Cholistan Wool Union using React and TypeScript, serving as a digital platform for wool trade and union activities. The project received official appreciation from government authorities for its contribution to the local economy and digital infrastructure.",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Modern UI/UX",
      "Government Standards",
    ],
    features: [
      "Government-compliant web standards",
      "Modern React-based architecture",
      "TypeScript for type safety",
      "Wool trade management system",
      "Union member registration",
      "Official documentation portal",
      "Multi-language support (Urdu/English)",
      "Mobile-responsive design",
      "SEO optimization for government visibility",
      "Secure authentication system",
    ],
    challenges: [
      {
        challenge:
          "Meeting strict government compliance and security standards with modern web technologies",
        solution:
          "Implemented robust security measures using React best practices and followed government web development guidelines",
      },
      {
        challenge:
          "Creating user-friendly interface for diverse user base including rural communities",
        solution:
          "Designed intuitive React components with clear visual hierarchy and multi-language support using TypeScript for reliability",
      },
    ],
    liveUrl: "https://choolistanwoolunion.com",
  },
  {
    id: "wordpress-ecommerce-store",
    title: "WordPress E-commerce Store",
    description:
      "Custom WordPress e-commerce platform currently under development with modern features and user experience.",
    fullDescription:
      "A comprehensive e-commerce solution built on WordPress with custom functionalities and modern design principles. The project focuses on creating a seamless shopping experience with advanced product management and customer engagement features.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "Custom Plugins",
      "Payment Gateways",
    ],
    features: [
      "Custom WordPress theme development",
      "WooCommerce integration and customization",
      "Advanced product catalog management",
      "Multiple payment gateway integration",
      "Customer account management",
      "Order tracking and management",
      "Responsive design optimization",
      "SEO-optimized product pages",
    ],
    challenges: [
      {
        challenge:
          "Creating custom functionality beyond standard WooCommerce capabilities",
        solution:
          "Developed custom plugins and theme modifications to extend platform functionality while maintaining WordPress standards",
      },
      {
        challenge: "Optimizing performance for large product catalogs",
        solution:
          "Implemented caching strategies and database optimization techniques for improved loading times",
      },
    ],
  },
  {
    id: "tariq-traders-mobile-app",
    title: "Tariq Traders Business Management App",
    description:
      "Cross-platform mobile application for comprehensive business operations and client management.",
    fullDescription:
      "A comprehensive mobile application developed using .NET MAUI for Tariq Traders, providing complete business management capabilities including inventory tracking, client management, and real-time reporting. The app works seamlessly across iOS and Android platforms.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: [".NET MAUI", "C#", "SQLite", "Azure", "XAML", "REST APIs"],
    features: [
      "Cross-platform mobile application (iOS & Android)",
      "Real-time business data synchronization",
      "Offline-first architecture with data sync",
      "Client relationship management",
      "Inventory and stock management",
      "Financial reporting and analytics",
      "Push notifications for important updates",
      "Multi-language support (English/Arabic)",
    ],
    challenges: [
      {
        challenge:
          "Creating a seamless offline-first experience for varying network conditions",
        solution:
          "Implemented robust offline data storage with SQLite and intelligent sync mechanisms when connectivity is restored",
      },
      {
        challenge:
          "Supporting both English and Arabic languages with proper RTL layout",
        solution:
          "Developed comprehensive localization system with dynamic layout switching and cultural considerations",
      },
      {
        challenge:
          "Ensuring compliance with international business regulations and data privacy standards",
        solution:
          "Implemented secure data encryption and followed international data protection guidelines throughout the development",
      },
    ],
  },
  {
    id: "real-estate-mobile-app",
    title: "Real Estate Mobile Application",
    description:
      "Feature-rich mobile app for real estate professionals to manage properties and client interactions on-the-go.",
    fullDescription:
      "A powerful mobile application built with .NET MAUI specifically designed for real estate professionals. The app enables property listing management, client communications, document handling, and virtual property tours, all optimized for mobile devices.",
    image:
      "https://images.unsplash.com/photo-1590725175661-2d4c4135d6d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: [
      ".NET MAUI",
      "C#",
      "Entity Framework",
      "Azure Storage",
      "SignalR",
      "Maps API",
    ],
    features: [
      "Property listing and photo management",
      "Real-time client chat and notifications",
      "GPS-based property location services",
      "Document scanning and storage",
      "Virtual property tour integration",
      "Lead tracking and management",
      "Calendar integration for property visits",
      "Offline property data access",
    ],
    challenges: [
      {
        challenge:
          "Handling large property image collections efficiently on mobile devices",
        solution:
          "Implemented intelligent image compression and lazy loading with Azure blob storage integration",
      },
      {
        challenge:
          "Providing smooth real-time communication between agents and clients",
        solution:
          "Integrated SignalR for real-time messaging with offline message queuing capabilities",
      },
      {
        challenge:
          "Optimizing app performance for older mobile devices while maintaining rich features",
        solution:
          "Used .NET MAUI's platform-specific optimizations and implemented progressive loading strategies",
      },
    ],
  },
];
