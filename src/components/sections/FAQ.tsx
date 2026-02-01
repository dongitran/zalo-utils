"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What are the license types? Which should I choose?",
    answer:
      "We offer Device-bound and Account-based licenses. Device-bound is perfect for single-machine usage, while Account-based gives you flexibility to use on multiple devices with your Zalo account.",
  },
  {
    question: "What is a Device Support Code?",
    answer:
      "A Device Support Code is a unique identifier generated from your machine. It's used to bind your license to your specific device for security purposes.",
  },
  {
    question: "What is a Zalo User ID and how do I get it?",
    answer:
      "Your Zalo User ID is a unique identifier for your Zalo account. You can find it in your Zalo app settings or use the zalo-utils CLI to look it up.",
  },
  {
    question: "Can I use one license on multiple devices?",
    answer:
      "Account-based licenses allow usage on multiple devices. Device-bound licenses are restricted to one machine.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We support bank transfer via VietQR for instant activation. Contact us for other payment options.",
  },
  {
    question: "How do I activate my license?",
    answer:
      "After purchase, run 'zalo-utils license activate \"your-key\"' in your terminal. Your license will be activated instantly.",
  },
  {
    question: "How long until I receive my license?",
    answer:
      "License keys are delivered within minutes after payment confirmation via email.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Due to the nature of software licenses, we generally don't offer refunds. Contact support if you have issues.",
  },
  {
    question: "Is zalo-utils affiliated with Zalo?",
    answer:
      "No. zalo-utils is an independent tool developed for developers. We are not affiliated with Zalo or VNG Corporation.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            Everything you need to know about zalo-utils.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-white/[0.02]"
              >
                <span className="pr-4 font-medium text-white">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-white/50 transition-transform duration-200",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="border-t border-white/10 px-5 pb-5 pt-0">
                      <p className="pt-4 text-sm leading-relaxed text-white/60">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
