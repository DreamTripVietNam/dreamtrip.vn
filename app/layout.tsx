import clsx from "clsx";
import { CartProvider } from "components/cart/cart-context";
import Footer from "components/footer";
import { Navbar } from "components/layout/navbar";
import { WelcomeToast } from "components/welcome-toast";
import { SITE_METADATA } from "data/metadata";
import { getCart } from "lib/shopify";
import { baseUrl } from "lib/utils";
import type { Metadata } from "next";
import { Barlow, Livvic } from "next/font/google";
import type { ReactNode } from "react";
import { Toaster } from "sonner";
import "./globals.css";

const barlow = Barlow({
	subsets: ["latin", "vietnamese"],
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
	variable: "--font-barlow",
});

const livvic = Livvic({
	subsets: ["latin", "vietnamese"],
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
	variable: "--font-livvic",
});

const { name: siteName } = SITE_METADATA;

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: {
		default: siteName,
		template: `%s | ${siteName}`,
	},
	robots: {
		follow: true,
		index: true,
	},
	icons: {
		icon: {
			url: "/jeep-32.png",
			type: "image/png",
		},
	},
};

export default async function RootLayout({
	children,
}: {
	children: ReactNode;
}) {
	// Don't await the fetch, pass the Promise to the context provider
	const cart = getCart();

	return (
		<html lang="en" className={clsx(barlow.variable, livvic.variable)}>
			<body className="text-neutral-900 selection:bg-teal-300  ">
				<CartProvider cartPromise={cart}>
					<Navbar />
					<main>
						{children}
						<Toaster closeButton />
						<WelcomeToast />
					</main>
					<Footer />
				</CartProvider>
			</body>
		</html>
	);
}
