"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type Certification = {
  name: string;
  issuer: string;
  issued: string;
  credentialId?: string;
  bullets?: readonly string[];
};

export function CertificationsSection({
  certifications,
  defaultCount = 6,
  title = "Certifications",
}: {
  certifications: readonly Certification[];
  defaultCount?: number;
  title?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);

  const visible = useMemo(() => {
    // When collapsed, render one extra item and "peek" half of it (3.5 style).
    const count = expanded ? certifications.length : Math.min(certifications.length, defaultCount + 1);
    return certifications.slice(0, Math.max(0, count));
  }, [expanded, certifications, defaultCount]);

  const canToggle = certifications.length > defaultCount;

  useEffect(() => {
    if (expanded || !canToggle) {
      setMaxHeight(undefined);
      return;
    }

    const container = wrapRef.current;
    const peekEl = itemRefs.current[defaultCount];
    if (!container || !peekEl) {
      setMaxHeight(undefined);
      return;
    }

    // Show all of the first `defaultCount` items + half of the next item.
    const top = container.getBoundingClientRect().top;
    const rect = peekEl.getBoundingClientRect();
    const nextTop = rect.top - top;
    const h = nextTop + rect.height * 0.5;
    setMaxHeight(Math.max(0, Math.floor(h)));
  }, [expanded, canToggle, defaultCount, visible.length]);

  return (
    <Section>
      <h2 className="text-xl font-bold">{title}</h2>

      <div className="relative">
        {/* Print/PDF: show full list without toggles */}
        <div className="hidden print:block">
          <div className="grid grid-cols-1 gap-2">
            {certifications.map((c) => (
              <Card key={`${c.name}-${c.issued}`}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">{c.name}</h3>
                    <div className="text-sm tabular-nums text-gray-500">{c.issued}</div>
                  </div>
                  <p className="font-mono text-sm text-muted-foreground">{c.issuer}</p>
                </CardHeader>
                <CardContent className="mt-2 text-sm text-muted-foreground">
                  {c.bullets?.length ? (
                    <ul className="mt-2 list-disc space-y-1 pl-5 font-mono text-xs">
                      {c.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Screen: interactive preview */}
        <div className="print:hidden">
        {!expanded && canToggle ? (
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-14 bg-gradient-to-b from-transparent to-background" />
        ) : null}

        <div
          ref={wrapRef}
          className={`grid grid-cols-1 gap-3 ${!expanded && canToggle ? "pb-14" : ""}`}
          style={!expanded && canToggle && maxHeight ? { maxHeight, overflow: "hidden" } : undefined}
        >
          {visible.map((c, idx) => (
            <div key={`${c.name}-${c.issued}`} ref={(el) => void (itemRefs.current[idx] = el)}>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">{c.name}</h3>
                    <div className="text-sm tabular-nums text-gray-500">{c.issued}</div>
                  </div>
                  <p className="font-mono text-sm text-muted-foreground">{c.issuer}</p>
                </CardHeader>
                <CardContent className="mt-2 text-sm text-muted-foreground">
                  {c.bullets?.length ? (
                    <ul className="mt-2 list-disc space-y-1 pl-5 font-mono text-xs">
                      {c.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  ) : null}
                </CardContent>
              </Card>
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
      </div>
    </Section>
  );
}

