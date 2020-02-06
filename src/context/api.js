import React, { createContext } from 'react';

const apiUrl = 'http://localhost:3000';

const apiCall = async ({
  method,
  url,
}) => {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const body = await response.json();
  return {
    status: response.status,
    body,
  };
}

export const apiMethods = {
  apiGetUsers: () => apiCall({
    method: 'GET',
    url: apiUrl + '/mock/users.json',
  }),
  apiGetFacilities: () => apiCall({
    method: 'GET',
    url: apiUrl + '/mock/facilities.json',
  }),
  apiGetGallery: () => apiCall({
    method: 'GET',
    url: apiUrl + '/mock/gallery.json',
  }),
};

export const ApiContext = createContext({});

const ApiProvider = ({ children }) => {
  return (
    <ApiContext.Provider value={apiMethods}>
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;
