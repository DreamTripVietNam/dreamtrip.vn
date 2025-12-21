import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { clsx } from "clsx";
import Link from "components/link";
import { DestinationCard } from "./destination-card";
import type { Destination, TopDestinationsProps } from "./types";

// Popular Vietnamese destinations with high-quality images
const defaultDestinations: Destination[] = [
	{
		id: "ha-long-bay",
		name: "Vịnh Hạ Long",
		image:
			"https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80",
		description: "Di sản thế giới với hàng nghìn đảo đá vôi tuyệt đẹp",
		propertyCount: 245,
	},
	{
		id: "hoi-an",
		name: "Hội An",
		image:
			"https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80",
		description: "Phố cổ thơ mộng với đèn lồng rực rỡ và ẩm thực độc đáo",
		propertyCount: 189,
	},
	{
		id: "phu-quoc",
		name: "Phú Quốc",
		image:
			"https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=600&q=80",
		description: "Đảo ngọc với bãi biển tuyệt đẹp và resort cao cấp",
		propertyCount: 312,
	},
	{
		id: "da-lat",
		name: "Đà Lạt",
		image:
			"https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80",
		description: "Thành phố ngàn hoa với khí hậu mát mẻ quanh năm",
		propertyCount: 156,
	},
	{
		id: "nha-trang",
		name: "Nha Trang",
		image:
			"https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
		description: "Thành phố biển năng động với nhiều hoạt động thú vị",
		propertyCount: 278,
	},
	{
		id: "sapa",
		name: "Sa Pa",
		image:
			"https://images.unsplash.com/photo-1570979392737-6c9ac84b84ad?w=600&q=80",
		description: "Cao nguyên mù sương với ruộng bậc thang hùng vĩ",
		propertyCount: 98,
	},
	{
		id: "da-nang",
		name: "Đà Nẵng",
		image:
			"https://images.unsplash.com/photo-1555663221-4dc9ae84c746?w=600&q=80",
		description: "Thành phố hiện đại bên bờ biển miền Trung",
		propertyCount: 234,
	},
	{
		id: "mui-ne",
		name: "Mũi Né",
		image:
			"https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80",
		description: "Thiên đường resort với đồi cát và gió biển",
		propertyCount: 167,
	},
];

export function TopDestinations({
	destinations = defaultDestinations,
	title = "Điểm Đến Tìm Kiếm Hàng Đầu",
	className = "",
}: TopDestinationsProps) {
	return (
		<section className={clsx("py-16 bg-gray-50", className)}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						{title}
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Khám phá những điểm đến tuyệt vời nhất Việt Nam với hàng nghìn
						homestay, villa và resort chất lượng cao
					</p>
				</div>

				{/* Destinations Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-12">
					{destinations.map((destination) => (
						<DestinationCard key={destination.id} destination={destination} />
					))}
				</div>

				{/* View More Button */}
				<div className="flex justify-center">
					<Link href="/search" variant="secondary">
						Xem tất cả điểm đến
						<ChevronRightIcon className="ml-2 h-5 w-5" aria-hidden="true" />
					</Link>
				</div>
			</div>
		</section>
	);
}
