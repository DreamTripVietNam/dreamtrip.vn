import { type Property, PropertyCard } from "components/property-card";

// Featured Vietnamese properties
const featuredProperties: Property[] = [
	{
		id: "villa-phu-quoc-1",
		name: "Villa Sunset Paradise - Phú Quốc",
		location: "Bãi Dài, Phú Quốc",
		price: 3500000,
		rating: 4.8,
		reviewCount: 124,
		type: "villa",
		images: [
			"https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80",
			"https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80",
			"https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
		],
		amenities: [
			"Hồ bơi riêng",
			"View biển",
			"BBQ",
			"Wifi miễn phí",
			"Điều hòa",
		],
		available: true,
	},
	{
		id: "homestay-sapa-1",
		name: "Nhà Sàn Truyền Thống H'Mông",
		location: "Ta Van, Sa Pa",
		price: 450000,
		rating: 4.6,
		reviewCount: 89,
		type: "homestay",
		images: [
			"https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=600&q=80",
			"https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
		],
		amenities: [
			"Trải nghiệm văn hóa",
			"Trekking",
			"Ăn sáng miễn phí",
			"View ruộng bậc thang",
		],
		available: true,
	},
	{
		id: "resort-da-nang-1",
		name: "Fusion Resort Đà Nẵng",
		location: "Bãi biển Mỹ Khê, Đà Nẵng",
		price: 2800000,
		rating: 4.7,
		reviewCount: 156,
		type: "resort",
		images: [
			"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80",
			"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
			"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
		],
		amenities: ["Spa", "3 hồ bơi", "Bãi biển riêng", "Nhà hàng 5 sao", "Gym"],
		available: true,
	},
	{
		id: "villa-hoi-an-1",
		name: "Heritage Villa Cổ Điển",
		location: "Phố cổ Hội An",
		price: 1800000,
		rating: 4.9,
		reviewCount: 203,
		type: "villa",
		images: [
			"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
			"https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=600&q=80",
		],
		amenities: [
			"Kiến trúc cổ điển",
			"Sân vườn",
			"Gần phố cổ",
			"Xe đạp miễn phí",
		],
		available: false,
	},
	{
		id: "homestay-dalat-1",
		name: "Cozy Coffee Homestay",
		location: "Trung tâm Đà Lạt",
		price: 650000,
		rating: 4.5,
		reviewCount: 78,
		type: "homestay",
		images: [
			"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
			"https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
		],
		amenities: ["Cafe riêng", "Sưởi ấm", "View thành phố", "Ăn sáng tự chọn"],
		available: true,
	},
	{
		id: "resort-nha-trang-1",
		name: "Oceanami Luxury Resort",
		location: "Vịnh Nha Trang",
		price: 4200000,
		rating: 4.8,
		reviewCount: 267,
		type: "resort",
		images: [
			"https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80",
			"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
			"https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=600&q=80",
		],
		amenities: [
			"All-inclusive",
			"Thể thao nước",
			"Kids club",
			"5 nhà hàng",
			"Golf course",
		],
		available: true,
	},
];

interface FeaturedPropertiesProps {
	properties?: Property[];
	title?: string;
	subtitle?: string;
	className?: string;
}

export function FeaturedProperties({
	properties = featuredProperties,
	title = "Chỗ Ở Nổi Bật",
	subtitle = "Khám phá những chỗ ở tuyệt vời được yêu thích nhất tại Việt Nam",
	className = "",
}: FeaturedPropertiesProps) {
	// const handlePropertyClick = (property: Property) => {
	// 	// Handle property click - could navigate to detail page
	// 	console.log("Property clicked:", property);
	// };

	return (
		<section className={`py-16 bg-white ${className}`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						{title}
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
				</div>

				{/* Properties Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{properties.map((property) => (
						<PropertyCard
							key={property.id}
							property={property}
							// onClick={handlePropertyClick}
						/>
					))}
				</div>

				{/* View More Button */}
				<div className="text-center mt-12">
					<button
						type="button"
						className="inline-flex items-center px-8 py-3 border border-transparent rounded-lg text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
					>
						Xem thêm chỗ ở
					</button>
				</div>
			</div>
		</section>
	);
}
