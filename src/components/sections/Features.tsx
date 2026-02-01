import {
  BadgeCheck,
  Blocks,
  Braces,
  RefreshCcw,
  ScanQrCode,
  Users,
  Webhook,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: ScanQrCode,
    title: "Đăng nhập QR",
    desc: "Quét bằng app, lưu phiên an toàn trên máy. Không cần copy cookie thủ công.",
  },
  {
    icon: Users,
    title: "Đa tài khoản",
    desc: "Chuyển profile nhanh bằng --profile để quản lý nhiều account.",
  },
  {
    icon: Blocks,
    title: "Nhắn tin phong phú",
    desc: "Text, ảnh, video, voice, sticker… tối ưu cho automation.",
  },
  {
    icon: Webhook,
    title: "Listener realtime",
    desc: "Forward sự kiện vào webhook, hỗ trợ tự khởi động lại khi lỗi.",
  },
  {
    icon: BadgeCheck,
    title: "Quản lý nhóm",
    desc: "Tạo nhóm, thêm/xoá thành viên, đổi cài đặt… ngay trong CLI.",
  },
  {
    icon: Braces,
    title: "Raw JSON output",
    desc: "Dễ dàng pipe sang script/agent với --raw, chuẩn hoá dữ liệu.",
  },
  {
    icon: RefreshCcw,
    title: "Auto-restart",
    desc: "Exponential backoff để chạy production bền bỉ.",
  },
  {
    icon: Zap,
    title: "Batch operations",
    desc: "Upload/download song song để nhanh và tiết kiệm thời gian.",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold md:text-3xl">
          Mọi thứ bạn cần để tự động hoá nhắn tin
        </h2>
        <p className="mt-2 text-white/65">
          Dành cho dev muốn CLI mạnh, ổn định, dễ tích hợp vào hệ thống.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/7"
          >
            <f.icon className="h-5 w-5 text-white/80" />
            <h3 className="mt-3 font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-white/65">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-5">
        <div className="flex items-center gap-2 text-sm text-white/70">
          <Blocks className="h-4 w-4" />
          <span>Thiết kế cho AI agent / CLI workflows</span>
        </div>
        <p className="mt-2 text-sm text-white/65">
          Bạn mô tả yêu cầu bằng ngôn ngữ tự nhiên, agent gọi lệnh CLI để gửi tin nhắn,
          nhận phản hồi và quản lý nhóm.
        </p>
      </div>
    </section>
  );
}
