"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-white/15";

  const styles: Record<NonNullable<Props["variant"]>, string> = {
    primary:
      "bg-white text-black hover:bg-white/90 shadow-[0_12px_30px_-16px_rgba(255,255,255,0.35)]",
    secondary:
      "bg-white/10 text-white hover:bg-white/15 border border-white/10",
    ghost: "text-white/80 hover:text-white hover:bg-white/5",
  };

  const cls = cn(base, styles[variant], className);

  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return (
    <button type="button" className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
