import React from 'react';
import { useParams } from 'react-router-dom';
import { blogData } from '../data';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData[id];

  if (!blog) {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <h1 className="text-4xl">Blog post not found!</h1>
      </div>
    );
  }

  return (
    <div className="bg-primary-dark text-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4 text-center text-accent">
          {blog.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {blog.images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg h-64">
              <img
                src={image}
                alt={`${blog.title} - view ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary-dark p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-accent">
              Description
            </h2>
            <p className="text-gray-300 leading-relaxed">{blog.description}</p>
          </div>

          <div className="bg-secondary-dark p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-accent">
              Ride Tips
            </h2>
            <p className="text-gray-300 leading-relaxed">{blog.ride_tips}</p>
          </div>

          <div className="bg-secondary-dark p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-3 text-accent">
              Highlight
            </h2>
            <p className="text-gray-300 leading-relaxed">{blog.highlight}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
