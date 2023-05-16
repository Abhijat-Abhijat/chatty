import React, { useState } from "react";
import "./MusicPlayer.css";
import KahaniSuno from "./assets/KahaniSuno.mp3";
function MusicPlayer(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const isMusicPlayerVisible = props.isMusicPlayerVisible;
  const songs = [
    {
      id: 1,
      title: "Song 1",
      artist: "Artist 1",
      url: "https://example.com/song1.mp3",
    },
    {
      id: 2,
      title: "Kahani Suno",
      artist: "Kaifi Khalil",
      url: KahaniSuno,
    },
    {
      id: 2,
      title: "Kahani Suno",
      artist: "Kaifi Khalil",
      url: KahaniSuno,
    },
    {
      id: 2,
      title: "Kahani Suno",
      artist: "Kaifi Khalil",
      url: KahaniSuno,
    },
    {
      id: 2,
      title: "Kahani Suno",
      artist: "Kaifi Khalil",
      url: KahaniSuno,
    },
    {
      id: 2,
      title: "Kahani Suno",
      artist: "Kaifi Khalil",
      url: KahaniSuno,
    },
    // add more songs here as needed
  ];

  const handlePlayClick = (song) => {
    if (currentSong === song && isPlaying) {
      setIsPlaying(false);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  return (
    <div className="music-player">
      <h2>Music Player</h2>
      <div className="song_list">
        {songs.map((song) => (
          <div key={song.id} className="song">
            <h3>
              {song.title} , {song.artist}
            </h3>
            <button onClick={() => handlePlayClick(song)}>
              {currentSong === song && isPlaying ? "Pause" : "Play"}
            </button>
          </div>
        ))}
      </div>
      {currentSong && (
        <audio src={currentSong.url} autoPlay={isPlaying} controls />
      )}
    </div>
  );
}

export default MusicPlayer;
