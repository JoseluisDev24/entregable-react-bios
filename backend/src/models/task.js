import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
});

export default mongoose.model("Task", taskSchema);