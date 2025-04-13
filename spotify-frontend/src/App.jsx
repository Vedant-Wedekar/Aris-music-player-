import React, { useState } from 'react';
import AudioPlayer from './components/AudioPlayer';

function App() {
  const [songs, setSongs] = useState([
    {
      _id: '67fb6f34a51eae26a66333a6',
      title: 'Welcome to New York',
      artist: 'Anushka',
      url: '/uploads/1744531252643-Welcome To New York (Taylor\'s Version)-yt.savetube.me.mp3',
      coverImage: '/uploads/1744531252658-Taylor_Swift_-_Folklore.png',
    },
    // Add more songs if needed
  ]);

  return (
    <div className="App">
      <h1>Audio Player</h1>
      {songs.map((song) => (
        <AudioPlayer key={song._id} song={song} />
      ))}
    </div>
  );
}

export default App;
