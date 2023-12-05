import mongoose from 'mongoose';
import { readJsonFile } from '@/utils/readJsonFile';
import Hostel from '@/models/Hostel';
import Room from '@/models/Room';
import Student from '@/models/Student';

async function populateDatabase() {
    await mongoose.connect(process.env.MONGODB_URI);
    // Dropping collections
        await Hostel.deleteMany({});
        await Room.deleteMany({});
        await Student.deleteMany({});

    try {
        const count = await Hostel.estimatedDocumentCount();
        if (!count) {
            const hostelsData = await readJsonFile('./mocks/hostels.json');
            const roomsData = await readJsonFile('./mocks/rooms.json');
            const studentsData = await readJsonFile('./mocks/students.json');

            const insertedStudents = await Student.insertMany(studentsData);
            const insertedRooms = await Room.insertMany(roomsData.map(room => {

                return {
                    ...room,
                    students: room.students.map(student => {
                        return insertedStudents.find((s) => s.rollNumber === student.rollNumber);
                    }),
                };
            }));
            await Hostel.insertMany(hostelsData.map(hostel => {
                return {
                    ...hostel,
                    rooms: hostel.rooms.map(room => {
                        return insertedRooms.find((r) => r.number === room.number);
                    }),
                };
            }));
            console.log('Database population complete');
        } else {
            console.log('Database already populated');
        }
    } catch (error) {
        console.error('Error populating database:', error);
    }
}

export default populateDatabase;
