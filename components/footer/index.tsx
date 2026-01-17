import { Image } from "components/image";
import Logo from "components/logo";
import { SITE_METADATA } from "data/metadata";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const { name: siteName } = SITE_METADATA;

const footerLinks = {
  aboutUs: {
    title: "Về chúng tôi",
    links: [
      { title: "Giới thiệu", href: "/about" },
      { title: "Tin tức", href: "/blog" },
      { title: "Tuyển dụng", href: "/careers" },
      { title: "Liên hệ", href: "/contact" },
    ],
  },
  services: {
    title: "Dịch vụ",
    links: [
      { title: "Tour du lịch", href: "/search" },
      { title: "Vé máy bay", href: "/flights" },
      { title: "Khách sạn & Resort", href: "/hotels" },
      { title: "Thuê xe", href: "/car-rental" },
    ],
  },
  helpCenter: {
    title: "Trung tâm trợ giúp",
    links: [
      { title: "Câu hỏi thường gặp", href: "/faq" },
      { title: "Hướng dẫn đặt tour", href: "/booking-guide" },
      { title: "Chính sách & Điều khoản", href: "/terms" },
      { title: "Bảo mật thông tin", href: "/privacy" },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-4 min-[1320px]:px-0">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Logo and Contact Section */}
          <div className="lg:col-span-6">
            <Link
              className="mb-6 flex items-center gap-10 text-neutral-900"
              href="/"
              aria-label="Trang chủ"
            >
              <Logo className="size-32" />
              <div className="text-neutral-500">
                Khám phá những địa điểm đẹp nhất Việt Nam cùng Dream Trip - Hành
                trình của bạn bắt đầu tại đây!
              </div>
            </Link>
            <div className="mb-6 flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-neutral-500" />
                <span className="text-sm text-neutral-600">
                  <a href="tel:0975647798" className="hover:underline">
                    0975647798
                  </a>{" "}
                  /{" "}
                  <a href="tel:0387176583" className="hover:underline">
                    0387176583
                  </a>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-neutral-500" />
                <span className="text-sm text-neutral-600">
                  Tòa GS2, Vinhomes Smart City, Phường Tây Mỗ, Hà Nội, Việt Nam
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-neutral-500" />
                <a
                  href="mailto:support@travila.com"
                  className="text-sm text-neutral-600 hover:text-neutral-900"
                >
                  dreamtrip.vietnam@gmail.com
                </a>
              </div>
            </div>

            {/* Contact Info */}
            {/* <div className="mb-6">
							<h3 className="mb-4 text-sm font-semibold text-neutral-900">
								Liên hệ
							</h3>
							<ul className="space-y-3">
								<li>
									<div className="flex items-start gap-2">
										<PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-neutral-600" />
										<div className="text-sm">
											<p className="font-medium text-neutral-900">
												Điện thoại:
											</p>
											<a
												href="tel:+84123456789"
												className="text-neutral-600 hover:text-neutral-900"
											>
												+84 123 456 789
											</a>
										</div>
									</div>
								</li>
								<li>
									<div className="flex items-start gap-2">
										<Image
											src="https://cdn.shopify.com/s/files/1/0959/3775/7475/files/zalo-logo.svg?v=1763895836"
											alt="Zalo"
											width={16}
											height={16}
											className="mt-0.5 h-4 w-4 shrink-0"
										/>
										<div className="text-sm">
											<p className="font-medium text-neutral-900">Zalo:</p>
											<a
												href="https://zalo.me/84123456789"
												target="_blank"
												rel="noopener noreferrer"
												className="text-neutral-600 hover:text-neutral-900"
											>
												0123 456 789
											</a>
										</div>
									</div>
								</li>
								<li>
									<div className="flex items-start gap-2">
										<Image
											src="https://cdn.shopify.com/s/files/1/0959/3775/7475/files/facebook.svg?v=1763895916"
											alt="Facebook"
											width={16}
											height={16}
											className="mt-0.5 h-4 w-4 shrink-0"
										/>
										<div className="text-sm">
											<p className="font-medium text-neutral-900">Facebook:</p>
											<a
												href="https://facebook.com"
												target="_blank"
												rel="noopener noreferrer"
												className="text-neutral-600 hover:text-neutral-900"
											>
												fb.com/dreamtrip
											</a>
										</div>
									</div>
								</li>
							</ul>
						</div> */}
          </div>

          {/* About Us Links */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold text-neutral-900">
              {footerLinks.aboutUs.title}
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.aboutUs.links.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 hover:underline"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold text-neutral-900">
              {footerLinks.services.title}
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.links.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 hover:underline"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Center Links */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold text-neutral-900">
              {footerLinks.helpCenter.title}
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.helpCenter.links.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 hover:underline"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-4 md:px-4 min-[1320px]:px-0">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-neutral-600 md:flex-row">
            <p>
              © 2020-2025 {siteName}. Bản quyền thuộc về{" "}
              <span className="font-medium">Dream Trip</span>.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/privacy"
                className="transition-colors hover:underline hover:text-neutral-900"
              >
                Chính sách bảo mật
              </Link>
              <span className="text-neutral-300">|</span>
              <Link
                href="/terms"
                className="transition-colors hover:underline hover:text-neutral-900"
              >
                Điều khoản sử dụng
              </Link>
              <span className="text-neutral-300">|</span>
              <Link
                href="/sitemap"
                className="transition-colors hover:underline hover:text-neutral-900"
              >
                Sơ đồ trang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
