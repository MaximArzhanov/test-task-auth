import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { ILoginFormValues } from './types';
import * as Yup from 'yup';

const LoginFormSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email не соответствует формату')
    .required('Поле обязательно для заполнения'),
  password: Yup.string()
    .min(6, 'Пароль должен состоять минимум из 6 символов')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/, 'Пароль должен содержать цифры, буквы в нижнем и верхнем регистре')
    .required('Поле обязательно для заполнения'),
});

function LoginForm() {
  const initialValues: ILoginFormValues = {
    email: '',
    password: '',
    remember: false,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: LoginFormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className='container max-w-xs rounded-xl shadow-lg mx-4 pb-8'>
      <h1 className='py-6 bg-gradient-to-r from-indigo-700 bg-fuchsia-500 text-white text-2xl font-bold text-center rounded-t-xl'>
        Login Form
      </h1>

      <form className='m-5 flex flex-col' onSubmit={formik.handleSubmit}>
        <TextInput
          name='email'
          type='email'
          placeholder='Email Address'
          style={{ borderRadius: '24px' }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          color={formik.touched.email && formik.errors.email ? 'failure' : 'gray'}
          helperText={
            formik.touched.email && formik.errors.email && <span className='block ml-2'>{formik.errors.email}</span>
          }
        />

        <TextInput
          name='password'
          type='password'
          placeholder='Password'
          style={{ borderRadius: '24px' }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className='mt-5'
          color={formik.touched.password && formik.errors.password ? 'failure' : 'gray'}
          helperText={
            formik.touched.password &&
            formik.errors.password && <span className='block pl-2'>{formik.errors.password}</span>
          }
        />

        <div className='flex justify-between px-2 flex-wrap gap-1 mt-4'>
          <div className='flex items-center gap-1 text-sm'>
            <Checkbox
              id='remember'
              name='remember'
              className='cursor-pointer'
              onChange={formik.handleChange}
              checked={formik.values.remember}
            />
            <Label htmlFor='remember' className='font-normal cursor-pointer'>
              Remember me
            </Label>
          </div>
          <Link to='#' className='justify-self-end text-cyan-600 hover:underline text-sm'>
            Forgot password?
          </Link>
        </div>

        <Button
          type='submit'
          disabled={!formik.isValid}
          className='bg-gradient-to-r from-indigo-700 bg-fuchsia-500 font-bold rounded-3xl mt-5'
        >
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
