"use client";

import { Images, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function ProductGallery({
	images,
}: {
	images: { url: string; altText: string }[];
}) {
	const [isOpen, setIsOpen] = useState(false);

	if (images.length) {
		let mainImage = images[0];
		if (mainImage) {
			return (
				<div className="relative overflow-hidden rounded-xl">
					<div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:grid-rows-2 h-[300px] md:h-[400px] lg:h-[500px]">
						{/* Main Image */}
						<div
							className="col-span-2 row-span-2 relative cursor-pointer"
							onClick={() => setIsOpen(true)}
						>
							<Image
								src={mainImage.url}
								alt={mainImage.altText}
								fill
								className="object-cover transition-transform duration-500"
								sizes="(min-width: 1024px) 50vw, 100vw"
								priority
							/>
						</div>

						{/* Secondary Images */}
						{images.slice(1, 5).map((image, index) => (
							<div
								key={index}
								className="hidden md:block relative cursor-pointer overflow-hidden"
								onClick={() => setIsOpen(true)}
							>
								<Image
									src={image.url}
									alt={image.altText}
									fill
									className="object-cover transition-transform duration-500"
									sizes="(min-width: 1024px) 25vw, 0vw"
								/>
							</div>
						))}
					</div>

					<button
						type="button"
						onClick={() => setIsOpen(true)}
						className="absolute bottom-4 border border-slate-400 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium shadow-lg hover:bg-white transition-colors flex items-center gap-2"
					>
						<Images className="w-4 h-4" />
						Xem tất cả ảnh
					</button>

					{/* Simple Fullscreen Modal */}
					{isOpen && (
						<div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
							<button
								type="button"
								onClick={() => setIsOpen(false)}
								className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
							>
								<X className="w-8 h-8" />
							</button>

							<div className="w-full max-w-6xl h-full overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-10">
								{images.map((img, idx) => (
									<div key={idx} className="relative aspect-video w-full">
										<Image
											src={img.url}
											alt={img.altText}
											fill
											className="object-cover rounded-lg"
										/>
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			);
		}
	}

	return null;
}
