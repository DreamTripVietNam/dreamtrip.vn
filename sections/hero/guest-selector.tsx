"use client";

import { Popover, Transition } from "@headlessui/react";
import { ChevronsUpDown, Minus, Plus, Users } from "lucide-react";
import { Fragment } from "react";
import type { GuestSelectorProps } from "./types";

export function GuestSelector({
	adults,
	childrenCount,
	onAdultsChange,
	onChildrenChange,
}: GuestSelectorProps) {
	const totalGuests = adults + childrenCount;

	const handleIncrement = (type: "adults" | "children") => {
		if (type === "adults") {
			onAdultsChange(Math.min(adults + 1, 10));
		} else {
			onChildrenChange(Math.min(childrenCount + 1, 8));
		}
	};

	const handleDecrement = (type: "adults" | "children") => {
		if (type === "adults") {
			onAdultsChange(Math.max(adults - 1, 1));
		} else {
			onChildrenChange(Math.max(childrenCount - 1, 0));
		}
	};

	const displayText = () => {
		if (totalGuests === 0) return "Thêm khách";

		const parts = [];
		if (adults > 0) parts.push(`${adults} người lớn`);
		if (childrenCount > 0) parts.push(`${childrenCount} trẻ em`);

		return parts.join(", ");
	};

	return (
		<div className="flex flex-col">
			<div className="mb-1 text-sm font-medium text-gray-700">Khách</div>
			<Popover className="relative">
				{({ open }) => (
					<>
						<Popover.Button className="relative w-full cursor-default rounded-lg border border-gray-300 bg-white py-3 pl-3 pr-10 text-left shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black">
							<div className="flex items-center">
								<Users className="h-5 w-5 text-gray-400" aria-hidden="true" />
								<span className="ml-2 block truncate text-gray-900">
									{displayText()}
								</span>
							</div>
							<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
								<ChevronsUpDown
									className="h-5 w-5 text-gray-400"
									aria-hidden="true"
								/>
							</span>
						</Popover.Button>

						<Transition
							show={open}
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<Popover.Panel className="absolute z-10 mt-1 w-full rounded-lg bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
								<div className="space-y-4">
									{/* Adults */}
									<div className="flex items-center justify-between">
										<div>
											<div className="text-sm font-medium text-gray-900">
												Người lớn
											</div>
											<div className="text-sm text-gray-500">
												Từ 13 tuổi trở lên
											</div>
										</div>
										<div className="flex items-center space-x-2">
											<button
												type="button"
												onClick={() => handleDecrement("adults")}
												disabled={adults <= 1}
												className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
											>
												<Minus className="h-4 w-4" />
											</button>
											<span className="w-8 text-center text-sm font-medium">
												{adults}
											</span>
											<button
												type="button"
												onClick={() => handleIncrement("adults")}
												disabled={adults >= 10}
												className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
											>
												<Plus className="h-4 w-4" />
											</button>
										</div>
									</div>

									{/* Children */}
									<div className="flex items-center justify-between">
										<div>
											<div className="text-sm font-medium text-gray-900">
												Trẻ em
											</div>
											<div className="text-sm text-gray-500">Từ 2-12 tuổi</div>
										</div>
										<div className="flex items-center space-x-2">
											<button
												type="button"
												onClick={() => handleDecrement("children")}
												disabled={childrenCount <= 0}
												className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
											>
												<Minus className="h-4 w-4" />
											</button>
											<span className="w-8 text-center text-sm font-medium">
												{childrenCount}
											</span>
											<button
												type="button"
												onClick={() => handleIncrement("children")}
												disabled={childrenCount >= 8}
												className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
											>
												<Plus className="h-4 w-4" />
											</button>
										</div>
									</div>
								</div>
							</Popover.Panel>
						</Transition>
					</>
				)}
			</Popover>
		</div>
	);
}
