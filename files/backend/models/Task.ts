import { Schema, model, Types } from "mongoose";

const taskSchema = new Schema({
  assigned_to: { type: Types.ObjectId, ref: 'User' },
  lead_id: { type: Types.ObjectId, ref: 'Lead' },
  description: String,
  due_date: Date,
  status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' }
}, { timestamps: true });

export default model("Task", taskSchema);