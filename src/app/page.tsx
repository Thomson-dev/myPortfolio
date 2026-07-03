'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

// ============================================================
// BOT DATA
// ============================================================
const BOT_SECTIONS = [
  {
    keys: ['hello', 'hii', 'hey', 'hi', "what's your name", 'your name', 'name'],
    type: 'hello',
  },
  {
    keys: ['about', 'about you', 'who are you'],
    type: 'about',
  },
  {
    keys: ['service', 'services', 'offer', 'what do you do'],
    type: 'services',
  },
  {
    keys: ['project', 'work', 'portfolio'],
    type: 'projects',
  },
  {
    keys: ['pricing', 'price', 'cost', 'package', 'rate'],
    type: 'pricing',
  },
  {
    keys: ['faq', 'faqs', 'question', 'questions'],
    type: 'faqs',
  },
  {
    keys: ['contact', 'reach', 'hire', 'email'],
    type: 'contact',
  },
  {
    keys: ['age', 'old', 'birth', 'birthday', 'born'],
    type: 'age',
  },
  {
    keys: ['resume', 'cv', 'download'],
    type: 'resume',
  },
  {
    keys: ['education', 'study', 'degree', 'university'],
    type: 'education',
  },
  {
    keys: ['experience', 'career', 'work history', 'job'],
    type: 'experience',
  },
  {
    keys: ['award', 'awards', 'achievement', 'winner'],
    type: 'awards',
  },
  {
    keys: ['hobbies', 'hobby', 'game', 'games', 'interest'],
    type: 'hobbies',
  },
  {
    keys: ['skill', 'skills', 'tools', 'software'],
    type: 'skills',
  },
  {
    keys: ['programming', 'coding', 'code', 'language', 'languages', 'javascript', 'php', 'html', 'css'],
    type: 'programming',
  },
  {
    keys: ['communication', 'multilingual', 'speak', 'french', 'english', 'german', 'hindi', 'italian'],
    type: 'communication',
  },
  {
    keys: ['home'],
    type: 'home_scroll',
  },
];

function findResponse(input: string) {
  const lower = input.toLowerCase().trim();
  for (const section of BOT_SECTIONS) {
    for (const key of section.keys) {
      if (lower.includes(key)) return section.type;
    }
  }
  return 'unknown';
}

// ============================================================
// GET BOT CONTENT (for streaming)
// ============================================================
function getBotContent(type: string) {
  switch (type) {
    case 'hello':
      return 'Hello 👋 I Am Thomson.';
    case 'about':
      return 'CS Student @ UNILAG · Backend Intern @ FlexiSAF · I craft microservices with Express.js/Spring Boot and mobile apps with Flutter.';
    case 'services':
      return 'Experience innovative tools, smart strategies, and expert support—all designed to scale your business faster, smarter, and more efficiently than ever before.';
    case 'projects':
      return 'Here\'s what I\'ve been building. Let me walk you through my work.';
    case 'pricing':
      return 'Affordable pricing to kickstart your journey.';
    case 'faqs':
      return 'Frequently Asked Questions';
    case 'contact':
      return 'Let\'s create something amazing together. I\'m always open to new projects, innovative ideas, and collaboration opportunities.';
    case 'age':
      return 'I\'m a Computer Science student at UNILAG, currently based in Lagos, Nigeria.';
    case 'resume':
      return 'Explore my complete professional profile. Click the button below to download my Resume in PDF format.';
    case 'education':
      return 'Here\'s my academic background — building the foundation for a career in software engineering.';
    case 'experience':
      return 'Building a strong foundation through continuous learning. A journey of learning, growth, and creative discovery.';
    case 'awards':
      return 'Proud to be a 2× Hackathon Winner — here\'s a look at the recognitions I\'ve earned so far.';
    case 'hobbies':
      return 'Outside of code, here\'s what keeps me grounded and growing:';
    case 'skills':
      return 'Here\'s my full tech stack — from backend services to mobile apps and DevOps tooling.';
    case 'programming':
      return 'Here\'s my full tech stack — from backend services to mobile apps and DevOps tooling.';
    case 'communication':
      return 'Proficient in multiple languages, enabling effective communication across diverse cultures and environments.';
    case 'home_scroll':
      return 'You\'re on the home page. What would you like to know? Ask me about my about, services, projects, and more!';
    default:
      return 'I\'m not sure about that. Try asking me about: about, services, projects, skills, pricing, contact, education, experience, awards, or hobbies.';
  }
}

// ============================================================
// SVG ICONS
// ============================================================
const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const MenuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

