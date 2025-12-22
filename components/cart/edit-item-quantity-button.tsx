"use client";

import clsx from "clsx";
import { updateItemQuantity } from "components/cart/actions";
import type { CartItem } from "lib/shopify/types";
import { Minus, Plus } from "lucide-react";
import { useActionState } from "react";

function SubmitButton({ type }: { type: "plus" | "minus" }) {
	return (
		<button
			type="submit"
			aria-label={
				type === "plus" ? "Increase item quantity" : "Reduce item quantity"
			}
			className={clsx(
				"ease flex h-full min-w-9 max-w-9 flex-none items-center justify-center rounded-full p-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80",
				{
					"ml-auto": type === "minus",
				},
			)}
		>
			{type === "plus" ? (
				<Plus className="h-4 w-4 " />
			) : (
				<Minus className="h-4 w-4 " />
			)}
		</button>
	);
}

export function EditItemQuantityButton({
	item,
	type,
	optimisticUpdate,
}: {
	item: CartItem;
	type: "plus" | "minus";
	optimisticUpdate: any;
}) {
	const [message, formAction] = useActionState(updateItemQuantity, null);
	const payload = {
		merchandiseId: item.merchandise.id,
		quantity: type === "plus" ? item.quantity + 1 : item.quantity - 1,
	};
	const updateItemQuantityAction = formAction.bind(null, payload);

	return (
		<form
			action={async () => {
				optimisticUpdate(payload.merchandiseId, type);
				updateItemQuantityAction();
			}}
		>
			<SubmitButton type={type} />
			<output aria-live="polite" className="sr-only">
				{message}
			</output>
		</form>
	);
}
