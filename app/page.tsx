import { Carousel } from "components/carousel";
import { ThreeItemGrid } from "components/grid/three-items";
import Footer from "components/layout/footer";
import type { Metadata } from "next";
import { HeroSection } from "sections/hero";

export const metadata: Metadata = {
	description:
		"High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
	openGraph: {
		type: "website",
	},
};

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<div className="h-8 md:h-16 lg:h-24" />
			<ThreeItemGrid />
			<Carousel />
			<Footer />
		</>
	);
}
