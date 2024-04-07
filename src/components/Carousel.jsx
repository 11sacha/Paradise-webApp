import React, {useState} from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'

const sliderData = [
    {
        url: 'https://images.unsplash.com/photo-1553570739-330b8db8a925?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        url: 'https://images.unsplash.com/photo-1615320367768-ddb3b60d30b1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        url: 'https://images.unsplash.com/photo-1537162998323-3d3675e0e87c?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        url: 'https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]

const style = {
    buttonL: `absolute top-[50%] text-3xl text-white cursor-pointer left-8`,
    buttonR: `absolute top-[50%] text-3xl text-white cursor-pointer right-8`
}

function Carousel() {
    const [slide, setSlide] = useState(0)
    const length = sliderData.length

    const prevSlide = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1)
    }

    const nextSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1)
    }

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
        
        <BsArrowLeftSquareFill 
            onClick={prevSlide} 
            className={style.buttonL} />
        <BsArrowRightSquareFill 
            onClick={nextSlide} 
            className={style.buttonR} />

        {sliderData.map((item, index) => (
            <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
                {index === slide && (<img className='w-full rounded-md' src={item.url} alt='/' />)}
            </div>
        ))}
    </div>
  )
}

export default Carousel