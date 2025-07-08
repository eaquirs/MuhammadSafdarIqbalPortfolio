import { useParams } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "wouter";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useEffect } from "react";

export default function Project() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-slate-400 mb-8">The project you're looking for doesn't exist.</p>
            <Link href="/">
              <Button variant="outline" className="border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50">
      <Navigation />
      <div className="container mx-auto px-4 py-20">
        <div className="mb-8">
          <a href="/#projects">
            <Button variant="outline" className="border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">{project.title}</h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-6">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="bg-blue-500/20 text-blue-400">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex gap-4 mb-8">
              {project.liveUrl && (
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-8">
          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.fullDescription}</ReactMarkdown>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-green-600 dark:text-green-400">Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-slate-700 dark:text-slate-300 flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-yellow-600 dark:text-yellow-400">Challenges & Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">{challenge.challenge}</h4>
                    <p className="text-slate-700 dark:text-slate-300">{challenge.solution}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}