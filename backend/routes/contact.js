const express = require("express");
const router = express.Router();
const Message = require("../model/Message");
const nodemailer = require("nodemailer");

// POST /api/contact → Save + Send Email
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // 1. Save message to MongoDB
    const newMessage = await Message.create({ name, email, subject, message });

    // 2. Send email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // you can swap for other SMTP providers
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form: ${subject}`,
      html: `
        <h3>You got a new message from your portfolio site</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(201).json({ message: "Message sent successfully", newMessage });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
