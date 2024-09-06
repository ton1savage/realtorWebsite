import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const MyMapComp = () => {
    const center = useMemo(() => ({lat: 33.4484, lng: -112.0740}), []);
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyBIJG0MXNpRmUK0_yGd9qQDNpE7D83rYp4",
    });

    if (loadError) return <div>Error loading Google Maps</div>;
    if (!isLoaded) return <div>Loading Google Maps...</div>;

    return (
            <GoogleMap
                zoom={10}
                center={center}
                mapContainerClassName='map-container'
            >    
            </GoogleMap>
    );
};

export default MyMapComp;