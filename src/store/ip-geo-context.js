import React from 'react';

const IpGeoContext = React.createContext({
  ipData: {},
  searchTerm: '',
  isMapLoading: true,
  hasError: null,
  handleIpGeoData: () => {},
  handleSearchTerm: query => {},
  fetchUserQuery: () => {},
});

export default IpGeoContext;
