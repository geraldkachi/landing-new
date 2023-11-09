import { Input, Button, DropDown, Spinner } from "arvara-pckage";
import Dstv from '../../assets/homeDashboard/dstv.svg';
import Gotv from '../../assets/homeDashboard/gotv.svg';
import Startime from '../../assets/homeDashboard/startimes.svg';

import * as yup from "yup";
import { ChangeEvent, Dispatch, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useMutation, useQuery } from 'react-query';
import { getRetrieveAllBills, initiatePayment, verifyBills } from '../../server';
import { IDataBills, IDetailType } from '../../types';
import useAuth from "../../hooks/useAuth";


const schema = yup.object().shape({
  pin: yup.string().nullable()
});

interface Props {
  setIsBill?: Dispatch<React.SetStateAction<boolean>>
}
export const CableForm = ({setIsBill}: Props) => {
  const [details, setDetails] = useState<IDetailType[]>([]);
  const [network, setNetwork] = useState<string>('');
  const [networkLabel, setNetworkLabel] = useState<string>('');
  const [productCode, setProductCode] = useState<undefined | string>();
  const [avaliablePrice, setAvaliablePrice] = useState([]);

  const [pin, setPin] = useState<string>('');
  const [amount, setAmount] = useState<string | number>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [accountName, setAccountName] = useState<string>('');
  const [monthsPaidFor, setMonthsPaidFor] = useState<string | number>('');
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    (async () => {
      if (cardNumber.length === 10 && network) {
        try {
          setLoader(true)
            const input = {
              serviceType: network,
              accountNumber: cardNumber,
            };
            const data = await verifyBills(input)
          setAccountName(data?.data?.user?.name);
          setLoader(false)

        } catch (error) {
          setLoader(false)
          toast.error(error.message);

          }
      }
    })()
  }, [cardNumber])


  const { data, isLoading, isFetching } = useQuery<IDataBills>('bills-cabletv', () => getRetrieveAllBills('cabletv'));

  const mutation = useMutation(initiatePayment)

  const onFinish = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      smartCardNumber: cardNumber,
      productCode,
      productMonthsPaidFor: monthsPaidFor,
      amount,
      serviceType: network,
      serviceCategory: 'cabletv',
      pin,
    };


    schema
      .validate(payload)
      .then(() => {
        mutation.mutate(payload, {
          onSuccess: (data) => {
            toast.success(data?.message || 'Successful')
            setPin('')
            setAmount('')
            setNetwork('')
            setAccountName('')
            setMonthsPaidFor('')
            setProductCode('')
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


  const grabData = (value: string) => {
    const networkPlan = data?.bills?.find((val) => val.serviceType === value)
    setDetails(networkPlan?.plans)
    setNetwork(networkPlan?.serviceType)
    setNetworkLabel(networkPlan?.serviceName)
  }
  const checkDisabled = loader || mutation.isLoading || !cardNumber || !network || !productCode || !monthsPaidFor || !pin
  return (
    <>
      <section>
        <h1 className="font-bold">Select Provider</h1>
        <div className="flex justify-between">
          <button disabled={isLoading} onClick={() => {
            grabData('dstv')
          }} className={`h-14 w-20 bg-white rounded-2xl shadow-xl ${network === 'dstv' && 'border-[#065373] border-2'}`}>
            <img src={Dstv} className="mx-auto my-4" />
          </button>
          <button disabled={isLoading} onClick={() => {
            grabData('gotv')
          }} className={`h-14 w-20 bg-white rounded-2xl shadow-xl ${network === 'gotv' && 'border-[#065373] border-2'}`}>
            <img src={Gotv} className="mx-auto my-4" />
          </button>
          <button disabled={isLoading} onClick={() => {
            grabData('startimes')
          }} className={`h-14 w-20 bg-white rounded-2xl shadow-xl ${network === 'startimes' && 'border-[#065373] border-2'}`}>
            <img src={Startime} className="mx-auto my-4" />
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
          ) :
          <DropDown
            label='Select Provider'
            className="mt-5"
            defaultValue={network}
            placeholder="Select Cable Network"
            data={
              data &&
              data?.bills?.map((val) => {
                const temp = {
                  value: val.serviceType,
                  label: val?.serviceName,
                };
                return temp;
              })
            }

            onChange={(e: ChangeEvent<HTMLInputElement> & {
              serviceType: string
              plans: IDetailType[]
            }) => {
              grabData(e.toString())
            }}

            getValue={(v) => v.label.toString()}
          />}
          <DropDown
            label={'Plan'}
            className="mt-5"
            placeholder="Select Plans"
            data={details?.map((plan) => ({ value: JSON.stringify(plan), label: plan?.name }))}
            onChange={(e: ChangeEvent<HTMLInputElement> & IDetailType) => {
              const val = JSON.parse(e.toString())
              setAvaliablePrice(val?.availablePricingOptions)
              setProductCode(val?.code)
            }}
            getValue={(v) => v.label.toString()}
          />

          <DropDown
            label={'Price'}
            className="mt-5"
            placeholder="Select Plans"
            data={avaliablePrice?.map((plan) => {
              const temp = {
                value: plan,
                label: `₦${plan?.price} - Month: ${plan?.monthsPaidFor}`
              };
              return temp;
            })}
            onChange={(e: ChangeEvent<HTMLInputElement> & {
              price: number
              monthsPaidFor: number
            }) => {
              setAmount(e?.price)
              setMonthsPaidFor(e?.monthsPaidFor)
            }}
            getValue={(v) => v.label.toString()}
          />

          <Input
            label="Smartcard/Decoder Number"
            placeholder="Enter Smartcard/Decoder Number"
            value={cardNumber}
            className="mt-5"
            maxLength={10 || 12 || 13}
            onChange={e => setCardNumber(e.target.value)}
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
            label="Pin"
            placeholder="Pin"
            type="password"
            value={pin}
            maxLength={4}
            onChange={e => setPin(e.target.value)}
            className="mt-5"
          />
          <div className="mt-8">
            <Button type="submit" disabled={checkDisabled} loading={mutation.isLoading} className="w-full">
              Proceed
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};
