const express = require('express');
const router = express.Router();
const Song = require('../models/song');
const multer = require('multer');

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

router.post('/upload', upload.fields([{ name: 'song' }, { name: 'cover' }]), async (req, res) => {
  const song = new Song({
    title: req.body.title,
    artist: req.body.artist,
    url: req.files.song[0].path,
    coverImage: req.files.cover[0].path,
    duration: req.body.duration,
    genre: req.body.genre,
    uploadedBy: req.body.userId
  });
  await song.save();
  res.json(song);
});

router.get('/', async (req, res) => {
  const songs = await Song.find().populate('uploadedBy');
  res.json(songs);
});

module.exports = router;
