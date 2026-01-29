import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import Show from "@/models/Show";

export async function GET() {
  try {
    await dbConnect();

    const randomMovie = await Show.aggregate([
      { $match: { type: "movie" } },
      { $sample: { size: 1 } },
    ]);

    if (!randomMovie.length) {
      return NextResponse.json(
        { message: "No movies found" },
        { status: 404 }
      );
    }

    return NextResponse.json(randomMovie[0]);
  } catch (error) {
    console.error("GET /api/shows/random error:", error);
    return NextResponse.json(
      { message: "Failed to fetch random movie" },
      { status: 500 }
    );
  }
}