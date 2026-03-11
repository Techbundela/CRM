import { Schema, model, Types } from "mongoose";

const callSchema = new Schema({
  lead_id: { type: Types.ObjectId, ref: 'Lead' },
  recruiter_id: { type: Types.ObjectId, ref: 'User' },
  call_time: Date,
  duration: Number,
  transcript: String,
  recording_url: String,
}, { timestamps: true });

export default model("Call", callSchema);