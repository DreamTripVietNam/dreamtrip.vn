import Link from "next/link";
import type { Service } from "./types";

export function ServiceCard({ service }: { service: Service }) {
	return (
		<Link
			href={service.link}
			className="group flex flex-col items-center rounded-2xl border border-neutral-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg"
		>
			<div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-blue-50 to-blue-100 text-4xl transition-transform duration-300 group-hover:scale-110">
				{service.icon}
			</div>
			<h3 className="mb-2 text-lg font-semibold text-neutral-900">
				{service.name}
			</h3>
			<p className="text-sm text-neutral-600">{service.description}</p>
		</Link>
	);
}
