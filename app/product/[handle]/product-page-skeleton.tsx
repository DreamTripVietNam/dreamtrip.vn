export function ProductPageSkeleton() {
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 animate-pulse">
			{/* Header Section */}
			<div className="mb-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
				<div className="w-full md:w-2/3">
					{/* Title Skeleton */}
					<div className="h-10 bg-neutral-200 rounded-lg w-3/4 mb-4" />

					{/* Location Skeleton */}
					<div className="flex items-center gap-2">
						<div className="size-4 bg-neutral-200 rounded-full" />
						<div className="h-4 bg-neutral-200 rounded w-1/3" />
					</div>
				</div>

				{/* Buttons Skeleton */}
				<div className="flex items-center gap-3">
					<div className="h-10 w-10 bg-neutral-200 rounded-full" />
					<div className="h-10 w-10 bg-neutral-200 rounded-full" />
				</div>
			</div>

			{/* Gallery Skeleton */}
			<div className="mb-10">
				<div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:grid-rows-2 h-[300px] md:h-[400px] lg:h-[500px]">
					{/* Main Image */}
					<div className="col-span-2 row-span-2 bg-neutral-200 rounded-xl" />

					{/* Small Images */}
					<div className="hidden md:block bg-neutral-200 rounded-xl" />
					<div className="hidden md:block bg-neutral-200 rounded-xl" />
					<div className="hidden md:block bg-neutral-200 rounded-xl" />
					<div className="hidden md:block bg-neutral-200 rounded-xl" />
				</div>
			</div>

			{/* Main Content Grid Skeleton */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
				{/* Left Column: Details */}
				<div className="lg:col-span-2 space-y-8">
					{/* Description Paragraphs */}
					<div className="space-y-4">
						<div className="h-4 bg-neutral-200 rounded w-full" />
						<div className="h-4 bg-neutral-200 rounded w-full" />
						<div className="h-4 bg-neutral-200 rounded w-5/6" />
					</div>

					{/* Features Grid */}
					<div className="grid grid-cols-2 gap-4 pt-8">
						<div className="h-24 bg-neutral-200 rounded-lg" />
						<div className="h-24 bg-neutral-200 rounded-lg" />
						<div className="h-24 bg-neutral-200 rounded-lg" />
						<div className="h-24 bg-neutral-200 rounded-lg" />
					</div>
				</div>

				{/* Right Column: Booking Widget */}
				<div className="lg:col-span-1">
					<div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 h-[400px]">
						<div className="h-8 bg-neutral-200 rounded w-1/2 mb-6" />
						<div className="space-y-4">
							<div className="h-12 bg-neutral-200 rounded-lg w-full" />
							<div className="h-12 bg-neutral-200 rounded-lg w-full" />
							<div className="h-12 bg-neutral-200 rounded-lg w-full" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
