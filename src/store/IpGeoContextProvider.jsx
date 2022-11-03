import React, { useEffect, useState } from 'react';
import { API_URL } from '../config/constants';
import IpGeoContext from './ip-geo-context';

function IpGeoContextProvider({ children }) {
  const [ipData, setIpData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [isMapLoading, setIsMapLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleIpGeoData = async function () {
    try {
      const res = await fetch(`${API_URL}`);
      const data = await res.json();

      if (data) {
        setIpData(data);
        setIsMapLoading(!isMapLoading);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchTerm = function (query) {
    setSearchTerm(query);
  };

  const fetchUserQuery = async function () {
    try {
      const res = await fetch(`${API_URL}/${searchTerm}`);
      const data = await res.json();

      if (data.status === 'fail') {
        setHasError(true);
        throw new Error('Search not found!');
      }

      if (data) {
        setHasError(false);
        setIpData(data);
      }
    } catch (error) {
      setHasError(true);
      throw new Error(error);
    }
  };

  useEffect(() => {
    handleIpGeoData();
  }, []);

  const initialContextValue = {
    ipData,
    searchTerm,
    isMapLoading,
    hasError,
    handleIpGeoData,
    handleSearchTerm,
    fetchUserQuery,
  };

  return (
    <>
      <IpGeoContext.Provider value={initialContextValue}>
        {children}
      </IpGeoContext.Provider>
    </>
  );
}

export default IpGeoContextProvider;
