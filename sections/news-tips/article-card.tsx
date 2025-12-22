"use client";

import { clsx } from "clsx";
import { Clock, Heart, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { BlogArticle } from "./types";

const categoryLabels: Record<string, string> = {
	discovery: "Khám phá",
	travel: "Du lịch",
	tips: "Mẹo hay",
	guide: "Hướng dẫn",
};

const categoryColors: Record<string, string> = {
	discovery: "bg-blue-500",
	travel: "bg-green-500",
	tips: "bg-purple-500",
	guide: "bg-orange-500",
};

export function ArticleCard({ article }: { article: BlogArticle }) {
	const [isFavorite, setIsFavorite] = useState(false);

	return (
		<article className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
			{/* Image */}
			<Link
				href={`/blog/${article.slug}`}
				className="relative h-56 w-full overflow-hidden"
			>
				<Image
					src={article.image}
					alt={article.title}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-110"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>

				{/* Category Badge */}
				<div className="absolute left-4 top-4">
					<span
						className={clsx(
							"rounded-full px-3 py-1 text-xs font-semibold text-white",
							categoryColors[article.category],
						)}
					>
						{categoryLabels[article.category]}
					</span>
				</div>

				{/* Favorite Button */}
				<button
					type="button"
					onClick={(e) => {
						e.preventDefault();
						setIsFavorite(!isFavorite);
					}}
					className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-all hover:bg-white"
					aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
				>
					{isFavorite ? (
						<Heart className="h-5 w-5 fill-red-500 text-red-500" />
					) : (
						<Heart className="h-5 w-5 text-neutral-700" />
					)}
				</button>
			</Link>

			{/* Content */}
			<div className="flex flex-1 flex-col p-6">
				{/* Meta Info */}
				<div className="mb-3 flex items-center gap-4 text-xs text-neutral-500">
					<time
						dateTime={article.publishedAt}
						className="flex items-center gap-1"
					>
						<Clock className="h-4 w-4" />
						{article.publishedAt}
					</time>
					<span className="flex items-center gap-1">
						<Clock className="h-4 w-4" />
						{article.readingTime} mins
					</span>
					<span className="flex items-center gap-1">
						<MessageCircle className="h-4 w-4" />
						{article.commentsCount} comments
					</span>
				</div>

				{/* Title */}
				<Link href={`/blog/${article.slug}`}>
					<h3 className="mb-4 line-clamp-2 text-lg font-semibold text-neutral-900 transition-colors group-hover:text-blue-600">
						{article.title}
					</h3>
				</Link>

				{/* Excerpt */}
				{article.excerpt && (
					<p className="mb-4 line-clamp-2 text-sm text-neutral-600">
						{article.excerpt}
					</p>
				)}

				{/* Author & CTA */}
				<div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-4">
					<div className="flex items-center gap-3">
						<Image
							src={article.author.avatar}
							alt={article.author.name}
							width={32}
							height={32}
							className="h-8 w-8 rounded-full object-cover"
						/>
						<span className="text-sm font-medium text-neutral-700">
							{article.author.name}
						</span>
					</div>
					<Link
						href={`/blog/${article.slug}`}
						className="text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
					>
						Xem thêm
					</Link>
				</div>
			</div>
		</article>
	);
}
