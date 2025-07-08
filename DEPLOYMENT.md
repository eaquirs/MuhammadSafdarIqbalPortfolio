# Vercel Deployment Guide

## For Muhammad Safdar Iqbal Portfolio

### Quick Setup:

1. **Connect to Vercel:**
   - Go to vercel.com and connect your GitHub account
   - Import this repository 

2. **Build Settings:**
   - Framework Preset: Vite
   - Build Command: `vite build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables (if needed):**
   - Add any environment variables in Vercel dashboard

### Manual Build Process:

If you want to build locally first:

```bash
# Install dependencies
npm install

# Build for production
npx vite build

# The built files will be in 'dist' folder
```

### Project Structure:
- Frontend: React + TypeScript + Vite
- Backend: Express.js (for API routes)
- Database: In-memory storage (ready for PostgreSQL)
- Styling: Tailwind CSS + shadcn/ui

### Features:
✅ Dark/Light theme toggle
✅ Responsive design
✅ Contact form with validation
✅ Project showcase with 12+ projects
✅ Skills section with .NET MAUI mobile development
✅ Professional testimonials
✅ SEO optimized

### Post-Deployment:
- Your portfolio will be available at: your-project-name.vercel.app
- Theme preferences will persist across sessions
- Contact form will work (currently saves to memory)
- All animations and interactions will function properly

### Custom Domain (Optional):
- In Vercel dashboard, go to Settings > Domains
- Add your custom domain (e.g., safdariqbal.com)
- Follow DNS configuration instructions