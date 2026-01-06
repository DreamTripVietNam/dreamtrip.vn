"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import { Image } from "components/image";
import { ScrollArea } from "components/ui/scroll-area";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { useEffect, useState } from "react";

export function ProductGallery({
	images,
}: {
	images: { url: string; altText: string }[];
}) {
	const [isOpen, setIsOpen] = useState(false);
	const [currentIdx, setCurrentIdx] = useState(0);
	const [activeCategory, setActiveCategory] = useState<string>("All");

	// Group images by category derived from altText
	const groups: Record<string, number[]> = {};
	const categories: string[] = [];
	const flatIndices: number[] = [];

	images.forEach((img, idx) => {
		// Extract category from altText.
		// If altText contains " - ", split and take the first part.
		// Otherwise, use the whole altText as the category.
		const alt = img.altText || "";
		const parts = alt.split(" - ");
		const category = parts.length > 1 ? parts[0] : alt || "Khác";

		if (category && typeof category === "string") {
			if (!groups[category]) {
				groups[category] = [];
				categories.push(category);
			}
			groups[category]?.push(idx);
		}
	});

	// Create a flat list of indices based on the visual order in the sidebar (grouped by category)
	categories.forEach((cat) => {
		if (groups[cat]) {
			flatIndices.push(...groups[cat]);
		}
	});

	const handleNext = () => {
		setCurrentIdx((prev) => {
			const currentFlatIdx = flatIndices.indexOf(prev);
			// Fallback if something weird happens, though shouldn't
			if (currentFlatIdx === -1) return prev;
			const nextFlatIdx = (currentFlatIdx + 1) % flatIndices.length;
			return flatIndices[nextFlatIdx] ?? prev;
		});
	};

	const handlePrev = () => {
		setCurrentIdx((prev) => {
			const currentFlatIdx = flatIndices.indexOf(prev);
			if (currentFlatIdx === -1) return prev;
			const prevFlatIdx =
				(currentFlatIdx - 1 + flatIndices.length) % flatIndices.length;
			return flatIndices[prevFlatIdx] ?? prev;
		});
	};

	// Keyboard navigation
	useEffect(() => {
		if (!isOpen) return;
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowRight") handleNext();
			if (e.key === "ArrowLeft") handlePrev();
			if (e.key === "Escape") setIsOpen(false);
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	});

	// Sync active category with current image
	useEffect(() => {
		if (!isOpen) return;

		const currentImg = images[currentIdx];
		if (!currentImg) return;

		const alt = currentImg.altText || "";
		const parts = alt.split(" - ");
		const category = (parts.length > 1 ? parts[0] : alt) || "Khác";
		setActiveCategory(category);

		// Auto-scroll logic for thumbnail strip
		const thumb = document.getElementById(`thumb-${currentIdx}`);
		if (thumb) {
			thumb.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "center",
			});
		}
	}, [currentIdx, images, isOpen]);

	if (!images.length) return null;

	const mainImage = images[0];

	return (
		<div className="relative overflow-hidden rounded-xl">
			{/* Grid View */}
			<div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:grid-rows-2 h-[300px] md:h-[400px] lg:h-[500px]">
				<div
					className="col-span-2 row-span-2 relative cursor-pointer"
					onClick={() => {
						setCurrentIdx(0);
						setIsOpen(true);
					}}
				>
					{mainImage && (
						<Image
							src={mainImage.url}
							alt={mainImage.altText}
							fill
							sizes="(min-width: 1024px) 50vw, 100vw"
							loading="eager"
							className="transition-all hover:brightness-90 brightness-100"
						/>
					)}
				</div>

				{images.slice(1, 5).map((image, index) => (
					<div
						key={index}
						className="hidden md:block relative cursor-pointer"
						onClick={() => {
							setCurrentIdx(index + 1);
							setIsOpen(true);
						}}
					>
						<Image
							src={image.url}
							alt={image.altText}
							fill
							sizes="(min-width: 1024px) 25vw, 0vw"
							className="transition-all hover:brightness-90 brightness-100"
						/>
					</div>
				))}
			</div>

			<button
				type="button"
				onClick={() => {
					setCurrentIdx(0);
					setIsOpen(true);
				}}
				className="absolute bottom-4 border border-slate-400 right-4 bg-white backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium shadow-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
			>
				<Images className="size-4" />
				Xem tất cả ảnh ({images.length})
			</button>

			{/* Radix Dialog */}
			<Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
				<Dialog.Portal>
					<Dialog.Overlay className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
					<Dialog.Content className="fixed inset-0 z-50 flex flex-col focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200">
						<Dialog.Title className="sr-only">Thư viện ảnh</Dialog.Title>

						<div className="flex flex-col lg:grid lg:grid-cols-4 w-full h-full bg-black">
							{/* Left Column: Sidebar (Span 1) */}
							<div className="hidden lg:flex flex-col lg:col-span-1 h-full bg-neutral-900 border-l border-white/10">
								<ScrollArea className="h-full w-full max-h-screen" size="sm">
									<div className="space-y-8 py-6">
										{categories.map((category) => {
											const categoryImages = groups[category];
											if (!categoryImages) return null;

											return (
												<div key={category}>
													<h3 className="text-white pl-6 mr-3 font-medium mb-2 sticky top-0 bg-neutral-900 py-3 z-10">
														{category}{" "}
														<span className="text-neutral-500 ml-1">
															({categoryImages.length})
														</span>
													</h3>
													<div className="grid grid-cols-3 gap-2 px-6">
														{categoryImages.map((imgIdx) => (
															<button
																key={imgIdx}
																id={`thumb-${imgIdx}`}
																type="button"
																onClick={() => setCurrentIdx(imgIdx)}
																className={clsx(
																	"relative ring-2 aspect-square rounded-md overflow-hidden transition-all duration-200 scroll-my-16",
																	currentIdx === imgIdx
																		? "ring-white opacity-100"
																		: "opacity-60 hover:opacity-100 ring-transparent",
																)}
															>
																<Image
																	src={images[imgIdx]?.url || ""}
																	alt={images[imgIdx]?.altText || ""}
																	fill
																	objectFit="cover"
																	loading="lazy"
																/>
															</button>
														))}
													</div>
												</div>
											);
										})}

										{/* Padding bottom to ensure last items are visible/comfortable */}
										<div className="h-10"></div>
									</div>
								</ScrollArea>
							</div>

							{/* Right Column: Main Image (Span 3) */}
							<div className="relative h-full lg:col-span-3 flex items-center justify-center bg-black/90 p-4 lg:p-10">
								{/* Top Bar (Mobile Only / overlay) */}
								<div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20 pointer-events-none">
									<div className="pointer-events-auto bg-black/50 backdrop-blur-md rounded-full px-3 py-1.5 text-white text-sm font-medium">
										{flatIndices.indexOf(currentIdx) + 1} / {images.length}
									</div>
									<button
										type="button"
										onClick={() => setIsOpen(false)}
										className="pointer-events-auto p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors"
									>
										<X className="w-5 h-5" />
									</button>
								</div>

								<div className="relative w-full h-full">
									<Image
										src={images[currentIdx]?.url || ""}
										alt={images[currentIdx]?.altText || ""}
										fill
										objectFit="contain"
										loading="eager"
									/>

									{/* Mobile Category Label */}
									<div className="absolute bottom-4 left-4 lg:hidden pointer-events-none">
										<div className="bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm">
											{activeCategory}
										</div>
									</div>

									{/* Navigation Buttons (Bottom Right) */}
									<div className="absolute bottom-4 right-4 flex gap-2 z-20">
										<button
											type="button"
											onClick={(e) => {
												e.stopPropagation();
												handlePrev();
											}}
											className="p-3 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors backdrop-blur-md"
										>
											<ChevronLeft className="w-6 h-6" />
										</button>
										<button
											type="button"
											onClick={(e) => {
												e.stopPropagation();
												handleNext();
											}}
											className="p-3 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors backdrop-blur-md"
										>
											<ChevronRight className="w-6 h-6" />
										</button>
									</div>
								</div>
							</div>
						</div>
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
		</div>
	);
}
