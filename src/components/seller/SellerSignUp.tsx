import { Button, TextInput } from 'flowbite-react';

const SellerSignUp = () => {
  return (
    <form className='flex flex-col gap-2'>
      <TextInput
        type='text'
        placeholder='your business establishment name'
        required
        shadow
        className='w-[300px]'
      />
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
      <Button>Sign Up</Button>
    </form>
  );
};

export default SellerSignUp;
