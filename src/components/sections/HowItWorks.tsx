"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, Mail, Key, Download, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: "1",
    title: "Install zalo-utils",
    description: "One command to install. Works on macOS, Linux, and Windows.",
    hasCode: true,
    code: {
      macos: "$ curl -fsSL get.zalo-utils.dev/install.sh | bash",
      windows: "$ iwr -useb get.zalo-utils.dev/install.ps1 | iex",
    },
    icon: Download,
  },
  {
    id: "2",
    title: "Get Support Code",
    description: "Run the command to generate your unique device support code.",
    hasCode: true,
    code: "$ zalo-utils license support-code",
    icon: Key,
  },
  {
    id: "3",
    title: "Purchase License",
    description: "Complete payment via VietQR bank transfer. Instant verification.",
    icon: CreditCard,
  },
  {
    id: "4",
    title: "Receive License",
    description: "License key delivered to your email within minutes.",
    icon: Mail,
  },
  {
    id: "5",
    title: "Activate",
    description: "Run the activation command and start using zalo-utils.",
    hasCode: true,
    code: '$ zalo-utils license activate "<key>"',
    icon: Check,
  },
];

export function HowItWorks() {
  const [activeOS, setActiveOS] = useState<"macos" | "windows">("macos");

  return (
    <section id="how-it-works" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            Get started in minutes with our simple activation process.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-6 top-8 bottom-8 hidden w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent lg:block" />

          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative lg:pl-16"
              >
                {/* Step number */}
                <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-neutral-900 text-lg font-semibold text-white lg:flex">
                  {step.id}
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 lg:p-8">
                  <div className="flex items-start gap-4 lg:gap-6">
                    {/* Mobile step number */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-neutral-900 text-sm font-semibold text-white lg:hidden">
                      {step.id}
                    </div>

                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-3">
                        <step.icon className="h-5 w-5 text-white/50" />
                        <h3 className="text-lg font-medium text-white">{step.title}</h3>
                      </div>
                      <p className="mb-4 text-white/60">{step.description}</p>

                      {/* Code block */}
                      {step.hasCode && (
                        <div className="mt-4">
                          {step.id === "1" ? (
                            <>
                              {/* OS Switcher */}
                              <div className="mb-3 flex gap-2">
                                <button
                                  onClick={() => setActiveOS("macos")}
                                  className={cn(
                                    "rounded-lg px-3 py-1.5 text-sm transition-all",
                                    activeOS === "macos"
                                      ? "bg-white text-neutral-950"
                                      : "bg-white/10 text-white/70 hover:bg-white/20"
                                  )}
                                >
                                  macOS / Linux
                                </button>
                                <button
                                  onClick={() => setActiveOS("windows")}
                                  className={cn(
                                    "rounded-lg px-3 py-1.5 text-sm transition-all",
                                    activeOS === "windows"
                                      ? "bg-white text-neutral-950"
                                      : "bg-white/10 text-white/70 hover:bg-white/20"
                                  )}
                                >
                                  Windows
                                </button>
                              </div>
                              <pre className="overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-4">
                                <code className="text-sm text-white/80">
                                  {activeOS === "macos" ? step.code.macos : step.code.windows}
                                </code>
                              </pre>
                            </>
                          ) : (
                            <pre className="overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-4">
                              <code className="text-sm text-white/80">{step.code}</code>
                            </pre>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
