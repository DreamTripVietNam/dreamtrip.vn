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
	capacity: {
		type: "Villa",
		bedrooms: 3,
		bathrooms: 4,
		kitchens: 1,
		beds: 5,
		maxGuests: 15,
		standardGuests: 10,
		area: 300,
	},
	images: [
		{
			url: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2670&auto=format&fit=crop",
			altText: "Bể bơi - Toàn cảnh bể bơi vô cực",
		},
		{
			url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2672&auto=format&fit=crop",
			altText: "View - Cảnh hồ lúc hoàng hôn",
		},
		{
			url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2670&auto=format&fit=crop",
			altText: "Phòng ngủ - Giường King size view hồ",
		},
		{
			url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop",
			altText: "Phòng tắm - Bồn tắm nằm thư giãn",
		},
		{
			url: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=2667&auto=format&fit=crop",
			altText: "Tiện ích - Khu vực nướng BBQ ngoài trời",
		},
		{
			url: "https://images.unsplash.com/photo-1616594039964-40891a91395b?q=80&w=2670&auto=format&fit=crop",
			altText: "Phòng khách - Sofa êm ái và TV màn hình lớn",
		},
		{
			url: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2670&auto=format&fit=crop",
			altText: "Phòng bếp - Đầy đủ tiện nghi hiện đại",
		},
		{
			url: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2670&auto=format&fit=crop",
			altText: "Phòng khách - Không gian mở thoáng đãng",
		},
		{
			url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2670&auto=format&fit=crop",
			altText: "Lối vào - Sân vườn xanh mát",
		},
		{
			url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2670&auto=format&fit=crop",
			altText: "Bể bơi - Góc chill bên bể bơi",
		},
		{
			url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2670&auto=format&fit=crop",
			altText: "Phòng ngủ - Phòng ngủ phụ ấm cúng",
		},
		{
			url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2670&auto=format&fit=crop",
			altText: "Tiện ích - Phòng đọc sách yên tĩnh",
		},
		{
			url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2670&auto=format&fit=crop",
			altText: "Sân vườn - Bàn trà chiều",
		},
		{
			url: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=2670&auto=format&fit=crop",
			altText: "Phòng tắm - Vòi sen đứng hiện đại",
		},
		{
			url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop",
			altText: "Phòng ngủ - Ban công thoáng mát",
		},
		{
			url: "https://images.unsplash.com/photo-1595246140625-573b715d11fa?q=80&w=2670&auto=format&fit=crop",
			altText: "Phòng khách - Góc đọc sách yên tĩnh",
		},
		{
			url: "https://images.unsplash.com/photo-1572331165267-854da2b00cc6?q=80&w=2670&auto=format&fit=crop",
			altText: "Bể bơi - Tiệc nhẹ bên hồ bơi",
		},
		{
			url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2670&auto=format&fit=crop",
			altText: "Ngoại cảnh - Vườn hoa rực rỡ",
		},
		{
			url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2670&auto=format&fit=crop",
			altText: "Ngoại cảnh - Lối đi dạo quanh hồ",
		},
		{
			url: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=2670&auto=format&fit=crop",
			altText: "Phòng bếp - Bàn ăn gia đình ấm cúng",
		},
	],
	amenities: {
		free: [
			{ icon: "Pool" as const, label: "Bể ngâm 6m2" },
			{ icon: "Speaker" as const, label: "Loa Karaoke" },
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
		{ label: "Nhận phòng (check-in)", value: "14:00" },
		{ label: "Trả phòng (check-out)", value: "12:00" },
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

export async function getMockProduct() {
	return MOCK_PRODUCT_DATA;
}
