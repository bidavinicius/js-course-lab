import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tuition: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    major: {
        type: String,
        required: true
    }
})

export const Student = mongoose.model('student', studentSchema)