import { useRef } from 'react'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify';
import { Button, Input } from "arvara-pckage";
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { custmerForgetPassword } from '../../server';

const formatNumber = (number: string) =>{
    let val = '';
    if(number && number.includes("+234")){
        val = `0${number.split("+234")[1]}`
    }
    return val;
}

const ResetPasswordForm = () => {
    const resetNumber = Cookies.get("resetNumber")


    const navigate = useNavigate();
    const mutation = useMutation(custmerForgetPassword);
    const formInput = useRef<HTMLInputElement>(null)


    const onFinish = (e) => {
        e.preventDefault();
        const values = {
            otp: e.target['otp'].value,
            password: e.target['password'].value,
            confirmPassword: e.target['confirmPassword'].value,
            phoneNumber: formatNumber(resetNumber)
        };
        if (values.password === values.confirmPassword) {
            mutation.mutate(values, {
                onSuccess: () => {
                    navigate('/dashboard')
                    toast.success("Welcome to Arvo Finance")
                },
                onError: (e: unknown) => {
                    if (e instanceof Error) {
                        toast.error(e.message)
                    }
                }
            })
        } else {
            toast.error("Password must match")
        }
    };

    return (
        <div>
            <form onSubmit={onFinish}>
                <div className="container mx-auto flex justify-center">
                    <Input
                        label="OTP"
                        ref={formInput}
                        type="text"
                        name="otp"
                        className="mt-5 w-full"
                        placeholder="Enter OTP sent to your mail"
                    />
                </div>
                <div className="container mx-auto flex justify-center">
                    <Input
                        label="New Password"
                        ref={formInput}
                        type="password"
                        name="password"
                        className="mt-5 w-full"
                        placeholder="Choose your password"
                    />
                </div>
                <div className="container mx-auto flex justify-center">
                    <Input
                        label="New Password"
                        ref={formInput}
                        type="password"
                        name="confirmPassword"
                        className="mt-5 w-full"
                        placeholder="Choose your password"
                    />
                </div>

                <div className="flex items-center justify-center">
                    <Button
                        type="submit"
                        className="w-full mt-8"
                        loading={mutation.isLoading}
                    >
                        Reset Password
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default ResetPasswordForm
