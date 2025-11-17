export type BookingTab =
	| "tours"
	| "hotels"
	| "tickets"
	| "rental"
	| "activities";

export interface Location {
	id: string;
	name: string;
	country: string;
}

export interface BookingState {
	activeTab: BookingTab;
	location: Location | null;
	checkIn: Date | null;
	checkOut: Date | null;
	adults: number;
	children: number;
}

export interface BookingWidgetProps {
	onSearch?: (bookingData: BookingState) => void;
	className?: string;
}

export interface TabNavigationProps {
	activeTab: BookingTab;
	onTabChange: (tab: BookingTab) => void;
}

export interface LocationSelectorProps {
	value: Location | null;
	onChange: (location: Location | null) => void;
	placeholder?: string;
}

export interface DatePickerProps {
	value: Date | null;
	onChange: (date: Date | null) => void;
	placeholder?: string;
	minDate?: Date;
}

export interface GuestSelectorProps {
	adults: number;
	childrenCount: number;
	onAdultsChange: (count: number) => void;
	onChildrenChange: (count: number) => void;
}
