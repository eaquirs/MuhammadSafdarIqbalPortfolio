# Muhammad Safdar Iqbal - Portfolio Website

## Overview

This is a professional portfolio website for a full-stack MERN developer and .NET specialist with 7+ years of experience. The application showcases projects, skills, testimonials, and provides a contact form for potential clients. It's built as a modern full-stack web application with a React frontend and Express.js backend.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React 18 with TypeScript, using Vite for development and build tooling
- **Backend**: Express.js server with TypeScript, providing REST API endpoints
- **Database**: PostgreSQL with Drizzle ORM for data management (currently using in-memory storage as fallback)
- **UI Framework**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management

## Key Components

### Frontend Architecture
- **Component Structure**: Modular React components organized by functionality
- **UI Components**: Comprehensive shadcn/ui component library with custom styling
- **Styling**: Tailwind CSS with custom design system and dark theme support
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Animations**: Framer Motion for smooth animations and transitions

### Backend Architecture
- **Server Framework**: Express.js with TypeScript for type safety
- **API Design**: RESTful API endpoints with proper error handling
- **Middleware**: Request logging, JSON parsing, and error handling middleware
- **Development**: Hot reloading with Vite integration for development

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Type-safe database schema with Zod validation integration
- **Migrations**: Drizzle Kit for database migrations and schema management
- **Storage**: Configurable storage layer with in-memory fallback for development

## Data Flow

1. **Contact Form Submission**: Client submits form → Validation with Zod schema → API request to `/api/contact` → Database storage → Response with success/error
2. **Data Retrieval**: Admin endpoints for retrieving contact submissions
3. **Project Display**: Static project data with dynamic routing for individual project pages
4. **Skills & Testimonials**: Static data displayed through reusable components

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL database connection
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/***: Unstyled, accessible UI primitives
- **drizzle-orm & drizzle-zod**: Database ORM and validation
- **react-hook-form & @hookform/resolvers**: Form handling and validation
- **framer-motion**: Animation library
- **wouter**: Lightweight client-side routing

### Development Tools
- **Vite**: Frontend build tool and development server
- **TypeScript**: Type safety across the application
- **Tailwind CSS**: Utility-first CSS framework
- **ESBuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

The application is configured for deployment with the following approach:

1. **Build Process**: 
   - Frontend built with Vite to `dist/public`
   - Backend built with ESBuild to `dist/index.js`
   - Static assets served from built frontend

2. **Environment Configuration**:
   - `DATABASE_URL` environment variable for PostgreSQL connection
   - Development/production environment detection
   - Replit-specific configurations for cloud deployment

3. **Server Setup**:
   - Express server serves both API routes and static frontend
   - Middleware for development vs production asset serving
   - Error handling and logging middleware

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- July 02, 2025: Initial portfolio setup with core components
- July 02, 2025: Added 10 featured projects including government website (Cholistan Wool Union) and WordPress e-commerce store
- July 02, 2025: Fixed contact form label visibility issues  
- July 02, 2025: Added WordPress and PHP skills to technical expertise
- July 02, 2025: Added government project testimonial with official appreciation
- July 02, 2025: Updated contact information with official phone (+923322060667) and email (eaquirseaquirs@gmail.com)
- July 02, 2025: Fixed dropdown visibility in contact form for Project Type and Budget Range
- July 02, 2025: Fixed testimonial names visibility with proper text styling
- July 02, 2025: Added Mobile Development skills category featuring .NET MAUI expertise
- July 02, 2025: Added two new mobile app projects: UAE Business Management and Real Estate Mobile App
- July 02, 2025: Enhanced Hero section with customer-focused messaging and achievement statistics
- July 02, 2025: Improved About section with business-value focused content and proven track record
- July 02, 2025: Implemented comprehensive dark/light theme toggle system with smooth transitions
- July 02, 2025: Fixed light mode visibility issues for hero title and skills cards
- July 02, 2025: Prepared Vercel deployment configuration with build documentation

## Featured Projects

The portfolio now showcases 10 comprehensive projects:
1. Real Estate Management System (MERN Stack)
2. Gman Stitching Platform (MERN + Docker on VPS)
3. Eye Hospital Management System (C# .NET)
4. ERP Recovery System (UAE deployment)
5. Factory Management Suite (4-tier accounting)
6. Universal POS System (Multi-business support)
7. Fuel Station Management (IoT integration)
8. Cholistan Wool Union Government Website (WordPress)
9. WordPress E-commerce Store (Under development)

Each project includes detailed case studies with challenges, solutions, and technologies used.