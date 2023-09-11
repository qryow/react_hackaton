// ошибка
import React, { useState } from 'react';
import style from '../../styles/index.module.css';
import spotify from '../../img/3DSpotify.svg';
import { setActiveProfile, togglePrimeStatus } from '../../store/profile/profileSlice';
import { useDispatch, useSelector } from 'react-redux';
import left from '../../img/left.svg';
import { getProfile } from '../../store/profile/profileActions';


const Order = () => {
  const [selectedText, setSelectedText] = useState(null);

  const textContainers = [
    { id: 'textContainer1', text: 'Individual', description: '$10.99/month after offer period' },
    { id: 'textContainer2', text: 'Duo', description: '$14.99/month after offer period' },
    { id: 'textContainer3', text: 'Family', description: '$16.99/month after offer period' },
    { id: 'textContainer4', text: 'Student', description: '$5.99/month after offer period' },
  ];
  
  const dispatch = useDispatch();

  const handleItemClick = (event, newText) => {
    event.preventDefault();
    setSelectedText(newText);
  };

  const activeProfile = useSelector(state => state.profiles.activeProfile);
  const primeStatus = activeProfile ? activeProfile.primeStatus : false;  

  const handleTogglePrimeStatus = () => {
    if (primeStatus) {
      dispatch(togglePrimeStatus());
    }
  };



  return (
    <div className={style.order_premium}>
      <div className={style.order_premium_elements}>
        <div className={style.order_premium_elements_top}>
          <img src={spotify} alt="" />
          <h1>Spotify Premium</h1>
        </div>
        <div className={style.dropdown}>
          <div className={style.dropdown_content}>
            {textContainers.map((container) => (
              <a
                key={container.id}
                href="#"
                onClick={(e) => handleItemClick(e, container.text)}
              >
                {container.text}
              </a>
            ))}
          </div>
        </div>
        {textContainers.map((container) => (
          selectedText === container.text && (
            <div key={container.id} id={container.id} className={style.info_container}>
              <h2>{selectedText}</h2>
              <p>{container.description}</p>
            </div>
          )
        ))}
        <button className={style.addbtn} onClick={handleTogglePrimeStatus}>add</button>
      </div>
      <button className={style.homebtn}>
        <img src={left} alt="" />
        <p>Home</p>
      </button>
    </div>
  );
};

export default Order;
