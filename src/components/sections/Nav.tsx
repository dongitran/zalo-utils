"use client";

import { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Showcase", href: "#showcase" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Docs", href: "#docs" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed left-0 right-0 top-10 z-40 transition-all duration-300",
        scrolled
          ? "top-0 border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3b82f6]">
            <span className="text-sm font-bold text-white">Z</span>
          </div>
          <span className="font-mono text-lg font-bold">zalo-utils</span>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-[#94a3b8] transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <button className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm text-[#94a3b8] transition-colors hover:bg-white/5 hover:text-white sm:flex">
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">English</span>
          </button>
          <button className="btn-cta rounded-md px-4 py-2 text-sm font-medium text-white">
            Get License
          </button>
        </div>
      </div>
    </motion.header>
  );
}
