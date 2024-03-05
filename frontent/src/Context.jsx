import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ContextProvider = createContext();

const Context = ({ children }) => {
      
  const [value, setValue] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3009/api/data", { withCredentials: true });
      console.log(response);
      setValue(response.data);
    } catch (error) {
      console.log(error);
    }
  };
 
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ContextProvider.Provider value={{ value }}>
      {children}
    </ContextProvider.Provider>
  );
}

export default Context;
