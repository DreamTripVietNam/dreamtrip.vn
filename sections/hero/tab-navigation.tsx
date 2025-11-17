"use client";

import { Tab } from "@headlessui/react";
import type { BookingTab, TabNavigationProps } from "./types";

const tabs: { id: BookingTab; label: string }[] = [
	{ id: "tours", label: "Homestay" },
	{ id: "hotels", label: "Villa" },
	{ id: "tickets", label: "Resort" },
	{ id: "rental", label: "Khách sạn" },
	{ id: "activities", label: "Hoạt động" },
];

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
	const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);

	return (
		<Tab.Group
			selectedIndex={activeIndex}
			onChange={(index) => {
				const selectedTab = tabs[index];
				if (selectedTab) {
					onTabChange(selectedTab.id);
				}
			}}
		>
			<Tab.List className="flex space-x-1 rounded-lg bg-gray-100 p-1">
				{tabs.map((tab) => (
					<Tab
						key={tab.id}
						className={({ selected }) =>
							`w-full rounded-lg px-4 py-2.5 text-sm font-medium leading-5 transition-all
							focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-75 ${
								selected
									? "bg-black text-white shadow"
									: "text-gray-600 hover:bg-white/12 hover:text-gray-900"
							}`
						}
					>
						{tab.label}
					</Tab>
				))}
			</Tab.List>
		</Tab.Group>
	);
}
