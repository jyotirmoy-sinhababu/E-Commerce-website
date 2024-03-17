import { Button } from 'flowbite-react';
import Avatar from 'react-avatar';

import { useSelector } from 'react-redux';

import { CiEdit } from 'react-icons/ci';

const MyAccount = () => {
  const user = useSelector((state: any) => state.auth.user);
  console.log(user);

  return <div className=''></div>;
};

export default MyAccount;
