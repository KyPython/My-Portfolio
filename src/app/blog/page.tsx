'use client';

import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

const BlogPage: React.FC = () => {

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Modern Web Applications with Next.js 15",
      excerpt: "Explore the latest features in Next.js 15 and how they can improve your development workflow and application performance.",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "Development",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjB3b3Jrc3BhY2UlMjBkZXNrJTIwY29mZmVlfGVufDB8MHx8fDE3NTU4MjU3MjN8MA&ixlib=rb-4.1.0&q=85",
      slug: "building-modern-web-applications-nextjs-15"
    },
    {
      id: 2,
      title: "The Future of Frontend Development: Trends to Watch",
      excerpt: "Discover the emerging trends and technologies that are shaping the future of frontend development in 2025 and beyond.",
      date: "January 10, 2025",
      readTime: "6 min read",
      category: "Trends",
      image: "https://images.unsplash.com/photo-1668028758338-0bd7a73f22da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw2fHxsYXB0b3AlMjB3b3Jrc3BhY2UlMjBkZXNrJTIwY29mZmVlfGVufDB8MHx8fDE3NTU4MjU3MjN8MA&ixlib=rb-4.1.0&q=85",
      slug: "future-frontend-development-trends"
    },
    {
      id: 3,
      title: "Optimizing React Performance: Best Practices",
      excerpt: "Learn essential techniques for optimizing React applications, from component optimization to bundle splitting strategies.",
      date: "January 5, 2025",
      readTime: "10 min read",
      category: "Performance",
      image: "https://images.unsplash.com/photo-1601485770245-9abd905abc7b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw5fHxsYXB0b3AlMjB3b3Jrc3BhY2UlMjBkZXNrJTIwY29mZmVlfGVufDB8MHx8fDE3NTU4MjU3MjN8MA&ixlib=rb-4.1.0&q=85",
      slug: "optimizing-react-performance-best-practices"
    }
  ];

  const categories = ["All", "Development", "Trends", "Performance", "Design", "Tutorial"];

  return (
    <div className="min-h-screen bg-(--color-background)">
      {/* Hero Section */}
      <section className="relative px-16 py-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjB3b3Jrc3BhY2UlMjBkZXNrJTIwY29mZmVlfGVufDB8MHx8fDE3NTU4MjU3MjN8MA&ixlib=rb-4.1.0&q=85')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
          </div>
          <h1 className="heading-hero text-(--color-foreground) mb-6">
            Blog & Insights
          </h1>
          <p className="text-body-large text-(--color-muted-foreground) max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, design, and the latest technologies.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="px-16 py-12 border-b border-(--color-border)">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All" 
                    ? "bg-(--color-primary) text-(--color-primary-foreground)" 
                    : "bg-(--color-muted) text-(--color-muted-foreground) hover:bg-(--color-border)"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={blogPosts[0].image}
                  alt={`${blogPosts[0].title} - Andrew Neel on Unsplash`}
                  className="w-full h-64 md:h-full object-cover"
                  style={{ width: '100%', height: '300px' }}
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                    {blogPosts[0].category}
                  </span>
                </div>
                <h2 className="heading-card text-(--color-foreground) mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-body text-(--color-muted-foreground) mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-small text-(--color-muted-foreground)">
                    <span>{blogPosts[0].date}</span>
                    <span>•</span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <button className="text-(--color-accent) hover:text-(--color-primary) font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-section text-(--color-foreground) mb-12 text-center">
            Latest Articles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-sm border border-(--color-border) overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={post.image}
                  alt={`${post.title} - Olya P on Unsplash`}
                  className="w-full h-48 object-cover"
                  style={{ width: '100%', height: '192px' }}
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="heading-card text-(--color-foreground) mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-body text-(--color-muted-foreground) mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-small text-(--color-muted-foreground)">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <button className="text-(--color-accent) hover:text-(--color-primary) font-medium text-sm">
                      Read More
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-(--color-primary) text-(--color-primary-foreground) rounded-md hover:bg-gray-800 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-16 py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-section text-(--color-foreground) mb-4">
            Stay Updated
          </h2>
          <p className="text-body-large text-(--color-muted-foreground) mb-8 max-w-2xl mx-auto">
            Subscribe to get notified about new articles and insights on web development and design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-(--color-border) rounded-md focus:outline-none focus:ring-2 focus:ring-(--color-accent)"
            />
            <button className="px-6 py-3 bg-(--color-primary) text-(--color-primary-foreground) rounded-md hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;