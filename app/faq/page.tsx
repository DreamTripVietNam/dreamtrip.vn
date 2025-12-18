import type { Metadata } from "next";
import { FAQs } from "sections/faqs";

export const metadata: Metadata = {
	title: "Câu hỏi thường gặp - DreamTrip",
	description:
		"Tìm câu trả lời cho những câu hỏi phổ biến nhất về dịch vụ đặt phòng và du lịch của DreamTrip",
	openGraph: {
		type: "website",
	},
};

export default function FAQPage() {
	return (
		<>
			<div className="bg-linear-to-b from-blue-50 to-white py-16">
				<div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
					<h1 className="mb-4 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
						Câu hỏi thường gặp
					</h1>
					<p className="text-xl text-neutral-600">
						Tất cả những gì bạn cần biết về DreamTrip
					</p>
				</div>
			</div>
			<FAQs />
		</>
	);
}
