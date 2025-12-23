"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export function ProductGallery({
	images,
}: {
	images: { url: string; altText: string }[];
}) {
	const [isOpen, setIsOpen] = useState(false);
	const [currentIdx, setCurrentIdx] = useState(0);
	const [activeCategory, setActiveCategory] = useState<string>("All");

	// Group images by category derived from altText
	const groupedImages = useMemo(() => {
		const groups: Record<string, number[]> = {};
		const categories: string[] = [];

		images.forEach((img, idx) => {
			// Assume altText is "Category - Description"
			const parts = img.altText?.split(" - ");
			const category = parts && parts.length > 1 ? parts[0] : "Khác";

			if (category && typeof category === "string") {
				if (!groups[category]) {
					groups[category] = [];
					categories.push(category);
				}
				groups[category]?.push(idx);
			}
		});

		return { groups, categories };
	}, [images]);

	const { groups, categories } = groupedImages;

	const handleNext = () => {
		setCurrentIdx((prev) => (prev + 1) % images.length);
	};

	const handlePrev = () => {
		setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
	};

	// Keyboard navigation
	useEffect(() => {
		if (!isOpen) return;
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowRight")
				setCurrentIdx((prev) => (prev + 1) % images.length);
			if (e.key === "ArrowLeft")
				setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
			if (e.key === "Escape") setIsOpen(false);
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, images.length]);

	// Sync active category with current image
	useEffect(() => {
		if (!isOpen) return;

		const currentImg = images[currentIdx];
		if (!currentImg) return;

		const parts = currentImg.altText?.split(" - ");
		const category = (parts && parts.length > 1 ? parts[0] : "Khác") || "Khác";
		setActiveCategory(category);
	}, [currentIdx, images, isOpen]);

	const jumpToCategory = (cat: string) => {
		const firstIdx = groups[cat]?.[0];
		if (firstIdx !== undefined) {
			setCurrentIdx(firstIdx);
		}
	};

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
							className="object-cover transition-transform duration-500"
							sizes="(min-width: 1024px) 50vw, 100vw"
							priority
						/>
					)}
				</div>

				{images.slice(1, 5).map((image, index) => (
					<div
						key={index}
						className="hidden md:block relative cursor-pointer overflow-hidden"
						onClick={() => {
							setCurrentIdx(index + 1);
							setIsOpen(true);
						}}
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
				onClick={() => {
					setCurrentIdx(0);
					setIsOpen(true);
				}}
				className="absolute bottom-4 border border-slate-400 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium shadow-lg hover:bg-white transition-colors flex items-center gap-2"
			>
				<Images className="w-4 h-4" />
				Xem tất cả ảnh
			</button>

			{/* Radix Dialog */}
			<Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
				<Dialog.Portal>
					<Dialog.Overlay className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
					<Dialog.Content className="fixed inset-0 z-50 flex flex-col focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200">
						<Dialog.Title className="sr-only">Thư viện ảnh</Dialog.Title>

						{/* Top Bar */}
						<div className="flex items-center justify-between p-4 text-white z-10 w-full bg-linear-to-b from-black/50 to-transparent absolute top-0 left-0 right-0">
							<div className="flex items-center gap-4">
								<button
									type="button"
									onClick={() => setIsOpen(false)}
									className="p-2 hover:bg-white/20 rounded-full transition-colors"
								>
									<X className="w-6 h-6" />
								</button>
								<div className="text-sm font-medium">
									{currentIdx + 1} / {images.length}
								</div>
							</div>
							{/* Categories as Tabs/Status */}
							<div className="hidden md:flex gap-2 overflow-x-auto max-w-[60%] no-scrollbar mask-gradient">
								{categories.map((cat) => (
									<button
										key={cat}
										type="button"
										onClick={() => jumpToCategory(cat)}
										className={clsx(
											"px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors",
											activeCategory === cat
												? "bg-white text-black"
												: "bg-black/40 text-white hover:bg-black/60",
										)}
									>
										{cat}
									</button>
								))}
							</div>
							<div className="w-10" /> {/* Spacer for balance */}
						</div>

						{/* Main Image View */}
						<div className="flex-1 relative w-full h-full flex items-center justify-center p-4">
							{/* Navigation Buttons */}
							<button
								type="button"
								onClick={(e) => {
									e.stopPropagation();
									handlePrev();
								}}
								className="absolute left-4 p-3 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors backdrop-blur-md z-20 hidden md:flex"
							>
								<ChevronLeft className="w-8 h-8" />
							</button>

							<div className="relative w-full h-full max-w-7xl max-h-[85vh]">
								<Image
									src={images[currentIdx]?.url || ""}
									alt={images[currentIdx]?.altText || ""}
									fill
									className="object-contain"
									priority
								/>

								{/* Mobile Caption Overlay */}
								<div className="absolute bottom-4 left-0 right-0 text-center md:hidden">
									<div className="bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full inline-block text-sm">
										{activeCategory}
									</div>
								</div>
							</div>

							<button
								type="button"
								onClick={(e) => {
									e.stopPropagation();
									handleNext();
								}}
								className="absolute right-4 p-3 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors backdrop-blur-md z-20 hidden md:flex"
							>
								<ChevronRight className="w-8 h-8" />
							</button>
						</div>

						{/* Bottom Thumbnails Strip (Optional - adding for better UX if desired, but sticking to user request primarily) */}
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
		</div>
	);
}
