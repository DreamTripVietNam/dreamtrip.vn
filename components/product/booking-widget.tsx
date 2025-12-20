"use client";

import {
	ChevronDownIcon,
	MinusIcon,
	PlusIcon,
	StarIcon,
} from "@heroicons/react/24/outline";
import { clsx } from "clsx";
import { addDays, differenceInDays, format } from "date-fns";
import { vi } from "date-fns/locale";
import { MOCK_PRODUCT_DATA } from "lib/mock-product-data";
import { useState } from "react";
import { type DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

// Custom styles for the calendar to match the theme
const css = `
  .rdp { --rdp-cell-size: 34px; --rdp-accent-color: #000; --rdp-background-color: #e5e7eb; margin: 0; }
  .rdp-day_selected:not([disabled]), .rdp-day_selected:focus:not([disabled]), .rdp-day_selected:active:not([disabled]), .rdp-day_selected:hover:not([disabled]) { 
    background-color: black; 
    color: white;
  }
  .dark .rdp-day_selected:not([disabled]) { 
    background-color: white; 
    color: black; 
  }
`;

export function BookingWidget() {
	const [dateRange, setDateRange] = useState<DateRange | undefined>({
		from: new Date(),
		to: addDays(new Date(), 2),
	});

	const [guests, setGuests] = useState(2);
	const [isCalendarOpen, setIsCalendarOpen] = useState(false);

	const pricePerNight = parseInt(MOCK_PRODUCT_DATA.price.amount);
	const nights =
		dateRange?.from && dateRange?.to
			? differenceInDays(dateRange.to, dateRange.from)
			: 0;
	const totalPrice = nights * pricePerNight;
	const serviceFee = totalPrice * 0.05; // 5% fee mock
	const total = totalPrice + serviceFee;

	const formatDate = (date?: Date) =>
		date ? format(date, "dd/MM/yyyy") : "Chọn ngày";

	return (
		<div className="sticky top-24 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-xl shadow-neutral-100/50 dark:shadow-none p-6 overflow-hidden">
			<style>{css}</style>

			{/* Header Price & Rating */}
			<div className="flex justify-between items-start mb-6">
				<div>
					<span className="text-2xl font-bold font-barlow">
						{new Intl.NumberFormat("vi-VN", {
							style: "currency",
							currency: "VND",
						}).format(pricePerNight)}
					</span>
					<span className="text-neutral-500 text-sm"> / đêm</span>
				</div>
				<div className="flex items-center gap-1 text-sm font-medium">
					<StarIcon className="w-4 h-4 text-black dark:text-white fill-black dark:fill-white" />
					{MOCK_PRODUCT_DATA.rating}
					<span className="text-neutral-400 underline">
						({MOCK_PRODUCT_DATA.reviewCount})
					</span>
				</div>
			</div>

			{/* Inputs */}
			<div className="border border-neutral-200 dark:border-neutral-700 rounded-xl mb-4 overflow-hidden">
				{/* Date Trigger */}
				<button
					onClick={() => setIsCalendarOpen(!isCalendarOpen)}
					className="w-full grid grid-cols-2 border-b border-neutral-200 dark:border-neutral-700 text-left"
				>
					<div className="p-3 border-r border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
						<span className="block text-[10px] uppercase font-bold text-neutral-500 tracking-wider">
							Nhận phòng
						</span>
						<span className="text-sm font-medium">
							{formatDate(dateRange?.from)}
						</span>
					</div>
					<div className="p-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
						<span className="block text-[10px] uppercase font-bold text-neutral-500 tracking-wider">
							Trả phòng
						</span>
						<span className="text-sm font-medium">
							{formatDate(dateRange?.to)}
						</span>
					</div>
				</button>

				{/* Calendar Dropdown */}
				<div
					className={clsx(
						"bg-neutral-50 dark:bg-neutral-800 overflow-hidden transition-all duration-300 ease-in-out",
						isCalendarOpen
							? "max-h-[350px] border-b border-neutral-200 dark:border-neutral-700"
							: "max-h-0",
					)}
				>
					<div className="flex justify-center p-2">
						<DayPicker
							mode="range"
							selected={dateRange}
							onSelect={setDateRange}
							numberOfMonths={1}
							locale={vi}
							modifiersClassNames={{
								selected: "font-bold",
							}}
						/>
					</div>
				</div>

				{/* Guests */}
				<div className="p-3 flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors cursor-pointer group">
					<div>
						<span className="block text-[10px] uppercase font-bold text-neutral-500 tracking-wider">
							Khách
						</span>
						<span className="text-sm font-medium">{guests} khách</span>
					</div>
					<div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
						<button
							onClick={(e) => {
								e.stopPropagation();
								setGuests(Math.max(1, guests - 1));
							}}
							className="p-1 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700"
						>
							<MinusIcon className="w-4 h-4" />
						</button>
						<button
							onClick={(e) => {
								e.stopPropagation();
								setGuests(Math.min(10, guests + 1));
							}}
							className="p-1 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700"
						>
							<PlusIcon className="w-4 h-4" />
						</button>
					</div>
					<ChevronDownIcon className="w-4 h-4 text-neutral-400 group-hover:hidden" />
				</div>
			</div>

			{/* Primary Action */}
			<button className="w-full bg-linear-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-bold py-3.5 rounded-xl mb-4 shadow-lg shadow-rose-200 dark:shadow-none transition-all hover:scale-[1.02] active:scale-[0.98]">
				Đặt phòng ngay
			</button>

			{/* Pricing Breakdown */}
			{nights > 0 && (
				<div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400 pt-2">
					<div className="flex justify-between">
						<span className="underline decoration-neutral-300">
							{new Intl.NumberFormat("vi-VN").format(pricePerNight)}₫ x {nights}{" "}
							đêm
						</span>
						<span>{new Intl.NumberFormat("vi-VN").format(totalPrice)}₫</span>
					</div>
					<div className="flex justify-between">
						<span className="underline decoration-neutral-300">
							Phí dịch vụ Dreams
						</span>
						<span>{new Intl.NumberFormat("vi-VN").format(serviceFee)}₫</span>
					</div>

					<div className="h-px bg-neutral-200 dark:bg-neutral-700 my-4" />

					<div className="flex justify-between font-bold text-lg text-neutral-900 dark:text-white">
						<span>Tổng cộng</span>
						<span>{new Intl.NumberFormat("vi-VN").format(total)}₫</span>
					</div>
				</div>
			)}
		</div>
	);
}
