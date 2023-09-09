import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { playTrack, pauseTrack, setVolume, openPlayer } from '../../store/MusicPlayer/playerSlice';

function MusicPlayer() {
  const currentTrack = useSelector((state) => state.player.currentTrack);
  const isPlaying = useSelector((state) => state.player.isPlaying);
  const volume = useSelector((state) => state.player.volume);
  const dispatch = useDispatch();

  const playerOpen = useSelector((state) => state.player.playerOpen);

  if (!playerOpen) {
    return null;
  }

  const handlePlay = (track) => {
    dispatch(playTrack(track));
  };

  const handlePause = () => {
    dispatch(pauseTrack());
  };

  const handleVolumeChange = (newVolume) => {
    dispatch(setVolume(newVolume));
  };

  return (
    <div className="player">
      <h2>Music Player</h2>
      {currentTrack && (
        <div className="current-track">
          <p>Now Playing: {currentTrack}</p>
        </div>
      )}
      <div className="controls">
        <button onClick={() => handlePlay('Your Track Name')}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => handleVolumeChange(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default MusicPlayer;
