"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import type { Review, ReviewStats } from "lib/mock-reviews";
import {
	CheckCircle2,
	Key,
	MapPin,
	MessageCircle,
	Quote,
	Sparkles,
	Star,
	Tag,
	X,
} from "lucide-react";
import { clsx } from "clsx";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function ReviewSkeleton() {
	return (
		<div className="space-y-4 animate-pulse">
			<div className="flex items-center gap-3">
				<div className="w-10 h-10 rounded-full bg-neutral-200" />
				<div className="space-y-2">
					<div className="h-3 w-24 bg-neutral-200 rounded-sm" />
					<div className="h-2 w-16 bg-neutral-200 rounded-sm" />
				</div>
			</div>
			<div className="space-y-2">
				<div className="h-3 w-full bg-neutral-200 rounded-sm" />
				<div className="h-3 w-5/6 bg-neutral-200 rounded-sm" />
			</div>
		</div>
	);
}

function ReviewCard({ review }: { review: Review }) {
	return (
		<div className="group relative border border-neutral-100 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:border-neutral-200">
			<div className="absolute top-6 right-6 text-neutral-100 group-hover:text-neutral-200 transition-colors">
				<Quote className="w-8 h-8 md:w-10 md:h-10 fill-current" />
			</div>

			<div className="relative z-10 flex items-start justify-between gap-4 mb-4">
				<div className="flex items-center gap-3">
					<Image
						src={review.author.avatar}
						alt={review.author.name}
						width={44}
						height={44}
						className="rounded-full bg-neutral-100 object-cover border border-neutral-100"
						unoptimized
					/>
					<div>
						<h4 className="font-semibold text-sm text-neutral-900">
							{review.author.name}
						</h4>
						<div className="flex items-center gap-2 mt-1">
							<div className="flex text-yellow-400 gap-0.5">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className={clsx(
											"w-3.5 h-3.5",
											i < review.rating
												? "fill-current"
												: "text-neutral-200 fill-neutral-200",
										)}
									/>
								))}
							</div>
							<span className="text-xs text-neutral-300">•</span>
							<span className="text-xs text-neutral-500">{review.date}</span>
						</div>
					</div>
				</div>
			</div>

			<p className="relative z-10 text-neutral-600 text-sm leading-relaxed mb-4">
				{review.content}
			</p>
			{review.images && review.images.length > 0 && (
				<div className="relative z-10 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
					{review.images.map((img, idx) => (
						<Image
							key={idx}
							src={img}
							alt="Review"
							width={80}
							height={80}
							className="rounded-lg object-cover flex-none border border-neutral-100"
						/>
					))}
				</div>
			)}
		</div>
	);
}

function RatingBar({
	label,
	value,
	icon: Icon,
}: {
	label: string;
	value: number;
	icon: any;
}) {
	return (
		<div className="flex items-center justify-between text-sm gap-4">
			<div className="flex items-center gap-2 text-neutral-600 min-w-0 flex-1">
				<Icon className="w-4 h-4 stroke-1.5" />
				<span className="truncate">{label}</span>
			</div>
			<div className="flex items-center gap-3 w-32 shrink-0">
				<div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
					<div
						className="h-full bg-neutral-900 rounded-full"
						style={{ width: `${(value / 5) * 100}%` }}
					/>
				</div>
				<span className="font-medium w-6 text-right">{value}</span>
			</div>
		</div>
	);
}

