import glo from '../../assets/homeDashboard/glo.svg';
import Mtn from '../../assets/homeDashboard/mtn logo.svg';
import Airtel from '../../assets/homeDashboard/airtel.svg';
import mobile from '../../assets/homeDashboard/9mobile.svg';
import { getRetrieveAllBills, initiateBillsPayment } from '../../server';

import * as yup from "yup";
import { toast } from 'react-toastify';
import { stripNumber } from '../../util/utils';
import { useMutation, useQuery } from 'react-query';
import { Input, Button, DropDown, Spinner } from "arvara-pckage";
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useRef, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const schema = yup.object().shape({});
export const MobileForms = () => {
  const formInput = useRef<HTMLInputElement>(null)
  const { data, isLoading, isFetching } = useQuery('bills-airtime', () => getRetrieveAllBills('airtime'));

  const mutation = useMutation(initiateBillsPayment)

  const [amount, setAmount] = useState('');
  const [pin, setPin] = useState<string>('');
  const [network, setNetwork] = useState('');
  const [phone, setPhone] = useState<string>('');
  const [provider, setProvider] = useState<string>('');

  const handleClick = (value) => {
    setAmount(value);
  };

  const onFinish = (e: FormEvent | React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const values = {
      plan: 'prepaid',
      amount: e.target["amount"].value,
      phone: stripNumber(e.target["phone"].value).replace(/ /g, ''),
      serviceType: network,
      serviceCategory: 'airtime',
      pin: e.target["pin"].value,
    };

    schema
      .validate(values)
      .then(() => {
        mutation.mutate(values, {
          onSuccess: () => {
            toast.success("Airtime was Successful")
            useAuth.setState({ drawerState: { open: false, type: ''} })
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

  const grabData = (value: string) => {
    const networkPlan = data?.bills?.find((val) => val.serviceType === value)
    setNetwork(networkPlan?.serviceType)
  }

  const handlePin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPin(e.target.value);
  };
  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const checkDisabled = !amount || !network || !phone || !pin


  return (
    <>
      <section>
        <div className="mt-8">

          <div className="flex justify-between">
            <button disabled={isLoading} onClick={() => {
              setProvider(data?.bills.find(b => b.serviceName === 'MTN Prepaid Recharge')?.serviceName)
              grabData('mtn')
            }

            } className={`rounded-2xl ${network === 'mtn' && 'border-[#065373] p-[2px] border-2'}`}>
              <img src={Mtn} className={`${'s'}`} />
            </button>
            <button disabled={isLoading} onClick={() => {
              setProvider(data?.bills.find(b => b.serviceName === 'Airtel Prepaid Recharge')?.serviceName)
              grabData('airtel')
            }

            } className={`rounded-2xl ${network === 'airtel' && 'border-[#065373] p-[2px] border-2'}`}>
              <img src={Airtel} className="" />
            </button>
            <button disabled={isLoading} onClick={() => {
              setProvider(data?.bills.find(b => b.serviceName === 'Etisalat Prepaid Recharge')?.serviceName)
              grabData('9mobile')
            }
            } className={`rounded-2xl ${network === '9mobile' && 'border-[#065373] p-[2px] border-2'}`}>
              <img src={mobile} className="" />
            </button>
            <button disabled={isLoading} onClick={() => {

              setProvider(data?.bills.find(b => b.serviceName === 'Glo Prepaid Recharge')?.serviceName)
              grabData('glo')

            }
            } className={`rounded-2xl ${network === 'glo' && 'border-[#065373] p-[2px] border-2'}`}>
              <img src={glo} className="" />
            </button>
          </div>

        </div>
        <div className="flex justify-between my-8" >
          <button onClick={() => setAmount('100')} className={`${amount === '100' && 'border-[#065373] border-2'} bg-[#F0F3F5] rounded-xl flex items-center justify-center h-12 w-28 cursor-pointer`}>
            <h1 className="text-center my-2">₦100.00</h1>
          </button>
          <button onClick={() => setAmount('500')} className={`${amount === '500' && 'border-[#065373] border-2'} bg-[#F0F3F5] rounded-xl flex items-center justify-center h-12 w-28  cursor-pointer`}>
            <h1 className="text-center my-2">₦500.00</h1>
          </button>
          <button onClick={() => setAmount('1000')} className={`${amount === '1000' && 'border-[#065373] border-2'} bg-[#F0F3F5] rounded-xl flex items-center justify-center h-12 w-28  cursor-pointer`}>
            <h1 className="text-center my-2">₦1,000.00</h1>
          </button>
        </div>

        <form onSubmit={onFinish} className="mt-5">
          {(isLoading && isFetching) ?
             <>
             <label
               className="text-black flex items-center text-left text-sm font-semibold"
             >
               Select Provider
             </label>
             <div className={`text-base p-3 pl-4 flex-grow min-w-64 focus:outline-none focus:ring focus:border-blue-100 border border-grey-beau rounded-lg w-full flex items-center `}>
               <Spinner />
             </div>
           </>
            :
            <DropDown
              label='Select Provider'
              placeholder={network ? (provider) : `Select Network`}
              name={network}
              defaultValue={network}
              data={
                data?.bills &&
                data?.bills.map((val: { serviceName: string; serviceType: string }) =>
                ({
                  value: val?.serviceType,
                  label: val?.serviceName,
                }
                ))}
              onChange={(e: ChangeEvent<HTMLInputElement> & {
                serviceType: string
              } & SetStateAction<string> & string

              ) => {
                setNetwork(e)
                grabData(e)
              }}
              getValue={v => v.label.toString()}
            />
          }
          <Input label="Amount (NGN)"
            ref={formInput}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            name="amount"
            className="mt-5" />
          <Input
            label="Mobile Number"
            autoComplete="off"
            type="number"
            name='phone'
            ref={formInput}
            placeholder="Enter Mobile Number"
            className="mt-5"
            onChange={handlePhone}
          />
          <Input label="Pin" type='password' ref={formInput} maxLength={4} placeholder="Pin" name="pin" className="mt-5"
          onChange={handlePin}
          />

          <div className="mt-8">
            <Button type="submit"
            disabled={checkDisabled}
              loading={isLoading || mutation.isLoading} className="w-full">
              Proceed
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};
