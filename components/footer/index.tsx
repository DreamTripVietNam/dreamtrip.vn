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
	collections: {
		title: "Địa điểm nổi bật",
		links: [
			{ title: "Tour du lịch", href: "/search" },
			{ title: "Vé máy bay", href: "/flights" },
			{ title: "Khách sạn & Resort", href: "/hotels" },
			{ title: "Thuê xe", href: "/car-rental" },
		],
	},
};

export default function Footer() {
	return (
		<footer className="border-t border-neutral-200 bg-neutral-50">
			{/* Main Footer Content */}
			<div className="mx-auto max-w-7xl px-6 py-12 md:px-4 min-[1320px]:px-0">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
					{/* Logo and Contact Section - 5 cols */}
					<div className="lg:col-span-8 flex flex-col gap-8">
						<div className="space-y-6">
							<div className="flex items-center gap-12">
								<Logo size={1000} className="w-80" />
							</div>
							<p className="text-neutral-500 text-sm leading-relaxed text-justify font-medium">
								Khám phá vẻ đẹp bất tận của Việt Nam cùng chúng tôi. Tự hào là
								đơn vị lữ hành hàng đầu mang đến những trải nghiệm du lịch độc
								đáo, an toàn và đáng nhớ nhất cho bạn và người thân.
							</p>
						</div>

						<div className="flex flex-col gap-2">
							<div className="flex items-center gap-2 group">
								<div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-100 transition-colors shrink-0">
									<Phone className="h-5 w-5" />
								</div>
								<div className="flex flex-col">
									<span className="text-[10px] font-medium text-neutral-400 uppercase tracking-widest">
										Hotline
									</span>
									<div className="text-sm font-medium text-neutral-900 flex items-center gap-2">
										<a
											href="tel:0975647798"
											className="hover:text-teal-600 transition-colors"
										>
											0975.647.798
										</a>
										<span className="text-neutral-300">/</span>
										<a
											href="tel:0387176583"
											className="hover:text-teal-600 transition-colors"
										>
											0387.176.583
										</a>
									</div>
								</div>
							</div>

							<div className="flex items-center gap-2 group">
								<div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-100 transition-colors shrink-0">
									<MapPin className="h-5 w-5" />
								</div>
								<div className="flex flex-col">
									<span className="text-[10px] font-medium text-neutral-400 uppercase tracking-widest">
										Địa chỉ
									</span>
									<span className="text-sm font-medium text-neutral-900 leading-snug">
										Tòa GS2, Vinhomes Smart City, Tây Mỗ, Hà Nội
									</span>
								</div>
							</div>

							<div className="flex items-center gap-2 group">
								<div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-100 transition-colors shrink-0">
									<Mail className="h-5 w-5" />
								</div>
								<div className="flex flex-col">
									<span className="text-[10px] font-medium text-neutral-400 uppercase tracking-widest">
										Email
									</span>
									<a
										href="mailto:dreamtrip.vietnam@gmail.com"
										className="text-sm font-medium text-neutral-900 hover:text-teal-600 transition-colors"
									>
										dreamtrip.vietnam@gmail.com
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Collections Links - 3 cols */}
					<div className="lg:col-span-2">
						<h3 className="mb-6 text-sm font-bold text-neutral-900 uppercase tracking-widest">
							{footerLinks.collections.title}
						</h3>
						<ul className="space-y-3">
							{footerLinks.collections.links.map((link) => (
								<li key={link.title}>
									<Link
										href={link.href}
										className="text-sm text-neutral-600 transition-colors hover:text-teal-600 font-medium"
									>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* About Us Links - 3 cols */}
					<div className="lg:col-span-2">
						<h3 className="mb-6 text-sm font-bold text-neutral-900 uppercase tracking-widest">
							{footerLinks.aboutUs.title}
						</h3>
						<ul className="space-y-3">
							{footerLinks.aboutUs.links.map((link) => (
								<li key={link.title}>
									<Link
										href={link.href}
										className="text-sm text-neutral-600 transition-colors hover:text-teal-600 font-medium"
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
							© 2021-2026. Bản quyền thuộc về{" "}
							<span className="font-medium">dreamtrip.vn</span>.
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
