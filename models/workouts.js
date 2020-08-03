const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Enter workout type"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter workout name"
    },
    duration: {
        type: Number,
        required:"How long was your excercise?"
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    }

})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;