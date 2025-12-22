"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
	Facebook,
	Instagram,
	Link as LinkIcon,
	Share2,
	Twitter,
} from "lucide-react";
import { toast } from "sonner";

export function ShareButton() {
	const handleCopyLink = () => {
		const url = window.location.href;
		navigator.clipboard.writeText(url);
		toast.success("Đã sao chép liên kết!");
	};

	const handleShareSocial = (
		platform: "facebook" | "twitter" | "instagram",
	) => {
		const url = encodeURIComponent(window.location.href);
		const text = encodeURIComponent("Check out this amazing place!");
		let shareUrl = "";

		switch (platform) {
			case "facebook":
				shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
				break;
			case "twitter":
				shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
				break;
			case "instagram":
				handleCopyLink();
				window.open("https://www.instagram.com/", "_blank");
				return;
		}

		if (shareUrl) {
			window.open(shareUrl, "_blank", "width=600,height=400");
		}
	};

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<button
					type="button"
					className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-neutral-100 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-neutral-200"
				>
					<Share2 className="w-4 h-4" />
					Chia sẻ
				</button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content
					align="end"
					className="min-w-[200px] bg-white rounded-xl shadow-lg border border-gray-100 p-1 z-50 animate-in fade-in zoom-in-95 duration-200"
					sideOffset={5}
				>
					<DropdownMenu.Item
						onClick={handleCopyLink}
						className="flex items-center gap-2 px-2 py-2 text-sm text-gray-700 rounded-lg outline-none hover:bg-neutral-100 cursor-pointer transition-colors"
					>
						<LinkIcon className="w-4 h-4 text-gray-500" />
						Sao chép liên kết
					</DropdownMenu.Item>

					<DropdownMenu.Separator className="h-px bg-gray-100 my-1" />

					<DropdownMenu.Item
						onClick={() => handleShareSocial("facebook")}
						className="flex items-center gap-2 px-2 py-2 text-sm text-gray-700 rounded-lg outline-none hover:bg-blue-50 cursor-pointer transition-colors"
					>
						<Facebook className="w-4 h-4 text-blue-600" />
						Facebook
					</DropdownMenu.Item>

					<DropdownMenu.Item
						onClick={() => handleShareSocial("instagram")}
						className="flex items-center gap-2 px-2 py-2 text-sm text-gray-700 rounded-lg outline-none hover:bg-pink-50 cursor-pointer transition-colors"
					>
						<Instagram className="w-4 h-4 text-pink-600" />
						Instagram
					</DropdownMenu.Item>

					<DropdownMenu.Item
						onClick={() => handleShareSocial("twitter")}
						className="flex items-center gap-2 px-2 py-2 text-sm text-gray-700 rounded-lg outline-none hover:bg-gray-50 cursor-pointer transition-colors"
					>
						<Twitter className="w-4 h-4 text-gray-900" />X (Twitter)
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
}
