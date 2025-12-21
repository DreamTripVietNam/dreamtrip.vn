import Image from "next/image";
import type { Destination } from "./types";

interface DestinationCardProps {
	destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
	return (
		<div className="group cursor-pointer rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
			<div className="relative h-48 w-full overflow-hidden">
				<Image
					src={destination.image}
					alt={`${destination.name} - Điểm đến du lịch`}
					fill
					className="object-cover transition-transform duration-300 group-hover:scale-110"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
				<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
			</div>

			<div className="p-4">
				<h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
					{destination.name}
				</h3>

				{destination.description && (
					<p className="text-sm text-gray-600 mb-2 line-clamp-2">
						{destination.description}
					</p>
				)}

				{destination.placesCount && (
					<p className="text-sm text-gray-500">
						{destination.placesCount} chỗ ở
					</p>
				)}
			</div>
		</div>
	);
}
