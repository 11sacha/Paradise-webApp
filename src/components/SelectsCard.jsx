import React from 'react'

function SelectsCard({ bg, text }) {
  return (
    <div className='relative'>
        <img className='w-full h-full object-cover transform transition-transform hover:scale-110' src={bg} alt="" />
        <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
            <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
                {text}
            </p>
        </div>
    </div>
  )
}

export default SelectsCard