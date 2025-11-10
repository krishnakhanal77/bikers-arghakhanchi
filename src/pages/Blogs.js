import React from 'react';
import { blogData } from '../data';
import SliderCard from '../components/SliderCard';

const Blogs = () => {
  return (
    <div className="bg-primary-dark text-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-accent">
          Explore Our Destinations
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog, index) => (
            <SliderCard
              key={index}
              id={index}
              name={blog.title}
              blogText={blog.description}
              image={blog.images[0]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;