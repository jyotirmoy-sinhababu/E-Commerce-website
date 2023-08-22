import { createContext, useEffect, useState } from 'react';

import axios from 'axios';

export const dataContext = createContext<any>('');

const DataProvider = ({ children }: any) => {
  const [carouselData, setCarouselData] = useState<[]>();
  const [carouselDtls, setCarouselDtls] = useState<object>();

  useEffect(() => {
    fetchCarouselData();
  }, []);
  //// Carousel data fetched
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

  // carousel details page
  const filterCarouselDtls = (Id: number) => {
    const filtereddata = carouselData?.filter((item: any) => {
      return item.id == Id;
    });
    setCarouselDtls(filtereddata);
  };

  console.log(carouselDtls);

  return (
    <dataContext.Provider
      value={{ carouselData, carouselDtls, filterCarouselDtls }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
