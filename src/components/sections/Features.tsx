"use client";

import { motion } from "framer-motion";
import {
  QrCode,
  Users,
  MessageSquare,
  Webhook,
  Settings,
  Terminal,
  RefreshCw,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "QR Code Login",
    description: "Scan with Zalo app, credentials persist securely on your device.",
  },
  {
    icon: Users,
    title: "Multi-Account",
    description: "Manage multiple profiles seamlessly with the --profile flag.",
  },
  {
    icon: MessageSquare,
    title: "Rich Messaging",
    description: "Send text, images, videos, voice, stickers and more.",
  },
  {
    icon: Webhook,
    title: "Real-time Listener",
    description: "Monitor messages with webhook integration and auto-restart.",
  },
  {
    icon: Settings,
    title: "Group Management",
    description: "Create, manage, and administer Zalo groups effortlessly.",
  },
  {
    icon: Terminal,
    title: "Raw JSON Output",
    description: "Programmatic integration with --raw flag for automation.",
  },
  {
    icon: RefreshCw,
    title: "Auto-Restart",
    description: "Exponential backoff for production-ready reliability.",
  },
  {
    icon: Zap,
    title: "Batch Operations",
    description: "Parallel file uploads and downloads for efficiency.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
};

export function Features() {
  return (
    <section id="features" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need for Zalo automation
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#94a3b8]">
            Built for developers who want powerful, reliable CLI tools for Zalo messaging.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                y: -4, 
                boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.3)",
                transition: { duration: 0.2 }
              }}
              className="glass-card group p-6 cursor-pointer"
            >
              <motion.div 
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#3b82f6]/10 transition-colors group-hover:bg-[#3b82f6]/20"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <feature.icon className="h-6 w-6 text-[#3b82f6] transition-transform group-hover:scale-110" />
              </motion.div>
              <h3 className="mb-2 text-lg font-semibold text-white">{feature.title}</h3>
              <p className="text-sm text-[#94a3b8]">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
