import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "components/link";
import { ArticleCard } from "./article-card";
import type { BlogArticle, NewsTipsProps } from "./types";

// Featured travel articles
const defaultArticles: BlogArticle[] = [
	{
		id: "hidden-gems-phu-quoc",
		title: "Khám phá những viên ngọc ẩn: 10 điểm đến ngoài lối mòn ở Phú Quốc",
		excerpt:
			"Tìm hiểu những bãi biển hoang sơ và địa điểm bí mật mà ít du khách biết đến trên đảo ngọc Phú Quốc",
		category: "discovery",
		image:
			"https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
		author: {
			name: "Minh Anh",
			avatar: "https://i.pravatar.cc/150?img=1",
		},
		publishedAt: "18 Sep 2024",
		readingTime: 6,
		commentsCount: 58,
		slug: "hidden-gems-phu-quoc",
	},
	{
		id: "budget-travel-hacks",
		title: "10 bí quyết du lịch tiết kiệm cho những người thích khám phá",
		excerpt:
			"Học cách tận dụng tối đa ngân sách du lịch của bạn với những mẹo và chiến lược đã được kiểm chứng",
		category: "travel",
		image:
			"https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
		author: {
			name: "Minh Anh",
			avatar: "https://i.pravatar.cc/150?img=1",
		},
		publishedAt: "18 Sep 2024",
		readingTime: 8,
		commentsCount: 38,
		slug: "budget-travel-hacks",
	},
	{
		id: "sapa-trekking-guide",
		title: "Hướng dẫn trekking Sa Pa: Chinh phục ruộng bậc thang mùa lúa chín",
		excerpt:
			"Cẩm nang chi tiết về các cung đường trekking đẹp nhất Sa Pa và kinh nghiệm chinh phục núi rừng Tây Bắc",
		category: "discovery",
		image:
			"https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
		author: {
			name: "Minh Anh",
			avatar: "https://i.pravatar.cc/150?img=1",
		},
		publishedAt: "18 Sep 2024",
		readingTime: 6,
		commentsCount: 38,
		slug: "sapa-trekking-guide",
	},
];

export function NewsTips({
	articles = defaultArticles,
	className = "",
}: NewsTipsProps) {
	return (
		<section className={`bg-white py-16 lg:py-24 ${className}`}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="mb-12 flex items-end justify-between">
					<div>
						<h2 className="mb-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
							Tin tức, Mẹo & Hướng dẫn
						</h2>
						<p className="text-lg text-neutral-600">
							Điểm đến yêu thích dựa trên đánh giá của khách hàng
						</p>
					</div>
					<Link
						href="/blog"
						variant="secondary"
						className="hidden sm:inline-flex items-center gap-2"
					>
						View More
						<ChevronRightIcon className="h-4 w-4" />
					</Link>
				</div>

				{/* Articles Grid */}
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{articles.map((article) => (
						<ArticleCard key={article.id} article={article} />
					))}
				</div>

				{/* Mobile View More Button */}
				<div className="mt-8 text-center sm:hidden flex justify-center">
					<Link
						href="/blog"
						variant="secondary"
						className="inline-flex items-center gap-2"
					>
						View More
						<ChevronRightIcon className="h-4 w-4" />
					</Link>
				</div>
			</div>
		</section>
	);
}
