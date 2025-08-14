"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { posts as allPosts } from "../api/posts/data"; // adjust if path differs

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
  // direct import (could slice or sort if needed)
  const posts: ApiPost[] = allPosts
    .map(({ slug, title, excerpt, date, tags, category, cover }) => ({
      slug,
      title,
      excerpt,
      date,
      tags,
      category,
      cover,
    }))
    // optional sort newest first
    .sort((a, b) => b.date.localeCompare(a.date));

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(posts.map((p) => p.category || "Uncategorized"))),
  ];

  const filtered =
    selectedCategory === "All"
      ? posts
      : posts.filter((p) => (p.category || "Uncategorized") === selectedCategory);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const pagePosts = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / postsPerPage);

  const postsByCategory = pagePosts.reduce((acc, post) => {
    const cat = post.category || "Uncategorized";
    (acc[cat] ||= []).push(post);
    return acc;
  }, {} as Record<string, ApiPost[]>);

  const paginate = (n: number) => setCurrentPage(n);
  const handleCategorySelect = (c: string) => {
    setSelectedCategory(c);
    setCurrentPage(1);
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 light-dark-mode custom-scrollbar min-h-screen">
      <div className="max-w-5xl mx-auto mb-10">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => handleCategorySelect(c)}
              className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                selectedCategory === c
                  ? "theme-bg-accent text-white"
                  : "theme-bg-card theme-text-primary theme-border hover:theme-bg-accent hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {Object.entries(postsByCategory).map(([cat, catPosts]) => (
        <div key={cat} id={cat} className="mt-12 scroll-mt-16">
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
            {catPosts.map((post) => (
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
                        loading="lazy"
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
                      {post.category && (
                        <>
                          <span>•</span>
                          <span className="px-2 py-1 rounded-full theme-bg-accent/10 text-[var(--accent-color)]">
                            {post.category}
                          </span>
                        </>
                      )}
                    </div>
                    <h3 className="mt-3 text-lg font-semibold theme-text-primary group-hover:text-[var(--accent-color)] transition-colors duration-200 line-clamp-2">
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

      {totalPages > 1 && (
        <div className="mt-12 flex justify-center gap-2">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg theme-bg-card theme-text-primary theme-border disabled:opacity-50 transition-all duration-300 hover:theme-bg-accent hover:text-white"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => paginate(n)}
              className={`w-10 h-10 rounded-lg transition-all duration-300 ${
                currentPage === n
                  ? "theme-bg-accent text-white"
                  : "theme-bg-card theme-text-primary theme-border hover:theme-bg-accent hover:text-white"
              }`}
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg theme-bg-card theme-text-primary theme-border disabled:opacity-50 transition-all duration-300 hover:theme-bg-accent hover:text-white"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}