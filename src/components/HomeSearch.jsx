import React, { useState } from 'react';
import MyMapComp from './MyMapComp';
import Listing from './Listing';

const HomeSearch = () => {
  const [properties, setProperties] = useState(null);  // State to hold properties

  return (
    <div className="relative flex h-screen bg-white">
      {/* Pass properties as a prop to MyMapComp */}
      <MyMapComp className="flex-none w-1/2" properties={properties} />
      
      {/* Listing will fetch the data and set properties */}
      <Listing className="flex-1" setProperties={setProperties} />
    </div>
  );
};

export default HomeSearch;





//AIzaSyBIJG0MXNpRmUK0_yGd9qQDNpE7D83rYp4