import { useNavigate } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import { Button, Spinner, Input } from "arvara-pckage";
import { useQuery } from 'react-query';
import { generateNewOpt } from '../../server';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
// import { Customer } from 'package-types';


const ForgetPasswordForm = () => {

    // const [phoneNumber, setPhoneNumber] = useState<Pick<Customer, 'phoneNumber'>>();
    const [phoneNumber, setPhoneNumber] = useState<string>();
    const navigate = useNavigate();
    const formInput = useRef<HTMLInputElement>(null)

    console.log(phoneNumber)

    const { data, isLoading, isError, error } = useQuery("resend-otp", () => generateNewOpt({phoneNumber}), {
        enabled: !!phoneNumber
    })

    const inFifthtenminis = new Date(new Date().getTime() + 15 * 60 * 1000)
    useEffect(() => {
        if (data) {
         Cookies.set("resetNumber", data['customer']?.phoneNumber, {expires: inFifthtenminis})
         toast.success("Successfully Sent")
         navigate('/reset-password')
        }
    }, [data])


    useEffect(() => {
        if (isError) {
            toast.error(String(error))
        }
    }, [isError])

    const onFinish = (e: React.FormEvent) => {
        e.preventDefault();
        setPhoneNumber(e.target['tel'].value)
    };

    return (
        <>
            <form onSubmit={onFinish}>
                <div className="container mx-auto mt-8 flex justify-center">
                    <Input
                        label="Phone Number"
                        ref={formInput}
                        type="tel"
                        name="tel"
                        className="mt-5 w-full"
                        placeholder="Enter phone Number"
                    />
                </div>

                <div className="flex items-center justify-center mt-6">
                    <Button
                        type="submit"
                        className="w-full mt-8"
                        loading={isLoading}
                    >
                        Send Code
                    </Button>
                </div>
                <div className="flex justify-center text-center mt-8">
                    {" "}
                    <a className="flex items-center cursor-pointer">
                        Remember your password &nbsp;
                        {isLoading ? <Spinner size={1} /> : <p onClick={() => navigate('/login')} className="font-bold text-blue-4 cursor-pointer hover:text-blue-900">
                            Login
                        </p>}
                        <i className="bx bx-caret-right ml-1"></i>
                    </a>{" "}
                </div>
            </form>
        </>
    )
}

export default ForgetPasswordForm
