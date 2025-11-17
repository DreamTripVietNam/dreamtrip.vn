export type PropertyType = "villa" | "homestay" | "resort" | "hotel";

export interface Property {
	id: string;
	name: string;
	location: string;
	price: number;
	rating: number;
	reviewCount: number;
	images: string[];
	type: PropertyType;
	amenities: string[];
	description?: string;
	available?: boolean;
}

export interface PropertyCardProps {
	property: Property;
	className?: string;
	onClick?: (property: Property) => void;
}
