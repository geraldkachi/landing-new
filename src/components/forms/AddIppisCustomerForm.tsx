/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { Button, DropDown, Input } from 'arvara-pckage';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

import {
  addBeneficiaries,
  addIppisCustomer,
  getBankListSearch,
  resolvedBankAccount
} from '../../server';
import { IBank } from '../../types';
import { sortArray } from '../../helpers/common';
import { revalidateCustomerRecord } from '../../helpers/customer_info';

const schema = yup.object().shape({
  bankName: yup.string().nullable().required(),
  accountNumber: yup.string().nullable().required(),
  accountName: yup.string().nullable().required(),
  ippisNumber: yup.number().nullable().required()
});

const AddIppisCustomerForm = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [bankCode, setBankCode] = useState('');
  const [bankName, setBankName] = useState('');
  const formInput = useRef<HTMLInputElement>(null);

  const { data } = useQuery('bank-list', () => getBankListSearch(''));
  const {
    data: bank,
    refetch,
    isFetching
  } = useQuery<{
    accountDetails?: {
      accountName: string;
    };
  }>('resolve-account', () => resolvedBankAccount(accountNumber, bankCode), {
    enabled: false
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (accountNumber.length === 10 && bankCode.length) {
      refetch();
    }
  }, [accountNumber, bankCode, setAccountNumber, setBankCode]);

  const beneficiaryMutation = useMutation(addBeneficiaries, {
    onSuccess: () => {
      navigate(0);
    },
    onError: (error) => {
      toast.error(error instanceof Error ? error.message : 'Something went wrong!');
    }
  });

  const mutation = useMutation(addIppisCustomer, {
    onSuccess: (data) => {
        revalidateCustomerRecord(data?.customer);
      beneficiaryMutation.mutate({
        accountNumber,
        type: 'disbursement',
        info: {
          accountNumber,
          bankCode: bankCode,
          bankName: bankName,
          name: bank?.accountDetails?.accountName
        }
      });
    },
    onError: (e: unknown) => {
      if (e instanceof Error) {
        toast.error(e.message);
      }
    }
  });

  const onFinish = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = {
      bankName: e.target['bankName'].value,
      accountNumber: e.target['accountNumber'].value,
      accountName: e.target['accountName'].value,
      ippisNumber: e.target['ippisNumber'].value
    };

    schema
      .validate(values)
      .then(() => {
        mutation.mutate({
          accountNumber: values.accountNumber,
          ippisNumber: values.ippisNumber
        });
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="">
      <section className="mt-10">
        <form onSubmit={onFinish}>
          <DropDown
            label={'Bank Name'}
            searchable
            placeholder="Bank Name"
            className="mt-5"
            innerRef={formInput}
            name="bankName"
            data={sortArray<IBank>(data?.bankDetails, 'name').map((item) => ({
              value: item.code,
              label: item.name
            }))}
            getValue={(v) => v.label.toString()}
            onChange={(e: ChangeEvent<HTMLInputElement> & string) => {
              const bank = data?.bankDetails?.find((d) => d.code === e);
              setBankName(bank.name);
              setBankCode(e);
            }}
          />
          <Input
            type="number"
            label={'Salary Bank Account Number'}
            placeholder="Enter your salary account number"
            onChange={(e) => setAccountNumber(e.target.value)}
            name="accountNumber"
            ref={formInput}
            maxLength={10}
            className="mt-5"
          />
          <Input
            disabled
            label={'Account Name'}
            placeholder="--Autoloaded--"
            ref={formInput}
            name="accountName"
            defaultValue={bank?.accountDetails?.accountName}
            className="mt-5"
          />
          <Input
            label={'IPPIS Number'}
            placeholder="Input your IPPIS number"
            ref={formInput}
            className="mt-5"
            name="ippisNumber"
          />
          <div>
            <Button type="submit" className="mt-10" disabled={isFetching} loading={mutation.isLoading || beneficiaryMutation.isLoading}>
              {isFetching ? 'Verifying your account' : 'Next'}
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddIppisCustomerForm;
