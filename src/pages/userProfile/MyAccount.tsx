import { Button } from 'flowbite-react';
import { useSelector } from 'react-redux';

import { CiEdit } from 'react-icons/ci';

const MyAccount = () => {
  const user = useSelector((state: any) => state.auth.user);
  console.log(user);

  return (
    <div>
      <h3 className='text-xl font-medium'>Your Email</h3>
      <div className='flex items-center gap-2'>
        <p>{user?.email}</p>
        <Button className='text-xl'>
          <CiEdit />
        </Button>
      </div>
    </div>
  );
};

export default MyAccount;
