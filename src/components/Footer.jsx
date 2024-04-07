import React from 'react'
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube,
  } from 'react-icons/fa';


const style = {
    icon: `text-2xl cursor-pointer text-[#5651e5]`,
    h1: `text-3xl md:text-4xl font-bold`,
    aTag: `no-underline text-inherit`
}

function Footer() {
  return (
        <div className='w-full py-16 bg-gray-200 text-black'>
            <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
                <div className='sm:flex text-center justify-between items-center'>
                <h1 className={style.h1}>PARADISE.</h1>
                <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                    <a href="https://www.facebook.com/goborabora" target='-blank'><FaFacebook className={style.icon} /></a>
                    <FaTwitter className={style.icon} />
                    <FaYoutube className={style.icon} />
                    <FaPinterest className={style.icon} />
                    <a href="https://www.instagram.com/visitmaldives/" target='-blank'><FaInstagram className={style.icon} /></a>
                </div>
                </div>
            </div>
        </div>
    
    
  )
}

export default Footer