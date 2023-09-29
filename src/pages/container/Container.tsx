import AllProductComp from '../../components/allProductComp/AllProductComp';
import CarouselComp from '../../components/carousel/CarouselComp';
import CategoriesComp from '../../components/categoryComp/CategoriesComp';

const Container = () => {
  return (
    <div>
      <CarouselComp />
      <AllProductComp />
      <CategoriesComp />
    </div>
  );
};

export default Container;