export function ReviewsSection({ productHandle }: { productHandle: string }) {
	const [data, setData] = useState<{
		stats: ReviewStats;
		reviews: Review[];
	} | null>(null);
	const [loading, setLoading] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const sectionRef = useRef<HTMLDivElement>(null);
	const hasFetched = useRef(false);

	useEffect(() => {
		const fetchReviews = async () => {
			setLoading(true);
			try {
				const res = await fetch(`/api/reviews?handle=${productHandle}`);
				const json = await res.json();
				setData(json);
			} catch (error) {
				console.error("Failed to fetch reviews:", error);
			} finally {
				setLoading(false);
			}
		};

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0]?.isIntersecting && !hasFetched.current) {
					fetchReviews();
					hasFetched.current = true;
				}
			},
			{ threshold: 0.1 },
		);

		const currentRef = sectionRef.current;
		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
			observer.disconnect();
		};
	}, [productHandle]);

	const displayedReviews = data?.reviews.slice(0, 6) || [];

	return (
		<section
			ref={sectionRef}
			className="py-8 scroll-mt-20"
			id="reviews-section"
		>
			{/* Header with Stats */}
			{!data && !loading ? (
				<div className="h-32 flex items-center justify-center text-neutral-400">
					Cuộn để xem đánh giá...
				</div>
			) : (
				<>
					<div className="mb-8">
						<div className="flex items-center gap-3 mb-6">
							<Star className="w-8 h-8 text-yellow-400 fill-current" />
							<h2 className="text-3xl font-bold font-barlow text-neutral-900">
								{loading ? "..." : data?.stats.averageRating.toFixed(1)}{" "}
								<span className="text-xl font-normal text-neutral-500">
									({loading ? "..." : data?.stats.totalReviews} đánh giá)
								</span>
							</h2>
						</div>

						{/* Breakdown Stats */}
						{!loading && data && (
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-4 mb-10 p-6 bg-neutral-50 rounded-2xl border border-neutral-100">
								<RatingBar
									label="Mức độ sạch sẽ"
									value={data.stats.breakdown.cleanliness}
									icon={Sparkles}
								/>
								<RatingBar
									label="Độ chính xác"
									value={data.stats.breakdown.accuracy}
									icon={CheckCircle2}
								/>
								<RatingBar
									label="Giao tiếp"
									value={data.stats.breakdown.communication}
									icon={MessageCircle}
								/>
								<RatingBar
									label="Vị trí"
									value={data.stats.breakdown.location}
									icon={MapPin}
								/>
								<RatingBar
									label="Nhận phòng"
									value={data.stats.breakdown.checkIn}
									icon={Key}
								/>
								<RatingBar
									label="Giá trị"
									value={data.stats.breakdown.value}
									icon={Tag}
								/>
							</div>
						)}
					</div>

					{/* Reviews Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
						{loading
							? Array.from({ length: 4 }).map((_, i) => (
									<ReviewSkeleton key={i} />
								))
							: displayedReviews.map((review) => (
									<ReviewCard key={review.id} review={review} />
								))}
					</div>

					{/* Show All Button */}
					{!loading && data && (
						<Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
							<Dialog.Trigger asChild>
								<button
									type="button"
									className="px-6 py-3 border border-neutral-900 rounded-lg font-medium text-neutral-900 hover:bg-neutral-50 transition-colors"
								>
									Hiển thị tất cả {data.stats.totalReviews} đánh giá
								</button>
							</Dialog.Trigger>
							<Dialog.Portal>
								<Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
								<Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
									<div className="bg-white rounded-2xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200">
										<div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100">
											<Dialog.Title className="text-xl font-bold font-barlow">
												Đánh giá của khách
											</Dialog.Title>
											<Dialog.Close asChild>
												<button
													type="button"
													className="p-2 -mr-2 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors"
												>
													<X className="w-5 h-5" />
												</button>
											</Dialog.Close>
										</div>

										<VisuallyHidden.Root>
											<Dialog.Description>
												Danh sách toàn bộ đánh giá của khách hàng
											</Dialog.Description>
										</VisuallyHidden.Root>

										<div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
											<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
												{data.reviews.map((review) => (
													<ReviewCard key={review.id} review={review} />
												))}
											</div>
										</div>
									</div>
								</Dialog.Content>
							</Dialog.Portal>
						</Dialog.Root>
					)}
				</>
			)}
		</section>
	);
}
