import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { clsx } from "clsx";
import Link from "components/link";
import { FAQItem } from "./faq-item";
import type { FAQ, FAQsProps } from "./types";

// Most asked questions
const defaultFAQs: FAQ[] = [
	{
		id: "how-to-reserve",
		question: "Làm thế nào để đặt phòng?",
		answer:
			"Để đặt phòng, bạn chỉ cần tìm kiếm địa điểm mong muốn, chọn ngày check-in và check-out, số lượng khách. Sau đó, chọn phòng phù hợp và điền thông tin của bạn. Bạn có thể thanh toán trực tuyến hoặc tại chỗ tùy theo chính sách của từng chỗ ở. Sau khi hoàn tất, bạn sẽ nhận được email xác nhận đặt phòng.",
	},
	{
		id: "check-legit",
		question: "Làm sao để kiểm tra độ uy tín của chỗ ở?",
		answer:
			"Mỗi chỗ ở trên DreamTrip đều được xác minh bởi đội ngũ của chúng tôi. Bạn có thể kiểm tra đánh giá từ khách hàng đã từng ở, xem hình ảnh thực tế, và đọc các chính sách của chủ nhà. Chúng tôi cũng có bộ phận hỗ trợ 24/7 để giải đáp mọi thắc mắc của bạn về chỗ ở.",
	},
	{
		id: "payment-methods",
		question: "Các hình thức thanh toán được chấp nhận?",
		answer:
			"Chúng tôi chấp nhận nhiều hình thức thanh toán linh hoạt: thẻ tín dụng/ghi nợ (Visa, Mastercard, JCB), ví điện tử (MoMo, ZaloPay, VNPay), chuyển khoản ngân hàng, và thanh toán tại chỗ. Mỗi chỗ ở có thể có chính sách thanh toán riêng, vui lòng kiểm tra trước khi đặt.",
	},
	{
		id: "refund-policy",
		question: "Chính sách hoàn tiền như thế nào?",
		answer:
			"Chính sách hoàn tiền phụ thuộc vào loại phòng và thời điểm hủy. Thông thường, bạn có thể hủy miễn phí trước 24-48 giờ trước ngày check-in. Nếu hủy sau thời hạn này, bạn có thể bị tính phí hủy. Chi tiết chính sách hủy của từng chỗ ở được ghi rõ trong trang thông tin đặt phòng.",
	},
	{
		id: "booking-confirmation",
		question: "Tôi sẽ nhận được xác nhận đặt phòng khi nào?",
		answer:
			"Sau khi hoàn tất đặt phòng và thanh toán (nếu có), bạn sẽ nhận được email xác nhận ngay lập tức. Email này bao gồm mã đặt phòng, thông tin chỗ ở, ngày check-in/check-out, và thông tin liên hệ của chủ nhà. Bạn cũng có thể xem lại thông tin đặt phòng trong tài khoản của mình.",
	},
];

export function FAQs({ faqs = defaultFAQs, className = "" }: FAQsProps) {
	return (
		<section className={clsx("bg-white py-16 lg:py-24", className)}>
			<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
						Câu hỏi thường gặp
					</h2>
					<p className="mx-auto max-w-2xl text-lg text-neutral-600">
						Tìm câu trả lời cho những câu hỏi phổ biến nhất về dịch vụ của chúng
						tôi
					</p>
				</div>

				{/* FAQs List */}
				<div className="mb-10 rounded-2xl border border-neutral-200 bg-white px-6 shadow-sm">
					{faqs.map((faq) => (
						<FAQItem key={faq.id} faq={faq} />
					))}
				</div>

				{/* CTA Button */}
				<div className="text-center flex justify-center">
					<Link href="/faq" variant="secondary">
						Xem thêm câu hỏi
						<ChevronRightIcon className="h-5 w-5" />
					</Link>
				</div>
			</div>
		</section>
	);
}
