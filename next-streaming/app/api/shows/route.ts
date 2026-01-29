import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import Show from "@/models/Show";

export async function GET(){
    try {
        await dbConnect();
        
        const shows = await Show.find().lean()

        return NextResponse.json(shows)
    }

    catch (error){
        console.error("GET /api/shows error:", error);
        return NextResponse.json(
            { message: "Failed to fetch shows" },
            { status: 500 }
        );
    }
}