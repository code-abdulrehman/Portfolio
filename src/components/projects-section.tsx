"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";

type Project = {
  title: string;
  description: string;
  techStack: readonly string[];
  link?: { href: string; label: string };
  condition?: { status: string; start: unknown; end: unknown; description: string };
};

export function ProjectsSection({
  projects,
  defaultCount = 6,
  title = "Projects",
}: {
  projects: readonly Project[];
  defaultCount?: number;
  title?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);

  const visible = useMemo(() => {
    // When collapsed, render 2 extra items and "peek" half of the next row (2.5 rows style).
    const count = expanded ? projects.length : Math.min(projects.length, defaultCount + 2);
    return projects.slice(0, Math.max(0, count));
  }, [expanded, projects, defaultCount]);

  const canToggle = projects.length > defaultCount;

  useEffect(() => {
    if (expanded || !canToggle) {
      setMaxHeight(undefined);
      return;
    }

    const container = wrapRef.current;
    // For 2-column grid: `defaultCount` should represent full visible items (e.g., 4 items = 2 rows).
    // Peek the next row by measuring the first item in that next row.
    const peekEl = itemRefs.current[defaultCount];
    if (!container || !peekEl) {
      setMaxHeight(undefined);
      return;
    }

    const top = container.getBoundingClientRect().top;
    const rect = peekEl.getBoundingClientRect();
    const nextTop = rect.top - top;
    const h = nextTop + rect.height * 0.5;
    setMaxHeight(Math.max(0, Math.floor(h)));
  }, [expanded, canToggle, defaultCount, visible.length]);

  return (
    <Section className="print-force-new-page scroll-mb-16">
      <h2 className="text-xl font-bold">{title}</h2>

      {/* Print/PDF: show full list without toggles */}
      <div className="hidden print:block">
        <div className="-mx-3 grid grid-cols-2 gap-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.techStack}
              link={project.link?.href}
              condition={project.condition}
            />
          ))}
        </div>
      </div>

      {/* Screen: interactive preview */}
      <div className="relative print:hidden">
        {!expanded && canToggle ? (
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-14 bg-gradient-to-b from-transparent to-white/90" />
        ) : null}

        <div
          ref={wrapRef}
          className={`-mx-3 grid grid-cols-1 gap-3 print:grid-cols-2 print:gap-2 md:grid-cols-2 ${
            !expanded && canToggle ? "pb-14" : ""
          }`}
          style={!expanded && canToggle && maxHeight ? { maxHeight, overflow: "hidden" } : undefined}
        >
          {visible.map((project, idx) => (
            <div key={project.title} ref={(el) => void (itemRefs.current[idx] = el)}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.techStack}
                link={project.link?.href}
                condition={project.condition}
              />
            </div>
          ))}
        </div>

        {canToggle ? (
          expanded ? (
            <div className="flex justify-center pt-2">
              <Button variant="outline" size="sm" onClick={() => setExpanded(false)}>
                Show less
              </Button>
            </div>
          ) : (
            <div className="absolute bottom-2 left-1/2 z-20 -translate-x-1/2">
              <Button variant="outline" size="sm" onClick={() => setExpanded(true)}>
                Show more
              </Button>
            </div>
          )
        ) : null}
      </div>
    </Section>
  );
}

