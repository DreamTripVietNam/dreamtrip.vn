"use client";

import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import type * as React from "react";

const scrollBarVariants = cva("flex touch-none select-none transition-colors", {
	variants: {
		orientation: {
			vertical: "h-full border-l border-l-transparent p-px",
			horizontal: "flex-col border-t border-t-transparent p-px",
		},
		size: {
			md: "w-2.5",
			sm: "w-2",
		},
	},
	compoundVariants: [
		{
			orientation: "horizontal",
			size: "md",
			class: "h-2.5",
		},
		{
			orientation: "horizontal",
			size: "sm",
			class: "h-2",
		},
	],
	defaultVariants: {
		orientation: "vertical",
		size: "md",
	},
});

interface ScrollAreaProps
	extends React.ComponentProps<typeof ScrollAreaPrimitive.Root>,
		VariantProps<typeof scrollBarVariants> {}

function ScrollArea({
	className,
	children,
	ref,
	size,
	...props
}: ScrollAreaProps) {
	return (
		<ScrollAreaPrimitive.Root
			ref={ref}
			className={clsx("relative overflow-hidden", className)}
			{...props}
		>
			<ScrollAreaPrimitive.Viewport className="size-full rounded-[inherit]">
				{children}
			</ScrollAreaPrimitive.Viewport>
			<ScrollBar size={size} />
			<ScrollAreaPrimitive.Corner />
		</ScrollAreaPrimitive.Root>
	);
}

interface ScrollBarProps
	extends Omit<
			React.ComponentProps<typeof ScrollAreaPrimitive.Scrollbar>,
			"orientation"
		>,
		VariantProps<typeof scrollBarVariants> {}

function ScrollBar({
	className,
	orientation = "vertical",
	size,
	ref,
	...props
}: ScrollBarProps) {
	return (
		<ScrollAreaPrimitive.Scrollbar
			ref={ref}
			orientation={orientation!}
			className={clsx(
				scrollBarVariants({
					orientation,
					size,
					className,
				}),
			)}
			{...props}
		>
			<ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-full bg-neutral-600" />
		</ScrollAreaPrimitive.Scrollbar>
	);
}

export { ScrollArea, ScrollBar };
