import React from 'react';
import MyMapComp from './MyMapComp';
import Listing from './Listing';

const HomeSearch = () => {
  return (
    <div className="relative flex h-screen bg-white">
      <MyMapComp className="flex-none w-1/2" /> {/* Adjust width as needed */}
      <Listing className="flex-1" />
    </div>
  );
};

export default HomeSearch;




//AIzaSyBIJG0MXNpRmUK0_yGd9qQDNpE7D83rYp4