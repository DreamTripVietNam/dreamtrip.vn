"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
	IconAirConditioning,
	IconBath,
	IconBed,
	IconChefHat,
	IconCoffee,
	IconDeviceProjector,
	IconDeviceSpeaker,
	IconDeviceTv,
	IconDroplet,
	IconFlame,
	IconFridge,
	IconHome,
	IconPool,
	IconRuler,
	IconSparkles,
	IconSpray,
	IconUsers,
	IconWifi,
	IconWind,
} from "@tabler/icons-react";
import type { Product } from "lib/shopify/types";
import { ChevronRight, MapPin, Sparkles, X } from "lucide-react";
import { useState } from "react";

// Type-safe icon mapping
const IconMap: Record<string, any> = {
	Wifi: IconWifi,
	AC: IconAirConditioning,
	Fridge: IconFridge,
	Pool: IconPool,
	Speaker: IconDeviceSpeaker,
	Projector: IconDeviceProjector,
	TV: IconDeviceTv,
	Grill: IconFlame,
	Cleaning: IconSpray,
	Coffee: IconCoffee,
	HairDryer: IconWind,
	HotWater: IconDroplet,
};

function AmenityItem({ icon, label }: { icon: string; label: string }) {
	const Icon = IconMap[icon] || IconSparkles;
	return (
		<div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
			<Icon className="w-6 h-6 text-neutral-600 stroke-1.5" />
			<span className="text-sm font-medium text-neutral-800">{label}</span>
		</div>
	);
}

function CapacityItem({
	icon: Icon,
	label,
	value,
}: {
	icon: any;
	label: string;
	value: string | number;
}) {
	return (
		<div className="flex flex-col gap-1 p-3 border border-neutral-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
			<div className="flex items-center gap-2 text-neutral-500 mb-1">
				<Icon className="w-5 h-5 stroke-1.5" />
				<span className="text-xs uppercase tracking-wide font-medium">
					{label}
				</span>
			</div>
			<span className="text-sm font-semibold text-neutral-900">{value}</span>
		</div>
	);
}

