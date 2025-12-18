import type { Metadata } from "next";
import { NewsTips } from "sections/news-tips";

export const metadata: Metadata = {
	title: "Blog - Tin tức & Mẹo du lịch | DreamTrip",
	description:
		"Khám phá các bài viết, mẹo và hướng dẫn du lịch hữu ích từ DreamTrip. Cập nhật tin tức du lịch mới nhất và kinh nghiệm từ cộng đồng.",
	openGraph: {
		type: "website",
	},
};

export default function BlogPage() {
	return (
		<>
			<div className="bg-linear-to-b from-blue-50 to-white py-16">
				<div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
						Tin tức, Mẹo & Hướng dẫn Du lịch
					</h1>
					<p className="text-xl text-neutral-600">
						Khám phá những điểm đến mới, mẹo du lịch và kinh nghiệm từ cộng đồng
						du khách
					</p>
				</div>
			</div>
			<NewsTips />
		</>
	);
}
