import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const ConnectModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    onClose(); // Close the modal after submission
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>
        <h1 className="text-3xl font-bold mb-4">Connect with Us</h1>
        <p className="text-lg mb-6">
          We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="interest" className="block text-gray-700">Interest</label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            >
              <option value="" disabled>Select an option</option>
              <option value="buying">Buying</option>
              <option value="selling">Selling</option>
              <option value="media">Media</option>
              <option value="area information">Area Information</option>
              <option value="home validation">Home Validation</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-black-100 text-white py-2 px-4 rounded-md hover:bg-black"
          >
            Send
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default ConnectModal;


