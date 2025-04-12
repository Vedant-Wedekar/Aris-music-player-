const express = require('express');
const router = express.Router();
const Playlist = require('../models/Playlist');

router.post('/', async (req, res) => {
  const { name, userId, songs } = req.body;
  const playlist = new Playlist({ name, userId, songs });
  await playlist.save();
  res.json(playlist);
});

router.get('/:userId', async (req, res) => {
  const playlists = await Playlist.find({ userId: req.params.userId }).populate('songs');
  res.json(playlists);
});

module.exports = router;
