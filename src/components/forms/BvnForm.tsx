import { FormEvent, useRef } from 'react';
import { Button, Input } from "arvara-pckage";
import { toast } from 'react-toastify';
import { verifyBvn } from "../../server"
import { useMutation, useQueryClient } from 'react-query';
import { getCustomerRecord } from '../../helpers/customer_info';
import { Customer } from 'package-types';
import useAuth from '../../hooks/useAuth';


export const BvnForm = () => {
  const queryClient = useQueryClient();
  const customer = getCustomerRecord<Customer & { secret: string }>(true);
  const mutation = useMutation(verifyBvn, {
    onSuccess: () => {
      queryClient.invalidateQueries('loanStatus');
      window.location.reload();
      useAuth.setState({ drawerState: { open: false, type: '', header: '', subheader: '' } });
    },
    onError: (error: Error) => {
      toast.error(error.message.includes('access') ? "Please Try again, If issue persist, contact support" : error.message);
    }
  })
  const formInput = useRef<HTMLInputElement>(null)

  const onFinish = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = {
      bvnNumber: e.target['bvn'].value,
      secretKey: customer.secret,
      customerId: customer?.id
    }

    mutation.mutateAsync(values)
  }

  return (
    <section className="">
      <form  onSubmit={onFinish}>
        <Input ref={formInput} label="BVN" placeholder="Enter your BVN" type="number" name="bvn" className="mt-5" />
        <div className="mt-10">
          <Button type="submit" className="w-full"
          loading={mutation.isLoading}
            >
            Proceed
          </Button>
        </div>
      </form>
    </section>
  );
};
