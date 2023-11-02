import { useEffect } from 'react';
import AllProductComp from '../../components/allProductComp/AllProductComp';
import CarouselComp from '../../components/carousel/CarouselComp';
import CategoriesComp from '../../components/categoryComp/CategoriesComp';

import { useDispatch } from 'react-redux';
import { addUser } from '../../assets/slice/UserOnlineSlice';
// import Modal from '../../modal/Modal';
// import SignUpComp from '../../components/authComp/signUpComp/SignUpComp';

const Container = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    console.log(currentUser);
    dispatch(addUser(currentUser));
  }, []);

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
