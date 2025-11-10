import React from 'react';
import { destinationData } from '../data';

const ExploreDestinationCard = () => {
  return (
    <div className="py-12">
      <div className="pt-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {destinationData.map((destination, index) => (
          <div key={index} className="rounded-lg overflow-hidden bg-secondary-dark text-white shadow-lg flex flex-col">
            <div className="overflow-hidden h-56">
              <img
                className="w-full h-full object-cover"
                src={destination.image}
                alt={destination.name}
              />
            </div>
            <div className="px-6 py-4 flex-grow">
              <div className="font-bold text-xl mb-2 text-accent">{destination.name}</div>
              <p className="text-gray-300 text-base">
                {destination.description}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {destination.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreDestinationCard;
