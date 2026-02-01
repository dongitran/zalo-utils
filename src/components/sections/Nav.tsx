"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Command } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Showcase", href: "#showcase" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        "fixed left-0 right-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10">
            <span className="text-lg font-bold">Z</span>
          </div>
          <span className="text-lg font-semibold tracking-tight">zalo-utils</span>
          <span className="ml-1 rounded-md bg-white/10 px-1.5 py-0.5 text-xs text-white/70">
            CLI
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#docs"
            className="rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
          >
            Docs
          </a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button className="hidden items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 sm:flex">
            Tiếng Việt
            <ChevronDown className="h-4 w-4" />
          </button>
          <a
            href="#pricing"
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition-all hover:bg-white/90 hover:shadow-lg hover:shadow-white/10"
          >
            Nhận license
          </a>
        </div>
      </div>
    </motion.header>
  );
}
