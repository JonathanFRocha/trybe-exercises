const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, callback) => { callback(null, 'uploads'); },
  filename: (req, file, callback) => { callback(null, `${Date.now()}-${file.originalname}`); },
});

const fileFilter = (req, file, cb) => {
  console.log(file.mimetype);
  if (file.mimetype !== 'image/png') {
    req.fileValidationError = true;
    return cb(null, false);
  }
  cb(null, true);
};

const upload = multer({ fileFilter, storage });

const uploadRoute = express.Router();

uploadRoute.post('/', upload.single('file'), fileFilter, (req, res) => {
  const { file } = req;
  console.log(file);
  if (req.fileValidationError) { 
    return res.status(403).send({ error: { message: 'Extension must be `png`' } }); 
  }
  if (!file) return res.status(404).json({ err: 'file not found' });
  res.status(200).json({ file: 'ok' });
});

module.exports = uploadRoute;