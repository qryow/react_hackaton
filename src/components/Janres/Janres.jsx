  import React, { useState, useEffect } from 'react'
  import { useDispatch, useSelector } from 'react-redux'
  import { useNavigate } from 'react-router-dom'
  import { getJanres } from '../../helpers/functions'
  import { getMusicsJanre } from '../../store/musics/musicActions'
  import { setSelectedGenre, setSelectedSongs } from '../../store/musics/musicSlice';
  import { changeJanre } from '../../store/musics/musicSlice'
  import style from './styles/Janres.module.css'

  const Janres = () => {
    const [janres, setJanres] = useState([]);
    console.log(janres);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGenreClick = (genre) => {
      dispatch(setSelectedGenre(genre));
    };

    const getJanresData = async () => {
      let janres = await getJanres();
      setJanres(janres)
    }

    useEffect(() => {
      getJanresData();
      dispatch(getMusicsJanre());
    }, [])


    return (
      <div className={style.janrs}>
        <h2>Genres</h2>
        <div className={style.janrs__wrapper}>
        {janres.map((janre, index) => (
          <div key={index} className={style.janr__block} onClick={() => {
            handleGenreClick(janre)
            navigate(`/musics/${janre}`)
          }}>
            {janre}
          </div>
        ))}

        </div>
      </div>
    )
  }

  export default Janres

