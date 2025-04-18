const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  playlists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Playlist' }],
  likedSongs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }]
});

module.exports = mongoose.model('User', UserSchema);
