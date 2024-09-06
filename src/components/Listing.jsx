import React, { useEffect, useRef, useState } from 'react';
import { FetchApi } from '../utils/fetchAPI';
import { bed, bath, loading } from '../assets';

const Listing = () => {
  const [properties, setProperties] = useState(null);
  const isFetched = useRef(false); // Ref to track if data has been fetched

  useEffect(() => {
    const fetchData = async () => {
      if (isFetched.current) return; // Exit if already fetched

      try {
        const result = await FetchApi.getProperties();
        setProperties(result);
        isFetched.current = true; // Set flag to true after fetch
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once

  if (!properties) {
    return (
      <div className='listing-details flex items-center justify-center w-full h-full'>
        Loading...
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {properties.map((property) => (
          <div className="border p-4 rounded-lg shadow-lg" key={property.id}>
            <div className="listing-image mb-3 flex justify-center p-0">
              <img
                src={property.coverPhoto.url}
                alt={`Property at ${property.title}`}
                className="w-full sm:h-[200px] md:h-[150px] lg:h-[250px]  rounded-lg object-cover"
              />
            </div>
            <div className="listing-details">
              <div className="listing-price text-lg font-extrabold mb-2">
                ${Math.round(property.price * .25)}
              </div>
              <div className="listing-specs text-sm mb-2 space-y-[10px]">

                <div className='flex items-center gap-[12px]'>
                  <img
                    src={bed}
                    className='w-[25px] h-[25px]'
                  />
                  <div>
                    <span>{property.rooms === 0 ? 'Studio' : (property.rooms + ' bd')}</span>
                  </div>
                </div>
                <div className='flex items-center gap-[12px]'>
                  <img
                    src={bath}
                    className='w-[25px] h-[25px] '
                  />
                  <div>
                    <span >{property.baths}</span> ba
                  </div>
                </div>
                <div>
                  <span>{Math.round(property.area)}</span> sqft
                </div>
                <div className="listing-address text-sm mt-2">
                  {property.location
                    .slice() // Create a copy of the array
                    .sort((a, b) => b.level - a.level) // Sort in descending order based on level
                    .map((loc, index) => (
                      <React.Fragment key={loc.id}>
                        {loc.name}
                        {index < property.location.length - 1 ? ', ' : ''}
                      </React.Fragment>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;


