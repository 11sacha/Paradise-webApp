import React from 'react'

import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import KeyWest from '../assets/keywest.jpg';

const style = {
    component: `max-w-[1240px] mx-auto py-16 px-4 text-center`,
    images: `w-full h-full object-cover`,
    divImg: `grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4`,
    h1: `text-3xl md:text-4xl font-bold`
}

function Destinations() {
  return (
    <div className={style.component}>
        <h1 className={style.h1}>All-Inclusive Resorts</h1>
        <p className='py-4'>On the World's best beaches</p>
        <div className={style.divImg}>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={BoraBora} alt="/" />
            <img className={style.images} src={BoraBora2} alt="/" />
            <img className={style.images} src={Maldives} alt="/" />
            <img className={style.images} src={Maldives2} alt="/" />
            <img className={style.images} src={KeyWest} alt="/" />
        </div>
    </div>
  )
}

export default Destinations