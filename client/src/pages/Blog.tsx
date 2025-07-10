import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  Clock, 
  Eye, 
  Search, 
  TrendingUp, 
  Building, 
  Target, 
  Code, 
  Shield,
  ChevronRight,
  Star,
  Users,
  Award
} from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  blogPosts, 
  blogCategories, 
  getFeaturedPosts, 
  getPostsByCategory,
  searchPosts,
  type BlogPost,
  type BlogCategory 
} from "@/lib/blog";
import { Helmet } from "react-helmet-async";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  const featuredPosts = getFeaturedPosts();

  useEffect(() => {
    let posts = blogPosts;
    
    // Apply category filter
    if (selectedCategory !== "all") {
      posts = getPostsByCategory(selectedCategory);
    }
    
    // Apply search filter
    if (searchQuery.trim()) {
      posts = searchPosts(searchQuery);
    }
    
    setFilteredPosts(posts);
  }, [selectedCategory, searchQuery]);

  const getCategoryIcon = (iconName: string) => {
    const icons = {
      Building,
      Target, 
      Code,
      TrendingUp,
      Shield
    };
    return icons[iconName as keyof typeof icons] || Building;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
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

  return (
    <>
      <Helmet>
        <title>Enterprise Insights Blog | Muhammad Safdar Iqbal</title>
        <meta name="description" content="Strategic technology insights, proven methodologies, and real-world case studies from Pakistan's leading enterprise software architect." />
        <link rel="canonical" href="https://your-portfolio-domain.com/blog" />
        <meta property="og:title" content="Enterprise Insights Blog | Muhammad Safdar Iqbal" />
        <meta property="og:description" content="Strategic technology insights, proven methodologies, and real-world case studies from Pakistan's leading enterprise software architect." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-portfolio-domain.com/blog" />
        <meta property="og:image" content="https://your-portfolio-domain.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Enterprise Insights Blog | Muhammad Safdar Iqbal" />
        <meta name="twitter:description" content="Strategic technology insights, proven methodologies, and real-world case studies from Pakistan's leading enterprise software architect." />
        <meta name="twitter:image" content="https://your-portfolio-domain.com/og-image.png" />
      </Helmet>
      <div className="min-h-screen bg-white dark:bg-slate-900" id="main-content">
        <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                Enterprise Insights
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Strategic technology insights, proven methodologies, and real-world case studies from Pakistan's leading enterprise software architect.
            </p>
            
            {/* Authority Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-500" />
                <span>Government Contractor</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-green-500" />
                <span>50+ Enterprise Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>Secretary-Level Recognition</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Featured Stories</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Breakthrough projects that transformed organizations and established industry standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredPosts.map((post, index) => {
              const IconComponent = getCategoryIcon(post.category.icon);
              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="h-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Featured Image */}
                    <div className="relative overflow-hidden aspect-[16/9]">
                      <img 
                        src={post.featuredImage}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className={`${getCategoryColor(post.category.color)} border font-medium`}>
                          <IconComponent className="w-3 h-3 mr-1" />
                          {post.category.name}
                        </Badge>
                      </div>
                      
                      {/* Featured Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      {/* Post Meta */}
                      <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(post.publishDate)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime} min read</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views?.toLocaleString()}</span>
                        </div>
                      </div>

                      {/* Read More Button */}
                      <Link href={`/blog/${post.slug}`}>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white group/button">
                          <span>Read Full Story</span>
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

      {/* Filter & Search Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">All Articles</h2>
            
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles, technologies, case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3 text-lg bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => setSelectedCategory("all")}
                className={selectedCategory === "all" 
                  ? "bg-blue-600 hover:bg-blue-700 text-white" 
                  : "border-slate-300 dark:border-slate-600 hover:bg-blue-50 dark:hover:bg-slate-700"
                }
              >
                All Articles ({blogPosts.length})
              </Button>
              
              {blogCategories.map((category) => {
                const IconComponent = getCategoryIcon(category.icon);
                const count = getPostsByCategory(category.slug).length;
                
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.slug ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.slug)}
                    className={selectedCategory === category.slug
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "border-slate-300 dark:border-slate-600 hover:bg-blue-50 dark:hover:bg-slate-700"
                    }
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {category.name} ({count})
                  </Button>
                );
              })}
            </div>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => {
              const IconComponent = getCategoryIcon(post.category.icon);
              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="h-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    {/* Article Image */}
                    <div className="relative overflow-hidden aspect-[16/9]">
                      <img 
                        src={post.featuredImage}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className={`${getCategoryColor(post.category.color)} border font-medium`}>
                          <IconComponent className="w-3 h-3 mr-1" />
                          {post.category.name}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 text-sm">
                        {post.excerpt}
                      </p>
                      
                      {/* Post Meta */}
                      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{formatDate(post.publishDate)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}m</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>{post.views?.toLocaleString()}</span>
                        </div>
                      </div>

                      {/* Read More Link */}
                      <Link href={`/blog/${post.slug}`}>
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

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No articles found</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Try adjusting your search terms or selecting a different category.
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                View All Articles
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
} 