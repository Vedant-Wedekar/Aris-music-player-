import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AudioPlayer from '../components/AudioPlayer';

function Home() {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/songs')
      .then((res) => setSongs(res.data))
      .catch((err) => {
        console.error('Error fetching songs:', err);
        alert('Error loading songs.');
      });
  }, []);

  return (
    <div className="p-4 pb-28">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {songs.length > 0 ? (
          songs.map((song) => (
            <div
              onClick={() => setCurrentSong(song)}
              key={song._id}
              className="bg-white dark:bg-gray-700 p-4 shadow rounded cursor-pointer hover:scale-105 transition"
            >
              <h2 className="text-lg font-bold">{song.title}</h2>
              <p className="text-sm">{song.artist}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No songs available.</p>
        )}
      </div>
      <AudioPlayer currentSong={currentSong} />
    </div>
  );
}

export default Home;
