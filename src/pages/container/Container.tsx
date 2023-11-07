import { useEffect } from 'react';
import AllProductComp from '../../components/allProductComp/AllProductComp';
import CarouselComp from '../../components/carousel/CarouselComp';
import CategoriesComp from '../../components/categoryComp/CategoriesComp';

import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../assets/slice/UserOnlineSlice';

const Container = () => {
  const dispatch = useDispatch();

  // const currentUser = useSelector((state: any) => state.user.user);

  // useEffect(() => {
  //   const currentUser = localStorage.getItem('currentUser');
  //   console.log(currentUser);
  //   dispatch(addUser(currentUser));
  // }, [currentUser]);

  return (
    <div>
      <CarouselComp />
      <AllProductComp />
      <CategoriesComp />
      {/* <Modal>
        <SignUpComp />
      </Modal> */}
    </div>
  );
};

export default Container;
