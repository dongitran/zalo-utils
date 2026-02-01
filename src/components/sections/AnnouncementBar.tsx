"use client";

import { useState } from "react";
import { X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        className="relative z-50 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-sm">
          <Sparkles className="h-4 w-4 text-yellow-300" />
          <span className="font-medium">🎉 New!</span>
          <span className="hidden sm:inline">
            Account-Based License — Use on multiple devices with your Zalo account!
          </span>
          <span className="sm:hidden">Use on multiple devices!</span>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 rounded-lg p-1.5 hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
