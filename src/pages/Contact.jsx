import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    purpose: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Here you would typically send the data to a server
    alert('Thank you for your message! Check the console for the form data.');
    setFormData({
      name: '',
      email: '',
      contactNumber: '',
      purpose: '',
    });
  };

  return (
    <div className="bg-primary-dark text-white min-h-screen flex items-center justify-center py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-secondary-dark p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-6 text-center text-accent">
            Contact Us
          </h1>
          <p className="text-center text-gray-400 mb-8">
            Have a question or want to work with us? Fill out the form below.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contactNumber"
                className="block text-gray-300 mb-2"
              >
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="purpose" className="block text-gray-300 mb-2">
                Purpose
              </label>
              <textarea
                id="purpose"
                name="purpose"
                rows="4"
                value={formData.purpose}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-white font-bold uppercase rounded-lg shadow-md hover:bg-amber-500 hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-600 active:shadow-lg transition duration-150 ease-in-out"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;