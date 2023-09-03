import React, { useState } from 'react';
import style from '../styles/index.module.css';
import spotify from '../img/spotify icon.svg';
import home from '../img/home.svg';
import home2 from '../img/home2.svg';
import loop from '../img/loop.svg';
import loop2 from '../img/loop2.svg';
import library from '../img/Library.svg';
import library2 from '../img/Library2.svg'
import create from '../img/create.svg';
import create2 from '../img/create2.svg';
import liked from '../img/liked.svg';
import liked2 from '../img/liked2.svg';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [homeImage, setHomeImage] = useState(home);
  const [loopImage, setLoopImage] = useState(loop);
  const [libraryImage, setLibraryImage] = useState(library);
  const [createImage, setCreateImage] = useState(create);
  const [likedImage, setLikedImage] = useState(liked);

  const handleHomeClick = () => {
    setHomeImage(home2);
    setLoopImage(loop);
    setLibraryImage(library);
    setCreateImage(create);
    setLikedImage(liked);
    navigate('/homepage');
  };

  const handleLoopClick = () => {
    setHomeImage(home);
    setLoopImage(loop2);
    setLibraryImage(library);
    setCreateImage(create);
    setLikedImage(liked);
    navigate('/search');
  };

  const handleLibraryClick = () => {
    setHomeImage(home);
    setLoopImage(loop);
    setLibraryImage(library2);
    setCreateImage(create);
    setLikedImage(liked);
    navigate('/library');
  };

  const handleCreateClick = () => {
    setHomeImage(home);
    setLoopImage(loop);
    setLibraryImage(library);
    setCreateImage(create2);
    setLikedImage(liked);
    navigate('/create');
  };

  const handleLikedClick = () => {
    setHomeImage(home);
    setLoopImage(loop);
    setLibraryImage(library);
    setCreateImage(create);
    setLikedImage(liked2);
    navigate('/liked');
  };


  return (
    <div className={style.navbar}>
      <img onClick={() => navigate("/")} src={spotify} alt="spotify" />
      <div className={style.navbar_list}>
        <button onClick={handleHomeClick} className={style.list}>
          <img src={homeImage} alt="" />
          Home
        </button>
        <button onClick={handleLoopClick} className={style.list}>
          <img src={loopImage} alt="" />
          Search
        </button>
        <button onClick={handleLibraryClick} className={style.list}>
          <img src={libraryImage} alt="" />
          Your Library
        </button>
        <div className={style.down_buttons}>
          <button onClick={handleCreateClick} className={style.list}>
            <img src={createImage} alt="" />
            Create Playlist
          </button>
          <button onClick={handleLikedClick} className={style.list}>
            <img src={likedImage} alt="" />
            Liked Songs
          </button>
        </div>
      </div>
      <div className={style.navbar_down}>
        <p>Legal</p>
        <p>Privacy Center</p>
        <p>Privacy Policy</p>
        <p>Cookies</p>
        <p>About Ads</p>
      </div>
    </div>
  );
}

export default Navbar;