import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import NextLink from "next/link";
import type React from "react";

const linkVariants = cva(
	"inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white",
	{
		variants: {
			variant: {
				primary:
					"bg-neutral-900 text-white hover:bg-neutral-800 focus-visible:ring-neutral-900 shadow-sm",
				secondary:
					"bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 focus-visible:ring-gray-500",
			},
		},
		defaultVariants: {
			variant: "primary",
		},
	},
);

type LinkProps = React.ComponentProps<typeof NextLink> &
	VariantProps<typeof linkVariants> & {
		external?: boolean;
	};

const Link = ({
	className,
	href,
	children,
	variant,
	external,
	...props
}: LinkProps) => {
	const isExternal =
		external || (typeof href === "string" && (href as any).startsWith("http"));

	const Component = isExternal ? "a" : NextLink;
	const externalProps = isExternal
		? { target: "_blank", rel: "noopener noreferrer" }
		: {};

	return (
		<Component
			href={href as any}
			className={clsx(linkVariants({ variant, className }))}
			{...externalProps}
			{...props}
		>
			{children}
		</Component>
	);
};

export default Link;
