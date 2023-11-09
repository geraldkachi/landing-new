
import * as yup from "yup";
import { Input, Button } from "arvara-pckage";
import { toast } from 'react-toastify';
import React, { FormEvent } from 'react';
import { useMutation } from 'react-query';
import ReactPinField from 'react-pin-field';

import useAuth from '../../hooks/useAuth';
import { sendMoneyApi } from '../../server';

interface Props {
  closeDrawer?:() => void
}
export const PinForm = ({ closeDrawer }: Props) => {
  const mutation = useMutation(sendMoneyApi)
  const pin = useAuth(state => state.sendMoney.pin)
  const sendMoney = useAuth(state => state.sendMoney)

  const schema = yup.object().shape({});

  const handlePin = (pin: string) => {
    useAuth.setState({
      sendMoney: {
        ...sendMoney,
        pin,
      }
    })
  };


  const onFinish = (e: FormEvent | React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const values = {
      ...sendMoney,
      pin,
    };

    schema
      .validate(values)
      .then(() => mutation.mutate(values, {
        onSuccess: () => {
          toast.success("Money sent Successful");
          useAuth.setState({
            drawerState: { open: false, type: '' },
            sendMoney: {
              bankCode: '',
              accountName: '',
              accountNumber: '',
              amount: 0,
              note: '',
              pin: ''
            }
          });
        },
        onError: (e: unknown) => {
          if (e instanceof Error) {
            toast.error(e.message);
          }
        }
      }))
      .catch((e) => {
        toast.error(e.message);
      });
  }

  return (
    <>
      <section>
        <p className="text-grey-slate">Confirm your transaction</p>
        <div className="p-2">
          <form onSubmit={onFinish}>
            {/* <Input
              label="PIN"
              placeholder="Enter your pin"
              onChange={handlePin}
              value={pin}
              className="mt-5"
              type="password"
            /> */}
            <div className="w-full mx-auto mt-8 flex justify-center">
              <ReactPinField
                type="password"
                name="pin"
                length={4}
                onChange={(value: string) => handlePin(value)}
                className="h-16 w-16 sm:w-20 rounded-xl border border-grey-slate text-center mb-1 mx-4 flex justify-between items-center gap-6 focus:outline-blue-4 focus:border-x-blue-4 text-sm font-semibold"
              />
            </div>
            <div className="mt-8">
              <Button type="submit" disabled={mutation?.isLoading || !pin} loading={mutation?.isLoading} className="w-full">
                Proceed
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
