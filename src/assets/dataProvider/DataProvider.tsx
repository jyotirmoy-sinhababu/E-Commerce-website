import { createContext, useEffect, useState } from 'react';

import axios from 'axios';

export const dataContext = createContext<any>('');

const DataProvider = ({ children }: any) => {
  const [carouselData, setCarouselData] = useState<[]>();

  useEffect(() => {
    fetchCarouselData();
  }, []);

  const fetchCarouselData = async () => {
    try {
      await axios.get('https://dummyjson.com/products?limit=10').then((res) => {
        setCarouselData(res.data.products);
        console.log(res.data.products);
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <dataContext.Provider value={{ carouselData }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