// ============================================================
// CHROME BLOB SVGs (decorative metallic objects)
// ============================================================
const ChromeBlobLeft = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="metalL1" cx="35%" cy="30%" r="65%">
        <stop offset="0%" stopColor="#F0F0F0" />
        <stop offset="25%" stopColor="#C8C8C8" />
        <stop offset="55%" stopColor="#888888" />
        <stop offset="80%" stopColor="#4A4A4A" />
        <stop offset="100%" stopColor="#1A1A1A" />
      </radialGradient>
      <radialGradient id="metalL2" cx="60%" cy="70%" r="50%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
      </radialGradient>
      <filter id="blobShadow">
        <feDropShadow dx="4" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.25" />
      </filter>
    </defs>
    <g filter="url(#blobShadow)">
      <path
        d="M95,30 C120,20 155,35 165,65 C175,95 160,130 140,150 C120,170 85,175 65,160 C45,145 30,115 35,88 C40,61 70,40 95,30 Z"
        fill="url(#metalL1)"
      />
      <path
        d="M95,30 C120,20 155,35 165,65 C175,95 160,130 140,150 C120,170 85,175 65,160 C45,145 30,115 35,88 C40,61 70,40 95,30 Z"
        fill="url(#metalL2)"
      />
      {/* highlight streak */}
      <ellipse cx="80" cy="70" rx="22" ry="10" fill="white" opacity="0.35" transform="rotate(-30 80 70)" />
      <ellipse cx="75" cy="65" rx="10" ry="5" fill="white" opacity="0.6" transform="rotate(-30 75 65)" />
    </g>
  </svg>
);

const ChromeBlobRight = () => (
  <svg width="180" height="200" viewBox="0 0 180 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="metalR1" cx="40%" cy="35%" r="60%">
        <stop offset="0%" stopColor="#EBEBEB" />
        <stop offset="30%" stopColor="#B0B0B0" />
        <stop offset="65%" stopColor="#6A6A6A" />
        <stop offset="100%" stopColor="#1E1E1E" />
      </radialGradient>
      <radialGradient id="metalR2" cx="55%" cy="60%" r="45%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
      </radialGradient>
      <filter id="starShadow">
        <feDropShadow dx="3" dy="6" stdDeviation="10" floodColor="#000" floodOpacity="0.2" />
      </filter>
    </defs>
    <g filter="url(#starShadow)" transform="translate(90, 100)">
      {/* Star / asterisk shape */}
      {[0, 45, 90, 135].map((angle) => (
        <ellipse
          key={angle}
          cx="0" cy="0"
          rx="72" ry="22"
          fill="url(#metalR1)"
          transform={`rotate(${angle})`}
        />
      ))}
      {/* overlays */}
      {[0, 45, 90, 135].map((angle) => (
        <ellipse
          key={`h-${angle}`}
          cx="0" cy="0"
          rx="72" ry="22"
          fill="url(#metalR2)"
          transform={`rotate(${angle})`}
        />
      ))}
      {/* Center highlight */}
      <circle cx="0" cy="0" r="20" fill="url(#metalR1)" />
      <circle cx="-5" cy="-5" r="8" fill="white" opacity="0.5" />
    </g>
  </svg>
);

// ============================================================
// TYPING INDICATOR
// ============================================================
function TypingIndicator() {
  return (
    <div className="typing-indicator">
      <div className="typing-dot" />
      <div className="typing-dot" />
      <div className="typing-dot" />
    </div>
  );
}

// ============================================================
// TYPES
// ============================================================
type Message = {
  id: number;
  from: 'user' | 'bot';
  text?: string;
  responseType?: string;
  content?: string;
  isStreaming?: boolean;
  quickReplies?: string[];
};

type BotDetailsProps = {
  type: string;
  projectIndex: number;
  onNextProject: () => void;
  onOpenForm: () => void;
  onSend: (text: string) => void;
};

// ============================================================
// TYPEWRITER EFFECT
// ============================================================
function TypewriterText({ text, speed = 30 }: { text: string; speed?: number }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [displayedText, text, speed]);

  return (
    <span>
      {displayedText}
      {!isComplete && <span className="typewriter-cursor" />}
    </span>
  );
}

// ============================================================
// DOT BAR (for programming/communication skills)
// ============================================================
function DotBar({ percent }: { percent: number }) {
  const total = 10;
  const active = Math.round((percent / 100) * total);
  return (
    <div className="dots-row">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className={`dot${i < active ? ' active' : ''}`} />
      ))}
    </div>
  );
}

// ============================================================
// PROJECTS PANEL — tabbed by category
// ============================================================
type Project = {
  title: string; desc: string; role: string; year: string;
  tech: string[]; liveUrl: string; githubUrl: string;
  videoId?: string; portrait?: boolean; image?: string; icon: string; color: string; category: 'web' | 'mobile' | 'devops';
};

