"use client";

import { Listbox, Transition } from "@headlessui/react";
import { clsx } from "clsx";
import { ChevronsUpDown, MapPin } from "lucide-react";
import { Fragment } from "react";
import type { Location, LocationSelectorProps } from "./types";

// Popular Vietnamese destinations
const locations: Location[] = [
	{ id: "hanoi", name: "Hà Nội", country: "Việt Nam" },
	{ id: "ho-chi-minh", name: "Hồ Chí Minh", country: "Việt Nam" },
	{ id: "da-nang", name: "Đà Nẵng", country: "Việt Nam" },
	{ id: "hoi-an", name: "Hội An", country: "Việt Nam" },
	{ id: "nha-trang", name: "Nha Trang", country: "Việt Nam" },
	{ id: "da-lat", name: "Đà Lạt", country: "Việt Nam" },
	{ id: "phu-quoc", name: "Phú Quốc", country: "Việt Nam" },
	{ id: "ha-long", name: "Hạ Long", country: "Việt Nam" },
	{ id: "sapa", name: "Sa Pa", country: "Việt Nam" },
	{ id: "mui-ne", name: "Mũi Né", country: "Việt Nam" },
];

export function LocationSelector({
	value,
	onChange,
	placeholder = "Chọn điểm đến",
}: LocationSelectorProps) {
	return (
		<div className="flex flex-col">
			<Listbox value={value} onChange={onChange}>
				{({ open }) => (
					<div className="relative">
						<Listbox.Label className="mb-1 text-sm font-medium text-gray-700">
							Điểm đến
						</Listbox.Label>
						<Listbox.Button className="relative w-full cursor-default rounded-lg border border-gray-300 bg-white py-3 pl-3 pr-10 text-left shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black">
							<div className="flex items-center">
								<MapPin className="h-5 w-5 text-gray-400" aria-hidden="true" />
								<span className="ml-2 block truncate text-gray-900">
									{value ? `${value.name}, ${value.country}` : placeholder}
								</span>
							</div>
							<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
								<ChevronsUpDown
									className="h-5 w-5 text-gray-400"
									aria-hidden="true"
								/>
							</span>
						</Listbox.Button>

						<Transition
							show={open}
							as={Fragment}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
								{locations.map((location) => (
									<Listbox.Option
										key={location.id}
										value={location}
										className={({ active }) =>
											clsx(
												"relative cursor-default select-none py-2 pl-3 pr-9",
												active ? "bg-black text-white" : "text-gray-900",
											)
										}
									>
										{({ selected }) => (
											<div className="flex items-center">
												<MapPin
													className="h-5 w-5 text-current"
													aria-hidden="true"
												/>
												<span
													className={clsx(
														"ml-2 block truncate",
														selected ? "font-semibold" : "font-normal",
													)}
												>
													{location.name}, {location.country}
												</span>
											</div>
										)}
									</Listbox.Option>
								))}
							</Listbox.Options>
						</Transition>
					</div>
				)}
			</Listbox>
		</div>
	);
}
