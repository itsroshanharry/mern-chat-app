// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, enum: ['male', 'female', 'other'], required: true },
    profilePic: { type: String, required:""} // Assuming the profile picture is stored as a URL
});

const User = mongoose.model('User', userSchema);

export default User;
