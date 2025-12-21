"use client";

import { HeartIcon, MapPinIcon, StarIcon } from "@heroicons/react/24/outline";
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	HeartIcon as HeartSolidIcon,
} from "@heroicons/react/24/solid";
import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { PlaceCardProps } from "./types";

const typeLabels = {
	villa: "Villa",
	homestay: "Homestay",
	resort: "Resort",
	hotel: "Khách sạn",
};

export function PlaceCard({ place, className = "" }: PlaceCardProps) {
	const [isFavorited, setIsFavorited] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const toggleFavorite = (e: React.MouseEvent) => {
		e.stopPropagation();
		setIsFavorited(!isFavorited);
	};

	const nextImage = (e: React.MouseEvent) => {
		e.stopPropagation();
		setCurrentImageIndex((prev) => (prev + 1) % place.images.length);
	};

	const prevImage = (e: React.MouseEvent) => {
		e.stopPropagation();
		setCurrentImageIndex((prev) =>
			prev === 0 ? place.images.length - 1 : prev - 1,
		);
	};

	return (
		<Link
			href={`/product/${place.handle}`}
			className={clsx(
				"block group cursor-pointer rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",
				className,
			)}
		>
			{/* Image Gallery */}
			<div className="relative h-64 w-full overflow-hidden">
				<Image
					src={place.images[currentImageIndex]!}
					alt={`${place.name} - ${place.location}`}
					fill
					className="object-cover transition-transform duration-300 group-hover:scale-105"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>

				{/* Place Type Badge */}
				<div className="absolute top-3 left-3">
					<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/90 text-gray-800">
						{typeLabels[place.type]}
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
				{place.images.length > 1 && (
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
				{place.images.length > 1 && (
					<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1 z-10">
						{place.images.map((_, index) => (
							<div
								key={index}
								className={clsx(
									"h-1.5 w-1.5 rounded-full transition-colors",
									index === currentImageIndex ? "bg-white" : "bg-white/50",
								)}
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
					<span>{place.location}</span>
				</div>

				{/* Name */}
				<h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
					{place.name}
				</h3>

				{/* Rating */}
				<div className="flex items-center mb-2">
					<StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
					<span className="text-sm font-medium text-gray-900 ml-1">
						{place.rating.toFixed(1)}
					</span>
					<span className="text-sm text-gray-500 ml-1">
						({place.reviewCount} đánh giá)
					</span>
				</div>

				{/* Amenities */}
				{place.amenities.length > 0 && (
					<div className="flex flex-wrap gap-1 mb-3">
						{place.amenities.slice(0, 3).map((amenity, index) => (
							<span
								key={index}
								className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
							>
								{amenity}
							</span>
						))}
						{place.amenities.length > 3 && (
							<span className="text-xs text-gray-500">
								+{place.amenities.length - 3} tiện ích khác
							</span>
						)}
					</div>
				)}

				{/* Price */}
				<div className="flex items-center justify-between">
					<div className="flex items-baseline">
						<span className="text-xl font-bold text-gray-900">
							{place.price.toLocaleString("vi-VN")}₫
						</span>
						<span className="text-sm text-gray-500 ml-1">/đêm</span>
					</div>

					{place.available && (
						<span className="text-xs text-green-600 font-medium">
							Còn trống
						</span>
					)}
				</div>
			</div>
		</Link>
	);
}
