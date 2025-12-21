import { HeartIcon, MapPinIcon, ShareIcon } from "@heroicons/react/24/outline";
import { GridTileImage } from "components/grid/tile";
import { BookingWidget } from "components/product/booking-widget";
import { ProductProvider } from "components/product/product-context";
import { ProductGallery } from "components/product/product-gallery";
import { ProductInfo } from "components/product/product-info";
import { getMockProduct } from "lib/mock-product-data"; // Use getMockProduct
import { getProduct, getProductRecommendations } from "lib/shopify";
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export async function generateMetadata(props: {
	params: Promise<{ handle: string }>;
}): Promise<Metadata> {
	// const params = await props.params;
	// We still fetch the product to get some basic metadata if available,
	// but we primarily rely on the mock data for this specific task as requested.
	// const product = await getProduct(params.handle);
	const product = await getMockProduct();

	// Fallback to mock data for SEO if product not found or just to match the visual
	const title = product.title;
	const description = product.description;
	const image = product.images[0]?.url || "";

	return {
		title: title,
		description: description,
		robots: {
			index: true,
			follow: true,
			googleBot: { index: true, follow: true },
		},
		openGraph: {
			images: [
				{
					url: image,
					width: 1200,
					height: 630,
					alt: title,
				},
			],
		},
	};
}

export default function ProductPage(props: {
	params: Promise<{ handle: string }>;
}) {
	return (
		<Suspense fallback={null}>
			<ProductPageContent paramsPromise={props.params} />
		</Suspense>
	);
}

async function ProductPageContent({
	paramsPromise,
}: {
	paramsPromise: Promise<{ handle: string }>;
}) {
	const params = await paramsPromise;
	// We still try to fetch product to respect the architecture,
	// but we will render the Mock Data regardless for this demo request.
	const product = await getProduct(params.handle);
	const mockProduct = await getMockProduct();

	// In a real scenario, we would use the product data here.
	// const isMockMode = true;

	// If we weren't in mock mode, we'd check !product
	// if (!product && !isMockMode) return notFound();

	const productJsonLd = {
		"@context": "https://schema.org",
		"@type": "Product",
		name: mockProduct.title,
		description: mockProduct.description,
		image: mockProduct.images[0]?.url || "",
		offers: {
			"@type": "AggregateOffer",
			availability: "https://schema.org/InStock",
			priceCurrency: mockProduct.price.currencyCode,
			highPrice: mockProduct.price.amount,
			lowPrice: mockProduct.price.amount,
		},
	};

	return (
		<ProductProvider>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(productJsonLd),
				}}
			/>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-500">
				{/* Header Section */}
				<div className="mb-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
					<div>
						<h1 className="text-2xl md:text-3xl font-bold font-barlow text-neutral-900  mb-2">
							{mockProduct.title}
						</h1>
						<div className="flex items-center gap-2 text-sm text-neutral-600 ">
							<MapPinIcon className="w-4 h-4" />
							<span className="underline cursor-pointer hover:text-neutral-900 transition-colors">
								{mockProduct.location}
							</span>
						</div>
					</div>
					<div className="flex items-center gap-3">
						<button
							type="button"
							className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-neutral-100 transition-colors text-sm font-medium"
						>
							<ShareIcon className="w-4 h-4" />
							Chia sẻ
						</button>
						<button
							type="button"
							className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-neutral-100 transition-colors text-sm font-medium"
						>
							<HeartIcon className="w-4 h-4" />
							Lưu
						</button>
					</div>
				</div>

				{/* Gallery */}
				<div className="mb-10">
					<ProductGallery images={mockProduct.images} />
				</div>

				{/* Main Content Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
					{/* Left Column: Details */}
					<div className="lg:col-span-2">
						<ProductInfo />
					</div>

					{/* Right Column: Sticky Booking Widget */}
					<div className="lg:col-span-1">
						<BookingWidget />
					</div>
				</div>

				{/* Related Products */}
				<Suspense fallback={null}>
					<RelatedProducts id={product?.id || "mock-id"} />
				</Suspense>
			</div>
		</ProductProvider>
	);
}

async function RelatedProducts({ id }: { id: string }) {
	// If it's the mock ID, we can't fetch real related products from Shopify using it.
	// So we just return null to avoid the API error.
	if (id === "mock-id") return null;

	const relatedProducts = await getProductRecommendations(id);

	if (!relatedProducts.length) return null;

	return (
		<div className="py-16 border-t border-neutral-200  mt-16">
			<h2 className="mb-6 text-2xl font-bold font-barlow">
				Có thể bạn sẽ thích
			</h2>
			<ul className="flex w-full gap-4 overflow-x-auto pb-4">
				{relatedProducts.map((product) => (
					<li
						key={product.handle}
						className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
					>
						<Link
							className="relative h-full w-full group block"
							href={`/product/${product.handle}`}
							prefetch={true}
						>
							<GridTileImage
								alt={product.title}
								label={{
									title: product.title,
									amount: product.priceRange.maxVariantPrice.amount,
									currencyCode: product.priceRange.maxVariantPrice.currencyCode,
								}}
								src={product.featuredImage?.url}
								fill
								sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
							/>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
