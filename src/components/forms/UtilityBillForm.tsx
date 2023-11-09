import * as yup from "yup";
import { toast } from 'react-toastify';
import { useMutation, useQuery } from 'react-query';
import { Input, Button, DropDown, Spinner } from "arvara-pckage";
import React, { Dispatch, FormEvent, useEffect, useState } from 'react'

import { IDataBills } from '../../types';
import AEDC from '../../assets/homeDashboard/AEDC.svg';
import Ekedc from '../../assets/homeDashboard/EKEDC.svg';
import Ibedc from '../../assets/homeDashboard/IBEDC.svg';
import Ikeja from '../../assets/homeDashboard/IKEJA-ELECTRIC.svg';
import { getRetrieveAllBills, initiateBillsPayment, verifyBills } from '../../server';
import useAuth from "../../hooks/useAuth";

const schema = yup.object().shape({
});

interface Props {
  setIsBill?: Dispatch<React.SetStateAction<boolean>>
}

export const UtilityBillForms = ({}: Props) => {
  const { data, isLoading, isFetching } = useQuery<IDataBills>('bills-electricity', () => getRetrieveAllBills('electricity'));
  const [amount, setAmount] = useState<string>('');
  const [accountName, setAccountName] = useState<string>('');
  const [pin, setPin] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [network, setNetwork] = useState('');
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    (async () => {
      if (accountNumber.length === 11 && network) {
        try {
          setLoader(true)
          const input = {
            serviceType: network,
            accountNumber,
          };
          const data: {
            data: {
              user: {
                name: string
                errorMessage: string
              }
            }
          } = await verifyBills(input)
          setAccountName(data?.data?.user?.name);
          setLoader(false)
        } catch (error) {
          toast.error(error?.message);
        }
      }
    })()
  }, [accountNumber])

  const mutation = useMutation(initiateBillsPayment)


  const onFinish = (e: FormEvent | React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      accountNumber,
      phone,
      amount,
      metaData: 'sjsjsj',
      serviceType: network,
      serviceCategory: 'electricity',
      pin,
    };

    schema
      .validate(payload)
      .then(() => {
        mutation.mutate(payload, {
          onSuccess: (data) => {
            toast.success(data?.message || "Successfully")
            useAuth.setState({ drawerState: { open: false, type: 'bills' } })
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

  const handleSetNetwork = (val: any) => {
    data?.bills
      .find((item: any) => {
      if (item?.serviceType === val) {
        setNetwork(val);
      }
    });
  };

  const checkDisabled = loader || mutation.isLoading || !accountNumber || !network || !amount || !phone || !pin


  return (
    <>
      <section>
        <h1 className="font-bold">Select Provider</h1>
        <div className="flex justify-between">
          <button disabled={isLoading} onClick={() => setNetwork('ikeja_electric_prepaid')} className={`h-14 w-20 bg-white rounded-2xl shadow-xl ${network === 'ikeja_electric_prepaid' && 'border-[#065373] border-2'}`}>
            <img src={Ikeja} className="mx-auto my-4" />
          </button>
          <button disabled={isLoading} onClick={() => setNetwork('abuja_electric_prepaid')} className={`h-14 w-20 bg-white rounded-2xl shadow-xl ${network === 'abuja_electric_prepaid' && 'border-[#065373] border-2'}`}>
            <img src={AEDC} className="mx-auto my-4" />
          </button>
          <button disabled={isLoading} onClick={() => setNetwork('eko_electric_prepaid')} className={`h-14 w-20 bg-white rounded-2xl shadow-xl ${network === 'eko_electric_prepaid' && 'border-[#065373] border-2'}`}>
            <img src={Ekedc} className="mx-auto my-7" />
          </button>
          <button disabled={isLoading} onClick={() => setNetwork('ibadan_electric_prepaid')} className={`h-14 w-20 bg-white rounded-2xl shadow-xl ${network === 'ibadan_electric_prepaid' && 'border-[#065373] border-2'}`}>
            <img src={Ibedc} className="mx-auto my-4" />
          </button>
        </div>
        <form onSubmit={onFinish} className="mt-5">
          {(isLoading || isFetching) ? (
            <>
              <label
                className="my-1 text-black flex items-center text-left text-sm font-semibold"
              >
                Select Provider
              </label>
              <div className={`text-base p-3 pl-4 flex-grow min-w-64 focus:outline-none focus:ring focus:border-blue-100 border border-grey-beau rounded-lg w-full flex items-center `}>
                <Spinner />
              </div>
            </>
          )
           :
            <DropDown
              placeholder="Select Provider"
              searchable
              className="mt-5"
              defaultValue={network}
              filter={(a, b) => typeof a.label === 'string' && a.label.toLowerCase().includes(b)}
              data={
                data?.bills &&
                data?.bills
                  .sort((a, b) => a.serviceName.localeCompare(b.serviceName))
                  .map((val: { serviceName: string; serviceType: string }) => {
                    const temp = {
                      value: val?.serviceType,
                      label: val?.serviceName,
                    };
                    return temp;
                  })
              }
              value={network}
              onChange={(e) => setNetwork(e.toString())}
              getValue={v => v.label.toString()}
            />
          }

          <Input
            label="Meter Number"
            value={accountNumber}
            placeholder="Enter Meter Number"
            onChange={e => setAccountNumber(e.target.value)}
            className="mt-5"
          />
          <Input
            label="Account Name"
            placeholder="Account Name"
            disabled
            value={accountName}
            className="mt-5"
            TrailingIcon={() => (
              <>
                {loader && (
                 <Spinner size={1.5} color="primary" />
                )}
              </>
            )}
          />
          <Input
            label="Phone Number"
            placeholder="Phone Numbver"
            type="number"
            value={phone}
            className="mt-5"
            onChange={e => setPhone(e.target.value)}
          />
          <Input
            label="Amount"
            placeholder="₦0.00"
            value={amount}
            className="mt-5"
            onChange={e => setAmount(e.target.value)}
          />
          <Input
            label="Pin"
            placeholder="Pin"
            value={pin}
            type="password"
            maxLength={4}
            onChange={e => setPin(e.target.value)}
            className="mt-5"
          />
          <div className="mt-8">
            <Button type="submit" loading={isLoading || mutation?.isLoading} disabled={checkDisabled} className="w-full">
              Proceed
            </Button>
          </div>
        </form>
      </section>
    </>
  )
}
