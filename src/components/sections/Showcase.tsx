import { ArrowUpRight, Bot, MessagesSquare, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Showcase() {
  return (
    <section id="showcase" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-emerald-300/80" /> Powered by Zalo Utils
          </div>
          <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
            Xây trợ lý AI cá nhân trên nền nhắn tin
          </h2>
          <p className="mt-2 text-white/65">
            Dùng bất kỳ AI coding assistant nào để điều khiển việc gửi/nhận tin nhắn — bạn
            chỉ cần mô tả, agent sẽ tự chạy lệnh.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-white/80" />
              <h3 className="font-semibold">Tương thích nhiều AI CLI</h3>
            </div>
            <p className="mt-2 text-sm text-white/65">
              Hỗ trợ workflow kiểu: “gửi tin cho nhóm X” → AI chạy `zalo-utils msg send ...`.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Claude Code",
                "Cursor",
                "Gemini CLI",
                "Windsurf",
                "Roo Code",
                "+ khác",
              ].map((x) => (
                <span
                  key={x}
                  className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70"
                >
                  {x}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-2 text-xs text-white/70">
              <span className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1">
                <MessagesSquare className="h-4 w-4" /> Gửi tin
              </span>
              <span className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1">
                <MessagesSquare className="h-4 w-4" /> Nhận phản hồi
              </span>
              <span className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1">
                <Users className="h-4 w-4" /> Quản lý nhóm
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5">
          <div className="text-xs text-white/60">ai-powered automation</div>

          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-white/10 bg-black/40 p-4">
              <p className="text-xs text-white/55">Bạn nói với AI:</p>
              <p className="mt-1 text-sm text-white/80">
                “Gửi tin cho nhóm project-team 011110100110001101100001: deploy xong rồi”
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/40 p-4">
              <p className="text-xs text-white/55">AI chạy lệnh:</p>
              <pre className="mt-2 overflow-x-auto rounded-lg bg-black/60 p-3 text-xs text-white/80">
                <code>$ zalo-utils msg send -g 011110100110001101100001 "Deploy xong rồi nhé!"</code>
              </pre>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/40 p-4">
              <p className="text-xs text-white/55">AI cũng có thể lắng nghe phản hồi:</p>
              <pre className="mt-2 overflow-x-auto rounded-lg bg-black/60 p-3 text-xs text-white/80">
                <code>$ zalo-utils listen --webhook http://localhost:3000/api/inbox</code>
              </pre>
            </div>
          </div>

          <div className="mt-6 flex">
            <Button variant="secondary" href="#how-it-works">
              Xem quy trình setup <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
