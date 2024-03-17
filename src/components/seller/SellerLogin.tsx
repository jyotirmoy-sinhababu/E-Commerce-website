import { Button, TextInput } from 'flowbite-react';

const SellerLogin = () => {
  return (
    <form className='flex flex-col gap-2'>
      <TextInput
        type='number'
        placeholder='your business number'
        required
        shadow
        className='w-[300px]'
      />
      <TextInput
        type='password'
        placeholder='your password'
        required
        shadow
        className='w-[300px]'
      />
      <Button>Log in</Button>
    </form>
  );
};

export default SellerLogin;
