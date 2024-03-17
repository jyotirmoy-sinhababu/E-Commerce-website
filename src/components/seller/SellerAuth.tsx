import { Button, TextInput } from 'flowbite-react';

const SellerAuth = () => {
  return (
    <form>
      <TextInput type='text' placeholder='your  name' required shadow />
      <TextInput
        type='email'
        placeholder='your business email'
        required
        shadow
      />
      <TextInput type='text' placeholder='your business name' required shadow />
      <TextInput
        type='number'
        placeholder='your business number'
        required
        shadow
      />
      <TextInput type='password' placeholder='your password' required shadow />
      <Button>Sign Up</Button>
    </form>
  );
};

export default SellerAuth;
