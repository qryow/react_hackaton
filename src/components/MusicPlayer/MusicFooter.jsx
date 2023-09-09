import React, { useRef, useState, useEffect } from 'react';
import './PlayerStyle.css';

const MusicPlayer = ({ url }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

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
    <div className='music_player'>
      <audio ref={audioRef} src={url} />
      <button onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default MusicPlayer;

