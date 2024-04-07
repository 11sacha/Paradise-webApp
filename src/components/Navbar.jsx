import React, { useState } from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube, FaTwitter } from 'react-icons/fa'


const style = {
    icon: `text-2xl cursor-pointer text-[#5651e5]`,
    h1Mobile: `text-3xl md:text-4xl font-bold`,
    dropdownOn: `md:hidden absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-5 flex flex-col`,
    dropdownOff: `absolute left-[-100%] top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col`,
    titleOn: `block text-3xl md:text-4xl font-bold`,
    titleOff: `hidden:sm text-3xl md:text-4xl font-bold`
}

function Navbar() {
    const [nav, setNav] = useState(false)
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
        {/* Web menu */}
        <div>
            <h1 onClick={handleNav} className={ logo ? style.titleOff : style.titleOn }>PARADISE.</h1>
        </div>
        <ul className='hidden md:flex'>
            <li className='p-4 text-xl'>Home</li>
            <li className='p-4 text-xl'>Destinations</li>
            <li className='p-4 text-xl'>Travel</li>
            <li className='p-4 text-xl'>View</li>
            <li className='p-4 text-xl'>Book</li>
        </ul>
        <div className='hidden md:flex'>
            <BiSearch className='mr-3' size={20} />
            <BsPerson size={20} />
        </div>
        {/* Menu Icon */}
        <div onClick={handleNav} className='md:hidden z-10'>
            { nav ? <AiOutlineClose size={20} className='text-[#000]' /> : <HiOutlineMenuAlt4 size={20} /> }
        </div>

        {/* Mobile menu dropdown */}
        <div className={ nav ? style.dropdownOn : style.dropdownOff }>
            <ul>
                <h1 className={style.h1Mobile}>PARADISE.</h1>
                <li className='p-4 text-xl border-b'>Home</li>
                <li className='p-4 text-xl border-b'>Destinations</li>
                <li className='p-4 text-xl border-b'>Travel</li>
                <li className='p-4 text-xl border-b'>View</li>
                <li className='p-4 text-xl border-b'>Book</li>
                <div className='flex flex-col'>
                    <button 
                    className='my-6 p-3 border bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white rounded-md'>
                        Search</button>
                    <button 
                    className='p-3 border bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white rounded-md'>
                        Account</button>
                </div>
                <div className='flex justify-between mt-5'>
                    <FaFacebook className={style.icon} />
                    <FaTwitter className={style.icon} />
                    <FaYoutube className={style.icon} />
                    <FaPinterest className={style.icon} />
                    <FaInstagram className={style.icon} />
                </div>
            </ul>

        </div>
    </div>
  )
}

export default Navbar