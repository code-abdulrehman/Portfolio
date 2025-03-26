"use client";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  condition?: {
    status: string;
    start: any;
    end: any;
    description: string;
  };
}


import { useEffect, useState } from 'react';
export function ProjectCard({ title, description, tags, link, condition }: Props) {
  
    const [countdown, setCountdown] = useState<string>("");
    let targetDateStr:any = condition?.end;
    useEffect(() => {
      const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
      const match = targetDateStr?.toLowerCase().match(/(\d+)([a-z]+)\s+(\d{4})/);
      if (!match) {
        setCountdown("Invalid date format. Use '2feb 2025'");
        return;
      }
  
      const [_, day, monthStr, year] = match;
      const monthIndex = months.indexOf(monthStr);
      if (monthIndex === -1) {
        setCountdown("Invalid month name");
        return;
      }
  
      const targetDate = new Date(parseInt(year), monthIndex, parseInt(day));
  
      const interval = setInterval(() => {
        const now = new Date();
        const diff = targetDate.getTime() - now.getTime();
  
        if (diff <= 0) {
          clearInterval(interval);
          setCountdown("Countdown finished!");
          return;
        }
  
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
  
        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }, 1000);
  
      return () => clearInterval(interval);
    }, [targetDateStr]);
  return (
    <>
      {!condition ? (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">

        <>
          <CardHeader className="">
            <div className="space-y-1">
              <CardTitle className="text-base">
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    className="inline-flex items-center gap-1 hover:underline"
                  >
                    {title}{" "}
                    <span className="h-1 w-1 rounded-full bg-green-500 animate-pulse"></span>
                  </a>
                ) : (
                  title
                )}
              </CardTitle>
              <div className="hidden font-mono text-xs underline print:visible">
                {link?.replace("https://", "").replace("www.", "").replace("/", "")}
              </div>
              <CardDescription className="font-mono text-xs">
                {description}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="mt-auto flex">
            <div className="mt-2 flex flex-wrap gap-1">
              {tags.map((tag) => (
                <Badge
                  className="px-1 py-0 text-[10px]"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>

          </>
          </Card>
      ) :
      <Card className="relative flex flex-col overflow-hidden border border-muted p-3 cursor-not-allowed" style={{background: "linear-gradient(to bottom,rgba(255, 255, 255, 0.28),rgba(255, 255, 255, 0.18))", backdropFilter: "blur(10px)"}}>
      <>
      <div className="absolute inset-0 bg-[#ffffffd7] backdrop-blur-sm rounded-lg z-100 flex flex-col items-center justify-center">
      <p className="text-sm text-muted-foreground">
          {condition.description ? condition.description : ""}
        </p>
        <p className="text-sm text-muted-foreground">
          {countdown}
        </p>
      </div>
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base cursor-not-allowed">
            {link ? (
              <a
                // href={link}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}{" "}
                <span className="h-1 w-1 rounded-full bg-orange-500 animate-pulse"></span>
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="font-mono text-xs">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

    </>
    </Card>
     }
    </>
  );
}
