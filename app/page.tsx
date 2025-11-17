import { Carousel } from "components/carousel";
import { ThreeItemGrid } from "components/grid/three-items";
import Footer from "components/layout/footer";
import type { Metadata } from "next";
import { TopDestinations } from "sections/destinations";
import { FeaturedProperties } from "sections/featured-properties";
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
			<TopDestinations />
			<FeaturedProperties />
			<ThreeItemGrid />
			<Carousel />
			<Footer />
		</>
	);
}
