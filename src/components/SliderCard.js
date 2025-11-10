import React from 'react';
import { NavLink } from 'react-router-dom';

const SliderCard = ({ blogText, name, image, id }) => {
  return (
    <div className="max-w-[95%] m-auto bg-secondary-dark text-white rounded-lg overflow-hidden group p-4">
      <NavLink to={`/blogs/${id}`}>
        <div className="overflow-hidden h-56 rounded-lg">
          <img
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            src={image}
            alt={name}
          />
        </div>
      </NavLink>
      <div className="pt-4">
        <h4 className="text-xl font-semibold mb-2 truncate group-hover:text-accent">
          {name}
        </h4>
        <p className="mb-4 text-sm text-gray-300 text-justify h-20 overflow-hidden">
          {blogText.slice(0, 150)}...
        </p>
        <NavLink
          to={`/blogs/${id}`}
          className="inline-block px-6 py-2.5 bg-accent text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-amber-500 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-600 active:shadow-lg transition duration-150 ease-in-out"
        >
          Read more
        </NavLink>
      </div>
    </div>
  );
};

export default SliderCard;