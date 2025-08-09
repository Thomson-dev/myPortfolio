"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type ApiPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags?: string[];
  category?: string;
  cover?: string;
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

export default function BlogScreen() { 
  const [posts, setPosts] = useState<ApiPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/posts");
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data: ApiPost[] = await res.json();
        setPosts(data);
      } catch (e: any) {
        setErr(e.message || "Error loading posts");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[60vh] grid place-items-center light-dark-mode">
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full animate-bounce theme-bg-accent"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (err) {
    return (
      <div className="min-h-[60vh] grid place-items-center light-dark-mode">
        <div className="text-red-400">{err}</div>
      </div>
    );
  }

  // Get all available categories
  const categories = ["All", ...Array.from(new Set(posts.map(post => post.category || "Uncategorized")))];

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === "All" 
    ? posts 
    : posts.filter(post => (post.category || "Uncategorized") === selectedCategory);

  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Group current posts by their categories
  const postsByCategory = currentPosts.reduce((acc, post) => {
    const category = post.category || "Uncategorized";
    if (!acc[category]) acc[category] = [];
    acc[category].push(post);
    return acc;
  }, {} as Record<string, ApiPost[]>);

  // Handle page changes
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  // Handle category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 light-dark-mode custom-scrollbar min-h-screen">
      {/* Category Filter */}
      <div className="max-w-5xl mx-auto mb-10">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategorySelect(category)}
            className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
              selectedCategory === category
                ? 'theme-bg-accent text-white'
                : 'theme-bg-card theme-text-primary theme-border hover:theme-bg-accent hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      </div>

      {/* Posts */}
      {Object.entries(postsByCategory).map(([category, categoryPosts]) => (
        <div key={category} id={category} className="mt-12 scroll-mt-16">
          <h2 className="text-2xl font-bold mb-6 theme-text-primary">{category}</h2>
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {categoryPosts.map((post) => (
              <motion.article
                key={post.slug}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="group rounded-xl overflow-hidden theme-bg-card border theme-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative aspect-[16/9] overflow-hidden">
                    {post.cover ? (
                      <img
                        src={post.cover}
                        alt={post.title}
                        className="object-cover w-full h-full transform group-hover:scale-110 transition duration-300"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full theme-bg-secondary text-4xl">
                        📝
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs theme-text-secondary">
                      <time>{formatDate(post.date)}</time>
                      <span>•</span>
                      <span className="px-2 py-1 rounded-full theme-bg-accent/10 text-[var(--accent-color)]">
                        {category}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold theme-text-primary group-hover:text-[var(--accent-color)] transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm theme-text-secondary line-clamp-2">
                      {post.excerpt}
                    </p>
                    {post.tags && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-full theme-bg-secondary theme-text-secondary"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      ))}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center gap-2">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg theme-bg-card theme-text-primary theme-border disabled:opacity-50 transition-all duration-300 hover:theme-bg-accent hover:text-white disabled:hover:theme-bg-card disabled:hover:theme-text-primary"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`w-10 h-10 rounded-lg transition-all duration-300 ${
                currentPage === number
                  ? 'theme-bg-accent text-white'
                  : 'theme-bg-card theme-text-primary theme-border hover:theme-bg-accent hover:text-white'
              }`}
            >
              {number}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg theme-bg-card theme-text-primary theme-border disabled:opacity-50 transition-all duration-300 hover:theme-bg-accent hover:text-white disabled:hover:theme-bg-card disabled:hover:theme-text-primary"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}