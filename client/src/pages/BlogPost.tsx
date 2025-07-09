import { useParams } from "wouter";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Eye, 
  Linkedin, 
  Twitter, 
  Facebook,
  ChevronRight,
  Building,
  Target,
  Code,
  TrendingUp,
  Shield,
  MessageSquare,
  ExternalLink,
  Star
} from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  blogPosts, 
  getRelatedPosts,
  type BlogPost 
} from "@/lib/blog";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  const relatedPosts = post ? getRelatedPosts(post.id, 3) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (post) {
      document.title = post.seo.metaTitle;
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Article Not Found</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-6">The article you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryIcon = (iconName: string) => {
    const icons = { Building, Target, Code, TrendingUp, Shield };
    return icons[iconName as keyof typeof icons] || Building;
  };

  const getCategoryColor = (color: string) => {
    const colors = {
      blue: "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700",
      green: "bg-green-500/10 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700",
      purple: "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700",
      orange: "bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-700",
      red: "bg-red-500/10 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  };

  const shareOnSocial = (platform: string) => {
    const url = window.location.href;
    const shareUrls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    };
    
    if (shareUrls[platform as keyof typeof shareUrls]) {
      window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400');
    }
  };

  const handleConsultation = () => {
    const phoneNumber = "+923322060667";
    const message = `💼 Strategic Consultation Request - I just read your article "${post.title}" and I'm interested in discussing how your expertise can help our organization.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const IconComponent = getCategoryIcon(post.category.icon);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />
      
      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link href="/blog">
              <Button variant="outline" className="border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Articles
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge className={`${getCategoryColor(post.category.color)} border font-medium`}>
                <IconComponent className="w-3 h-3 mr-1" />
                {post.category.name}
              </Badge>
              
              {post.featured && (
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              )}

              <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.publishDate)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{post.views?.toLocaleString()} views</span>
                </div>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex items-center gap-3">
                <img 
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full border-2 border-blue-500"
                />
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">{post.author.name}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{post.author.bio}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Share:</span>
                <Button variant="outline" size="sm" onClick={() => shareOnSocial('linkedin')} className="text-blue-600 border-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={() => shareOnSocial('twitter')} className="text-blue-500 border-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={() => shareOnSocial('facebook')} className="text-blue-700 border-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                  <Facebook className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[16/9]">
              <img 
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
          >
            <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight, rehypeRaw]}
                components={{
                  h1: ({children}) => <h1 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6 border-b border-slate-200 dark:border-slate-700 pb-3">{children}</h1>,
                  h2: ({children}) => <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 border-l-4 border-blue-500 pl-4">{children}</h2>,
                  h3: ({children}) => <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">{children}</h3>,
                  p: ({children}) => <p className="mb-6 leading-relaxed text-slate-700 dark:text-slate-300">{children}</p>,
                  code: ({children, className}) => {
                    const isInline = !className;
                    return isInline ? (
                      <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-sm font-mono text-blue-600 dark:text-blue-400">{children}</code>
                    ) : (
                      <code className={className}>{children}</code>
                    );
                  },
                  pre: ({children}) => (
                    <pre className="bg-slate-900 dark:bg-slate-800 p-6 rounded-xl overflow-x-auto mb-6 border border-slate-200 dark:border-slate-700 shadow-lg">
                      {children}
                    </pre>
                  ),
                  blockquote: ({children}) => (
                    <blockquote className="border-l-4 border-blue-500 pl-6 py-2 italic text-slate-600 dark:text-slate-400 my-6 bg-blue-50/50 dark:bg-blue-900/10 rounded-r-lg">
                      {children}
                    </blockquote>
                  ),
                  ul: ({children}) => <ul className="list-disc list-inside mb-6 space-y-3 text-slate-700 dark:text-slate-300">{children}</ul>,
                  ol: ({children}) => <ol className="list-decimal list-inside mb-6 space-y-3 text-slate-700 dark:text-slate-300">{children}</ol>,
                  li: ({children}) => <li className="leading-relaxed">{children}</li>,
                  a: ({href, children}) => (
                    <a 
                      href={href} 
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline decoration-blue-500/30 hover:decoration-blue-500 transition-colors font-medium" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                  table: ({children}) => (
                    <div className="overflow-x-auto mb-6">
                      <table className="min-w-full border border-slate-200 dark:border-slate-700 rounded-lg">{children}</table>
                    </div>
                  ),
                  th: ({children}) => (
                    <th className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 text-left font-semibold">{children}</th>
                  ),
                  td: ({children}) => (
                    <td className="border border-slate-200 dark:border-slate-700 px-4 py-2">{children}</td>
                  ),
                  strong: ({children}) => <strong className="font-bold text-slate-900 dark:text-white">{children}</strong>,
                  em: ({children}) => <em className="italic text-slate-700 dark:text-slate-300">{children}</em>
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </article>

      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-white via-blue-50/50 to-white dark:from-slate-800 dark:via-slate-800 dark:to-slate-700 border-2 border-blue-200/50 dark:border-blue-700/50 shadow-2xl">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                  This article showcased proven methodologies that deliver extraordinary results. 
                  Let's discuss how these strategies can be adapted for your specific challenges.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={handleConsultation}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-lg"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Schedule Strategic Consultation
                  </Button>
                  
                  <Link href="/#projects">
                    <Button 
                      variant="outline"
                      className="border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3 text-lg"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      View Portfolio
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Related Articles</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Continue exploring strategic insights and proven methodologies.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => {
                const RelatedIconComponent = getCategoryIcon(relatedPost.category.icon);
                return (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="h-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                      <div className="relative overflow-hidden aspect-[16/9]">
                        <img 
                          src={relatedPost.featuredImage}
                          alt={relatedPost.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                        
                        <div className="absolute top-4 left-4">
                          <Badge className={`${getCategoryColor(relatedPost.category.color)} border font-medium`}>
                            <RelatedIconComponent className="w-3 h-3 mr-1" />
                            {relatedPost.category.name}
                          </Badge>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {relatedPost.title}
                        </h3>
                        
                        <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 text-sm">
                          {relatedPost.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{relatedPost.readTime}m</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            <span>{relatedPost.views?.toLocaleString()}</span>
                          </div>
                        </div>

                        <Link href={`/blog/${relatedPost.slug}`}>
                          <Button variant="outline" className="w-full border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 group/button">
                            <span>Read Article</span>
                            <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover/button:translate-x-1" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
} 