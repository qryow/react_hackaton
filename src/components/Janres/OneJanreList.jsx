import React from 'react'
import JanreList from './JanreList'
import style from './styles/Janres.module.css'

const OneJanreList = () => {
  return (
    <>
      <div className={style.search_navbar}>
      </div>
      <JanreList />
    </>
  )
}

export default OneJanreList