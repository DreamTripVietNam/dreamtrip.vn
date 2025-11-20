import {
	CalendarIcon,
	ChatBubbleLeftIcon,
	ClockIcon,
	UserIcon,
} from "@heroicons/react/24/outline";
import Footer from "components/layout/footer";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// This would typically come from a CMS or database
const blogPosts: Record<string, any> = {
	"hidden-gems-phu-quoc": {
		title: "Khám phá những viên ngọc ẩn: 10 điểm đến ngoài lối mòn ở Phú Quốc",
		excerpt:
			"Tìm hiểu những bãi biển hoang sơ và địa điểm bí mật mà ít du khách biết đến trên đảo ngọc Phú Quốc",
		category: "Khám phá",
		image:
			"https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80",
		author: {
			name: "Minh Anh",
			avatar: "https://i.pravatar.cc/150?img=1",
		},
		publishedAt: "18 Tháng 9, 2024",
		readingTime: 6,
		commentsCount: 58,
		content: `
			<p>Phú Quốc không chỉ nổi tiếng với những bãi biển đẹp như Bãi Sao, Bãi Dài mà còn ẩn chứa vô số điểm đến tuyệt đẹp chưa được nhiều du khách biết đến.</p>
			
			<h2>1. Bãi Thơm - Thiên đường yên bình</h2>
			<p>Nằm ở phía nam đảo, Bãi Thơm là một trong những bãi biển đẹp nhất nhưng vẫn giữ được nét hoang sơ. Nước biển trong xanh, cát trắng mịn và ít người qua lại khiến đây trở thành điểm đến lý tưởng cho những ai muốn tìm sự yên bình.</p>
			
			<h2>2. Làng chài Rạch Vẹm</h2>
			<p>Đây là một làng chài nhỏ nằm ở phía đông bắc đảo. Bạn có thể trải nghiệm cuộc sống của ngư dân địa phương, thưởng thức hải sản tươi sống và chứng kiến hoàng hôn tuyệt đẹp.</p>
			
			<h2>3. Suối Tranh</h2>
			<p>Một thác nước nhỏ nằm giữa rừng nhiệt đới, Suối Tranh là điểm dừng chân lý tưởng sau những ngày tắm biển. Nước suối mát lạnh, trong veo và khung cảnh thiên nhiên hoang sơ sẽ mang đến trải nghiệm khó quên.</p>
			
			<p>Hãy dành thời gian khám phá những địa điểm này trong chuyến đi tới Phú Quốc của bạn. Chúng tôi tin rằng bạn sẽ có những trải nghiệm đáng nhớ!</p>
		`,
	},
	"budget-travel-hacks": {
		title: "10 bí quyết du lịch tiết kiệm cho những người thích khám phá",
		excerpt:
			"Học cách tận dụng tối đa ngân sách du lịch của bạn với những mẹo và chiến lược đã được kiểm chứng",
		category: "Du lịch",
		image:
			"https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80",
		author: {
			name: "Minh Anh",
			avatar: "https://i.pravatar.cc/150?img=1",
		},
		publishedAt: "18 Tháng 9, 2024",
		readingTime: 8,
		commentsCount: 38,
		content: `
			<p>Du lịch không nhất thiết phải tốn kém. Với những mẹo dưới đây, bạn có thể tận hưởng những chuyến đi tuyệt vời mà vẫn tiết kiệm được ngân sách.</p>
			
			<h2>1. Đặt vé sớm và linh hoạt thời gian</h2>
			<p>Đặt vé máy bay và khách sạn sớm thường giúp bạn tiết kiệm đáng kể. Hãy linh hoạt với ngày đi và về để tìm được giá tốt nhất.</p>
			
			<h2>2. Sử dụng phương tiện công cộng</h2>
			<p>Thay vì thuê xe hoặc đi taxi, hãy thử sử dụng xe buýt, tàu điện hoặc xe đạp để khám phá thành phố.</p>
		`,
	},
	"sapa-trekking-guide": {
		title: "Hướng dẫn trekking Sa Pa: Chinh phục ruộng bậc thang mùa lúa chín",
		excerpt:
			"Cẩm nang chi tiết về các cung đường trekking đẹp nhất Sa Pa và kinh nghiệm chinh phục núi rừng Tây Bắc",
		category: "Khám phá",
		image:
			"https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&q=80",
		author: {
			name: "Minh Anh",
			avatar: "https://i.pravatar.cc/150?img=1",
		},
		publishedAt: "18 Tháng 9, 2024",
		readingTime: 6,
		commentsCount: 38,
		content: `
			<p>Sa Pa mùa lúa chín là thời điểm đẹp nhất trong năm để trekking và chiêm ngưỡng vẻ đẹp của ruộng bậc thang.</p>
			
			<h2>Thời điểm lý tưởng</h2>
			<p>Mùa lúa chín ở Sa Pa thường rơi vào tháng 9-10. Đây là lúc ruộng bậc thang chuyển sang màu vàng óng ánh, tạo nên khung cảnh như tranh vẽ.</p>
		`,
	},
};

