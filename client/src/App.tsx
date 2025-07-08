import { Switch, Route } from "wouter";

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Home from "@/pages/Home";
import Project from "@/pages/Project";
import NotFound from "@/pages/not-found";
import WhatsAppButton from "@/components/WhatsAppButton";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/project/:id" component={Project} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (

      <ThemeProvider>
        <TooltipProvider>
          <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 transition-colors duration-300">
            <Toaster />
            <Router />
            <WhatsAppButton />
          </div>
        </TooltipProvider>
      </ThemeProvider>

  );
}

export default App;
