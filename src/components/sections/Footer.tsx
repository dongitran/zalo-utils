"use client";

import { motion } from "framer-motion";

const footerLinks = {
  resources: [
    { label: "Support", href: "#support" },
    { label: "Documentation", href: "#docs" },
    { label: "Blog", href: "#blog" },
  ],
  legal: [
    { label: "Terms of Service", href: "#terms" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Shipping Policy", href: "#shipping" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10">
                <span className="text-lg font-bold">Z</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">zalo-utils</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              Powerful CLI tool for Zalo messaging automation. Automate messaging, 
              manage groups, and build integrations from your terminal.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-medium text-white">Resources</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-medium text-white">Legal</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            © 2026 zalo-utils. Not affiliated with Zalo or VNG Corporation.
          </p>
          <p className="text-sm text-white/40">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
