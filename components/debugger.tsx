"use client";

import { useEffect } from "react";

export function Debugger({
	data,
	debugKey,
	log,
}: {
	data: any;
	debugKey?: string;
	log?: boolean;
}) {
	// biome-ignore lint/correctness/useExhaustiveDependencies: render once
	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}

		const isDebugMode = window.localStorage.getItem("__debug") === "true";
		if (!isDebugMode) return;

		if (debugKey) {
			const windowKey = debugKey.startsWith("__") ? debugKey : `__${debugKey}`;
			(window as any)[windowKey] = data;
		}

		const shouldLog =
			window.localStorage.getItem("__logAllDebuggers") === "true" || log;

		if (shouldLog) {
			console.log(
				`%c[Debugger] ${debugKey ? `window.${debugKey.startsWith("__") ? debugKey : `__${debugKey}`}` : "Data"}:`,
				"color: #2563EB; font-weight: bold",
				data,
			);
		}
	}, []);

	return null;
}
