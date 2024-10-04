import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ImageScrollbar from './ImageScrollbar';

const PropertyDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const { property } = location.state || {}; // Get the property from state

    if (!property) {
        return <div>No property data available</div>;
    }

    console.log('Property Photos:', property.photos);

    const getPhotoUrl = (photoID) => {
        return `https://bayut-production.s3.eu-central-1.amazonaws.com/image/${photoID}/...`; // Adjust this URL structure accordingly
    };


    return (
        <div>
            <div className='m-auto max-w-[1048px] pt-10'>
                <img
                    src={property.coverPhoto.url}
                    alt={`Property at ${property.title}`}
                    className="w-full max-h-[1048px] rounded-lg object-cover"
                />

                <div className='flex border-b-[1px] justify-between pb-5'>
                    <div>
                        {property.location.map((loc, index) => (
                            <span key={loc.id}>{loc.name}{index < property.location.length - 1 ? ', ' : ''}</span>
                        ))}
                    </div>
                    <div className='text-[20px] font-bold'>Price: ${property.price}</div>
                </div>

                <h1>{property.name}</h1>
                <p>{property.description}</p>
                <div>Rooms: {property.rooms}</div>
                <div>Area: {property.area} sqft</div>
            </div>
        </div>
    );
};

export default PropertyDetails;


