"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { clsx } from "clsx";
import { useState } from "react";
import type { FAQ } from "./types";

export function FAQItem({ faq }: { faq: FAQ }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="border-b border-neutral-200 last:border-b-0">
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-blue-600"
				aria-expanded={isOpen}
			>
				<span className="pr-4 text-lg font-medium text-neutral-900">
					{faq.question}
				</span>
				<ChevronDownIcon
					className={clsx(
						"h-5 w-5 shrink-0 text-neutral-500 transition-transform duration-300",
						isOpen && "rotate-180",
					)}
				/>
			</button>
			<div
				className={clsx(
					"overflow-hidden transition-all duration-300",
					isOpen ? "max-h-96 pb-5" : "max-h-0",
				)}
			>
				<p className="text-neutral-600">{faq.answer}</p>
			</div>
		</div>
	);
}
