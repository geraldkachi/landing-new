import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import { Input, Button } from 'arvara-pckage';
import { Link, useNavigate } from 'react-router-dom';
import React, { useRef, useState } from 'react';

import useAuth from '../../hooks/useAuth';
import PasswordMe from '../shared/Password';
import { createAccount } from '../../server';
import { Checkbox } from '../shared/ArvaraUtils';

const schema = yup.object().shape({
  email: yup.string().email('Enter a valid email').required('Enter your email address').nullable(),
  password: yup.string().required('Enter a valid password').min(8).nullable()
});

const RegisterForm = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const setPhoneNumber = useAuth((state) => state.setPhoneNumber);


  const formInput = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phoneNumber, setIsPhoneNumber] = useState('');

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const mutation = useMutation(createAccount, {
    onSuccess: (data) => {
      navigate('/otp');
      setPhoneNumber(data?.customer?.phoneNumber);
    },
    onError: (e: Error) => {
      toast.error(e.message);
    }
  });

  const toggleCheckBox = () => setIsChecked(!isChecked);

  const onFinish = (e: React.FormEvent) => {
    e.preventDefault();
    const values = {
      email: e.target['email'].value,
      password: e.target['password'].value,
      lastName: e.target['lastName'].value,
      firstName: e.target['firstName'].value,
      phoneNumber: e.target['phoneNumber'].value
    };

    schema
      .validate(values)
      .then(() => {
        mutation.mutate(values);
      }).catch(e => toast.error(e.message));
  };

  const isButtonDisabled = !password || !email || !lastName || !firstName || !phoneNumber

  return (
    <>
      <form onSubmit={onFinish}>
        <Input
          label="First Name"
          placeholder="Enter your first name"
          className="mt-5"
          ref={formInput}
          name="firstName"
          onChange={handleFirstNameChange}
        />
        <Input
          label="Last Name"
          placeholder="Enter your last name"
          className="mt-5"
          type="text"
          name="lastName"
          ref={formInput}
          onChange={handleLastNameChange}
        />
        <Input
          label="Email Address"
          placeholder="Enter your email address"
          className="mt-5"
          ref={formInput}
          type="email"
          name="email"
          onChange={handleEmailChange}
        />
        <Input
          label="Phone Number"
          placeholder="Enter your phone number"
          className="mt-5"
          ref={formInput}
          type="tel"
          name="phoneNumber"
          onChange={handlePhoneNumberChange}
        />

        <Input
          label="Password"
          placeholder="Enter your password"
          className="mt-5"
          type={showPassword ? 'text' : 'password'}
          ref={formInput}
          name="password"
          TrailingIcon={() => (
            <PasswordMe showPassword={showPassword} setShowPassword={setShowPassword} />
          )}
          onChange={handlePasswordChange}
        />
        <div className="mt-8 whitespace-nowrap">
          <p className="text-[12px] sm:text-sm flex md:mt-10 items-center">
            <Checkbox label="I agree to Arvo's" checked={isChecked} onClick={toggleCheckBox} />
            &nbsp;{' '}
            <Link to="/terms-of-use" className="text-blue-4  text-xs md:text-base">
              Terms of Use
            </Link>
            &nbsp; <p>and</p> &nbsp;
            <Link to="/terms-of-use" className="text-blue-4  text-xs md:text-base">
              Privacy Policy
            </Link>
          </p>
          <Button
            type="submit"
            loading={mutation.isLoading}
            className="w-full bg-grey-slate"
            disabled={isButtonDisabled || !isChecked}>
            Create Account
          </Button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
