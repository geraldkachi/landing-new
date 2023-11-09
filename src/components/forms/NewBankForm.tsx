import { Button, Input, Spinner } from 'arvara-pckage';
import { FormEvent, useState } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { FundWithCard, initiateCard } from '../../server';
import * as yup from 'yup';
import Modal from '../modal/Modal';
import { useSearchParams } from 'react-router-dom';

async function wait(ms: number) {
  return new Promise<void>((res) => setTimeout(res, ms));
}

export const NewCardForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const reference = searchParams.get('reference');

  const [amount, setAmount] = useState<string>('');

  const [showAccess, setShowAccess] = useState(false);

  const schema = yup.object().shape({});
  const mutation = useMutation(FundWithCard);
  const idenitity = JSON.parse(localStorage.getItem('identity') as string);

  const onFinish = async (e?: FormEvent | React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    await wait(4000);

    const values = {
      type: 'new',
      platform: 'paystack',
      amount: localStorage.getItem('loan-key'),
      reference
    };

    schema
      .validate(values)
      .then(() => {
        mutation.mutate(values, {
          onSuccess: (data) => {
            toast.success(data?.message || 'Repayment Successful');
            setSearchParams('');
          },
          onError: (e: unknown) => {
            if (e instanceof Error) {
              toast.error(e.message);
            }
          }
        });
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <>
      <section className="mt-1 flex flex-col items-center justify-between h-full w-full">
        <div className="flex flex-col justify-between h-full w-full">
          <Input
            placeholder="amount"
            label="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-5"
          />

          <div className="mt-80">
            <Button
              type="submit"
              onClick={() => {
                localStorage.setItem('loan-key', String(amount));
                window.location.href = initiateCard('next-repayment', idenitity);
                setShowAccess(true);
                onFinish();
                localStorage.removeItem('amount');
              }}
              className="w-full">
              Fund Wallet
            </Button>
          </div>
        </div>

        <Modal
          type="icon"
          show={showAccess}
          closeModal={setShowAccess}
          title=""
          subTitle="verify transaction For PayStack">
          <>
            <div className="mx-auto my-5">
              <Spinner size={4} />
            </div>
          </>
        </Modal>
      </section>
    </>
  );
};
