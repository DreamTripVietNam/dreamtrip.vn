import type { NextConfig } from "next";

const config: NextConfig = {
	cacheComponents: true,
	devIndicators: false,
	experimental: {
		inlineCss: true,
		useCache: true,
	},
	images: {
		formats: ["image/avif", "image/webp"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.shopify.com",
				pathname: "/s/files/**",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "i.pravatar.cc",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "api.dicebear.com",
				pathname: "/**",
			},
		],
		qualities: [75, 85, 95],
	},
};

export default config;
