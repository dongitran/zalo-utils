"use client";

import { motion } from "framer-motion";
import {
  Bot,
  MessageSquare,
  ArrowUpRight,
  Check,
} from "lucide-react";

const aiTools = [
  "Claude Code",
  "Cursor",
  "Gemini CLI",
  "Windsurf",
  "Roo Code",
  "+ more",
];

export function Showcase() {
  return (
    <section id="showcase" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/70">
            <div className="h-2 w-2 rounded-full bg-emerald-400" />
            Powered by zalo-utils
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Build Personal AI Assistant with Zalo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            Use any AI coding assistant to control Zalo messaging — just describe what you want, and the AI handles the rest.
          </p>
        </motion.div>

        {/* Two column layout */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left column - AI Tools */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Bot className="h-5 w-5 text-white/70" />
              </div>
              <h3 className="text-lg font-medium text-white">Works with Any AI CLI</h3>
            </div>

            <p className="mb-6 text-white/60">
              zalo-utils is designed for AI agents. Use Claude Code, Cursor, Gemini CLI, Windsurf, or any AI coding assistant to send messages, receive replies, and manage your Zalo — all through natural language prompts.
            </p>

            {/* AI Tools badges */}
            <div className="mb-6 flex flex-wrap gap-2">
              {aiTools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-3">
              {["Send Messages", "Receive Replies", "Manage Groups"].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70"
                >
                  <MessageSquare className="h-4 w-4" />
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Chat Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6"
          >
            <div className="mb-4 text-xs font-medium uppercase tracking-wider text-white/40">
              ai-powered automation
            </div>

            {/* Chat messages */}
            <div className="space-y-4">
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="mb-2 text-xs text-white/40">You tell your AI:</p>
                <p className="text-sm text-white/80">
                  &ldquo;Send a message to my project-team 011110100110001101100001 group saying the deploy is complete&rdquo;
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="mb-2 text-xs text-white/40">AI executes zalo-utils:</p>
                <pre className="overflow-x-auto rounded-lg bg-black/50 p-3 text-xs text-white/80">
                  <code>$ zalo-utils msg send -g 011110100110001101100001 "The deploy is complete!"</code>
                </pre>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="mb-2 text-xs text-white/40">AI can also listen for responses:</p>
                <pre className="overflow-x-auto rounded-lg bg-black/50 p-3 text-xs text-white/80">
                  <code>$ zalo-utils listen --webhook http://localhost:3000/api/zalo</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Integration section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid gap-8 lg:grid-cols-2"
        >
          {/* Left - Steps */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/70">
              <div className="h-2 w-2 rounded-full bg-blue-400" />
              clawd.bot integration
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Install Plugin",
                  desc: "Add the @clawdbot/zalouser plugin to enable Zalo messaging.",
                },
                {
                  step: "2",
                  title: "Login with QR code",
                  desc: "Login with QR code to connect your Zalo account.",
                },
                {
                  step: "3",
                  title: "Configure multi-account",
                  desc: "Set up multiple profiles for different use cases.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-medium text-white">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{item.title}</h4>
                    <p className="text-sm text-white/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Features */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Bot className="h-5 w-5 text-white/70" />
              </div>
              <div>
                <h3 className="font-medium text-white">Clawd.bot</h3>
                <p className="text-sm text-white/60">AI Assistant for Zalo</p>
              </div>
            </div>

            <p className="mb-6 text-sm text-white/60">
              Clawd.bot integrates Claude AI with Zalo using zalo-utils as its messaging backbone.
            </p>

            <ul className="space-y-3">
              {[
                "Claude AI Integration",
                "Multi-Account Support",
                "Access Control & Pairing",
                "Rich Message Types",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-white/70">
                  <Check className="h-4 w-4 text-emerald-400" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#docs"
              className="mt-6 inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
            >
              View Documentation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
