import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getJanres } from '../../helpers/functions'
import { getMusics } from '../../store/musics/musicActions'
import { changeJanre } from '../../store/musics/musicSlice'
import style from './styles/Janres.module.css'

const Janres = () => {
  const [janres, setJanres] = useState([]);
  //console.log(janres);

  const dispatch = useDispatch();

  const getJanresData = async () => {
    let janres = await getJanres();
    setJanres(janres)
  }

  useEffect(() => {
    getJanresData();
    //dispatch(getMusics());
  })

  return (
    <div className={style.janrs}>
      <h2>Genres</h2>
      <div className={style.janrs__wrapper}>

        <div className={style.janr__block}>
        </div>

        <div className={style.janr__block}>
        </div>

        <div className={style.janr__block}>
        </div>

        <div className={style.janr__block}>
        </div>

        <div className={style.janr__block}>
        </div>

        <div className={style.janr__block}>
        </div>





      </div>
    </div>
  )
}

export default Janres