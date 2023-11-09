import { Button, DropDown, Input, RangePicker } from 'arvara-pckage';
import React, { useRef, useState } from 'react'
import { loanPurposes, moneyFormmater } from '../../util/utils';
import { goToLoanSummary } from '../../helpers/loan_func';
import { ILoanQualification } from '../../types';
import { addDays, format } from 'date-fns';
import useAuth from '../../hooks/useAuth';

type Props = {
    loanType: string;
    data: ILoanQualification;
}

const LoanApplicationForm = ({ data, loanType }: Props) => {
    const formInput = useRef<HTMLInputElement>(null);

    const loanAmount = useAuth(state => state.loanAmount);
    const minAmount = useAuth(state => state.minAmount);
    const maxAmount = useAuth(state => state.maxAmount);
  const [startRepaymentDate, setStartRepaymentDate] = useState<string>('');

    const handleLoanTenure = (day: number) => {
        const date = addDays(new Date(), day < 30 ? day : 30);
        setStartRepaymentDate(format(date, 'yyyy-MM-dd'));

        if (data?.verification?.loanQualification[0].days !== day) {
          const selectedDay = data?.verification?.loanQualification?.find(
            (qual) => Number(qual.days) === Number(day)
          );
          useAuth.setState({
            loanAmount: selectedDay?.maximumCredit,
            maxAmount: selectedDay?.maximumCredit,
            minAmount: selectedDay?.minimumCredit,
          });
        }
      };
  return (
    <div>
         <div className="flex flex-col items-center justify-center">
                <p className="text-grey-slate">Amount you are eligible for</p>
                <h1 className="text-3xl font-bold">{moneyFormmater(loanAmount)}</h1>
              </div>
              <RangePicker
                value={loanAmount}
                setValue={(e) => useAuth.setState({ loanAmount: Number(e)})}
                min={Number(minAmount)}
                max={Number(maxAmount)}
              />
              <form onSubmit={(e) => goToLoanSummary(e, data, loanAmount, startRepaymentDate, loanType)} className="mt-10">
                <DropDown
                  autoComplete="off"
                  label="Loan Purpose"
                  placeholder="Select Loan Purpose"
                  className="mt-5"
                  name="purpose"
                  innerRef={formInput}
                  data={loanPurposes.map((purpose) => ({ label: purpose, value: purpose }))}
                  getValue={(v) => v.value.toString()}
                />

                <DropDown
                  autoComplete="off"
                  label="Loan Tenure"
                  placeholder="Select Loan Tenure"
                  className="mt-5"
                  name="tenure"
                  innerRef={formInput}
                  data={
                    data
                      ? data?.verification?.loanQualification?.map((val) => {
                          const temp = {
                            label: `${val?.days} days`,
                            value: `${val?.days}`
                          };
                          return temp;
                        })
                      : []
                  }
                  getValue={(v) => v.label.toString()}
                  onChange={(e) => {
                    handleLoanTenure(e as unknown as number);
                  }}
                />

                <Input
                  label="Repayment Start Date"
                  placeholder="--Auto-loaded--"
                  disabled
                  type="text"
                  value={startRepaymentDate}
                  className="mt-5"
                  name="repayment"
                />

                <div className="mt-8">
                  <Button type="submit" className="w-full" disabled={!startRepaymentDate}>
                    Apply
                  </Button>
                </div>
              </form>
    </div>
  )
}

export default LoanApplicationForm;
