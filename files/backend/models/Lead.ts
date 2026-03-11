import { Schema, model, Types } from "mongoose";

const leadSchema = new Schema({
  name: String,
  phone: String,
  source: { type: String, enum: ['Facebook', 'Website', 'Referral', 'Job Portal'] },
  status: { type: String, enum: ['New', 'Contacted', 'Interested', 'Not Interested', 'Converted'], default: 'New' },
  assigned_to: { type: Types.ObjectId, ref: 'User' },
  notes: String,
  follow_up: Date,
}, { timestamps: true });

export default model("Lead", leadSchema);