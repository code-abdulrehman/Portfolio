"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { DownloadIcon } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur print:hidden">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-16">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{RESUME_DATA.name.trim()}</p>
          <p className="truncate font-mono text-xs text-muted-foreground">{RESUME_DATA.about}</p>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.print()}
            className="gap-2"
            title="Download / Print as PDF"
          >
            <DownloadIcon className="h-4 w-4" />
            <span className="font-mono text-xs">PDF</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

