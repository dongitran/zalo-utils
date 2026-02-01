"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  MessageSquare,
  Zap,
  RefreshCw,
  Play,
  Code,
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

const values = [
  { icon: Terminal, label: "Full automation" },
  { icon: MessageSquare, label: "Rich messaging" },
  { icon: Zap, label: "Lightning fast" },
  { icon: RefreshCw, label: "Production ready" },
];

function TypingAnimation() {
  const [displayText, setDisplayText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const line = codeLines[currentLine];
    if (charIndex < line.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + line[charIndex]);
        setCharIndex(charIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setCurrentLine((currentLine + 1) % codeLines.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentLine]);

  return (
    <div className="h-full overflow-hidden font-mono text-[11px] leading-5 text-[#94a3b8]">
      <div className="space-y-1">
        {codeLines.map((line, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-2"
          >
            <span className="w-6 text-right text-[#475569]">{i + 1}</span>
            <span className={i === currentLine ? "text-[#60a5fa]" : ""}>
              {i === currentLine ? displayText : line}
              {i === currentLine && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-[#60a5fa] ml-0.5"
                />
              )}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const [activeTab, setActiveTab] = useState<"video" | "terminal">("terminal");

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0f172a] pt-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3b82f6]/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <span className="mb-6 inline-flex items-center justify-center rounded-full border border-[#3b82f6]/50 bg-[#3b82f6]/10 px-3 py-1 text-xs font-medium text-[#3b82f6]">
              CLI Tool for Developers
            </span>

            {/* Heading */}
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Automate Zalo with{" "}
              <span className="relative inline-block text-[#3b82f6]">
                One Command
                <svg 
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#3b82f6]/30" 
                  viewBox="0 0 200 12" 
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M0,8 Q50,0 100,8 T200,8" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mb-8 max-w-xl text-lg text-[#94a3b8] lg:mx-0">
              Send messages, manage groups, build integrations, and listen for real-time events — 
              all from your terminal. No browser, no GUI, just pure CLI power.
            </p>

            {/* Values */}
            <div className="mb-8 grid max-w-md grid-cols-2 gap-3 mx-auto lg:mx-0">
              {values.map((value) => (
                <div key={value.label} className="flex items-center gap-2 text-sm text-[#94a3b8]">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#3b82f6]/10">
                    <value.icon className="h-4 w-4 text-[#3b82f6]" />
                  </div>
                  <span>{value.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-4 sm:flex-row justify-center lg:justify-start">
              <button className="btn-cta inline-flex items-center gap-2 rounded-lg px-8 py-3 text-lg font-medium text-white">
                Get Started
              </button>
              <a
                href="#how-it-works"
                className="text-sm text-[#94a3b8] transition-colors hover:text-white"
              >
                See how it works →
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
            <div className="mb-4 flex justify-center gap-2">
              <button
                onClick={() => setActiveTab("video")}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-all",
                  activeTab === "video"
                    ? "border border-[#3b82f6]/30 bg-[#3b82f6]/20 text-[#3b82f6]"
                    : "bg-[#1e293b]/50 text-[#94a3b8] hover:bg-[#1e293b]"
                )}
              >
                <Play className="h-4 w-4" />
                Video
              </button>
              <button
                onClick={() => setActiveTab("terminal")}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-all",
                  activeTab === "terminal"
                    ? "border border-[#3b82f6]/30 bg-[#3b82f6]/20 text-[#3b82f6]"
                    : "bg-[#1e293b]/50 text-[#94a3b8] hover:bg-[#1e293b]"
                )}
              >
                <Code className="h-4 w-4" />
                Terminal
              </button>
            </div>

            {/* Content */}
            <div className="relative mx-auto aspect-video max-w-[640px] overflow-hidden rounded-2xl shadow-2xl">
              <AnimatePresence mode="wait">
                {activeTab === "terminal" ? (
                  <motion.div
                    key="terminal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="terminal h-full"
                  >
                    <div className="terminal-header">
                      <div className="terminal-dot terminal-dot-red" />
                      <div className="terminal-dot terminal-dot-yellow" />
                      <div className="terminal-dot terminal-dot-green" />
                      <span className="ml-3 text-xs text-[#94a3b8]">zsh</span>
                    </div>
                    <div className="grid h-[calc(100%-44px)] grid-cols-1 sm:grid-cols-2">
                      <div className="border-b border-white/10 p-4 sm:border-b-0 sm:border-r">
                        <TypingAnimation />
                      </div>
                      <div className="p-4">
                        <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#94a3b8]">
                          zalo-utils.dev
                        </div>
                        <p className="mb-4 text-sm text-[#94a3b8]">
                          Install Zalo Utils in seconds
                        </p>
                        <div className="overflow-hidden rounded-lg border border-white/10 bg-black/40 p-3">
                          <code className="block text-xs text-[#e2e8f0]">
                            $ curl -fsSL get.zalo-utils.dev/install.sh | bash
                          </code>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center gap-2 text-sm text-[#94a3b8]">
                            <Check className="h-4 w-4 text-emerald-400" />
                            <span>QR Login · persistent session per profile</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-[#94a3b8]">
                            <Check className="h-4 w-4 text-emerald-400" />
                            <span>Webhook realtime · JSON output</span>
                          </div>
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
                    className="flex h-full items-center justify-center rounded-2xl bg-[#0d1117]"
                  >
                    <div className="text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                        <Play className="h-6 w-6 text-[#94a3b8]" />
                      </div>
                      <p className="text-[#94a3b8]">Video demo placeholder</p>
                      <p className="mt-1 text-xs text-[#64748b]">
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
