import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import { Input, Button } from 'arvara-pckage';
import { useNavigate } from 'react-router-dom';
import { FormEvent, useRef, useState } from 'react';

import PasswordMe from '../shared/Password';
import { custmerLogin } from '../../server';

const schema = yup.object().shape({
  email: yup.string().nullable(),
  password: yup.string().required('Enter a valid password').min(6).nullable()
});

const LoginForm = () => {
  const navigate = useNavigate();
  const formInput = useRef<HTMLInputElement>(null);
  const mutation = useMutation(custmerLogin, {
    onSuccess: () => {
      navigate('/dashboard');
    },
    onError: (e: unknown) => {
      if (e instanceof Error) {
        toast.error(e.message);
      }
    }
  });
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onFinish = (e: FormEvent) => {
    e.preventDefault();

    const values: {
      phoneNumber: string;
      password: string;
    } = {
      phoneNumber: e.target['phoneNumber'].value,
      password: e.target['password'].value
    };

    schema
      .validate(values)
      .then(() => {
        mutation.mutate(values);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const isButtonDisabled = !phoneNumber || !password;

  return (
    <>
      <form onSubmit={onFinish}>
        <Input
          label="Phone Number"
          ref={formInput}
          type="tel"
          name="phoneNumber"
          className="mt-5"
          placeholder="Enter your Phone Number"
          onChange={handlePhoneNumberChange}
        />

        <Input
          label="Password"
          className="mt-5"
          type={showPassword ? 'text' : 'password'}
          name="password"
          ref={formInput}
          placeholder="Enter your password"
          onChange={handlePasswordChange}
          TrailingIcon={() => (
            <PasswordMe showPassword={showPassword} setShowPassword={() => setShowPassword(prev => !prev)} />
          )}
        />
        <div className="mt-8">
          <Button
            type="submit"
            className="w-full"
            loading={mutation.isLoading}
            disabled={isButtonDisabled}>
            Log In
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
