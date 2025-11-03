import type { NextConfig } from "next";

const config: NextConfig = {
	cacheComponents: true,
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
		],
	},
};

export default config;
