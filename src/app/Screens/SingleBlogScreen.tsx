"use client";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Link from "next/link";
import { motion } from "framer-motion";

// Icons
import { FaClock, FaShareAlt, FaTwitter, FaLinkedin, FaCopy } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { HiOutlineLightBulb, HiOutlineExclamation } from "react-icons/hi";

type ApiPost = {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  tags?: string[];
  category?: string;
  cover?: string;
  // Optional fields for enhanced UI
  author?: string;
  authorImage?: string;
  authorBio?: string;
};

type HeadingType = {
  id: string;
  text: string;
  level: number;
};

// Reading time calculator
const calculateReadingTime = (content: string = ""): string => {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min read`;
};

// Extract headings from content
const extractHeadings = (content: string = ""): HeadingType[] => {
  const headingRegex = /^(#{1,3})\s+(.+)$/gm;
  const headings: HeadingType[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2];
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    headings.push({ id, text, level });
  }

  return headings;
};

// Code highlighting block
const CodeBlock = ({ inline, className, children }: any) => {
  const lang = /language-(\w+)/.exec(className || "")?.[1];
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children as string);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (inline) {
    return <code className="bg-white/10 px-1 rounded">{children}</code>;
  }

  return (
    <div className="relative group rounded-lg overflow-hidden">
      <pre className="bg-[#1e1f22] border border-white/5 p-4 overflow-x-auto text-sm leading-relaxed rounded-lg">
        {lang && (
          <div className="flex justify-between items-center mb-2">
            <div className="text-[10px] uppercase tracking-wider text-[var(--accent-color)] font-medium">
              {lang}
            </div>
            <button 
              onClick={handleCopy} 
              className="text-xs opacity-70 md:opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-white/70 hover:text-white"
            >
              {copied ? "Copied!" : (
                <>
                  <FaCopy size={12} />
                  <span className="hidden sm:inline">Copy</span>
                </>
              )}
            </button>
          </div>
        )}
        <code className="font-mono text-[13px] break-words whitespace-pre-wrap">{children}</code>
      </pre>
    </div>
  );
};

// Custom callout components
const Callout = ({ icon, color, title, children, className = "" }: any) => (
  <div className={`my-6 rounded-lg p-4 flex gap-3 bg-opacity-10 ${className}`}>
    <div className={`flex-shrink-0 mt-1 ${color}`}>
      {icon}
    </div>
    <div className="overflow-hidden">
      {title && <p className="font-medium mb-1 break-words">{title}</p>}
      <div className="text-sm opacity-90 break-words">{children}</div>
    </div>
  </div>
);

// Process content for custom callouts
const processContent = (content: string = "") => {
  const processedContent = content
    .replace(/:::tip\s+(.*?)\s*\n([\s\S]*?)\n:::/g, 
      (_match, title, body) => `<Tip title="${title.trim()}">\n${body.trim()}\n</Tip>`)
    .replace(/:::info\s+(.*?)\s*\n([\s\S]*?)\n:::/g, 
      (_match, title, body) => `<Info title="${title.trim()}">\n${body.trim()}\n</Info>`)
    .replace(/:::warning\s+(.*?)\s*\n([\s\S]*?)\n:::/g, 
      (_match, title, body) => `<Warning title="${title.trim()}">\n${body.trim()}\n</Warning>`);
  
  return processedContent;
};

export default function SingleBlogScreen({ post, prevPost, nextPost }: { 
  post: ApiPost;
  prevPost?: ApiPost;
  nextPost?: ApiPost;
}) {
  const [activeHeading, setActiveHeading] = useState("");
  const [showToc, setShowToc] = useState(false); // Default hidden on mobile
  const [isMobile, setIsMobile] = useState(false);
  
  // Process markdown content
  const processedContent = processContent(post.content ?? "");
  const headings = extractHeadings(post.content ?? "");
  const readingTime = calculateReadingTime(post.content);
  
  // Check for mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Intersection observer for heading tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [post.content]);

  return (
    <div className="light-dark-mode min-h-screen pb-16 overflow-hidden">
      {/* Hero Section */}
      <div className="w-full relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent z-10" />
        
        {post.cover ? (
          <div className="w-full h-64 md:h-96 overflow-hidden">
            <img 
              src={post.cover} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-full h-64 md:h-96 theme-bg-secondary flex items-center justify-center">
            <CgNotes className="text-6xl opacity-20" />
          </div>
        )}
        
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 relative z-20 -mt-28 sm:-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="theme-bg-card p-5 sm:p-10 rounded-xl theme-border shadow-xl"
          >
            {/* Category & Date - more compact on mobile */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm theme-text-secondary">
              {post.category && (
                <span className="px-2 sm:px-3 py-1 rounded-full theme-bg-accent/10 text-[var(--accent-color)]">
                  {post.category}
                </span>
              )}
              <span className="hidden sm:inline">•</span>
              <time>{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</time>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                <FaClock className="text-xs" /> {readingTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold theme-text-primary leading-tight break-words">
              {post.title}
            </h1>
            
            {/* Author info (if available) */}
            {post.author && (
              <div className="flex items-center mt-5 sm:mt-6 gap-3 sm:gap-4">
                {post.authorImage && (
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={post.authorImage} 
                      alt={post.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="min-w-0"> {/* Prevent overflow */}
                  <div className="font-medium theme-text-primary truncate">{post.author}</div>
                  {post.authorBio && (
                    <div className="text-xs sm:text-sm theme-text-secondary line-clamp-1 sm:line-clamp-2">{post.authorBio}</div>
                  )}
                </div>
              </div>
            )}

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 sm:px-3 py-1 text-xs rounded-full theme-bg-secondary theme-text-secondary"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* Main Content with sidebar - better mobile layout */}
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10 relative">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* Table of Contents - Sidebar with toggle for mobile */}
          {headings.length > 0 && (
            <aside className={`${showToc ? 'mb-8' : 'mb-2'} lg:mb-0 lg:w-64 lg:flex-shrink-0 rounded-lg theme-bg-card theme-border p-4 lg:p-0 lg:bg-transparent lg:border-0`}>
              <div className="lg:sticky lg:top-24">
                <div className="flex items-center justify-between mb-2 lg:mb-4">
                  <h4 className="font-medium theme-text-primary">Table of Contents</h4>
                  <button 
                    onClick={() => setShowToc(!showToc)} 
                    className="lg:hidden text-sm theme-text-secondary px-2 py-1 rounded hover:theme-bg-secondary"
                  >
                    {showToc ? 'Hide' : 'Show'}
                  </button>
                </div>
                
                {/* Always show on desktop, toggle on mobile */}
                {(showToc || !isMobile) && (
                  <nav className="space-y-1 text-sm max-h-[60vh] lg:max-h-[70vh] overflow-y-auto pr-2 pb-2">
                    {headings.map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className={`
                          block py-1 transition-all duration-200 break-words
                          ${heading.level === 1 ? 'pl-0' : heading.level === 2 ? 'pl-3' : 'pl-6'}
                          ${activeHeading === heading.id
                            ? 'text-[var(--accent-color)] font-medium'
                            : 'theme-text-secondary hover:text-[var(--accent-color)]'
                          }
                        `}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                          // Auto-hide ToC on mobile after clicking
                          if (isMobile) setShowToc(false);
                        }}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                )}

                {/* Share buttons - only show when ToC is visible on mobile */}
                {(!isMobile || showToc) && (
                  <div className="mt-6 pt-4 border-t theme-border">
                    <h4 className="font-medium theme-text-primary mb-3 flex items-center gap-2">
                      <FaShareAlt size={14} /> Share
                    </h4>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                        className="p-2 rounded-full theme-bg-card theme-border hover:text-[var(--accent-color)] transition-colors"
                        aria-label="Share on Twitter"
                      >
                        <FaTwitter />
                      </button>
                      <button 
                        onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                        className="p-2 rounded-full theme-bg-card theme-border hover:text-[var(--accent-color)] transition-colors"
                        aria-label="Share on LinkedIn"
                      >
                        <FaLinkedin />
                      </button>
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText(window.location.href);
                          // Less intrusive notification
                          const notification = document.createElement('div');
                          notification.textContent = 'URL copied!';
                          notification.className = 'fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-md z-50';
                          document.body.appendChild(notification);
                          setTimeout(() => notification.remove(), 2000);
                        }}
                        className="p-2 rounded-full theme-bg-card theme-border hover:text-[var(--accent-color)] transition-colors"
                        aria-label="Copy link"
                      >
                        <FaCopy />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </aside>
          )}
          
          {/* Main Article */}
          <article className="flex-1 min-w-0"> {/* min-w-0 prevents overflow */}
            <Link
              href="/blog"
              className="inline-block mb-6 text-sm theme-text-secondary hover:text-[var(--accent-color)] transition-colors"
            >
              ← Back to Blog
            </Link>
            
            <div className="mt-6 prose prose-invert max-w-none
              prose-headings:scroll-mt-24 prose-headings:break-words
              prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 sm:prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-lg sm:prose-h3:text-xl prose-h3:font-medium prose-h3:mt-6 sm:prose-h3:mt-8 prose-h3:mb-3
              prose-p:leading-relaxed prose-p:text-base prose-p:break-words
              prose-code:text-[13px]
              prose-li:my-1 prose-li:break-words
              prose-strong:text-white
              prose-a:text-[var(--accent-color)] prose-a:break-words
              prose-img:rounded-md
              prose-pre:overflow-x-auto prose-pre:max-w-full
            ">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[
                  rehypeSlug,
                  [
                    rehypeAutolinkHeadings,
                    { behavior: "wrap", properties: { className: "no-underline" } },
                  ],
                ]}
                components={{
                  code: CodeBlock,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-[var(--accent-color)]/60 pl-4 italic bg-white/5 rounded-r-md py-2 overflow-hidden">
                      {children}
                    </blockquote>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      className="text-[var(--accent-color)] hover:underline transition-colors break-words"
                      target={href?.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                  // Custom components for callouts
                  //@ts-expect-error
                  Tip: ({ title, children }: { title?: string; children?: React.ReactNode }) => (
                    <Callout 
                      icon={<HiOutlineLightBulb size={20} />} 
                      color="text-green-400" 
                      title={title}
                      className="bg-green-900/20 border-l-4 border-green-500"
                    >
                      {children}
                    </Callout>
                  ),
                  Info: ({ title, children }: { title?: string; children?: React.ReactNode }) => (
                    <Callout 
                      icon={<CgNotes size={20} />} 
                      color="text-blue-400" 
                      title={title}
                      className="bg-blue-900/20 border-l-4 border-blue-500"
                    >
                      {children}
                    </Callout>
                  ),
                  Warning: ({ title, children }: { title?: string; children?: React.ReactNode }) => (
                    <Callout 
                      icon={<HiOutlineExclamation size={20} />} 
                      color="text-yellow-400" 
                      title={title}
                      className="bg-yellow-900/20 border-l-4 border-yellow-500"
                    >
                      {children}
                    </Callout>
                  ),
                }}
              >
                {processedContent}
              </ReactMarkdown>
            </div>
            
            {/* Next/Previous Post Navigation */}
            {(prevPost || nextPost) && (
              <div className="mt-12 pt-6 border-t theme-border grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {prevPost && (
                  <Link 
                    href={`/blog/${prevPost.slug}`}
                    className="group flex flex-col p-3 sm:p-4 rounded-lg theme-bg-card theme-border hover:shadow-md transition-all"
                  >
                    <span className="text-xs sm:text-sm text-[var(--accent-color)]">← Previous</span>
                    <span className="font-medium mt-1 group-hover:text-[var(--accent-color)] transition-colors text-sm sm:text-base line-clamp-2">
                      {prevPost.title}
                    </span>
                  </Link>
                )}
                {nextPost && (
                  <Link 
                    href={`/blog/${nextPost.slug}`}
                    className="group flex flex-col p-3 sm:p-4 rounded-lg theme-bg-card theme-border hover:shadow-md transition-all sm:ml-auto sm:text-right"
                  >
                    <span className="text-xs sm:text-sm text-[var(--accent-color)]">Next →</span>
                    <span className="font-medium mt-1 group-hover:text-[var(--accent-color)] transition-colors text-sm sm:text-base line-clamp-2">
                      {nextPost.title}
                    </span>
                  </Link>
                )}
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  );
}