export function ProductInfo({ product }: { product: Product }) {
	const amenities = product.amenities || { free: [], facilities: [] };
	const houseRules = product.houseRules || [];
	const extraServices = product.extraServices || [];
	const capacity = product.capacity || {
		type: "",
		bedrooms: 0,
		bathrooms: 0,
		kitchens: 0,
		beds: 0,
		maxGuests: 0,
		standardGuests: 0,
		area: 0,
	};
	const nearby = product.nearby || [];
	const { description } = product;
	const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

	const allAmenities = [...amenities.free, ...amenities.facilities];

	// Use location from product if available
	const location = product.location || "";

	return (
		<div className="flex flex-col gap-10">
			{/* Description */}
			<section>
				<h2 className="text-2xl font-semibold mb-4 text-neutral-900 ">
					Giới thiệu
				</h2>
				<p className="text-neutral-600 leading-relaxed text-base line-clamp-3 mb-2">
					{description}
				</p>
				<button
					type="button"
					onClick={() => setIsDescriptionOpen(true)}
					className="flex items-center gap-1 font-medium underline underline-offset-4 text-neutral-500 hover:text-neutral-700 decoration-neutral-300 hover:decoration-neutral-900 transition-all"
				>
					Hiển thị thêm <ChevronRight className="w-4 h-4" />
				</button>

				<Dialog.Root
					open={isDescriptionOpen}
					onOpenChange={setIsDescriptionOpen}
				>
					<Dialog.Portal>
						<Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
						<Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
							<div
								className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200"
								role="dialog"
								aria-modal="true"
							>
								{/* Modal Header */}
								<div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100">
									<Dialog.Title className="text-xl font-bold font-barlow">
										Chi tiết chỗ ở
									</Dialog.Title>
									<Dialog.Close asChild>
										<button
											type="button"
											className="p-2 -mr-2 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors"
										>
											<X className="w-5 h-5" />
										</button>
									</Dialog.Close>
								</div>

								<VisuallyHidden.Root>
									<Dialog.Description>
										Mô tả chi tiết về chỗ ở
									</Dialog.Description>
								</VisuallyHidden.Root>

								{/* Modal Content */}
								<div className="p-6 overflow-y-auto custom-scrollbar">
									<div className="prose prose-neutral max-w-none">
										<p className="text-neutral-600 leading-relaxed whitespace-pre-line text-base">
											{description}
										</p>
									</div>
								</div>
							</div>
						</Dialog.Content>
					</Dialog.Portal>
				</Dialog.Root>
			</section>

			{/* Capacity Info */}
			<section>
				<h2 className="text-2xl font-semibold mb-4 text-neutral-900">
					Thông tin căn
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
					<CapacityItem
						icon={IconHome}
						label="Loại căn"
						value={capacity.type}
					/>
					<CapacityItem
						icon={IconRuler}
						label="Diện tích"
						value={`${capacity.area} m²`}
					/>
					<CapacityItem
						icon={IconUsers}
						label="Sức chứa"
						value={`${capacity.standardGuests} - ${capacity.maxGuests} người`}
					/>
					<CapacityItem
						icon={IconBed}
						label="Phòng ngủ"
						value={`${capacity.bedrooms} PN (${capacity.beds} giường)`}
					/>
					<CapacityItem
						icon={IconBath}
						label="Phòng tắm"
						value={`${capacity.bathrooms} phòng`}
					/>
					<CapacityItem
						icon={IconChefHat}
						label="Phòng bếp"
						value={`${capacity.kitchens} phòng`}
					/>
				</div>
			</section>

			{/* Amenities */}
			<section>
				<h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
					<span>Nơi này có gì</span>
					<span className="text-sm font-normal text-neutral-500 bg-neutral-100 px-2 py-1 rounded-full">
						{allAmenities.length} tiện ích
					</span>
				</h2>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
					{allAmenities.map((item, idx: number) => (
						<AmenityItem key={idx} {...item} />
					))}
				</div>
			</section>

			{/* House Rules */}
			<section>
				<h2 className="text-2xl font-semibold mb-4">Nội quy chỗ ở</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{houseRules.map((rule, idx: number) => (
						<div
							key={idx}
							className="border border-neutral-200  p-4 rounded-xl"
						>
							<span className="block text-xs text-neutral-500 mb-1 uppercase tracking-wide">
								{rule.label}
							</span>
							<span className="font-medium text-neutral-900 ">
								{rule.value}
							</span>
						</div>
					))}
				</div>
			</section>

			{/* Extra Services */}
			<section className="bg-orange-50  p-6 rounded-2xl border border-orange-100 ">
				<h2 className="text-xl font-semibold mb-4 text-orange-800  flex items-center gap-2">
					<Sparkles className="w-5 h-5" />
					Dịch vụ phát sinh
				</h2>
				<ul className="space-y-3">
					{extraServices.map((service, idx: number) => (
						<li key={idx} className="flex justify-between items-center text-sm">
							<span className="text-neutral-700 ">{service.name}</span>
							<span className="font-semibold text-neutral-900 ">
								{service.price}
							</span>
						</li>
					))}
				</ul>
			</section>

			{/* Location */}
			<section>
				<h2 className="text-2xl font-semibold mb-4">Nơi bạn sẽ đến</h2>
				<div className="bg-neutral-100 rounded-2xl overflow-hidden mb-4 relative shadow-sm border border-neutral-200 aspect-video">
					<iframe
						title="Location"
						src={`https://maps.google.com/maps?q=${encodeURIComponent(location)}&output=embed`}
						className="size-full"
					/>
				</div>
				<a
					href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
						location,
					)}`}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline mb-6"
				>
					<MapPin className="w-4 h-4" />
					Chỉ đường trên Google Maps
				</a>
				<h3 className="text-sm font-semibold text-neutral-900 mb-2">
					Lân cận:
				</h3>
				<div className="flex flex-wrap gap-2">
					{nearby.map((place, idx) => (
						<div
							key={idx}
							className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-xs font-medium hover:bg-neutral-50 transition-colors cursor-default"
						>
							<MapPin className="w-3.5 h-3.5 text-red-500" />
							<span className="text-neutral-900">{place.name}</span>
							<span className="text-neutral-400 pl-2 border-l border-neutral-200">
								{place.distance}
							</span>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
