import {NextResponse, NextRequest} from 'next/server';
import populateDatabase from "@/utils/populateDatabase";
import Hostel from "@/models/Hostel";
import mongoose from "mongoose";

export const dynamic = 'force-dynamic' // defaults to force-static
export async function GET(request) {
    await mongoose.connect(process.env.MONGODB_URI);
    const { query } = request;
    try {
        // await populateDatabase();
        const hostels = await Hostel.find(query).populate({
            path: 'rooms',
            populate: {
                path: 'students',
            },
        });;
        return NextResponse.json({
            status: 200,
            body: hostels,
        });
    } catch (err) {
        throw err;
    }
}

export async function POST(request) {
    await mongoose.connect(process.env.MONGODB_URI);
    const body = await request.json();
    try {
        const hostel = await Hostel.create(body);
        return NextResponse.json({
            status: 200,
            body: hostel,
        });
    } catch (err) {
        throw err;
    }
}

export async function DELETE(request) {
    await mongoose.connect(process.env.MONGODB_URI);
    const body = await request.json();
    try {
        const hostel = await Hostel.deleteOne({ _id: body._id });
        return NextResponse.json({
            status: 200,
            body: hostel,
        });
    } catch (err) {
        throw err;
    }
}

export async function PUT(request) {
    await mongoose.connect(process.env.MONGODB_URI);
    const body = await request.json();
    try {
        const updatedHostel = await Hostel.findByIdAndUpdate(body._id, body, { new: true });
        return NextResponse.json({
            status: 200,
            body: updatedHostel,
        });
    } catch (err) {
        throw err;
    }
}

