export type BlogCategory = "discovery" | "travel" | "tips" | "guide";

export type BlogArticle = {
	id: string;
	title: string;
	excerpt?: string;
	category: BlogCategory;
	image: string;
	author: {
		name: string;
		avatar: string;
	};
	publishedAt: string;
	readingTime: number;
	commentsCount: number;
	slug: string;
};

export type NewsTipsProps = {
	articles?: BlogArticle[];
	className?: string;
};
