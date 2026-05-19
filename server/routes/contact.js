import express from "express";
import ContactMessage from "../models/ContactMessage.js";

const router = express.Router();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateContact = ({ name, email, subject, message }) => {
  if (!name || !email || !subject || !message) {
    return "Name, email, subject, and message are required.";
  }
  if (!emailPattern.test(email)) {
    return "Please provide a valid email address.";
  }
  return null;
};

router.post("/", async (req, res, next) => {
  try {
    const validationError = validateContact(req.body);
    if (validationError) {
      return res.status(400).json({ message: validationError });
    }

    const contactMessage = await ContactMessage.create(req.body);
    return res.status(201).json({
      message: "Message sent successfully.",
      contactMessage
    });
  } catch (error) {
    return next(error);
  }
});

router.get("/", async (_req, res, next) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    return res.json(messages);
  } catch (error) {
    return next(error);
  }
});

export default router;
