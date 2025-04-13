import React from 'react';

const AudioPlayer = ({ song }) => {
  if (!song || !song.url) {
    console.error('Invalid song or file path:', song);
    return <div>Invalid song or file path</div>;
  }

  return (
    <div className="audio-player">
      <h3>{song.title}</h3>
      <p>{song.artist}</p>
      <img src={song.coverImage} alt={song.title} />
      <audio controls>
        <source src={song.url} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
