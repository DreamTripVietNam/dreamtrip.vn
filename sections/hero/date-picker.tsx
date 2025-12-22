"use client";

import { format } from "date-fns";
import { CalendarDays } from "lucide-react";
import { useState } from "react";
import type { DatePickerProps } from "./types";

export function DatePicker({
	value,
	onChange,
	placeholder = "Select date",
	minDate,
}: DatePickerProps) {
	const [isOpen, setIsOpen] = useState(false);

	const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const dateValue = event.target.value;
		if (dateValue) {
			onChange(new Date(dateValue));
		} else {
			onChange(null);
		}
	};

	const formatDateForInput = (date: Date | null): string => {
		if (!date) return "";
		return format(date, "yyyy-MM-dd");
	};

	const displayDate = value ? format(value, "MM/dd/yyyy") : "";

	return (
		<div className="flex flex-col">
			<label
				className="mb-1 text-sm font-medium text-gray-700"
				htmlFor={`date-${Math.random()}`}
			>
				{placeholder.includes("In") || placeholder.includes("đến")
					? "Ngày đến"
					: "Ngày đi"}
			</label>
			<div className="relative">
				<div
					className="relative w-full cursor-pointer rounded-lg border border-gray-300 bg-white py-3 pl-3 pr-10 text-left shadow-sm focus-within:border-black focus-within:ring-1 focus-within:ring-black"
					onClick={() => setIsOpen(!isOpen)}
				>
					<div className="flex items-center">
						<CalendarDays
							className="h-5 w-5 text-gray-400"
							aria-hidden="true"
						/>
						<span className="ml-2 block truncate text-gray-900">
							{displayDate || placeholder}
						</span>
					</div>
					<input
						type="date"
						value={formatDateForInput(value)}
						onChange={handleDateChange}
						min={minDate ? formatDateForInput(minDate) : undefined}
						className="absolute inset-0 w-full cursor-pointer opacity-0"
						aria-label={placeholder}
					/>
				</div>
			</div>
		</div>
	);
}
