import { generateMockReviews } from "lib/mock-reviews";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const handle = searchParams.get("handle");

	if (!handle) {
		return NextResponse.json(
			{ error: "Product handle is required" },
			{ status: 400 },
		);
	}

	// Simulate network delay
	await new Promise((resolve) => setTimeout(resolve, 1000));

	const data = generateMockReviews(20);

	return NextResponse.json(data);
}
