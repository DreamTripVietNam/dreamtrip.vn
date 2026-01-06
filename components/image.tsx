"use client";

import { clsx } from "clsx";
import type { ImageProps as NextImageProps } from "next/image";
import NextImage from "next/image";
import { useState } from "react";

export interface ImageProps
	extends Omit<
		NextImageProps,
		"src" | "priority" | "objectFit" | "objectPosition"
	> {
	src: string;
	objectFit?: React.CSSProperties["objectFit"];
	objectPosition?: React.CSSProperties["objectPosition"];
}

export function Image(props: ImageProps) {
	let {
		alt,
		src,
		loading = "lazy",
		objectFit = "cover",
		objectPosition = "center",
		className,
		...rest
	} = props;
	let [loaded, setLoaded] = useState(false);

	return (
		<div
			className={clsx(
				"image-container relative overflow-hidden size-full",
				!loaded && "animate-pulse animation-duration-[4s]",
				className,
			)}
			style={
				{
					"--object-fit": objectFit,
					"--object-position": objectPosition,
				} as React.CSSProperties
			}
		>
			<NextImage
				className={clsx(
					"transition-all duration-500 ease-in-out",
					"size-full max-h-full [object-fit:var(--object-fit)] object-(--object-position)",
					loaded ? "blur-0" : "blur-xl",
				)}
				src={src}
				alt={alt}
				loading={loading}
				priority={loading === "eager"}
				onLoad={() => setLoaded(true)}
				{...rest}
			/>
		</div>
	);
}
