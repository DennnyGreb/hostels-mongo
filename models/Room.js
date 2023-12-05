import { Schema, model, models } from 'mongoose';

const room = new Schema({
    number: Number,
    capacity: Number,
    currentOccupancy: Number,
    students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
});

export default models.Room || model('Room', room);
