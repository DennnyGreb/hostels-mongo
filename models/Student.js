import { Schema, model, models } from 'mongoose';

const student = new Schema({
    name: String,
    rollNumber: String,
    contact: String,
    email: String,
    birthdate: Date,
    checkInDate: Date,
    checkOutDate: Date,
});

export default models.Student || model('Student', student);
