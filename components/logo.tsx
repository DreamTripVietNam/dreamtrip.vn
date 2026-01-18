import { clsx } from "clsx";
import Image from "next/image";

export default function Logo({
	className,
	size = 200,
}: {
	className?: string;
	size?: number;
}) {
	return (
		<div
			className={clsx("shrink-0 flex items-center justify-center", className)}
		>
			<Image
				src="/static/images/dreamtripvn-logo-transparent.png"
				alt="Dreamtrip Viet Nam Logo"
				width={size}
				height={size}
				className="object-contain"
			/>
		</div>
	);
}
