import { Button, Spinner } from "arvara-pckage";
import { AIeyeslashbol, AIwallet3Outlin } from "arvara-icons";

import { FormatNumber } from "../../util/utils";
import Star from '/src/assets/homeDashboard/Looper-2.svg';
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import CardSelection from "../../pages/Debitcard/CardSelection";

type Props = {
  header: string;
  balance: number;
  loading: boolean;
  fundWallet: boolean;
  showBalance?: boolean;
  accountNumber: string;
  ledgerBalance: number;
  error?: unknown | string
}

const WalletBoard = ({ header, balance, loading, ledgerBalance, accountNumber, fundWallet }: Props) => {
  const [hideAmount, setHideAmount] = useState<boolean>(true);
  useEffect(() => {
    preload();
  }, []);

  const preload = async () => {
    const showBalance = await localStorage.getItem('showBalance');
    setHideAmount(!showBalance);
  };

  return (
    <div
      style={{ flex: 3 }}
      className="relative bg-meador md:h-56 rounded-2xl p-5 pt-8 md:shrink-0 lg:basis-[40%]">

      <div style={{ zIndex: 100 }} className="!z-50">
        <div className="flex items-center justify-between z-[30]">
          <div>
            <div className="flex gap-3">
              <AIeyeslashbol onClick={() => setHideAmount(!hideAmount)} className="icon solid text-white" />
              <h1 className="text-white text-base">{header}</h1>
            </div>
            {
              (
                <div className="text-white text-2xl mt-1 absolute font-bold flex whitespace-nowrap">
                  {loading ? (
                    <Spinner color='white' size={2} />
                  ) : (
                    // !showBalance ?
                    (`₦${hideAmount ? "xx,xxxx" :
                      balance === undefined || null
                        ? '---,---'
                        : FormatNumber(balance, 2)
                      }`)
                    //   :
                    // <div className="text-white text-2xl mt-1 absolute font-bold flex whitespace-nowrap">
                    //   ******
                    // </div>
                  )}
                </div>
              )
            }
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <p className="text-white whitespace-nowrap flex">
                {' '}
                {loading ? (
                  <Spinner color='white' size={1.5} />
                ) : !accountNumber ? (
                  '---,---,---'
                ) : (
                  accountNumber
                )}
              </p>
              <AIwallet3Outlin className="text-white ml-1" />
            </div>
          </div>
        </div>

        <div style={{ zIndex: '999 !important' }} className="flex justify-between z-50">
          <div className="mt-16">

            <p className="text-white flex whitespace-nowrap">
              Ledger Balance :{' '}
              {loading ? (
                <Spinner color='white' size={1.5} />
              ) : (
                // !showBalance ?
                `₦${hideAmount ? "xx,xxxx" : ledgerBalance === undefined || null
                  ? '---,---'
                  : FormatNumber(ledgerBalance, 2)
                }`
                // : (
                //   <p className="text-white flex whitespace-nowrap">
                //     ******
                //   </p>
                // )
              )}
            </p>


            {fundWallet &&
              <Button
                style={{ zIndex: '2000px' }}
                type="button"
                variant="outline"
                onClick={() => useAuth.setState({ drawerState: { open: true, type: 'fundingOption' } })}
                className="border-none">
                Fund Wallet
              </Button>
            }
          </div>
        </div>

      </div>

      {/* <div style={{ zIndex: 0 }} className='absolute  bottom-0 right-0 !z-0'>
        <img src={Star} className="" />
      </div> */}
    </div>
  )
}

export default WalletBoard;

// const Spinner = () => (
//   <div className=" flex items-center justify-center">
//     <div className="w-5 h-5 border-2 border-dashed rounded-full animate-spin border-[#ffffff]" />
//   </div>
// );
