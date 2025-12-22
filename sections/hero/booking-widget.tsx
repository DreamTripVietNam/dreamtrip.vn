"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useState } from "react";
import { DatePicker } from "./date-picker";
import { GuestSelector } from "./guest-selector";
import { LocationSelector } from "./location-selector";
import { TabNavigation } from "./tab-navigation";
import type { BookingState } from "./types";

export function BookingWidget({ className = "" }: { className?: string }) {
	const [bookingData, setBookingData] = useState<BookingState>({
		activeTab: "tours",
		location: null,
		checkIn: null,
		checkOut: null,
		adults: 2,
		children: 2,
	});

	const handleSearch = () => {
		// Handle search logic here - could integrate with router or API
		console.log("Booking search:", bookingData);
	};

	const updateBookingData = <K extends keyof BookingState>(
		key: K,
		value: BookingState[K],
	) => {
		setBookingData((prev) => ({ ...prev, [key]: value }));
	};

	return (
		<div className={clsx("rounded-2xl bg-white p-6 shadow-xl", className)}>
			{/* Tab Navigation */}
			<div className="mb-6">
				<TabNavigation
					activeTab={bookingData.activeTab}
					onTabChange={(tab) => updateBookingData("activeTab", tab)}
				/>
			</div>

			{/* Form Fields */}
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
				{/* Location */}
				<div className="lg:col-span-1">
					<LocationSelector
						value={bookingData.location}
						onChange={(location) => updateBookingData("location", location)}
					/>
				</div>

				{/* Check In */}
				<div className="lg:col-span-1">
					<DatePicker
						value={bookingData.checkIn}
						onChange={(date) => updateBookingData("checkIn", date)}
						placeholder="Ngày đến"
						minDate={new Date()}
					/>
				</div>

				{/* Check Out */}
				<div className="lg:col-span-1">
					<DatePicker
						value={bookingData.checkOut}
						onChange={(date) => updateBookingData("checkOut", date)}
						placeholder="Ngày đi"
						minDate={bookingData.checkIn || new Date()}
					/>
				</div>

				{/* Guest Selector */}
				<div className="lg:col-span-1">
					<GuestSelector
						adults={bookingData.adults}
						childrenCount={bookingData.children}
						onAdultsChange={(count) => updateBookingData("adults", count)}
						onChildrenChange={(count) => updateBookingData("children", count)}
					/>
				</div>

				{/* Search Button */}
				<div className="flex items-end lg:col-span-1">
					<button
						type="button"
						onClick={handleSearch}
						className="flex w-full items-center justify-center bg-linear-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-rose-200 transition-all"
					>
						<MagnifyingGlassIcon className="h-5 w-5 mr-2" aria-hidden="true" />
						Tìm kiếm
					</button>
				</div>
			</div>

			{/* Help Text */}
			<div className="mt-4 text-right">
				<span className="text-sm text-gray-500">Cần hỗ trợ?</span>
			</div>
		</div>
	);
}
