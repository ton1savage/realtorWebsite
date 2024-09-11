// src/components/PropertyDetails.jsx
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const PropertyDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const { property } = location.state || {}; // Get the property from state

    if (!property) {
        return <div>No property data available</div>;
    }

    return (
        <div>
            <h1>{property.name}</h1>
            <p>{property.description}</p>
            <img src={property.coverPhoto.url} alt={property.name} />
            <div>Price: ${property.price}</div>
            <div>Rooms: {property.rooms}</div>
            <div>Area: {property.area} sqft</div>
            <div>
                Location:
                {property.location.map((loc, index) => (
                    <span key={loc.id}>{loc.name}{index < property.location.length - 1 ? ', ' : ''}</span>
                ))}
            </div>
        </div>
    );
};

export default PropertyDetails;

