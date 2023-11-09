import { Button, DropDown, Input } from "arvara-pckage";
import { useQuery } from 'react-query';
import { getBankListSearch } from '../../server';
interface Props {
  openPaymentModal: () => void;
}


export const BankTransferForm = ({ openPaymentModal }: Props) => {
  const { data } = useQuery('bank-list', () => getBankListSearch(''));
  return (
    <>
      <section className="mt-20">
        <form>
          <DropDown
            searchable
            placeholder="Bank Name"
            className="mt-5"
            data={
              data?.bankDetails &&
              data?.bankDetails.map((val: { name: string; code: string }) => {
                const temp = {
                  value: val?.code,
                  label: val?.name,
                };
                return temp;
              })
            }
						getValue={v => v.label.toString()}
					/>
          <Input placeholder="Account Number" value="" className="mt-5" />
          <Input placeholder="Account Name" value="" className="mt-5" />
          <Input
            placeholder="Amount"
            value=""
            className="mt-5"
          />
          <Input
            placeholder="Note"
            value=""
            className="mt-5"
          />
          <div className="mt-80">
            <Button type="button" className="w-full" onClick={openPaymentModal}>
              Fund Wallet
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};
