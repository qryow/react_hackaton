import React, { useRef, useState, useEffect } from 'react';
import './PlayerStyle.css';

const FooterMusic = ({ music }) => {
  const { title, artist, artwork, album, url } = music;
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5); // Начальное значение громкости

  useEffect(() => {
    // Обновляем текущее время и длительность аудио при воспроизведении
    audioRef.current.addEventListener('timeupdate', () => {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    });

    // Очищаем слушатели событий при размонтировании компонента
    return () => {
      audioRef.current.removeEventListener('timeupdate', () => {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
      });
    };
  }, []);

  useEffect(() => {
    // Устанавливаем громкость аудиоплеера
    audioRef.current.volume = volume;
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="music_player">
      <div className="music-info">
        <img src={artwork} alt={title} className="music-artwork" />
        <h2>{title}</h2>
        <p>{artist}</p>
        <p>{album}</p>
      </div>
      <div className="music-controls">
        <button onClick={togglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={(e) => {
            audioRef.current.currentTime = e.target.value;
            setCurrentTime(e.target.value);
          }}
        />
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
        />
      </div>
      <audio ref={audioRef} src={url} />
    </div>
  );
};

export default FooterMusic;
