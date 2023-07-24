import mongoose from "mongoose";




// seat
// image
// carparking
// stage size
// room
// rate and booking details



// import mongoose from "mongoose";

const mahalSchema = new mongoose.Schema({
    Name: {
        type: String, // Corrected the data type to String
        // required: true
    },
    seat: {
        type: Number,
        // required: true
    },
    images: {
        data: Buffer, // Corrected the data type to Buffer
        contentType: String
    },
    room: {
        type: Number,
        // required: true
    }
});

export const mahalModel = new mongoose.model('mahalData', mahalSchema);