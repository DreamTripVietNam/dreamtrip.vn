import { MOCK_PRODUCT_DATA } from "lib/mock-product-data";
import type { Product } from "lib/shopify/types";
import {
	Flame,
	Home,
	MapPin,
	Music,
	ShieldCheck,
	Sparkles,
	Star,
	Video,
	Wifi,
} from "lucide-react";

// Type-safe icon mapping
const IconMap: Record<string, any> = {
	Wifi: Wifi,
	AC: Home,
	Fridge: Home, // Use generic if specific not found
	Pool: Sparkles,
	Speaker: Music,
	Projector: Video,
	Grill: Flame,
	Cleaning: ShieldCheck,
	Coffee: Sparkles,
	HairDryer: Sparkles,
	HotWater: Flame,
};

function AmenityItem({ icon, label }: { icon: string; label: string }) {
	const Icon = IconMap[icon] || Sparkles;
	return (
		<div className="flex items-center gap-3 p-3 bg-neutral-50  rounded-lg">
			<Icon className="w-6 h-6 text-neutral-600 " />
			<span className="text-sm font-medium text-neutral-800 ">{label}</span>
		</div>
	);
}

export function ProductInfo({ product }: { product: Product }) {
	const { amenities, houseRules, extraServices, nearby, reviews } =
		MOCK_PRODUCT_DATA;
	const { description } = product;

	return (
		<div className="flex flex-col gap-10">
			{/* Description */}
			<section>
				<h2 className="text-2xl font-semibold mb-4 text-neutral-900 ">
					Chi tiết chỗ ở
				</h2>
				<p className="text-neutral-600 leading-relaxed text-base line-clamp-3">
					{description}
				</p>
			</section>

			{/* Amenities */}
			<section>
				<h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
					<span>Tiện ích</span>
					<span className="text-sm font-normal text-neutral-500 bg-neutral-100  px-2 py-1 rounded-full">
						{amenities.free.length + amenities.facilities.length}
					</span>
				</h2>

				<div className="mb-6">
					<h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-3">
						Miễn phí
					</h3>
					<div className="grid grid-cols-2 gap-3">
						{amenities.free.map((item, idx) => (
							<AmenityItem key={idx} {...item} />
						))}
					</div>
				</div>

				<div>
					<h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-3">
						Tiện nghi phòng
					</h3>
					<div className="grid grid-cols-2 gap-3">
						{amenities.facilities.map((item, idx) => (
							<AmenityItem key={idx} {...item} />
						))}
					</div>
				</div>
			</section>

			{/* Extra Services */}
			<section className="bg-orange-50  p-6 rounded-2xl border border-orange-100 ">
				<h2 className="text-xl font-semibold mb-4 text-orange-800  flex items-center gap-2">
					<Sparkles className="w-5 h-5" />
					Dịch vụ phát sinh
				</h2>
				<ul className="space-y-3">
					{extraServices.map((service, idx) => (
						<li key={idx} className="flex justify-between items-center text-sm">
							<span className="text-neutral-700 ">{service.name}</span>
							<span className="font-semibold text-neutral-900 ">
								{service.price}
							</span>
						</li>
					))}
				</ul>
			</section>

			{/* House Rules */}
			<section>
				<h2 className="text-2xl font-semibold mb-4">Nội quy chỗ ở</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{houseRules.map((rule, idx) => (
						<div
							key={idx}
							className="border border-neutral-200  p-4 rounded-xl"
						>
							<span className="block text-xs text-neutral-500 mb-1 uppercase tracking-wide">
								{rule.label}
							</span>
							<span className="font-medium text-neutral-900 ">
								{rule.value}
							</span>
						</div>
					))}
				</div>
			</section>

			{/* Location */}
			<section>
				<h2 className="text-2xl font-semibold mb-4">Nơi bạn sẽ đến</h2>
				<div className="bg-neutral-100  h-64 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden group">
					<MapPin className="w-10 h-10 text-neutral-400" />
					<span className="absolute bottom-4 left-4 bg-white  px-3 py-1 rounded-full text-xs font-bold shadow-md">
						{MOCK_PRODUCT_DATA.location}
					</span>
				</div>
				<div className="flex flex-wrap gap-2">
					{nearby.map((place, idx) => (
						<span
							key={idx}
							className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-200  text-xs font-medium hover:bg-neutral-50 transition-colors cursor-default"
						>
							<MapPin className="w-3 h-3 text-blue-500" />
							{place}
						</span>
					))}
				</div>
			</section>

			{/* Reviews */}
			<section>
				<div className="flex items-center gap-2 mb-6">
					<Star className="w-6 h-6 text-yellow-400 fill-current" />
					<h2 className="text-2xl font-semibold">
						{MOCK_PRODUCT_DATA.rating}{" "}
						<span className="text-neutral-400 font-normal text-lg">
							({MOCK_PRODUCT_DATA.reviewCount} đánh giá)
						</span>
					</h2>
				</div>

				<div className="space-y-6">
					{reviews.map((review, idx) => (
						<div
							key={idx}
							className="border-b border-neutral-100  pb-6 last:border-0 last:pb-0"
						>
							<div className="flex items-center gap-3 mb-3">
								<div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-100 to-purple-100   flex items-center justify-center font-bold text-neutral-600 ">
									{review.author.charAt(0)}
								</div>
								<div>
									<h4 className="font-medium text-sm">{review.author}</h4>
									<span className="text-xs text-neutral-500">
										{review.date}
									</span>
								</div>
							</div>
							<p className="text-neutral-600  text-sm leading-relaxed">
								{review.content}
							</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
