import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { Input, Button, Avatar, DropDown, Spinner } from "arvara-pckage";


import useAuth from '../../hooks/useAuth';
import { getBankListSearch, resolvedBankAccount } from '../../server/wallets';
import { IBankList } from '../../types';
import { getAllBeneficiary } from '../../server/account/account';
import { useNavigate } from 'react-router-dom';

interface ISend {
  onFinishStep: () => void
}

export const SendMoneyForm = ({ onFinishStep }: ISend) => {
  const navigate = useNavigate()

  const { data, isLoading } = useQuery<IBankList>("getBankList", () => getBankListSearch(''));
  const { data: ben, isLoading: isLoadingBen } = useQuery('get-all-beneficiaries', () => getAllBeneficiary('account'));


  const [loader, setLoader] = useState(false);
  const [accountNumber, setAccountNumber] = useState('');

  useEffect(() => {
    (async () => {
      if (accountNumber.length === 10 && bankCode) {
        try {
          setLoader(true)
          const data: {
            accountDetails: {
              accountDetails: string
              accountNumber: string
              accountName: string
            }
          } = await resolvedBankAccount(accountNumber, bankCode)
          useAuth.setState({
            sendMoney: {
              bankCode,
              accountName: data?.accountDetails?.accountName,
              accountNumber: data?.accountDetails?.accountNumber,
              amount: '',
              note: '',
              pin: ''
            }
          })
          setLoader(false)

        } catch (error) {
          setLoader(false)
          toast.error(error.message)
        }
      }
    })()
  }, [accountNumber])

  const sendMoney = useAuth(state => state.sendMoney)
  const note = useAuth(state => state.sendMoney.note)
  const amount = useAuth(state => state.sendMoney.amount)
  const bankCode = useAuth(state => state.sendMoney.bankCode)
  const accountName = useAuth(state => state.sendMoney.accountName)

  const [benObj, setObj] = useState<{
    id: string
    info?: {
      name: string
      bankCode: string
      bankName: string
      accountNumber: string
    }

  }>()

  const handleAccountNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountNumber(e.target.value);
  };

  const handleNote = (e: React.ChangeEvent<HTMLInputElement>) => {
    useAuth.setState({
      sendMoney: {
        ...sendMoney,
        note: e.target.value
      }
    })
  };

  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    useAuth.setState({
      sendMoney: {
        ...sendMoney,
        amount: Number(e.target.value)
      }
    })
  };

  const LoggedACC = (item) => {
    useAuth.setState({
      sendMoney: {
        bankCode: item,
        accountName: '',
        accountNumber: '',
        amount: 0,
        note: '',
        pin: ''
      }
    })
  }
  const checkDisabled = loader || !note.length || !amount || !accountName || !accountNumber || (!note && note.length > 3)
  return (
    <>
      <section className='overflow-x-hidden'>
        {isLoadingBen ? (
          <Spinner size={1.5} color="primary" />
        ) :
          <div className="flex items-center justify-between">
            {ben.length < 0 ?
              <h1>Select Beneficiary</h1>: <div />}
            <p onClick={() => navigate('/account')} className="text-grey-slate cursor-pointer">{ben.length <  0 ? "View All": "Add Beneficiaries"}</p>
          </div>
        }
        <div className="flex mt-5">
          <div className='overflow-x-scroll flex items-start justify-center  mt-5'>
            {isLoadingBen ? (
              <Spinner size={1.5} color="primary" />
            ) : (ben.length === 0 ? (
              ""
              // "Add Beneficiary"
              // <div className="h-24 w-24 border border-grey-slate rounded-2xl text-sm p-2">
              //   <Avatar className="mx-auto" size="lg" name='--' />
              //   <p className="text-center">No Beneficiaries</p>
              // </div>
            ) :
              ben?.map(item =>
                <div className='pr-2' key={item?.key} onClick={() => {
                  setObj(item)
                }}>
                  <div className="mt-4 h-20 w-20 border text-center border-grey-slate rounded-2xl text-sm p-2">
                    <Avatar className={`mx-auto ${benObj.id === benObj?.id && 'bg-grey-slate'}`} size="lg" name={`${item?.info?.name
                      .split(' ')[0]
                      .charAt(0)}${item?.info?.name
                        .split(' ')[1]
                        .charAt(0)}`} />

                    <p className="text-center">{`${item?.info?.name
                      .split(' ')[0]
                      .charAt(0)}${item?.info?.name
                        .split(' ')[1]
                        .charAt(0)}`}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="p-2">
          <form>
            {isLoading ? (
              <>
                <label
                  className="my-1 text-black flex items-center text-left text-sm font-semibold"
                >
                  Bank Name
                </label>
                <div className={`text-base p-3 pl-4 flex-grow min-w-64 focus:outline-none focus:ring focus:border-blue-100 border border-grey-beau rounded-lg w-full flex items-center `}>
                  <Spinner />
                </div>
              </>
            ) :

              <DropDown
                label="Bank Name"
                placeholder="Select Bank"
                searchable
                filter={(a, b) => typeof a.label === 'string' && a.label.toLowerCase().includes(b)}
                data={
                  data?.bankDetails &&
                  data?.bankDetails
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((val: { name: string; code: string }) => {
                      const temp = {
                        value: val?.code,
                        label: val?.name,
                      };
                      return temp;
                    })
                }
                onChange={LoggedACC}
                getValue={v => v.label.toString() || benObj?.info?.bankName}
              />
            }
            <Input
              label="Account Number"
              placeholder="Enter recipient account number"
              onChange={handleAccountNumber}
              maxLength={10}
              value={accountNumber || benObj?.info?.accountNumber}
              className="mt-5"
            />
            <Input
              label="Account Name"
              placeholder="Autoloaded"
              disabled
              value={accountName || benObj?.info?.name}
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
              label="Amount (NGN)"
              placeholder="0.00"
              onChange={handleAmount}
              value={amount}
              className="mt-5"
              type="number"
            />
            <Input
              label="Note"
              placeholder="Note"
              type='text'
              onChange={handleNote}
              value={note}
              minLength={4}
              className="mt-5"
            />
            <div className="mt-8">
              <Button type="button" loading={loader}
                disabled={checkDisabled}
                className="w-full" onClick={() => {
                  if ((note || amount || accountName || accountNumber) || (note.length > 3)) {
                    onFinishStep()
                  } else {
                    toast.warning("Please fill in other Input Values")
                  }
                }
                }>
                Continue
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
