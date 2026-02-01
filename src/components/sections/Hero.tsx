"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bolt,
  Boxes,
  Check,
  MessageCircle,
  Shield,
  Terminal,
  Video,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

function Stat({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80">
      <Icon className="h-4 w-4 text-white/70" />
      <span>{label}</span>
    </div>
  );
}

function CodeRain() {
  const lines = useMemo(
    () =>
      [
        "zalo-utils auth login",
        "sendMessage()",
        "async/await",
        'const api = {}',
        "export default",
        "npm install",
        "git push",
        '=> {}',
      ].flatMap((x) => [x, x, x]),
    [],
  );

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.20),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(99,102,241,0.18),transparent_45%)]" />

      <div className="relative flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        </div>
        <div className="text-xs text-white/60">terminal</div>
      </div>

      <div className="grid grid-cols-2 gap-0">
        <div className="relative max-h-[360px] overflow-hidden p-4 font-mono text-[12px] leading-5 text-white/70">
          <div className="code-marquee space-y-1">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="flex gap-3">
                <span className="w-5 text-white/30">{(i + 1).toString().padStart(2, "0")}</span>
                <span className="truncate">{lines[i % lines.length]}</span>
              </div>
            ))}
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={`b${i}`} className="flex gap-3">
                <span className="w-5 text-white/30">{(i + 41).toString().padStart(2, "0")}</span>
                <span className="truncate">{lines[i % lines.length]}</span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/40 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent" />
        </div>

        <div className="relative border-l border-white/10 p-4">
          <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70">
            zalo-utils.dev
          </div>
          <p className="text-sm text-white/70">Cài Zalo Utils trong vài giây</p>
          <pre className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-black/40 p-3 text-[12px] text-white/80">
            <code>$ curl -fsSL get.zalo-utils.dev/install.sh | bash</code>
          </pre>
          <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/75">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-300" />
              <span>Đăng nhập QR · lưu phiên theo profile</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-300" />
              <span>Webhook realtime · JSON output</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const [mode, setMode] = useState<"video" | "terminal">("terminal");

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.10),transparent_45%),radial-gradient(circle_at_70%_10%,rgba(99,102,241,0.20),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(16,185,129,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-10 md:pb-24 md:pt-14">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <Badge className="mb-5">
              <span className="text-white/70">CLI cho developer</span>
            </Badge>

            <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Tự động hoá nhắn tin với <span className="relative">một lệnh</span>
              <span className="ml-2 inline-block align-middle text-indigo-200/90 floaty">
                ✦
              </span>
            </h1>

            <p className="mt-4 text-pretty text-base text-white/70 md:text-lg">
              Gửi tin nhắn, quản lý nhóm, tích hợp webhook và lắng nghe sự kiện realtime —
              tất cả ngay trong terminal. Không cần trình duyệt, không cần GUI.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Stat icon={Shield} label="Tự động hoá đầy đủ" />
              <Stat icon={MessageCircle} label="Nhắn tin đa dạng" />
              <Stat icon={Bolt} label="Nhanh & ổn định" />
              <Stat icon={Boxes} label="Sẵn sàng production" />
            </div>

            <div className="mt-7 flex items-center gap-3">
              <Button href="#how-it-works">Bắt đầu</Button>
              <Button variant="ghost" href="#how-it-works">
                Xem cách hoạt động <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <p className="mt-4 text-xs text-white/45">
              * Đây là bản clone UI/UX tương tự để demo (brand & nội dung đã thay đổi).
            </p>
          </div>

          <div>
            <div className="mb-3 inline-flex rounded-xl border border-white/10 bg-white/5 p-1">
              <button
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs transition",
                  mode === "video"
                    ? "bg-white text-black"
                    : "text-white/70 hover:text-white",
                )}
                onClick={() => setMode("video")}
              >
                <Video className="h-4 w-4" /> Video
              </button>
              <button
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs transition",
                  mode === "terminal"
                    ? "bg-white text-black"
                    : "text-white/70 hover:text-white",
                )}
                onClick={() => setMode("terminal")}
              >
                <Terminal className="h-4 w-4" /> Terminal
              </button>
            </div>

            <AnimatePresence mode="wait">
              {mode === "terminal" ? (
                <motion.div
                  key="terminal"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <CodeRain />
                </motion.div>
              ) : (
                <motion.div
                  key="video"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_40%)]" />
                  <div className="relative flex aspect-video items-center justify-center">
                    <div className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                        <Video className="h-6 w-6 text-white/80" />
                      </div>
                      <p className="mt-3 text-sm text-white/70">
                        Chỗ này thay bằng video demo của bạn (mp4/webm).
                      </p>
                      <p className="mt-1 text-xs text-white/45">
                        (Giữ đúng cảm giác UI — nội dung khác.)
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
