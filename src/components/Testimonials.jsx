import React from 'react';
import { testimonials } from '../constants';

const Testimonials = () => {
    return (
      <div className='flex flex-col items-center' style={{ marginTop: '150px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '150px' }}>
        <h2 className='text-[30px] tracking-extralg mb-[50px]'>Testimonials</h2>
        <div className='h-400px flex space-x-4 justify-center gap-[100px]'>
            {testimonials.map((testimonial, index) => (
            <div key={index} className='bg-white p-6 rounded-lg shadow-md flex-none w-80 flex flex-col items-center gap-5'>
                <p className='text-gray-700 italic'>" {testimonial.testimonial} "</p>
                <h2 className='text-xl tracking-large mb-2'>- {testimonial.name}</h2>
            </div>
            ))}
        </div>
      </div>
    );
  };

export default Testimonials;
