import * as yup from "yup";
import { toast } from 'react-toastify';
import { useMutation, useQuery } from 'react-query';
import { Input, Button, DropDown, Spinner } from "arvara-pckage";

import glo from '../../assets/homeDashboard/glo.svg';
import Mtn from '../../assets/homeDashboard/mtn logo.svg';
import Airtel from '../../assets/homeDashboard/airtel.svg';
import mobile from '../../assets/homeDashboard/9mobile.svg';

import { stripNumber } from '../../util/utils';
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { getRetrieveAllBills, initiateBillsPayment } from '../../server';
import { AIusersquarebol } from "arvara-icons";
import useAuth from "../../hooks/useAuth";



const schema = yup.object().shape({});

interface detailType {
  plans?: {
    name: string;
    datacode: string,
    price: string
  }[],
  serviceType?: string
  serviceName?: string
}

interface Props {
  setIsAirtime?: Dispatch<SetStateAction<boolean>>
}

export const DataForms = ({ }: Props) => {
  const [provider, setProvider] = useState<string>('');


  const [details, setDetails] = useState([]);
  const [pin, setPin] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [network, setNetwork] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [selectedPlan, setSelectedPlan] = useState('');


  const { data, isLoading, isFetching } = useQuery('bills-databundle', () => getRetrieveAllBills('databundle'));
  const mutation = useMutation(initiateBillsPayment)

  const onFinish = (e: FormEvent | React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      phone: stripNumber(phone).replace(/ /g, ''),
      amount,
      datacode: selectedPlan,
      serviceType: network,
      serviceCategory: 'databundle',
      pin,
    };

    schema
      .validate(payload)
      .then(() => {
        mutation.mutate(payload, {
          onSuccess: (data) => {
            toast.success(data?.message || "Data Bundle was Successful")
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

  const checkDisabled = !selectedPlan || !network || !phone || !pin

  return (
    <>
      <section>
        <div className="mt-8">
          <div className="flex justify-between">

            <button disabled={isLoading} onClick={() => {
              setProvider(data?.bills.find(b => b.serviceName === 'MTN Bundle')?.serviceName)
              setNetwork('mtn')
              setDetails([])
              setSelectedPlan('')
            }
            } className={`rounded-2xl ${network === 'mtn' && 'border-[#065373] p-[2px] border-2'}`}>
              <img src={Mtn} className={`${'s'}`} />
            </button>
            <button disabled={isLoading} onClick={() => {
              setProvider(data?.bills.find(b => b.serviceName === 'Airtel Bundle')?.serviceName)
              setNetwork('airtel')
              setDetails([])
              setSelectedPlan('')
            }
            } className={`rounded-2xl ${network === 'airtel' && 'border-[#065373] p-[2px] border-2'}`}>
              <img src={Airtel} className="" />
            </button>
            <button disabled={isLoading} onClick={() => {
              setProvider(data?.bills.find(b => b.serviceName === 'Etisalat Bundle')?.serviceName)
              setNetwork('9mobile')
              setDetails([])
              setSelectedPlan('')
            }
            } className={`rounded-2xl ${network === '9mobile' && 'border-[#065373] p-[2px] border-2'}`}>
              <img src={mobile} className="" />
            </button>
            <button disabled={isLoading} onClick={() => {
              setProvider(data?.bills.find(b => b.serviceName === 'Glo Bundle Recharge')?.serviceName)
              setNetwork('glo')
              setDetails([])
              setSelectedPlan('')
            }
            } className={`rounded-2xl ${network === 'glo' && 'border-[#065373] border-2'}`}>
              <img src={glo} className="" />
            </button>
          </div>
        </div>

        <form onSubmit={onFinish}>
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
          ) :
            <DropDown
              label='Select Provider'
              placeholder={network ? (provider) : `Select`}
              className="mt-5"
              name={network}
              defaultValue={network}
              data={
                data?.bills &&
                data?.bills.map((val: { serviceName: string; serviceType: string }) => {
                  const temp = {
                    value: JSON.stringify(val),
                    label: val?.serviceName,
                  };
                  return temp;
                })
              }

              onChange={(e: ChangeEvent<HTMLInputElement> & {
                serviceType: string
                plans: detailType
              }) => {
                const val = JSON.parse(e.toString())
                setDetails(val?.plans)
                setNetwork(val?.serviceType)
                setSelectedPlan('')
              }}
              getValue={v => v.label.toString()}
            />}
          <DropDown
            label={'Plan'}
            placeholder="Select"
            value={selectedPlan}
            className="mt-5"
            data={details?.map((val: { name: string; datacode: string, price: string }) => ({
              label: `${val.name}  ₦${val?.price}`,
              value: JSON.stringify(val),
            }))}
            onChange={(e: ChangeEvent<HTMLInputElement> & {
              datacode: string
              price: string
            }) => {
              const val = JSON.parse(e.toString())
              setSelectedPlan(val?.datacode)
              setAmount(val?.price)
            }}
            getValue={v => v.label.toString()}
          />
          <Input
            label="Mobile Number"
            className="mt-5"
            type="number"
            value={phone}
            placeholder="Enter Mobile Number"
            onChange={e => setPhone(e.target.value)}
            TrailingIcon={() => <AIusersquarebol />}
          />
          <Input
            label="Pin"
            type='password'
            value={pin}
            maxLength={4}
            placeholder="Pin"
            onChange={e => setPin(e.target.value)}
            className="mt-5"
          />
          <div className="mt-8">
            <Button type="submit"
              disabled={checkDisabled}
              loading={mutation?.isLoading} className="w-full">
              Proceed
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};
