import { Debugger } from "components/debugger";
import { GridTileImage } from "components/grid/tile";
import { getProduct, getProductRecommendations } from "lib/shopify";
import { MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { BookingWidget } from "./booking-widget";
import { ProductProvider } from "./product-context";
import { ProductGallery } from "./product-gallery";
import { ProductInfo } from "./product-info";
import { ProductPageSkeleton } from "./product-page-skeleton";
import { SaveButton } from "./save-button";
import { ShareButton } from "./share-button";

export async function generateMetadata(props: {
	params: Promise<{ handle: string }>;
}): Promise<Metadata> {
	const params = await props.params;
	const product = await getProduct(params.handle);

	if (!product) return notFound();

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
		<Suspense fallback={<ProductPageSkeleton />}>
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
	const product = await getProduct(params.handle);

	if (!product) return notFound();

	const productJsonLd = {
		"@context": "https://schema.org",
		"@type": "Product",
		name: product.title,
		description: product.description,
		image: product.images[0]?.url || "",
		offers: {
			"@type": "AggregateOffer",
			availability: "https://schema.org/InStock",
			priceCurrency: product.priceRange.minVariantPrice.currencyCode,
			highPrice: product.priceRange.maxVariantPrice.amount,
			lowPrice: product.priceRange.minVariantPrice.amount,
		},
	};

	return (
		<ProductProvider product={product}>
			<Debugger data={product} debugKey="product" log />
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
						<h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold font-barlow text-neutral-900 mb-2">
							{product.title}
						</h1>
						{product.location && (
							<a
								href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
									product.location,
								)}`}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-1.5 text-sm text-neutral-600 hover:text-blue-600 transition-colors w-fit"
							>
								<MapPin className="size-4" />
								<span className="font-medium underline decoration-neutral-300 underline-offset-4 hover:decoration-blue-600">
									{product.location} • Xem chỉ đường
								</span>
							</a>
						)}
					</div>
					<div className="flex items-center gap-3">
						<SaveButton productHandle={params.handle} />
						<ShareButton />
					</div>
				</div>

				{/* Gallery */}
				<div className="mb-10">
					<ProductGallery images={product.images} />
				</div>

				{/* Main Content Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
					{/* Left Column: Details */}
					<div className="lg:col-span-2">
						<ProductInfo product={product} />
					</div>

					{/* Right Column: Sticky Booking Widget */}
					<div className="lg:col-span-1">
						<BookingWidget />
					</div>
				</div>

				{/* Related Products */}
				<Suspense fallback={null}>
					<RelatedProducts id={product?.id} />
				</Suspense>
			</div>
		</ProductProvider>
	);
}

async function RelatedProducts({ id }: { id: string }) {
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
