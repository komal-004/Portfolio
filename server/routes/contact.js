const express = require('express');
const rateLimit = require('express-rate-limit');
const Message = require('../models/Message');

const router = express.Router();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many messages sent. Please try again in a few minutes.' },
});

// POST /api/contact
router.post('/', limiter, async (req, res) => {
  const { name, email, message } = req.body || {};

  if (![name, email, message].every((v) => typeof v === 'string' && v.trim())) {
    return res.status(400).json({ message: 'Name, email and message are all required.' });
  }

  try {
    await Message.create({ name, email, message });
    res.status(201).json({ message: 'Thanks! Your message has been sent.' });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const first = Object.values(err.errors)[0];
      return res.status(400).json({ message: first.message });
    }
    console.error(err.message);
    res.status(500).json({ message: 'Could not save your message. Please try again later.' });
  }
});

module.exports = router;
