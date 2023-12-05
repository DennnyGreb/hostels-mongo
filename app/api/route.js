import {NextResponse, NextRequest} from 'next/server';
import populateDatabase from "@/utils/populateDatabase";
import Hostel from "@/models/Hostel";

export const dynamic = 'force-dynamic' // defaults to force-static
export async function GET() {
    try {
        // await populateDatabase();
        const data = await Hostel.find({}).populate({
            path: 'rooms',
            populate: {
                path: 'students',
            },
        });
        return NextResponse.json({
            status: 200,
            body: data,
        });
    } catch (err) {
        throw err;
        return NextResponse.json({
            status: 500,
            body: 'Something went wrong!',
        });
    }
}
