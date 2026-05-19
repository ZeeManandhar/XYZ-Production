import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    shootType: { type: String, required: true, trim: true },
    preferredDate: { type: Date, required: true },
    message: { type: String, trim: true, default: "" }
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
