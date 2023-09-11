import React, { useState, useRef, useEffect } from 'react';
import style from '../../styles/index.module.css';
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteMusic } from '../../store/musics/musicActions';
import more from '../../img/More.svg'
import MusicEdit from './MusicEdit';
import { setSelectedSong } from '../../store/musics/musicSlice';

const MusicItem = ({ music }) => {
  const { title, artist, artwork, album, id } = music;
  const [modalActive, setModalActive] = useState(false);


  const dispatch = useDispatch();
  const musicItemRef = useRef(null);


  const handleMusicClick = () => {
    dispatch(setSelectedSong(music));
  };

  const handleContextMenu = (e) => {
    setModalActive(true);
  };

  const closeContextMenu = () => {
    setModalActive(false);
  };

  const handleDocumentClick = (e) => {
    if (!musicItemRef.current.contains(e.target)) {
      closeContextMenu();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleEditClick = () => {
    handleMusicClick()
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
  };

  return (
    <>
    <div>
      <div className={style.music_item} ref={musicItemRef}>
        <p>{id}</p>
        <img src={artwork} alt={artwork} onClick={handleMusicClick} />
        <div>
          <p className={style.music_title}>{title}</p>
          <p>{artist}</p>
        </div>
        <p className={style.music_item_album}>{album}</p>

        <div className={style.context_menu_button} onClick={handleContextMenu}>
          <img src={more} alt="more" />
        </div>

        {modalActive && (
          <div
            className={style.context_menu_item}
          >
            <div onClick={handleEditClick}>
              <FaEdit />
              <span>Edit</span>
            </div>
            <div onClick={() => dispatch(deleteMusic({ id }))}>
              <FaTrash />
              <span>Delete</span>
            </div>
          </div>
        )}

      </div>

        {isEditModalOpen && (
          <MusicEdit onClose={handleCloseEditModal} active={isEditModalOpen} setActive={setEditModalOpen}  />
        )}
    </div>
    
    </>
  );
};

export default MusicItem;