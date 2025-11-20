export type FAQ = {
	id: string;
	question: string;
	answer: string;
};

export type FAQsProps = {
	faqs?: FAQ[];
	className?: string;
};
