"use client";

import { HeartIcon, MapPinIcon, StarIcon } from "@heroicons/react/24/outline";
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	HeartIcon as HeartSolidIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { PropertyCardProps } from "./types";

const typeLabels = {
	villa: "Villa",
	homestay: "Homestay",
	resort: "Resort",
	hotel: "Khách sạn",
};

export function PropertyCard({ property, className = "" }: PropertyCardProps) {
	const [isFavorited, setIsFavorited] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// const handleCardClick = () => {
	// 	if (onClick) {
	// 		onClick(property);
	// 	}
	// };

	const toggleFavorite = (e: React.MouseEvent) => {
		e.stopPropagation();
		setIsFavorited(!isFavorited);
	};

	const nextImage = (e: React.MouseEvent) => {
		e.stopPropagation();
		setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
	};

	const prevImage = (e: React.MouseEvent) => {
		e.stopPropagation();
		setCurrentImageIndex((prev) =>
			prev === 0 ? property.images.length - 1 : prev - 1,
		);
	};

	return (
		<Link
			href="/product/lakeview-02-demo"
			className={`block group cursor-pointer rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${className}`}
		>
			{/* Image Gallery */}
			<div className="relative h-64 w-full overflow-hidden">
				<Image
					src={property.images[currentImageIndex]!}
					alt={`${property.name} - ${property.location}`}
					fill
					className="object-cover transition-transform duration-300 group-hover:scale-105"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>

				{/* Property Type Badge */}
				<div className="absolute top-3 left-3">
					<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/90 text-gray-800">
						{typeLabels[property.type]}
					</span>
				</div>

				{/* Favorite Button */}
				<button
					type="button"
					onClick={toggleFavorite}
					className="absolute top-3 right-3 p-1.5 rounded-full bg-white/90 hover:bg-white transition-colors z-10"
				>
					{isFavorited ? (
						<HeartSolidIcon className="h-5 w-5 text-red-500" />
					) : (
						<HeartIcon className="h-5 w-5 text-gray-600" />
					)}
				</button>

				{/* Image Navigation */}
				{property.images.length > 1 && (
					<>
						<button
							type="button"
							onClick={prevImage}
							className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
							aria-label="Ảnh trước"
						>
							<ChevronLeftIcon className="h-4 w-4 text-gray-600" />
						</button>
						<button
							type="button"
							onClick={nextImage}
							className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
							aria-label="Ảnh tiếp theo"
						>
							<ChevronRightIcon className="h-4 w-4 text-gray-600" />
						</button>
					</>
				)}

				{/* Image Dots Indicator */}
				{property.images.length > 1 && (
					<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1 z-10">
						{property.images.map((_, index) => (
							<div
								key={index}
								className={`h-1.5 w-1.5 rounded-full transition-colors ${
									index === currentImageIndex ? "bg-white" : "bg-white/50"
								}`}
							/>
						))}
					</div>
				)}
			</div>

			{/* Content */}
			<div className="p-4">
				{/* Location */}
				<div className="flex items-center text-sm text-gray-500 mb-2">
					<MapPinIcon className="h-4 w-4 mr-1" />
					<span>{property.location}</span>
				</div>

				{/* Name */}
				<h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
					{property.name}
				</h3>

				{/* Rating */}
				<div className="flex items-center mb-2">
					<StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
					<span className="text-sm font-medium text-gray-900 ml-1">
						{property.rating.toFixed(1)}
					</span>
					<span className="text-sm text-gray-500 ml-1">
						({property.reviewCount} đánh giá)
					</span>
				</div>

				{/* Amenities */}
				{property.amenities.length > 0 && (
					<div className="flex flex-wrap gap-1 mb-3">
						{property.amenities.slice(0, 3).map((amenity, index) => (
							<span
								key={index}
								className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
							>
								{amenity}
							</span>
						))}
						{property.amenities.length > 3 && (
							<span className="text-xs text-gray-500">
								+{property.amenities.length - 3} tiện ích khác
							</span>
						)}
					</div>
				)}

				{/* Price */}
				<div className="flex items-center justify-between">
					<div className="flex items-baseline">
						<span className="text-xl font-bold text-gray-900">
							{property.price.toLocaleString("vi-VN")}₫
						</span>
						<span className="text-sm text-gray-500 ml-1">/đêm</span>
					</div>

					{property.available && (
						<span className="text-xs text-green-600 font-medium">
							Còn trống
						</span>
					)}
				</div>
			</div>
		</Link>
	);
}

// Export types for use in other components
export type { Property, PropertyType } from "./types";
