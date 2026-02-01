import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">Giá đơn giản, mua một lần</h2>
        <p className="mt-4 text-white/60">
          Thanh toán một lần, sử dụng mãi mãi. Không thuê bao hàng tháng.
        </p>
      </div>

      <div className="mt-16 flex justify-center">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-8 md:p-10">
          <h3 className="text-xl font-semibold">Zalo Utils Pro License</h3>
          <div className="mt-6 flex items-baseline gap-1">
            <span className="text-4xl font-bold tracking-tight">2.999.000đ</span>
            <span className="text-sm text-white/50">Giá niêm yết</span>
          </div>

          <ul className="mt-8 space-y-4">
            {[
              "Bao gồm tất cả tính năng CLI",
              "License vĩnh viễn (Perpetual)",
              "Bảo mật theo thiết bị/tài khoản",
              "Hỗ trợ ưu tiên (Priority Support)",
              "Cập nhật trọn đời",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                <Check className="h-5 w-5 text-emerald-400" />
                {item}
              </li>
            ))}
          </ul>

          <Button className="mt-10 w-full py-6 text-lg" href="#buy">
            Mua License - 2.999.000đ
          </Button>
          <p className="mt-4 text-center text-xs text-white/40">
            Thanh toán một lần. Không phí duy trì.
          </p>
        </div>
      </div>
    </section>
  );
}
