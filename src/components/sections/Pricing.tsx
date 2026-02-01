import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "All CLI features included",
  "Perpetual license",
  "Device-bound security",
  "Priority support",
  "Lifetime updates",
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Simple, one-time pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            Pay once, use forever. No subscriptions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-md"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-8">
            {/* Glow effect */}
            <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />

            <div className="relative">
              <h3 className="text-xl font-medium text-white">zalo-utils Pro License</h3>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-bold tracking-tight text-white">
                  2.999.000đ
                </span>
                <span className="text-white/50">Regular Price</span>
              </div>

              <ul className="mt-8 space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20">
                      <Check className="h-3 w-3 text-emerald-400" />
                    </div>
                    <span className="text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#buy"
                className="mt-8 block w-full rounded-xl bg-white py-4 text-center font-medium text-neutral-950 transition-all hover:bg-white/90 hover:shadow-lg hover:shadow-white/10"
              >
                Buy License - 2.999.000đ
              </a>

              <p className="mt-4 text-center text-sm text-white/40">
                One-time payment. No recurring fees.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
