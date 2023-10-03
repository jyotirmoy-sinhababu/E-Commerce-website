import { useEffect } from 'react';
import AllProductComp from '../../components/allProductComp/AllProductComp';
import CarouselComp from '../../components/carousel/CarouselComp';
import CategoriesComp from '../../components/categoryComp/CategoriesComp';

const Container = () => {
  useEffect(() => {
    const apiFunction = async () => {
      const url =
        'https://ecommerce-product-api1.p.rapidapi.com/data?product=phone&page=1';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            'ad1a068f96msh324f7c4f3d2d637p177632jsn800d1f15a6b6',
          'X-RapidAPI-Host': 'ecommerce-product-api1.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
    apiFunction();
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
