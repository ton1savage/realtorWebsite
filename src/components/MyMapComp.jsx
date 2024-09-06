import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useRef } from "react";

const MyMapComp = ({ properties }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBIJG0MXNpRmUK0_yGd9qQDNpE7D83rYp4",
  });

  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && properties) {
      const bounds = new window.google.maps.LatLngBounds();
      properties.forEach(property => {
        if (property._geoloc?.lat && property._geoloc?.lng) {
          bounds.extend({
            lat: property._geoloc.lat,
            lng: property._geoloc.lng
          });
        }
      });
      mapRef.current.fitBounds(bounds);
    }
  }, [properties]);

  if (loadError) return <div>Error loading Google Maps</div>;
  if (!isLoaded) return <div>Loading Google Maps...</div>;

  console.log('Properties:', properties);

  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 33.4484, lng: -112.0740 }} // Initial center
      mapContainerClassName="map-container"
      onLoad={map => (mapRef.current = map)}  // Save the map instance
    >
      {properties && properties.map((property) => (
        <Marker
          key={property.id}
          position={{
            lat: property._geoloc?.lat || 33.4484,
            lng: property._geoloc?.lng || -112.0740
          }}
          title={`Property at ${property.title}`}
        />
      ))}
    </GoogleMap>
  );
};

export default MyMapComp;

