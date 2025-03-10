import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    contact: {
        type: String,
        required: true,
        unique: true,
    },
    carnumber: {
        type: String,
    },
    version: {
        type: String,
        default: "Free",
    },
    wallet: {
        type: Number,
        default: 0,
    },
    bookingHistory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "BookingHistory",
    }],
    carDetails: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "CarDetail",
    }]
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;