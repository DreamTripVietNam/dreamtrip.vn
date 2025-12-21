import { Carousel } from "components/carousel";
import type { Metadata } from "next";
import { TopDestinations } from "sections/destinations";
import { FAQs } from "sections/faqs";
import { FeaturedPlaces } from "sections/featured-places";
import { HeroSection } from "sections/hero";
import { NewsTips } from "sections/news-tips";

export const metadata: Metadata = {
	description:
		"Đặt homestay, villa, resort quanh Hà Nội và trên toàn Việt Nam với Dream Trip.",
	openGraph: {
		type: "website",
	},
};

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<TopDestinations />
			<FeaturedPlaces />
			<Carousel />
			<NewsTips />
			<FAQs />
		</>
	);
}
