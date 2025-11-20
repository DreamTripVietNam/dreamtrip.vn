export type Service = {
	id: string;
	name: string;
	description: string;
	icon: string;
	link: string;
};

export type AdditionalServicesProps = {
	services?: Service[];
	className?: string;
};
