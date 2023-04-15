import React, { useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";

const LocationInput = () => {
  const [address, setAddress] = useState('');

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
        .then((response) => response.json())
        .then((data) => {
          const address = data.display_name;
          setAddress(address);
        });
    });
  };

  return (
    <div className='geo-style'>
      <input type="text" className="input-style" value={address} onChange={(e) => setAddress(e.target.value)} />
      <IoLocationOutline onClick={handleLocation} className="input-style" size={18}/>
    </div>
  );
};

export default LocationInput;
