import clsx from "clsx";
import NextLink from "next/link";
import type React from "react";

type LinkProps = React.ComponentProps<typeof NextLink> & {
	variant?: "primary" | "secondary";
	external?: boolean;
};

const Link = ({
	className,
	href,
	children,
	variant = "primary",
	external,
	...props
}: LinkProps) => {
	const isExternal =
		external || (typeof href === "string" && href.startsWith("http"));

	const baseStyles =
		"inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white dark:ring-offset-neutral-900";

	const variants = {
		primary:
			"bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 focus-visible:ring-neutral-900 dark:focus-visible:ring-white shadow-sm",
		secondary:
			"bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 dark:bg-transparent dark:text-gray-200 dark:border-neutral-700 dark:hover:bg-neutral-800 dark:hover:border-neutral-500 focus-visible:ring-gray-500",
	};

	const Component = isExternal ? "a" : NextLink;
	const externalProps = isExternal
		? { target: "_blank", rel: "noopener noreferrer" }
		: {};

	return (
		<Component
			href={href as any}
			className={clsx(baseStyles, variants[variant], className)}
			{...externalProps}
			{...props}
		>
			{children}
		</Component>
	);
};

export default Link;
