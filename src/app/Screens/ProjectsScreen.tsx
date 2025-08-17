"use client";
import React, { useMemo, useState, useEffect } from "react";
import { initialProblems } from "../../data/problems";

// Types
type Problem = {
  title: string;
  category: string;
  link: string;
  status: "Solved" | "Revisit";
  difficulty?: "Easy" | "Medium" | "Hard";
};

const statusOptions = ["All", "Solved", "Revisit"] as const;
const LS_KEY = "leetcodeProblems";
const LS_VERSION_KEY = "leetcodeProblemsVersion";
const DATA_VERSION = "reset-all-v1"; // bump this to force a one-time reset

export default function LeetCodePortfolio() {
  //@ts-ignore
  const [problems, setProblems] = useState<Problem[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const savedRaw = localStorage.getItem(LS_KEY);
        const savedVersion = localStorage.getItem(LS_VERSION_KEY);

        // Force reset if version changed OR no saved data
        if (!savedRaw || savedVersion !== DATA_VERSION) {
          const reset = initialProblems.map((p) => ({ ...p, status: "Revisit" }));
          localStorage.setItem(LS_KEY, JSON.stringify(reset));
            localStorage.setItem(LS_VERSION_KEY, DATA_VERSION);
          return reset;
        }

        // Use saved (and still merge any brand‑new problems as Revisit)
        const savedRawArr = JSON.parse(savedRaw);
        // Ensure status is typed correctly
        const saved: Problem[] = savedRawArr.map((p: any) => ({
          ...p,
          status: p.status === "Solved" ? "Solved" : "Revisit",
        }));
        const map = new Map(saved.map((p) => [p.title, p]));
        initialProblems.forEach((np) => {
          if (!map.has(np.title))
            map.set(np.title, {
              ...np,
              status: "Revisit",
            });
        });
        // Ensure all items in the array have correct status type
        return Array.from(map.values()).map((p) => ({
          ...p,
          status: p.status === "Solved" ? "Solved" : "Revisit",
        }));
      } catch {}
    }
    return initialProblems.map((p) => ({ ...p, status: "Revisit" }));
  });

  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState<typeof statusOptions[number]>("All");
  const [query, setQuery] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(problems));
    } catch {}
  }, [problems]);

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(new Set(problems.map((p) => p.category))).sort(),
    ],
    [problems]
  );

  const solvedCount = problems.filter((p) => p.status === "Solved").length;
  const revisitCount = problems.length - solvedCount;
  const progress = problems.length
    ? Math.round((solvedCount / problems.length) * 100)
    : 0;

  const filtered = problems.filter((p) => {
    if (category !== "All" && p.category !== category) return false;
    if (status !== "All" && p.status !== status) return false;
    if (query && !p.title.toLowerCase().includes(query.toLowerCase()))
      return false;
    return true;
  });

  function toggleStatus(title: string) {
    setProblems((prev) =>
      prev.map((p) =>
        p.title === title
          ? { ...p, status: p.status === "Solved" ? "Revisit" : "Solved" }
          : p
      )
    );
  }

  function resetProblems() {
    if (confirm("Reset problem list to defaults?")) {
      localStorage.removeItem(LS_KEY);
      setProblems(initialProblems);
    }
  }

  // Optional: manual force reset button (add next to Reset)
  // <button onClick={forceResetStatuses} className="text-xs px-3 py-1 rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200">All Revisit</button>

  function forceResetStatuses() {
    if (confirm("Mark every problem as Revisit?")) {
      const reset = problems.map((p) => ({ ...p, status: "Revisit" as "Revisit" }));
      setProblems(reset);
      try {
        localStorage.setItem(LS_KEY, JSON.stringify(reset));
        localStorage.setItem(LS_VERSION_KEY, DATA_VERSION);
      } catch {}
    }
  }

  return (
    <div className="min-h-screen w-[95%] max-w-[1500px] mx-auto  py-10 sm:py-12 theme-bg-primary transition-colors">
      {/* Header */}
      <div className="max-w-6xl mx-auto flex flex-col  gap-6 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <h1 className="text-2xl sm:text-3xl font-bold theme-text-primary break-words">
            📘 LeetCode Portfolio
          </h1>
          <p className="text-sm theme-text-secondary mt-1">
            Tracking practice progress across patterns.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <StatBadge tone="green">Solved: {solvedCount}</StatBadge>
          <StatBadge tone="amber">Revisit: {revisitCount}</StatBadge>
          <StatBadge tone="blue">Total: {problems.length}</StatBadge>
          <button
            onClick={resetProblems}
            className="text-xs px-3 py-1 rounded-full bg-rose-100 text-rose-700 hover:bg-rose-200 transition"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Progress */}
      <div className="max-w-4xl  mt-8">
        <div className="flex justify-between text-xs theme-text-secondary mb-1">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 w-full rounded-full overflow-hidden theme-bg-card relative">
          <div
            style={{ width: `${progress}%` }}
            className="h-full bg-[var(--accent-color)] transition-all"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto mt-10 space-y-6">
        <div className="flex flex-col gap-4 xl:flex-col">
          <ScrollRow>
            {categories.map((cat) => (
              <FilterChip
                key={cat}
                active={cat === category}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </FilterChip>
            ))}
          </ScrollRow>
          <ScrollRow>
            {statusOptions.map((s) => (
              <FilterChip
                key={s}
                active={s === status}
                onClick={() => setStatus(s)}
              >
                {s}
              </FilterChip>
            ))}
          </ScrollRow>
          <div className="flex-1 min-w-0">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search problem..."
              className="w-full h-11 rounded-xl bg-transparent theme-bg-card px-4 text-sm outline-none focus:ring-2 focus:ring-[var(--accent-color)] theme-text-primary placeholder:theme-text-secondary"
            />
          </div>
        </div>
      </div>

      {/* Meta */}
      <div className="max-w-6xl mx-auto mt-6 text-xs theme-text-secondary">
        Showing {filtered.length} of {problems.length}
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto mt-6 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((p) => {
          const isSolved = p.status === "Solved";
          return (
            <div
              key={p.title}
              className="group w-full max-w-full rounded-2xl theme-bg-card theme-border border p-4 sm:p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start justify-between gap-3 min-w-0">
                <h2 className="font-semibold leading-snug theme-text-primary group-hover:text-[var(--accent-color)] text-sm sm:text-base break-words">
                  {p.title}
                </h2>
                <span
                  className={`shrink-0 text-[10px] px-2 py-1 rounded-full font-medium ${
                    isSolved
                      ? "bg-green-100 text-green-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {p.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                <MiniTag>{p.category}</MiniTag>
                {p.difficulty && (
                  <MiniTag
                    tone={
                      p.difficulty === "Easy"
                        ? "green"
                        : p.difficulty === "Medium"
                        ? "amber"
                        : "rose"
                    }
                  >
                    {p.difficulty}
                  </MiniTag>
                )}
              </div>

              <div className="mt-auto flex items-center justify-between pt-2 gap-3">
                <a
                  href={p.link}
                  target="_blank"
                  className="text-[11px] font-medium text-[var(--accent-color)] hover:underline underline-offset-2 truncate"
                >
                  Open ↗
                </a>
                <button
                  onClick={() => toggleStatus(p.title)}
                  className={`text-[11px] px-3 py-1 rounded-full font-medium transition ${
                    isSolved
                      ? "bg-amber-100 text-amber-700 hover:bg-amber-200"
                      : "bg-green-100 text-green-700 hover:bg-green-200"
                  }`}
                >
                  Mark {isSolved ? "Revisit" : "Solved"}
                </button>
              </div>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div className="col-span-full rounded-xl border border-dashed theme-border p-10 text-center text-sm theme-text-secondary">
            No problems match current filters.
          </div>
        )}
      </div>
    </div>
  );
}

/* Helpers */
function StatBadge({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: "green" | "amber" | "blue";
}) {
  const map: Record<string, string> = {
    green: "bg-green-100 text-green-700",
    amber: "bg-amber-100 text-amber-700",
    blue: "bg-blue-100 text-blue-700",
  };
  return <span className={`px-3 py-1 rounded-full font-medium ${map[tone]}`}>{children}</span>;
}

function FilterChip({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex-shrink-0 px-4 h-10 rounded-xl text-sm font-medium whitespace-nowrap transition border ${
        active
          ? "bg-[var(--accent-color)] text-white border-[var(--accent-color)] shadow-sm"
          : "theme-bg-card theme-border text-[var(--text-primary)] hover:bg-[var(--accent-color)]/10"
      }`}
    >
      {children}
    </button>
  );
}

function MiniTag({
  children,
  tone = "gray",
}: {
  children: React.ReactNode;
  tone?: "gray" | "green" | "amber" | "rose";
}) {
  const tones: Record<string, string> = {
    gray: "bg-gray-100 text-gray-600",
    green: "bg-green-100 text-green-700",
    amber: "bg-amber-100 text-amber-700",
    rose: "bg-rose-100 text-rose-700",
  };
  return <span className={`text-[10px] px-2 py-1 rounded-full font-medium ${tones[tone]}`}>{children}</span>;
}

function ScrollRow({ children }: { children: React.ReactNode }) {
  /*
    Simplified (no horizontal scroll):
    - Pure wrapping flex container.
    - Removes snap / overflow / extra wrappers.
    - Chips will flow to multiple lines on all screen sizes.
  */
  return (
    <div className="flex flex-wrap gap-2">
      {React.Children.map(children, (child) => (
        <div>{child}</div>
      ))}
    </div>
  );
}


