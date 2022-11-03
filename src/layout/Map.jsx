import { useContext } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import FlyToMap from '../components/map/FlyToMap';
import Loading from '../components/ui/Loading';
import IpGeoContext from '../store/ip-geo-context';
import styles from './Map.module.css';

function LeafletMap() {
  const ipGeoContext = useContext(IpGeoContext);

  return (
    <>
      {!ipGeoContext.isMapLoading ? (
        <div className={`container ${styles['leaflet-map']}`}>
          <MapContainer
            center={[ipGeoContext.ipData.lat, ipGeoContext.ipData.lon]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker
              position={[ipGeoContext.ipData.lat, ipGeoContext.ipData.lon]}
            />
            <FlyToMap
              position={[ipGeoContext.ipData.lat, ipGeoContext.ipData.lon]}
            />
          </MapContainer>
        </div>
      ) : (
        <Loading message={'Loading map!'} />
      )}
    </>
  );
}

export default LeafletMap;
