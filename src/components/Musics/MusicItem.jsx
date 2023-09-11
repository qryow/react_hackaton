import React, { useState, useRef, useEffect } from 'react';
import style from '../../styles/index.module.css';
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { deleteMusic } from '../../store/musics/musicActions';
import more from '../../img/More.svg'
import MusicEdit from './MusicEdit';

const MusicItem = ({ music }) => {
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });

  const { title, artist, artwork, album, id } = music;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const musicItemRef = useRef(null);

  const handleContextMenu = (e) => {
    e.preventDefault();
    const clickX = e.clientX;
    const clickY = e.clientY;
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    const contextMenuW = 220;
    const contextMenuH = 250;

    // это позиция которая не дает контекстное меню выйти за рамки экрана
    const maxX = screenW - contextMenuW;
    const maxY = screenH - contextMenuH;

    const posX = clickX > maxX ? maxX : clickX;
    const posY = clickY > maxY ? maxY : clickY;

    setContextMenuPosition({ x: posX, y: posY });
    setIsContextMenuVisible(true);
  };

  const closeContextMenu = () => {
    setIsContextMenuVisible(false);
  };

  // Обработчик клика на document для закрытия контекстного меню
  const handleDocumentClick = (e) => {
    if (!musicItemRef.current.contains(e.target)) {
      closeContextMenu();
    }
  };

  // Добавление и удаление обработчика при монтировании и размонтировании компонента
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleEditClick = () => {
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
  };

  return (
    <div className={style.music_item} ref={musicItemRef}>
      <p>{id}</p>
      <img src={artwork} alt={artwork} />
      <div>
        <p className={style.music_title}>{title}</p>
        <p>{artist}</p>
      </div>
      <p className={style.music_item_album}>{album}</p>

      <div className={style.context_menu_button} onClick={handleContextMenu}>
        <img src={more} alt="" />
      </div>

      {isContextMenuVisible && (
  <div
    className={style.context_menu}
    style={{ left: contextMenuPosition.x, top: contextMenuPosition.y }}
  >
    <div onClick={handleEditClick}>
      <FaEdit />
      <span>Редактировать</span>
    </div>
    <div onClick={() => dispatch(deleteMusic({ id }))}>
      <FaTrash />
      <span>Удалить</span>
    </div>
  </div>
)}

      {isEditModalOpen && (
        // <MusicEdit id={id} onClose={handleCloseEditModal} />
        <MusicEdit id={id}  />
      )}
    </div>
  );
};

export default MusicItem;
