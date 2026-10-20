const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();
const FILES_DIR = path.join(__dirname, '..', 'files');

const FILES = {
  pdf: { file: 'Komal_CV.pdf', type: 'application/pdf' },
  docx: {
    file: 'Komal_CV.docx',
    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  },
};

// GET /api/cv/pdf  and  GET /api/cv/docx
router.get('/:format', (req, res) => {
  const entry = FILES[req.params.format];
  if (!entry) return res.status(404).json({ message: 'Unknown CV format. Use pdf or docx.' });

  const filePath = path.join(FILES_DIR, entry.file);
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: 'CV file not found on the server.' });
  }

  res.setHeader('Content-Type', entry.type);
  res.download(filePath, entry.file);
});

module.exports = router;
