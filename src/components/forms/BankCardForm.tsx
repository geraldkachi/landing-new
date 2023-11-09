import { Button, Input } from "arvara-pckage";
import { FormEvent, useState } from 'react';
import { useMutation, useQuery } from 'react-query';

import { FundWithCard, getAllCardsByPurpose} from '../../server';
import * as yup from "yup";
import { toast } from 'react-toastify';
import DebitCard from '../../pages/Debitcard/DebitCard';
import useAuth from "../../hooks/useAuth";


interface Props {
  openPaymentModal: () => void;
}

export const BankCardForm = ({ openPaymentModal }: Props) => {
  const mutation = useMutation(FundWithCard)
  const [amount, setAmount] = useState('');
  const [pin, setPin] = useState('');
  const schema = yup.object().shape({});
  const cardId = JSON.parse(localStorage.getItem('cardId'))
  const onFinish = async (e?: FormEvent | React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    const values = {
      pin,
      amount,
      type: 'existing',
      cardId: cardId?.card
    };

    schema
      .validate(values)
      .then(() => {
        mutation.mutate(values, {
          onSuccess: (data) => {
            toast.success(data?.message || 'Fund Wallet Succesful')
            openPaymentModal()
            useAuth.setState({ drawerState: { open: false, type: '' } })
            localStorage.removeItem('cardId')
          },
          onError: (e: unknown) => {
            if (e instanceof Error) {
              toast.error(e.message)
            }
          }
        });
      })
      .catch((e) => {
        toast.error(e.message);
      });
  }

  const disabledCheck = !pin || !amount

  return (
    <>
      <section className="mt-5">

        <form onSubmit={onFinish}>
          {
            <>
              <Input label="Amount" placeholder="Input Amount" type="number" value={amount} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)} className="mt-5" />
              <Input label="Pin" maxLength={4} placeholder="Input Card Pin" type="password" value={pin} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPin(e.target.value)} className="mt-5" />
              <div className="mt-96">
                <Button type="submit" disabled={disabledCheck} loading={mutation.isLoading} className="w-full">Fund Wallet</Button>
              </div>
            </>
          }
        </form>
      </section>
    </>
  );
};
