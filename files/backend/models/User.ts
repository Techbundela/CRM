import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }, // Hashed
  role: { type: String, enum: ['admin', 'recruiter'], default: 'recruiter' },
}, { timestamps: true });

export default model("User", userSchema);