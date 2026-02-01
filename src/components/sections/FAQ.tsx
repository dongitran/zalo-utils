"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Có những loại license nào? Tôi nên chọn loại nào?",
    a: "Zalo Utils cung cấp license theo Thiết bị (Device-bound) hoặc theo Tài khoản (Account-based). Nếu bạn dùng cố định 1 máy, hãy chọn Device. Nếu cần linh hoạt, Account là lựa chọn tốt nhất.",
  },
  {
    q: "Device Support Code là gì?",
    a: "Đó là mã định danh duy nhất của thiết bị, giúp chúng tôi cấp license chính xác cho máy tính của bạn.",
  },
  {
    q: "Tôi có thể dùng một license trên nhiều thiết bị không?",
    a: "Tùy loại license. License Pro cho phép đăng ký theo tài khoản để sử dụng linh hoạt trên nhiều máy (tại một thời điểm nhất định).",
  },
  {
    q: "Phương thức thanh toán nào được hỗ trợ?",
    a: "Chúng tôi hỗ trợ chuyển khoản ngân hàng qua VietQR để kích hoạt tự động 24/7.",
  },
  {
    q: "Zalo Utils có liên kết với Zalo không?",
    a: "Không. Zalo Utils là công cụ độc lập được phát triển để hỗ trợ lập trình viên. Chúng tôi không thuộc VNG Corporation.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <div className="text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">Câu hỏi thường gặp</h2>
        <p className="mt-4 text-white/60">Mọi thứ bạn cần biết về Zuno CLI.</p>
      </div>

      <div className="mt-16 space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/5 bg-white/5 overflow-hidden"
          >
            <button
              className="flex w-full items-center justify-between p-6 text-left transition hover:bg-white/5"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="font-medium">{faq.q}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-white/40 transition-transform",
                  openIndex === i && "rotate-180"
                )}
              />
            </button>
            {openIndex === i && (
              <div className="border-t border-white/5 p-6 text-sm text-white/60 leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
