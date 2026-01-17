export type Review = {
	id: string;
	author: {
		name: string;
		avatar: string;
	};
	rating: number;
	date: string;
	content: string;
	images?: string[];
};

export type ReviewStats = {
	averageRating: number;
	totalReviews: number;
	breakdown: {
		cleanliness: number;
		accuracy: number;
		communication: number;
		location: number;
		checkIn: number;
		value: number;
	};
};

const COMMENTS = [
	"Kỳ nghỉ tuyệt vời! Căn homestay nằm ngay sát hồ, không khí trong lành và yên tĩnh tuyệt đối. Sáng sớm dậy ngắm bình minh trên hồ thật sự là trải nghiệm đáng nhớ. Phòng ốc sạch sẽ, decor có gu, rất ấm cúng. Chủ nhà chu đáo, chuẩn bị sẵn cả than nướng BBQ. Chắc chắn sẽ quay lại cùng gia đình.",
	"Mọi thứ đều ổn, từ vị trí đến tiện nghi. Bể bơi sạch, view đẹp, bọn trẻ con nhà mình chơi cả ngày không chán. Tuy nhiên, đường vào hơi khó tìm một chút nếu đi buổi tối. Nhưng bù lại không gian rất riêng tư và chill. Đồ ăn mình đặt của homestay cũng khá ngon và đầy đặn.",
	"Homestay siêu xinh, góc nào lên hình cũng đẹp. Nhóm mình đi 10 người mà vẫn thấy rộng rãi thoải mái. Phòng bếp đầy đủ dụng cụ nấu nướng. Điểm cộng lớn nhất là sự nhiệt tình của anh chị quản gia, hỗ trợ bọn mình rất nhiều. Một địa điểm lý tưởng để 'trốn' khỏi khói bụi thành phố.",
	"Thất vọng một chút về wifi buổi tối hơi chập chờn, nhưng có lẽ do khu vực này sóng yếu chung. Còn lại thì không có gì để chê. Giường êm, chăn ga thơm tho sạch sẽ. Khu vực nướng BBQ ngoài trời rất thoáng, view thẳng ra hồ. Giá cả hợp lý so với chất lượng dịch vụ.",
	"Không gian xanh mát, nhiều cây cối nên rất thư giãn. Phòng ốc được dọn dẹp kỹ càng trước khi khách đến. Mình thích nhất là phòng tắm có bồn ngâm view vườn cực chill. Sẽ giới thiệu cho bạn bè đến đây.",
	"Trải nghiệm 10/10! Từ lúc đặt phòng đến khi check-out đều được support rất nhanh. Homestay có cả máy chiếu và loa xịn, tối xem phim, hát karaoke cực vui. Vị trí gần nhiều điểm tham quan như đền Gióng, Việt Phủ Thành Chương nên tiện kết hợp đi chơi.",
	"Một nơi chữa lành đúng nghĩa. Yên tĩnh, nhẹ nhàng. Sáng thức dậy nghe tiếng chim hót, uống ly cafe bên hồ cảm giác thật bình yên. Nội thất trong nhà đa phần là gỗ, tạo cảm giác mộc mạc nhưng vẫn sang trọng. Rất đáng tiền.",
	"Phòng đẹp như ảnh, thậm chí ở ngoài còn đẹp hơn. Không gian rộng, thoáng đãng. Bể bơi vô cực là điểm nhấn, nước sạch và không có mùi clo nồng. Các bạn nhân viên dọn dẹp hàng ngày rất sạch sẽ. Tuyệt vời!",
	"Chỗ ở tiện nghi, hiện đại. Mình ấn tượng với dàn âm thanh và hệ thống đèn của căn. Nhóm mình tổ chức tiệc sinh nhật ở đây rất vui. Chỉ có một điểm trừ nhỏ là tủ lạnh hơi bé so với sức chứa 15 người, phải mua thêm đá bên ngoài.",
	"Rất thích cách bài trí của căn nhà, tinh tế và gọn gàng. Khoảng sân vườn rộng rãi, tối đốt lửa trại nướng khoai bá cháy. Cảm ơn chủ nhà đã tạo ra một không gian tuyệt vời như thế này.",
];

const AUTHORS = [
	"Nguyễn Văn An",
	"Trần Thị Bích",
	"Lê Hoàng Cường",
	"Phạm Minh Đức",
	"Hoàng Thu Trang",
	"Vũ Ngọc Hà",
	"Đặng Tuấn Kiệt",
	"Bùi Phương Linh",
	"Đỗ Đức Minh",
	"Hồ Bảo Ngọc",
	"Ngô Thanh Sơn",
	"Dương Thùy Tiên",
	"Lý Hải Đăng",
];

function getRandomInt(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomItem<T>(arr: T[]): T {
	return arr[Math.floor(Math.random() * arr.length)] as T;
}

export function generateMockReviews(count = 20): {
	stats: ReviewStats;
	reviews: Review[];
} {
	const reviews: Review[] = Array.from({ length: count }).map((_, i) => {
		const name = getRandomItem(AUTHORS);
		return {
			id: `review-${i}`,
			author: {
				name,
				avatar: `https://api.dicebear.com/9.x/notionists/svg?seed=${name}&backgroundColor=e5e7eb,fdba74`,
			},
			rating: getRandomInt(3, 5),
			date: `${getRandomInt(1, 28)}/${getRandomInt(1, 12)}/2025`,
			content: getRandomItem(COMMENTS),
			images:
				Math.random() > 0.8
					? [
							"https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&q=80",
						]
					: undefined,
		};
	});

	const totalRating = reviews.reduce((acc, r) => acc + r.rating, 0);
	const averageRating = parseFloat((totalRating / count).toFixed(1));

	return {
		stats: {
			averageRating,
			totalReviews: count + getRandomInt(50, 100), // Simulate older reviews not returned
			breakdown: {
				cleanliness: parseFloat((4 + Math.random()).toFixed(1)),
				accuracy: parseFloat((4 + Math.random()).toFixed(1)),
				communication: parseFloat((4 + Math.random()).toFixed(1)),
				location: parseFloat((4 + Math.random()).toFixed(1)),
				checkIn: parseFloat((4 + Math.random()).toFixed(1)),
				value: parseFloat((4 + Math.random()).toFixed(1)),
			},
		},
		reviews,
	};
}