const ALL_PROJECTS: Project[] = [
  {
    category: 'web',
    title: 'TraceLens',
    desc: 'AI-powered invoice verification platform. Payees submit invoices through a secure portal, three ML models verify in under 15 seconds, and Squad by GTCO releases payment on approval.',
    role: 'Backend Developer', year: '2025',
    tech: ['Node.js', 'Python', 'FastAPI', 'MongoDB', 'EfficientNet-B3', 'ResNet50', 'Squad API', 'Cloudinary'],
    liveUrl: '#', githubUrl: 'https://github.com/ojayballer/TraceLens',
    videoId: 'trWQzlI1hDk', icon: '🔍', color: '#00AEFF',
  },
  {
    category: 'web',
    title: 'Blue More Yachting',
    desc: 'A luxury yacht charter platform featuring destination browsing, yacht type filtering, budget and guest selection — built for exclusive charters across Turkey, Greece, and Croatia.',
    role: 'Frontend Developer', year: '2025',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    liveUrl: 'https://bluemore-delta.vercel.app/', githubUrl: 'https://github.com/Thomson-dev/BLUEMORE', image: '/project-bluermore.png', icon: '⛵', color: '#0EA5E9',
  },
  {
    category: 'web',
    title: 'Web Project 3',
    desc: 'Add your project description here — what problem it solves, key features, and the impact it made.',
    role: 'Full Stack Developer', year: '2025',
    tech: ['React', 'Node.js', 'MongoDB'],
    liveUrl: '#', githubUrl: '#', icon: '💻', color: '#8B5CF6',
  },
  {
    category: 'mobile',
    title: 'Campus Fair',
    desc: 'Built during UNILAG Hall Week — vendors get a short code (e.g. MK-2091) displayed at their booth, students type it in to save that vendor instantly, then browse their catalog and place orders after the fair. Features in-app chat, order tracking, and Paystack payments — all in a Flutter app backed by Node.js and Firebase.',
    role: 'Mobile Developer', year: '2025',
    tech: ['Flutter', 'Dart', 'Node.js', 'Firebase', 'MongoDB', 'Paystack'],
    liveUrl: '#', githubUrl: 'https://github.com/Thomson-dev/campus-fair',
    videoId: 'niP4OHlyp5I', portrait: true, icon: '🎪', color: '#7C3AED',
  },
  {
    category: 'mobile',
    title: 'Mobile Project 2',
    desc: 'Add your project description here — what problem it solves, key features, and the impact it made.',
    role: 'Mobile Developer', year: '2025',
    tech: ['Flutter', 'Dart', 'Provider', 'Firebase'],
    liveUrl: '#', githubUrl: '#', icon: '📲', color: '#6D28D9',
  },
  {
    category: 'mobile',
    title: 'Mobile Project 3',
    desc: 'Add your project description here — what problem it solves, key features, and the impact it made.',
    role: 'Mobile Developer', year: '2025',
    tech: ['Flutter', 'Dart', 'Bloc/Cubit', 'REST API'],
    liveUrl: '#', githubUrl: '#', icon: '🛸', color: '#5B21B6',
  },
  {
    category: 'devops',
    title: 'AirSync',
    desc: 'A distributed airline booking platform built as 7 independently deployable Spring Boot microservices, coordinated with Eureka service discovery and a centralized Spring Cloud Config server. Synchronous OpenFeign calls handle price validation and seat reservation, while async RabbitMQ events drive payments and notifications so a slow email never blocks a booking. Integrated real Paystack payments with verification, plus a scheduled engine that auto-cancels unpaid bookings and releases seats after a 10-minute window — confirmed working end-to-end with a real confirmation email after a full booking-and-payment flow.',
    role: 'Backend Developer', year: '2025',
    tech: ['Java 21', 'Spring Boot', 'Spring Cloud', 'RabbitMQ', 'PostgreSQL', 'Paystack', 'JWT'],
    liveUrl: '#', githubUrl: 'https://github.com/Thomson-dev/Airsync', icon: '✈️', color: '#059669',
  },
  {
    category: 'devops',
    title: 'Campus Fair',
    desc: 'Built during UNILAG Hall Week — vendors get a short code (e.g. MK-2091) displayed at their booth, students type it in the app to save that vendor instantly, then browse their catalog and place orders after the fair. Full order lifecycle (pending → confirmed → ready → delivered), in-app chat, Paystack payments with signature-verified webhooks, role-based access across students, vendors, and organizers, and an 8% platform fee split on every payout.',
    role: 'Backend Developer', year: '2025',
    tech: ['Flutter', 'Node.js', 'TypeScript', 'MongoDB', 'Firebase', 'Paystack', 'Cloudinary'],
    liveUrl: '#', githubUrl: 'https://github.com/Thomson-dev/campus-fair',
    videoId: 'niP4OHlyp5I', portrait: true, icon: '🎪', color: '#047857',
  },
  {
    category: 'devops',
    title: 'DevOps Project 3',
    desc: 'Add your project description here — what problem it solves, key features, and the impact it made.',
    role: 'Backend / DevOps', year: '2025',
    tech: ['Kubernetes', 'Spring Boot', 'Flyway', 'Resilience4J'],
    liveUrl: '#', githubUrl: '#', icon: '⚙️', color: '#065F46',
  },
];

