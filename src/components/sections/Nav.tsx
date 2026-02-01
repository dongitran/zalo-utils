"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "mx-auto max-w-6xl px-6 py-3 transition",
          scrolled
            ? "backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10"
            : "bg-transparent",
        )}
      >
        <div className="flex items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
              <span className="text-sm font-semibold">Z</span>
            </div>
            <span className="font-semibold tracking-tight">zalo-utils</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a className="hover:text-white" href="#features">
              Tính năng
            </a>
            <a className="hover:text-white" href="#showcase">
              Showcase
            </a>
            <a className="hover:text-white" href="#how-it-works">
              Cách hoạt động
            </a>
            <a className="hover:text-white" href="#pricing">
              Giá
            </a>
            <a className="hover:text-white" href="#faq">
              FAQ
            </a>
            <a className="hover:text-white" href="#docs">
              Docs
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="hidden md:inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70 hover:bg-white/10">
              Tiếng Việt <ChevronDown className="h-4 w-4" />
            </button>
            <Button href="#pricing">Nhận license</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
