import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

function LoginForm() {
  return (
    <div className='container max-w-xs rounded-xl shadow-lg mx-4 pb-8'>
      <h1 className='py-6 bg-gradient-to-r from-indigo-700 bg-fuchsia-500 text-white text-2xl font-bold text-center rounded-t-xl'>
        Login Form
      </h1>

      <form className='m-5 flex flex-col gap-4'>
        <TextInput name='email' type='email' placeholder='Email Address' style={{ borderRadius: '24px' }} />
        <TextInput name='password' type='password' placeholder='Password' style={{ borderRadius: '24px' }} />

        <div className='flex justify-between px-2 flex-wrap gap-1'>
          <div className='flex items-center gap-1 text-sm'>
            <Checkbox id='remember' className='cursor-pointer' />
            <Label htmlFor='remember' className='font-normal cursor-pointer'>
              Remember me
            </Label>
          </div>
          <Link to='#' className='justify-self-end text-cyan-600 hover:underline text-sm'>
            Forgot password?
          </Link>
        </div>

        <Button type='submit' className='bg-gradient-to-r from-indigo-700 bg-fuchsia-500 font-bold rounded-3xl'>
          Login
        </Button>
      </form>

      <div className='flex gap-2 flex-wrap justify-center text-sm'>
        <span>Not a member?</span>
        <Link to='#' className='text-cyan-600 hover:underline'>
          Signup now
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
