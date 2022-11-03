import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

function FlyToMap({ position }) {
  const map = useMap();

  useEffect(() => {
    map.setView(position);
  }, [position]);

  return null;
}

export default FlyToMap;