const CATEGORY_TABS: { key: Project['category']; label: string }[] = [
  { key: 'web',    label: 'Web' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'devops', label: 'Backend & DevOps' },
];

function ProjectsPanel({ onSend: _onSend }: { onSend: (t: string) => void }) {
  const [activeTab, setActiveTab] = useState<Project['category']>('web');
  const [idx, setIdx] = useState(0);

  const filtered = ALL_PROJECTS.filter(p => p.category === activeTab);
  const current = filtered[idx] || filtered[0];

  const handleTab = (tab: Project['category']) => {
    setActiveTab(tab);
    setIdx(0);
  };

  return (
    <>
      <div className="proj-tabs">
        {CATEGORY_TABS.map(t => (
          <button
            key={t.key}
            className={`proj-tab${activeTab === t.key ? ' active' : ''}`}
            onClick={() => handleTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {current && (
        <div className="project-card-v2">
          {current.videoId ? (
            <div className={`project-video-top${current.portrait ? ' project-video-top--portrait' : ''}`}>
              <iframe
                src={`https://www.youtube.com/embed/${current.videoId}`}
                title={current.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : current.image ? (
            <div className="project-img-top">
              <img src={current.image} alt={current.title} />
            </div>
          ) : (
            <div className="project-thumb-top" style={{ background: `linear-gradient(135deg, ${current.color}80, ${current.color})` }}>
              <div className="play-circle">{current.icon}</div>
            </div>
          )}
          <div className="project-card-v2-body">
            <div className="project-card-v2-header">
              <p className="project-card-v2-title">{current.title}</p>
              <span className="project-card-v2-year">{current.year}</span>
            </div>
            <p className="project-card-v2-role">{current.role}</p>
            <p className="project-card-v2-desc">{current.desc}</p>
            <div className="project-tech-tags">
              {current.tech.map(t => <span key={t} className="project-tech-tag">{t}</span>)}
            </div>
            <div className="project-links">
              <a href={current.liveUrl} className="project-link-btn project-link-live"
                target={current.liveUrl !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                onClick={e => current.liveUrl === '#' && e.preventDefault()}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Live Preview
              </a>
              <a href={current.githubUrl} className="project-link-btn project-link-github"
                target="_blank" rel="noopener noreferrer"
                onClick={e => current.githubUrl === '#' && e.preventDefault()}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}

      {filtered.length > 1 && (
        <div className="proj-nav">
          <button
            className="proj-nav-btn"
            onClick={() => setIdx(i => i - 1)}
            disabled={idx === 0}
          >
            « Prev
          </button>
          <span className="proj-nav-counter">{idx + 1} / {filtered.length}</span>
          <button
            className="proj-nav-btn"
            onClick={() => setIdx(i => i + 1)}
            disabled={idx === filtered.length - 1}
          >
            Next »
          </button>
        </div>
      )}
    </>
  );
}

// ============================================================
// BOT DETAILS — rich content rendered after typewriter finishes
// ============================================================
function BotDetails({ type, projectIndex, onNextProject, onOpenForm, onSend }: BotDetailsProps) {
  switch (type) {
    case 'about':
      return (
        <>
          <p className="resp-subtitle">I craft microservices with Express js & Spring Boot and build mobile experiences with Flutter — bridging backend reliability with smooth frontend design.</p>
          <ul className="about-list">
            {[
              { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>, text: 'CS Student @ University of Lagos (UNILAG)' },
              { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>, text: 'Backend Intern @ FlexiSAF' },
              { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>, text: 'Express js · Spring Boot · Microservices' },
              { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>, text: 'Flutter · Mobile Development' },
              { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 11V7a5 5 0 0 1 10 0v4"/><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M12 12v9"/></svg>, text: 'Open to Internships & Collaborations' },
              { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, text: '230805075@live.unilag.edu.ng' },
              { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, text: 'Lagos, Nigeria' },
            ].map((item, idx) => (
              <li key={idx}><span className="icon">{item.svg}</span>{item.text}</li>
            ))}
          </ul>
        </>
      );

   

    case 'projects':
      return <ProjectsPanel onSend={onSend} />;

    case 'pricing':
      return (
        <>
          {[
            { name: 'Basic Package', price: '$19/hr', items: ['Custom website design', 'Contact form integration', 'Product listing service', '1 month support'] },
            { name: 'Standard Package', price: '$39/hr', items: ['Everything in the basic package', 'Advanced SEO optimization', 'Click funnel & CMS setup', 'Basic eCommerce functionality', '3 month support'] },
            { name: 'Premium Package', price: '$59/hr', items: ['Everything in the basic package', 'Custom animation and interactions', 'Payment integration', 'Basic eCommerce functionality', '6 month support'] },
          ].map((p) => (
            <div className="plan-box" key={p.name}>
              <p className="plan-title">{p.name}: <span>{p.price}</span></p>
              <ul className="pricing-list">{p.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
          <p className="contact-cta">Let&apos;s connect to choose the best package for you, <button onClick={() => onSend('contact')}>contact me.</button></p>
        </>
      );

    case 'faqs':
      return (
        <>
          {[
            { q: 'What services do you offer?', a: 'I offer UI/UX design, web development, app development, and digital marketing services tailored to your business needs.' },
            { q: 'How long does a project take?', a: 'Timelines vary based on scope. A typical website takes 2–4 weeks, while complex apps may take 2–3 months.' },
            { q: 'Do you work with clients worldwide?', a: 'Yes! I collaborate with clients across 24+ countries and am comfortable working across different time zones.' },
            { q: 'What is your pricing structure?', a: 'I offer flexible packages starting at $19/hr. Ask me about pricing for a full breakdown.' },
          ].map((f) => (
            <div className="faq-box" key={f.q}>
              <p className="faq-question">{f.q}</p>
              <p className="faq-answer">{f.a}</p>
            </div>
          ))}
        </>
      );

    case 'contact':
      return (
        <>
          <div className="contact-info-item">
            <span className="contact-icon">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </span>
            <div><p>Email Me:</p><a href="mailto:230805075@live.unilag.edu.ng">230805075@live.unilag.edu.ng</a></div>
          </div>
          <div className="contact-info-item">
            <span className="contact-icon">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>
            </span>
            <div><p>Location:</p><a href="#">Lagos, Nigeria</a></div>
          </div>
          <div className="social-links">
            <a href="#" className="social-btn" onClick={(e) => e.preventDefault()} aria-label="Facebook"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a href="#" className="social-btn" onClick={(e) => e.preventDefault()} aria-label="Instagram"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            <a href="#" className="social-btn" onClick={(e) => e.preventDefault()} aria-label="X"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
            <a href="#" className="social-btn" onClick={(e) => e.preventDefault()} aria-label="LinkedIn"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
            <a href="#" className="social-btn social-btn-text" onClick={(e) => e.preventDefault()} aria-label="Behance">Be</a>
            <a href="#" className="social-btn" onClick={(e) => e.preventDefault()} aria-label="Dribbble"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg></a>
          </div>
          <button className="next-project-btn" onClick={onOpenForm}>Send Me a Message »</button>
        </>
      );

    case 'resume':
      return (
        <>
          <p className="resp-subtitle">Click the button below to download my Resume in PDF format.</p>
          <a href="#" className="download-btn" onClick={(e) => e.preventDefault()}>Download Resume ↓</a>
        </>
      );

    case 'education':
      return (
        <>
          <div className="edu-box">
            <p className="service-title">Currently Enrolled: <span>B.Sc. Computer Science</span></p>
            <p className="service-desc">University of Lagos (UNILAG), Lagos, Nigeria</p>
            <div className="project-tech-tags" style={{ marginTop: 10 }}>
              {['Systems Analysis & Design', 'Distributed Systems', 'Digital Logic Design', 'Data Structures & Algorithms'].map((c) => (
                <span key={c} className="project-tech-tag">{c}</span>
              ))}
            </div>
          </div>
        </>
      );

    case 'experience':
      return (
        <>
          {[
            { period: '2025 – Current', title: 'Lead Design Team', desc: 'Leading the design team at Envato to create innovative, user-focused digital experiences.' },
            { period: '2020 – 2025', title: 'Senior Design & Development', desc: 'Led innovative design and development projects, creating intuitive digital experiences and high-performance products.' },
            { period: '2016 – 2020', title: 'Junior Design & Development', desc: 'Contributed to designing user-friendly interfaces and supporting front-end development.' },
          ].map((e) => (
            <div className="exp-box" key={e.title}>
              <p className="service-title">{e.period}: <span>{e.title}</span></p>
              <p className="service-desc">{e.desc}</p>
            </div>
          ))}
        </>
      );

    case 'awards':
      return (
        <>
          {[
            { status: 'WINNER', year: '2025', name: 'Hackathon' },
            { status: 'WINNER', year: '2024', name: 'Hackathon' },
          ].map((a) => (
            <div className="award-row" key={a.name + a.year}>
              <span className="award-badge">[{a.status}]</span>
              <span className="award-name"><span>{a.name}</span></span>
            </div>
          ))}
        </>
      );

    case 'hobbies':
      return (
        <>
          {[
            { emoji: '🌿', title: 'Nature Walks', desc: 'I enjoy outdoor spots and nature walks around Lagos — a great way to clear my head after long coding sessions.' },
            { emoji: '🎯', title: 'Tech Community', desc: 'Active member of SCA UNILAG, helping build a community where students learn, collaborate, and grow together.' },
            { emoji: '📚', title: 'Reading', desc: 'I love reading about distributed systems and clean architecture — the thinking behind well-built software fascinates me.' },
            { emoji: '🧩', title: 'DSA / LeetCode', desc: 'Working through the Neetcode 150 to sharpen my problem-solving and stay sharp for technical interviews.' },
          ].map((h) => (
            <div className="hobby-box" key={h.title}>
              <h3><span className="hobby-emoji">{h.emoji}</span> {h.title}</h3>
              <p className="hobby-desc">{h.desc}</p>
            </div>
          ))}
        </>
      );

    case 'skills':
      return (
        <>
          {[
            { category: 'Backend', tags: ['Java', 'Spring Boot 3', 'Spring Cloud', 'Spring Security', 'Quarkus', 'REST APIs', 'Microservices', 'RabbitMQ', 'JWT', 'Flyway'] },
            { category: 'Mobile', tags: ['Flutter', 'Dart', 'GetX', 'Provider', 'Bloc/Cubit'] },
            { category: 'Databases', tags: ['PostgreSQL', 'MySQL', 'H2'] },
            { category: 'DevOps & Tools', tags: ['Docker', 'Maven', 'Git', 'GitHub', 'Postman', 'IntelliJ IDEA'] },
            { category: 'Frontend', tags: ['React', 'Next.js', 'Vite', 'Tailwind CSS'] },
            { category: 'Other', tags: ['Python (DSA)', 'Node.js', 'OpenFeign', 'Resilience4J', 'Paystack API'] },
          ].map((group) => (
            <div className="skill-category" key={group.category}>
              <p className="skill-category-label">{group.category}</p>
              <div className="skill-tag-row">
                {group.tags.map((tag) => <span key={tag} className="skill-tag">{tag}</span>)}
              </div>
            </div>
          ))}
        </>
      );

    case 'programming':
      return (
        <>
          {[
            { category: 'Backend', tags: ['Java', 'Spring Boot 3', 'Spring Cloud', 'Spring Security', 'Quarkus', 'REST APIs', 'Microservices', 'RabbitMQ', 'JWT', 'Flyway'] },
            { category: 'Mobile', tags: ['Flutter', 'Dart', 'GetX', 'Provider', 'Bloc/Cubit'] },
            { category: 'Databases', tags: ['PostgreSQL', 'MySQL', 'H2'] },
            { category: 'DevOps & Tools', tags: ['Docker', 'Maven', 'Git', 'GitHub', 'Postman', 'IntelliJ IDEA'] },
            { category: 'Frontend', tags: ['React', 'Next.js', 'Vite', 'Tailwind CSS'] },
            { category: 'Other', tags: ['Python (DSA)', 'Node.js', 'OpenFeign', 'Resilience4J', 'Paystack API'] },
          ].map((group) => (
            <div className="skill-category" key={group.category}>
              <p className="skill-category-label">{group.category}</p>
              <div className="skill-tag-row">
                {group.tags.map((tag) => <span key={tag} className="skill-tag">{tag}</span>)}
              </div>
            </div>
          ))}
        </>
      );

    case 'communication':
      return (
        <>
          {[
            { name: 'English', pct: 95 },
            { name: 'Italian', pct: 70 },
            { name: 'Hindi', pct: 80 },
            { name: 'German', pct: 85 },
            { name: 'French', pct: 95 },
          ].map((s) => (
            <div className="prog-skill" key={s.name}>
              <div className="prog-skill-header">
                <span className="prog-skill-name">{s.name}</span>
                <span className="prog-skill-pct">[{s.pct}%]</span>
              </div>
              <DotBar percent={s.pct} />
            </div>
          ))}
        </>
      );

    default:
      return null;
  }
}

// ============================================================
// QUICK REPLIES
// ============================================================
const QUICK_REPLIES: Record<string, string[]> = {
  hello: ['About 👤', 'Projects 🚀', 'Contact ✉️'],
  about: ['Experience 💼', 'Skills 🛠️', 'Resume 📄'],
  projects: ['Contact ✉️', 'About 👤', 'Skills 🛠️'],
  contact: ['About 👤', 'Projects 🚀', 'Resume 📄'],
  age: ['About 👤', 'Education 🎓', 'Experience 💼'],
  resume: ['About 👤', 'Skills 🛠️', 'Contact ✉️'],
  education: ['Experience 💼', 'Skills 🛠️', 'About 👤'],
  experience: ['Awards 🏆', 'Skills 🛠️', 'Education 🎓'],
  awards: ['About 👤', 'Projects 🚀', 'Experience 💼'],
  hobbies: ['About 👤', 'Skills 🛠️', 'Contact ✉️'],
  skills: ['Projects 🚀', 'About 👤', 'Contact ✉️'],
  programming: ['Projects 🚀', 'About 👤', 'Contact ✉️'],
  communication: ['Skills 🛠️', 'About 👤', 'Contact ✉️'],
  home_scroll: ['About 👤', 'Projects 🚀', 'Contact ✉️'],
  unknown: ['About 👤', 'Projects 🚀', 'Contact ✉️'],
};

// ============================================================
// CONTACT FORM MODAL
// ============================================================
function ContactForm({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: '', email: '', interest: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(onClose, 2000);
  };

  return (
    <div className="form-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="form-modal">
        <button className="form-close" onClick={onClose}>×</button>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
            <p className="form-title">Message Sent!</p>
            <p className="form-subtitle">Thanks! I&apos;ll get back to you soon.</p>
          </div>
        ) : (
          <>
            <h2 className="form-title">Contact Me</h2>
            <p className="form-subtitle">Give us a chance to serve and bring magic to your brand.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  required
                />
              </div>
              <div className="form-field">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  required
                />
              </div>
              <div className="form-field">
                <label>I&apos;m interested in</label>
                <select
                  value={form.interest}
                  onChange={e => setForm(f => ({ ...f, interest: e.target.value }))}
                  required
                >
                  <option value="">I&apos;m Interested In</option>
                  <option value="website">Website Design</option>
                  <option value="development">Web Development</option>
                  <option value="uiux">UI/UX Design</option>
                </select>
              </div>
              <div className="form-field">
                <label>My budget is</label>
                <select
                  value={form.budget}
                  onChange={e => setForm(f => ({ ...f, budget: e.target.value }))}
                  required
                >
                  <option value="">My Budget</option>
                  <option value="19-39">$19/hr – $39/hr</option>
                  <option value="39-59">$39/hr – $59/hr</option>
                  <option value="59+">$59/hr+</option>
                </select>
              </div>
              <div className="form-field">
                <label>Your Request</label>
                <textarea
                  placeholder="Write here..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  required
                />
              </div>
              <button type="submit" className="form-submit">Submit</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

// ============================================================
// MAIN PAGE
// ============================================================
const PLACEHOLDER_TOPICS = ['About 👤', 'Projects 🚀', 'Skills 🛠️', 'Contact ✉️', 'Resume 📄', 'Education 🎓', 'Experience 💼', 'Awards 🏆', 'Hobbies 🎨', 'Programming 💻', 'Communication 💬'];

const MENU_ITEMS = [
  { num: '01', label: 'Home', key: 'home' },
  { num: '02', label: 'About', key: 'about' },
  { num: '03', label: 'Projects', key: 'project' },
  { num: '04', label: 'Skills', key: 'skills' },
  { num: '05', label: 'Hobbies', key: 'hobbies' },
  { num: '06', label: 'Contact', key: 'contact' },
];


export default function FolioGPT() {
  const [darkMode, setDarkMode] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const [projectIndices, setProjectIndices] = useState<Record<number, number>>({});

  const chatRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Animate placeholder topics
  useEffect(() => {
    const t = setInterval(() => {
      setPlaceholderIdx(i => (i + 1) % PLACEHOLDER_TOPICS.length);
    }, 2200);
    return () => clearInterval(t);
  }, []);


  // Auto scroll chat to bottom
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  // Close menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSend = useCallback((text?: string) => {
    const query = (text || input).trim();
    if (!query) return;

    setInput('');
    setShowHome(false);
    setMenuOpen(false);

    const userMsgId = Date.now();
    setMessages(prev => [...prev, { id: userMsgId, from: 'user', text: query }]);

    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const responseType = findResponse(query);
      const botMsgId = Date.now() + 1;
      
      // Create initial bot message with empty content
      setMessages(prev => [
        ...prev,
        { 
          id: botMsgId, 
          from: 'bot', 
          responseType, 
          content: '',
          isStreaming: true,
          quickReplies: QUICK_REPLIES[responseType] || QUICK_REPLIES.unknown 
        }
      ]);

      // Simulate streaming response by breaking into chunks
      const fullContent = getBotContent(responseType);
      const chars = fullContent.split('');
      let charIndex = 0;

      const streamChar = () => {
        if (charIndex < chars.length) {
          const currentIndex = charIndex;
          setMessages(prev =>
            prev.map(msg =>
              msg.id === botMsgId
                ? { ...msg, content: fullContent.slice(0, currentIndex + 1), isStreaming: true }
                : msg
            )
          );
          charIndex++;
          const delay = /[.,!?]/.test(chars[currentIndex]) ? 120 : 22;
          setTimeout(streamChar, delay);
        } else {
          setMessages(prev =>
            prev.map(msg =>
              msg.id === botMsgId ? { ...msg, isStreaming: false } : msg
            )
          );
        }
      };

      streamChar();
    }, 600);
  }, [input]);

  const handleNextProject = useCallback((msgId: number) => {
    setProjectIndices(prev => ({
      ...prev,
      [msgId]: (prev[msgId] || 0) + 1,
    }));
  }, []);

  const handleGoHome = () => {
    setShowHome(true);
    setMessages([]);
    setMenuOpen(false);
  };

  const renderResponse = (msg: Message) => {
    const isUnknown = msg.responseType === 'unknown';
    return (
      <div>
        <p className="resp-title">
          {msg.content}
          {msg.isStreaming && <span className="typewriter-cursor" />}
        </p>
        {!msg.isStreaming && !isUnknown && (
          <div className="bot-details-appear">
            <BotDetails
              type={msg.responseType ?? 'unknown'}
              projectIndex={projectIndices[msg.id] || 0}
              onNextProject={() => handleNextProject(msg.id)}
              onOpenForm={() => setFormOpen(true)}
              onSend={handleSend}
            />
          </div>
        )}
        {!msg.isStreaming && isUnknown && (
          <p className="unknown-msg">
            Try asking me about: <strong>about</strong>, <strong>projects</strong>, <strong>skills</strong>, <strong>contact</strong>, <strong>education</strong>, <strong>experience</strong>, <strong>awards</strong>, or <strong>hobbies</strong>.
          </p>
        )}
      </div>
    );
  };

  return (
    <div data-theme={darkMode ? 'dark' : 'light'} className="page-wrapper">
      <button
        className="dark-toggle"
        onClick={() => setDarkMode(d => !d)}
        aria-label="Toggle dark mode"
      >
        {darkMode ? <SunIcon /> : <MoonIcon />}
      </button>

      <div className="main-container">
        {/* HOME SECTION */}
        {showHome && (
          <section className="home-section">
            {/* Decorative chrome blobs */}
           

            {/* Profile */}
            <div className="profile-img-main">
              <img src="/pic.png" alt="Thomson Onyedikachi" className="profile-avatar" />
            </div>

            <h1 className="profile-name"> Thomson Onyedikachi</h1>
            <p className="sub-text-hero">
              CS Student @ <span className="text-accent font-bold">UNILAG</span> &amp; Backend Intern @ <span className="text-secondary font-bold">FlexiSAF</span> — building microservices with Express.js/Spring Boot and mobile apps with Flutter.
            </p>
            <h2 className="help-text">What can I help you?</h2>
          </section>
        )}

        {/* CHAT SCREEN */}
        {!showHome && (
          <div className="chat-screen" ref={chatRef}>
            {messages.map((msg) => (
              <div key={msg.id} className={`message-row ${msg.from}`}>
                {msg.from === 'bot' && (
                  <div className="bot-avatar">
                    <img src="/pic.png" alt="Bot" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                  </div>
                )}
                <div className="message-content">
                  {msg.from === 'user' ? (
                    <div className="user-bubble">{msg.text}</div>
                  ) : (
                    <>
                      {renderResponse(msg)}
                      {msg.quickReplies && !msg.isStreaming && (
                        <div className="quick-replies">
                          {msg.quickReplies.map((r) => (
                            <button
                              key={r}
                              className="quick-reply-btn"
                              onClick={() => handleSend(r)}
                            >
                              {r}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="message-row bot">
                <div className="bot-avatar">
                  <img src="/pic.png" alt="Bot" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                </div>
                <div className="message-content">
                  <TypingIndicator />
                </div>
              </div>
            )}
          </div>
        )}

        {/* CHAT LAYOUT (input + menu) */}
        <div className="chat-layout" style={{ position: 'relative' }}>
          <div className="input-box">
            {/* Menu button */}
            <button
              className="menu-btn"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Open menu"
            >
              <MenuIcon />
              <span>Menu</span>
            </button>

            {/* Input field */}
            <div className="input-wrapper">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                autoComplete="off"
                aria-label="Ask a question"
              />
              {!input && (
                <div className="fake-placeholder">
                  <span className="prefix">You can ask me:</span>
                  <span className="topic" key={placeholderIdx}>
                    {PLACEHOLDER_TOPICS[placeholderIdx].split(' ')[0]}
                  </span>
                </div>
              )}
            </div>

            {/* Send button */}
            <button className="send-btn" onClick={() => handleSend()} aria-label="Send message">
              <SendIcon />
            </button>
          </div>

          {/* Menu popup */}
          {menuOpen && (
            <div className="menu-popup min-w-10" ref={menuRef}>
              <div
                className={`menu-item${showHome ? ' active' : ''}`}
                onClick={handleGoHome}
              >
                <span className="menu-item-num">[01]</span> Home
              </div>
              {MENU_ITEMS.slice(1).map((item) => (
                <div
                  key={item.key}
                  className="menu-item"
                  onClick={() => handleSend(item.key)}
                >
                  <span className="menu-item-num">[{item.num}]</span> {item.label}
                </div>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="footer-text">
            <p>
              💬 You can ask me about: age · resume · education · experience · awards · hobbies
            </p>
            <p>© FolioGPT created by Thomson.</p>
          </div>
        </div>
      </div>

      {/* Contact form modal */}
      {formOpen && <ContactForm onClose={() => setFormOpen(false)} />}
    </div>
  );
}
