export interface Destination {
	id: string;
	name: string;
	image: string;
	description?: string;
	placesCount?: number;
}

export interface TopDestinationsProps {
	destinations?: Destination[];
	title?: string;
	className?: string;
}
