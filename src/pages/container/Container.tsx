import { useEffect } from 'react';
import AllProductComp from '../../components/allProductComp/AllProductComp';
import CarouselComp from '../../components/carousel/CarouselComp';
import CategoriesComp from '../../components/categoryComp/CategoriesComp';

import axios from 'axios';

const Container = () => {
  useEffect(() => {
    const apiCall = async () => {
      // const options = {
      //   method: 'GET',
      //   url: 'https://amazon23.p.rapidapi.com/product-search',
      //   params: {
      //     query: 'xbox',
      //     country: 'US',
      //   },
      //   headers: {
      //     'X-RapidAPI-Key':
      //       'ad1a068f96msh324f7c4f3d2d637p177632jsn800d1f15a6b6',
      //     'X-RapidAPI-Host': 'amazon23.p.rapidapi.com',
      //   },
      // };
      // try {
      //   const response = await axios.request(options);
      //   console.log(response.data.result);
      // } catch (error) {
      //   console.error(error);
      // }
    };
    apiCall();
  }, []);

  return (
    <div>
      <CarouselComp />
      <AllProductComp />
      <CategoriesComp />
    </div>
  );
};

export default Container;
