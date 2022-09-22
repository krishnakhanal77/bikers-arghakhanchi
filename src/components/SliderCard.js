import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'

const SliderCard = ({ blogText, name, image, location }) => {
  return (
    <>
      <div className="max-w-sm bg-white rounded-sm border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mr-3">
        <div className="p-2">
          <NavLink to="#">
          <img className='h-[150px] w-[100%] ' src={image}  alt={name} />
          </NavLink>
          <h4 className='text-black text-lg font-medium mt-1 mb-0'>{name}</h4>
          <h5 className='text-black text-xs font-bold mb-2'>{location}</h5>
          <p className="mb-2 text-xs text-gray-700 dark:text-gray-400 text-justify">{blogText.slice(0, 65)}...</p>
          <Button>
            <NavLink to="/blogs" >
              Read more
            </NavLink>
          </Button>
        </div>
      </div>
    </>
  )
}

export default SliderCard