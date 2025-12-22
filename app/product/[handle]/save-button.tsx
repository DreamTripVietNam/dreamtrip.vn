"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface SaveButtonProps {
	productHandle: string;
}

export function SaveButton({ productHandle }: SaveButtonProps) {
	const [isSaved, setIsSaved] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const savedProducts = JSON.parse(
			localStorage.getItem("saved_products") || "[]",
		);
		setIsSaved(savedProducts.includes(productHandle));
	}, [productHandle]);

	const toggleSave = () => {
		const savedProducts = JSON.parse(
			localStorage.getItem("saved_products") || "[]",
		);

		if (isSaved) {
			const newSavedProducts = savedProducts.filter(
				(handle: string) => handle !== productHandle,
			);
			localStorage.setItem("saved_products", JSON.stringify(newSavedProducts));
			setIsSaved(false);
			toast.success("Đã xóa khỏi danh sách yêu thích");
		} else {
			savedProducts.push(productHandle);
			localStorage.setItem("saved_products", JSON.stringify(savedProducts));
			setIsSaved(true);
			toast.success("Đã lưu vào danh sách yêu thích");
		}
	};

	// Prevent hydration mismatch
	if (!mounted) {
		return (
			<button
				type="button"
				className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-neutral-100 transition-colors text-sm font-medium"
			>
				<Heart className="w-4 h-4" />
				Lưu
			</button>
		);
	}

	return (
		<button
			type="button"
			onClick={toggleSave}
			className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-neutral-100 transition-colors text-sm font-medium group"
		>
			<Heart
				className={`w-4 h-4 transition-colors ${
					isSaved ? "fill-red-500 text-red-500" : "text-gray-900"
				}`}
			/>
			<span>{isSaved ? "Đã lưu" : "Lưu"}</span>
		</button>
	);
}
