import { clsx } from "clsx";
import { ServiceCard } from "./service-card";
import type { AdditionalServicesProps, Service } from "./types";

// Default services offered by DreamTrip
const defaultServices: Service[] = [
	{
		id: "car-rental",
		name: "Thuê xe",
		description: "Đa dạng loại xe, giá cả hợp lý, giao nhận tận nơi",
		icon: "🚗",
		link: "/services/car-rental",
	},
	{
		id: "restaurant-booking",
		name: "Đặt bàn nhà hàng",
		description: "Đặt chỗ tại các nhà hàng uy tín, đảm bảo chỗ ngồi",
		icon: "🍽️",
		link: "/services/restaurant-booking",
	},
	{
		id: "tickets-booking",
		name: "Đặt vé tham quan",
		description: "Vé các điểm tham quan nổi tiếng, giá tốt nhất",
		icon: "🎫",
		link: "/services/tickets-booking",
	},
	{
		id: "tours-booking",
		name: "Tour du lịch",
		description: "Các tour trọn gói với hướng dẫn viên chuyên nghiệp",
		icon: "🗺️",
		link: "/services/tours-booking",
	},
	{
		id: "airport-transfer",
		name: "Đưa đón sân bay",
		description: "Dịch vụ đưa đón an toàn, tiết kiệm thời gian",
		icon: "✈️",
		link: "/services/airport-transfer",
	},
	{
		id: "travel-insurance",
		name: "Bảo hiểm du lịch",
		description: "Bảo vệ chuyến đi của bạn với các gói bảo hiểm uy tín",
		icon: "🛡️",
		link: "/services/travel-insurance",
	},
];

export function AdditionalServices({
	services = defaultServices,
	className = "",
}: AdditionalServicesProps) {
	return (
		<section className={clsx("bg-neutral-50 py-16 lg:py-24", className)}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
						Dịch vụ bổ sung
					</h2>
					<p className="mx-auto max-w-2xl text-lg text-neutral-600">
						Chúng tôi cung cấp đa dạng dịch vụ để làm cho chuyến đi của bạn trở
						nên hoàn hảo và trọn vẹn
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{services.map((service) => (
						<ServiceCard key={service.id} service={service} />
					))}
				</div>
			</div>
		</section>
	);
}
