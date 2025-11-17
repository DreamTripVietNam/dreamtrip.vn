import Image from "next/image";
import { BookingWidget } from "./booking-widget";

export function HeroSection() {
	return (
		<section>
			{/* Background Image with Overlay */}
			<div className="relative h-[600px] flex items-center justify-center">
				<div className="absolute inset-0 z-0">
					<Image
						src="https://images.unsplash.com/photo-1688653802629-5360086bf632?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0"
						alt="Mountain landscape with lake - travel destination"
						fill
						className="object-cover"
						priority
						quality={85}
						sizes="100vw"
					/>
					{/* Dark overlay for better text readability */}
					<div className="absolute inset-0 bg-black/50"></div>
				</div>

				{/* Content */}
				<div className="relative z-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-8">
						{/* Explore Vietnam Tag */}
						<div className="inline-flex items-center rounded-full bg-yellow-400 px-6 py-2 text-sm font-semibold text-black mb-6">
							Khám Phá Việt Nam
						</div>

						{/* Main Headline */}
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
							Cổng Thông Tin Du Lịch
							<br />
							Hàng Đầu Việt Nam
						</h1>

						{/* Subtitle */}
						<p className="text-lg sm:text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
							Đặt homestay, villa và resort tại những điểm đến tuyệt vời nhất
							Việt Nam.
							<br />
							Nơi mỗi chuyến đi là một trải nghiệm đáng nhớ
						</p>
					</div>

					{/* Booking Widget */}
				</div>
			</div>
			<div className="max-w-6xl mx-auto relative z-1 h-[234px] px-3">
				<BookingWidget className="-mt-20" />
			</div>
		</section>
	);
}
