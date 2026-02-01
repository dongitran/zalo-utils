export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                <span className="text-xs font-bold">Z</span>
              </div>
              <span className="font-semibold tracking-tight">zalo-utils</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/50 leading-relaxed">
              Công cụ CLI mạnh mẽ để tự động hoá tin nhắn. 
              Tích hợp AI, quản lý nhóm và xây dựng hệ thống tự động ngay từ terminal của bạn.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white">Tài nguyên</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/50">
              <li><a href="#docs" className="hover:text-white transition">Tài liệu</a></li>
              <li><a href="#support" className="hover:text-white transition">Hỗ trợ</a></li>
              <li><a href="#blog" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Pháp lý</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/50">
              <li><a href="#terms" className="hover:text-white transition">Điều khoản dịch vụ</a></li>
              <li><a href="#privacy" className="hover:text-white transition">Chính sách bảo mật</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-white/30">
            © 2026 Zalo Utils. Sản phẩm độc lập.
          </p>
          <p className="text-xs text-white/30">
            Không liên kết với Zalo hoặc VNG Corporation.
          </p>
        </div>
      </div>
    </footer>
  );
}
