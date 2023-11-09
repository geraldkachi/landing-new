import { Dispatch, SetStateAction, useRef, useState } from "react"
import { toast } from "react-toastify";
import { useMutation } from 'react-query';
import ReactPinField from 'react-pin-field';
import {  Button } from "arvara-pckage";


import { createNewPin, verifyPin } from '../../server';

interface Props {
  onNextStep?: Dispatch<SetStateAction<number>>
  setIsTransactionPin: Dispatch<SetStateAction<boolean>>
}

export const TransactionPinForm = ({onNextStep, setIsTransactionPin}: Props) => {
  const formInput = useRef<React.Ref<HTMLInputElement[] | null>>(null)
  const [pin, setPin] = useState('')


  const onFinish = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = {
      pin
    }

    mutation.mutate(value, {
      onSuccess: () => {
        setPin('')
        toast.success("Pin Created Successfully")
        setIsTransactionPin(false)
      },
      onError: (e: unknown) => {
        if (e instanceof Error) {
          toast.error(e.message)
        }
      }
    })
  }

  const mutation = useMutation(createNewPin)

  return (
    <section className="mt-20">
      <form onSubmit={onFinish}>
        <div className="w-full mx-auto mt-8 flex justify-center">
          <ReactPinField
            type="password"
            name="pin"
            length={4}
            onChange={(value: string) => setPin(value)}
            className="h-16 w-16 sm:w-20 rounded-xl border border-grey-slate text-center mb-1 mx-4 flex justify-between items-center gap-6 focus:outline-blue-4 focus:border-x-blue-4 text-sm font-semibold"
          />
        </div>
        <div className="mt-10">
          <Button type="submit" loading={mutation.isLoading} disabled={mutation.isLoading} className="w-full">Proceed</Button>
        </div>
      </form>
    </section>
  )
}
