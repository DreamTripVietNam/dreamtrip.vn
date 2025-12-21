export type PlaceType = "villa" | "homestay" | "resort" | "hotel";

export interface Place {
	id: string;
	name: string;
	location: string;
	price: number;
	rating: number;
	reviewCount: number;
	images: string[];
	type: PlaceType;
	amenities: string[];
	description?: string;
	available?: boolean;
}

export interface PlaceCardProps {
	place: Place;
	className?: string;
	onClick?: (place: Place) => void;
}