type BlogPostPageProps = {
	params: Promise<{ slug: string }>;
};

export async function generateMetadata({
	params,
}: BlogPostPageProps): Promise<Metadata> {
	const { slug } = await params;
	const post = blogPosts[slug];

	if (!post) {
		return {
			title: "Bài viết không tồn tại",
		};
	}

	return {
		title: `${post.title} | DreamTrip Blog`,
		description: post.excerpt,
		openGraph: {
			type: "article",
			images: [post.image],
		},
	};
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
	const { slug } = await params;
	const post = blogPosts[slug];

	if (!post) {
		notFound();
	}

	return (
		<>
			{/* Hero Section */}
			<article className="bg-white">
				<div className="relative h-96 w-full lg:h-[500px]">
					<Image
						src={post.image}
						alt={post.title}
						fill
						className="object-cover"
						priority
					/>
					<div className="absolute inset-0 bg-black/40" />

					{/* Title Overlay */}
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
							<span className="mb-4 inline-block rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
								{post.category}
							</span>
							<h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
								{post.title}
							</h1>

							{/* Meta Info */}
							<div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/90">
								<div className="flex items-center gap-2">
									<UserIcon className="h-5 w-5" />
									<span>{post.author.name}</span>
								</div>
								<div className="flex items-center gap-2">
									<CalendarIcon className="h-5 w-5" />
									<time>{post.publishedAt}</time>
								</div>
								<div className="flex items-center gap-2">
									<ClockIcon className="h-5 w-5" />
									<span>{post.readingTime} phút đọc</span>
								</div>
								<div className="flex items-center gap-2">
									<ChatBubbleLeftIcon className="h-5 w-5" />
									<span>{post.commentsCount} bình luận</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Content */}
				<div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
					{/* Author */}
					<div className="mb-8 flex items-center gap-4 border-b border-neutral-200 pb-8">
						<Image
							src={post.author.avatar}
							alt={post.author.name}
							width={64}
							height={64}
							className="h-16 w-16 rounded-full object-cover"
						/>
						<div>
							<p className="text-sm text-neutral-500">Tác giả</p>
							<p className="text-lg font-semibold text-neutral-900">
								{post.author.name}
							</p>
						</div>
					</div>
					{/* Article Content */}
					<div
						className="prose prose-lg prose-neutral max-w-none prose-headings:font-bold prose-headings:text-neutral-900 prose-p:text-neutral-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>{" "}
					{/* Back to Blog */}
					<div className="mt-12 border-t border-neutral-200 pt-8">
						<Link
							href="/blog"
							className="inline-flex items-center gap-2 text-blue-600 transition-colors hover:text-blue-700"
						>
							← Quay lại Blog
						</Link>
					</div>
				</div>
			</article>

			<Footer />
		</>
	);
}
