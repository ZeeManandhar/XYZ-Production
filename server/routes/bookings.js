import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateBooking = ({ name, email, phone, shootType, preferredDate }) => {
  if (!name || !email || !phone || !shootType || !preferredDate) {
    return "Name, email, phone, shoot type, and preferred date are required.";
  }
  if (!emailPattern.test(email)) {
    return "Please provide a valid email address.";
  }
  if (Number.isNaN(Date.parse(preferredDate))) {
    return "Please provide a valid preferred date.";
  }
  return null;
};

router.post("/", async (req, res, next) => {
  try {
    const validationError = validateBooking(req.body);
    if (validationError) {
      return res.status(400).json({ message: validationError });
    }

    const booking = await Booking.create(req.body);
    return res.status(201).json({
      message: "Booking request received successfully.",
      booking
    });
  } catch (error) {
    return next(error);
  }
});

router.get("/", async (_req, res, next) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    return res.json(bookings);
  } catch (error) {
    return next(error);
  }
});

export default router;
