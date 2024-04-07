import React from 'react'
import beachVid from '../assets/beachVid.mp4'
import { AiOutlineSearch } from 'react-icons/ai'

const style = {
    h1: `text-3xl md:text-4xl font-bold`,
    h2: `text-3xl font-bold py-4`,
    form: `flex justify-between items-center font-[Poppins] max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90`,
    input: `bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none`,
    icon: `text-2xl cursor pointer`,
    button: `p-3 border bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white rounded-md`
}

function Hero() {
  return (
    <div className='w-full h-screen relative'>
        <video 
            src={beachVid} 
            className='w-full h-full object-cover' 
            autoPlay 
            loop 
            muted 
        />
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
            <h1 className={style.h1}>First Class Travel</h1>
            <h2 className={style.h2}>Top 1% Locations Worldwide</h2>
            <form className={style.form}>
                <div>
                    <input 
                        className={style.input}
                        type="text" 
                        placeholder='Search destinations'
                        style={{font: 'Poppins'}}/>
                </div>
                <div>
                    <button className={style.button}>
                        <AiOutlineSearch className={style.icon} size={20} style={{color: '#fff'}} />
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Hero