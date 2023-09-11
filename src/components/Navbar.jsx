import React, { useState, useEffect, useRef } from 'react';
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
import { useSelector, useDispatch } from 'react-redux';
import { getProfile } from '../store/profile/profileActions';


const Navbar = () => {
  const navigate = useNavigate();
  const [homeImage, setHomeImage] = useState(home);
  const [loopImage, setLoopImage] = useState(loop);
  const [libraryImage, setLibraryImage] = useState(library);
  const [createImage, setCreateImage] = useState(create);
  const [likedImage, setLikedImage] = useState(liked);

  const [isContextMenuOpen, setContextMenuOpen] = useState(false);
  const contextMenuRef = useRef(null);

  const handleMenuCreate = () => {
    setContextMenuOpen(!isContextMenuOpen);
  };

  const handleOutsideClick = (e) => {
    if (contextMenuRef.current && !contextMenuRef.current.contains(e.target)) {
      setContextMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

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

  const dispatch = useDispatch();

  // dispatch(getProfile())
  const user = useSelector(state => state.profiles.activeProfile);
  console.log(user);
  const primeStatus = user ? user.primeStatus : true;
  console.log(primeStatus)


  return (
    <div className={style.navbar}>
      <img onClick={() => navigate("/homepage")} src={spotify} alt="spotify" />
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
          <button onClick={handleMenuCreate} className={style.list} ref={contextMenuRef}>
            <img src={createImage} alt="" />
            Create
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
      {isContextMenuOpen &&(
        <div className={style.context_menu}>
          {primeStatus && (
            <button onClick={handleCreateClick}>
              <img src={createImage} alt="" />
              Create Music
            </button>
          )}
          <div>Item 2</div>
          <div>Item 3</div>
        </div>
      )}
    </div>
  );
}

export default Navbar;