import { Schema, model, models } from 'mongoose';

const hostel = new Schema({
    name: String,
    address: String,
    rooms: [{ type: Schema.Types.ObjectId, ref: 'Room' }],
    facilities: [String],
});

export default models.Hostel || model('Hostel', hostel);
