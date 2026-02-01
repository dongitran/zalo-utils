import { motion } from "framer-motion";
import {
  ScanLine,
  Users,
  MessageSquare,
  Webhook,
  Users2,
  Braces,
  RefreshCw,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: ScanLine,
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
    icon: Users2,
    title: "Group Management",
    description: "Create, manage, and administer Zalo groups effortlessly.",
  },
  {
    icon: Braces,
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
  visible: { opacity: 1, y: 0 },
};

export function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Everything you need for Zalo automation
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Built for developers who want powerful, reliable CLI tools for Zalo messaging.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <feature.icon className="h-5 w-5 text-white/70" />
              </div>
              <h3 className="mb-2 font-medium text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-white/50">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <Zap className="h-5 w-5 text-indigo-400" />
            </div>
            <div>
              <h4 className="font-medium text-white">Designed for AI agent / CLI workflows</h4>
              <p className="text-sm text-white/60">
                Describe what you want in natural language, and let your AI assistant handle the commands.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
