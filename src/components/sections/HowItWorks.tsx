import { ArrowRight, Check, CreditCard, Download, Key, Mail, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

const steps = [
  {
    id: "1",
    title: "Cài đặt Zalo Utils",
    desc: "Một lệnh duy nhất. Hoạt động trên macOS, Linux và Windows.",
    code: "$ curl -fsSL get.zalo-utils.dev/install.sh | bash",
  },
  {
    id: "2",
    title: "Lấy Support Code",
    desc: "Chạy lệnh để tạo mã định danh thiết bị (support code) duy nhất.",
    code: "$ zalo-utils license support-code",
  },
  {
    id: "3",
    title: "Mua License",
    desc: "Hoàn tất thanh toán qua chuyển khoản VietQR. Xác thực tức thì.",
    icon: CreditCard,
  },
  {
    id: "4",
    title: "Nhận License",
    desc: "Key kích hoạt sẽ được gửi đến email của bạn trong vài phút.",
    icon: Mail,
  },
  {
    id: "5",
    title: "Kích hoạt",
    desc: "Chạy lệnh kích hoạt và bắt đầu sử dụng Zalo Utils ngay lập tức.",
    code: '$ zalo-utils license activate "<key>"',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">Cách hoạt động</h2>
        <p className="mt-4 text-white/60">
          Bắt đầu trong vài phút với quy trình kích hoạt đơn giản của chúng tôi.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-5">
        {steps.map((step) => (
          <div key={step.id} className="relative">
            <div className="flex flex-col h-full">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                {step.id}
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-white/50">{step.desc}</p>
              
              {step.code && (
                <div className="mt-4 rounded-lg bg-black/40 p-3 font-mono text-[11px] text-white/70 border border-white/5">
                  <code className="break-all">{step.code}</code>
                </div>
              )}
            </div>
            {parseInt(step.id) < 5 && (
              <div className="absolute top-5 left-full hidden w-full border-t border-dashed border-white/10 md:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
