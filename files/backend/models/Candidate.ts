import { Schema, model } from "mongoose";

const candidateSchema = new Schema({
  name: String,
  phone: String,
  email: String,
  education: String,
  trade: String,
  state: String,
  district: String,
  resume: String, // File path / URL
  experience: String,
  expected_salary: Number,
}, { timestamps: true });

export default model("Candidate", candidateSchema);