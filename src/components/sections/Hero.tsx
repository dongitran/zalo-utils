"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Shield,
  MessageCircle,
  Zap,
  Boxes,
  Video,
  Terminal,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

const codeLines = [
  "zalo-utils auth login",
  "sendMessage()",
  "async/await",
  'const api = {}',
  "export default",
  "npm install",
  "git push",
  '=> {}',
];

const badges = [
  { icon: Shield, label: "Full automation" },
  { icon: MessageCircle, label: "Rich messaging" },
  { icon: Zap, label: "Lightning fast" },
  { icon: Boxes, label: "Production ready" },
];

function CodeRain() {
  const lines = useMemo(() => {
    return [...codeLines, ...codeLines, ...codeLines, ...codeLines, ...codeLines];
  }, []);

  return (
    <div className="h-full overflow-hidden font-mono text-[11px] leading-5 text-white/40">
      <motion.div
        animate={{ y: [0, -100] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="space-y-1"
      >
        {lines.map((line, i) => (
          <div key={i} className="flex gap-2">
            <span className="w-6 text-right text-white/20">{(i % 20) + 1}</span>
            <span>{line}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function Hero() {
  const [activeTab, setActiveTab] = useState<"video" | "terminal">("terminal");

  return (
    <section className="relative min-h-screen overflow-hidden bg-neutral-950 pt-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/70">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              CLI Tool for Developers
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Automate Zalo with{" "}
              <span className="relative inline-block">
                One Command
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -right-6 -top-2 text-2xl"
                >
                  ✦
                </motion.span>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Send messages, manage groups, build integrations, and listen for real-time events — 
              all from your terminal. No browser, no GUI, just pure CLI power.
            </p>

            {/* Badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/70"
                >
                  <badge.icon className="h-4 w-4" />
                  {badge.label}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-medium text-neutral-950 transition-all hover:bg-white/90 hover:shadow-lg hover:shadow-white/10"
              >
                Get Started
              </a>
              <a
                href="#how-it-works"
                className="group inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
              >
                See how it works
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Right column - Terminal/Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Tab switcher */}
            <div className="mb-4 flex gap-2">
              <button
                onClick={() => setActiveTab("video")}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-all",
                  activeTab === "video"
                    ? "bg-white text-neutral-950"
                    : "bg-white/10 text-white/70 hover:bg-white/20"
                )}
              >
                <Video className="h-4 w-4" />
                Video
              </button>
              <button
                onClick={() => setActiveTab("terminal")}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-all",
                  activeTab === "terminal"
                    ? "bg-white text-neutral-950"
                    : "bg-white/10 text-white/70 hover:bg-white/20"
                )}
              >
                <Terminal className="h-4 w-4" />
                Terminal
              </button>
            </div>

            {/* Content */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm">
              <AnimatePresence mode="wait">
                {activeTab === "terminal" ? (
                  <motion.div
                    key="terminal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid min-h-[400px] grid-cols-1 sm:grid-cols-2"
                  >
                    {/* Terminal left */}
                    <div className="border-b border-white/10 p-4 sm:border-b-0 sm:border-r">
                      {/* Terminal header */}
                      <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
                        <div className="flex gap-1.5">
                          <div className="h-3 w-3 rounded-full bg-red-500" />
                          <div className="h-3 w-3 rounded-full bg-yellow-500" />
                          <div className="h-3 w-3 rounded-full bg-green-500" />
                        </div>
                        <span className="ml-2 text-xs text-white/40">zsh</span>
                      </div>
                      <CodeRain />
                    </div>

                    {/* Info panel */}
                    <div className="p-4">
                      <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                        zalo-utils.dev
                      </div>
                      <p className="mb-4 text-sm text-white/70">
                        Install Zalo Utils in seconds
                      </p>
                      <div className="overflow-hidden rounded-lg border border-white/10 bg-black/40 p-3">
                        <code className="block text-xs text-white/80">
                          $ curl -fsSL get.zalo-utils.dev/install.sh | bash
                        </code>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2 text-sm text-white/60">
                          <Check className="h-4 w-4 text-emerald-400" />
                          QR Login · persistent session per profile
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/60">
                          <Check className="h-4 w-4 text-emerald-400" />
                          Realtime webhooks · JSON output
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="video"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex min-h-[400px] items-center justify-center"
                  >
                    <div className="text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                        <Video className="h-8 w-8 text-white/60" />
                      </div>
                      <p className="text-white/60">Video demo placeholder</p>
                      <p className="mt-2 text-sm text-white/40">
                        Replace with your demo video
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
