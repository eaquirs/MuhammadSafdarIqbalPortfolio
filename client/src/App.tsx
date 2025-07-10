import { Suspense, lazy } from "react";
import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import WhatsAppButton from "@/components/WhatsAppButton";
import Loader from "@/components/Loader";

const Home = lazy(() => import("@/pages/Home"));
const Project = lazy(() => import("@/pages/Project"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/project/:id" component={Project} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 transition-colors duration-300 container-safe">
          {/* Accessibility: Skip to main content link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only absolute left-4 top-4 z-50 bg-blue-600 text-white px-4 py-2 rounded shadow-lg"
          >
            Skip to main content
          </a>
          <Toaster />
          <Suspense fallback={<Loader />}>
            <ScrollToTop />
            <Router />
          </Suspense>
          <WhatsAppButton />
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
