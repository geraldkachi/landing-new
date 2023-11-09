import { useState } from 'react';
import { useMutation } from 'react-query';
import ReactPinField from 'react-pin-field';
import { Button, Spinner } from "arvara-pckage";
import { useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import { generateNewOpt, verifyPhoneNumberOtp } from '../../server';

const OtpForm = () => {
  const phoneNumber = useAuth((state) => state.phoneNumber);
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');

  const mutation = useMutation(verifyPhoneNumberOtp, {
    onSuccess: () => {
      navigate('/dashboard');
    }
  });

  const otpMutation = useMutation(generateNewOpt);

  const handleOtp = (value: string) => {
    setOtp(value);
  };

  const onFinish = (e) => {
    e.preventDefault();
    const values: {
      otp: string
      phoneNumber: string
    } = {
      otp,
      phoneNumber
    };
    mutation.mutate({ phoneNumber: `0${values.phoneNumber?.split('+234')[1]}`, otp });
  };

  return (
    <>
      <form onSubmit={onFinish}>
        <div className="container mx-auto mt-8 flex justify-center">
          <ReactPinField
            length={6}
            onChange={handleOtp}
            className="sm:h-14 h-12 w-9 sm:w-16 rounded-xl border border-grey-slate text-center my-1 mx-2 flex items-center text-sm font-semibold"
          />
        </div>

        <div className="flex items-center justify-center mt-2 sm:mt-6">
          <Button type="submit" className="w-full mt-8" loading={mutation.isLoading}>
            Verify Phone Number
          </Button>
        </div>
        <div className="flex justify-center text-center mt-8">
          {' '}
          <a className="flex items-center cursor-pointer">
            Didn&apos;t receive OTP? &nbsp;
            {otpMutation.isLoading ? (
              <Spinner size={1} />
            ) : (
              <p
                onClick={() => otpMutation.mutate({ phoneNumber })}
                className="font-bold text-blue-4 cursor-pointer hover:text-blue-900">
                Resend OTP
              </p>
            )}
            <i className="bx bx-caret-right ml-1"></i>
          </a>{' '}
        </div>
      </form>
    </>
  );
};

export default OtpForm;
