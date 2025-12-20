export const MOCK_PRODUCT_DATA = {
	id: "lakeview-02",
	title: "Lakeview 02 (Một Homestay) tại Hồ Cầu Đá, Sóc Sơn",
	rating: 4.9,
	reviewCount: 22,
	location: "Sóc Sơn, Hà Nội",
	description:
		"Một chốn nghỉ dưỡng bên hồ dành riêng cho bạn tại Lakeview 02, không gian không chỉ là một nơi để lưu trú, mà là nơi để bạn tìm thấy sự yên bình và riêng tư tuyệt đối.",
	price: {
		amount: "2000000",
		currencyCode: "VND",
		period: "đêm",
	},
	images: [
		{
			url: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2670&auto=format&fit=crop",
			altText: "Lakeview Exterior",
		},
		{
			url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2672&auto=format&fit=crop",
			altText: "Lake view from room",
		},
		{
			url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2670&auto=format&fit=crop",
			altText: "Bedroom",
		},
		{
			url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop",
			altText: "Bathroom",
		},
		{
			url: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=2667&auto=format&fit=crop",
			altText: "BBQ Area",
		},
	],
	amenities: {
		free: [
			{ icon: "Pool" as const, label: "Bể ngâm 6m2 sát hồ" },
			{ icon: "Speaker" as const, label: "Loa Harman Kardon" },
			{ icon: "Projector" as const, label: "Máy chiếu 100 inch" },
			{ icon: "Grill" as const, label: "Bếp nướng BBQ" },
			{ icon: "Coffee" as const, label: "Trà, cafe & nước lọc" },
			{ icon: "Cleaning" as const, label: "Dọn dẹp hàng ngày" },
		],
		facilities: [
			{ icon: "Wifi" as const, label: "Wifi tốc độ cao" },
			{ icon: "AC" as const, label: "Điều hòa 2 chiều" },
			{ icon: "Fridge" as const, label: "Tủ lạnh mini" },
			{ icon: "HairDryer" as const, label: "Máy sấy tóc" },
			{ icon: "HotWater" as const, label: "Bình nóng lạnh" },
		],
	},
	extraServices: [
		{ name: "Check-in sớm / Check-out muộn", price: "200.000₫/giờ" },
		{ name: "Than nướng BBQ", price: "20.000₫/kg" },
		{ name: "Đá lạnh", price: "20.000₫/túi" },
		{ name: "Rửa bát", price: "300.000₫/lần" },
		{ name: "Trang trí sinh nhật", price: "Từ 1.200.000₫" },
	],
	houseRules: [
		{ label: "Check-in", value: "14:00" },
		{ label: "Check-out", value: "12:00" },
		{ label: "Số khách tiêu chuẩn", value: "2 người lớn & 1 trẻ em (<6t)" },
		{ label: "Phụ thu khách thêm", value: "200.000₫/người" },
	],
	reviews: [
		{
			author: "Đan Phượng",
			date: "10/12/2025",
			rating: 5,
			content:
				"Home riêng tư, decor xinh ấm cúng. Bể ngâm với bồn tắm view hồ chill lắm ạ. Siêu mê home của Một.",
		},
		{
			author: "Hoàng Thị Thanh Nhàn",
			date: "17/09/2025",
			rating: 5,
			content:
				"Home đẹp chill thích hợp cho ai muốn tránh xa xô bồ ồn ã. Chị quản gia nhẹ nhàng nhiệt tình. Dịch vụ phòng ăn uống dọn dẹp đều ổn cả.",
		},
		{
			author: "Văn Quốc Dũng",
			date: "04/10/2025",
			rating: 4,
			content:
				"Phòng đẹp, thơm, đồ ăn được. Phòng hơi bé, không có tủ cất nên hơi bất tiện, view gần giống hình.",
		},
	],
	nearby: [
		"Minh Trí Golf",
		"Hồ Đồng Đò",
		"Thiên Phú Lâm",
		"Quán cafe bên rừng",
		"Việt Phủ Thành Chương",
	],
};
