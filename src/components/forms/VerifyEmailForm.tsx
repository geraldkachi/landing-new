import * as yup from "yup";
import { toast } from 'react-toastify';
import { Customer } from "package-types";
import { useMutation } from "react-query";
import { Button, Input } from "arvara-pckage"
import React, { useEffect, useRef } from 'react'

import useAuth from "../../hooks/useAuth";
import { getCustomerRecord } from "../../helpers/customer_info";
import { InitiateEmailVerification, verifyEmail } from "../../server";

const schema = yup.object().shape({
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Enter OTP")
        .nullable(false),
    secretKey: yup.string().required("Enter a valid key").nullable(false),
});

const verifyEmailSchema = yup.object().shape({
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Enter OTP")
        .nullable(false),
    otp: yup.string().required("Enter a valid key").nullable(false),
    secretKey: yup.string().required("Enter a valid key").nullable(false),
})

const VerifyEmailForm = () => {
    const formInput = useRef<HTMLInputElement>(null);

    const customer = getCustomerRecord<Customer & { secret: string }>(true);
    const initiateEmailMutation = useMutation(InitiateEmailVerification, {
        onSuccess: () => {
            toast.success('An OTP has been sent to your mail. Kindly use it to verify your email');
        },
        onError: (error: Error) => {
            toast.success(error?.message || "We're unable to send an OTP to your mail. Please try again!");
        }
    });

    const mutation = useMutation(verifyEmail, {
        onSuccess: () => {
            toast.success('Email successfully verified');
            window.location.reload();
            useAuth.setState({ drawerState: { open: false, type: '', header: '', subheader: '' } })
        },
        onError: (error: Error) =>  {
            toast.error(error.message);
        }
    })

    const handleInitiateEmailVerification = () => {
        const body = { email: customer?.email, secretKey: customer?.secret };
        schema.validate(body).then((values) => {
            initiateEmailMutation.mutateAsync(values);
        }).catch(err => toast.error(err));
    }

    useEffect(() => {
        handleInitiateEmailVerification();
        return () => { undefined };
    }, []);

    const onFinish = (e: React.FormEvent) => {
        e.preventDefault()
        const values = {
            email: customer.email,
            secretKey: customer.secret,
            otp: e.target["otp"].value,
        };

        verifyEmailSchema
            .validate(values)
            .then((val) => {
                mutation.mutate(val)
            })
            .catch(() => {
                toast.error("Error sending OTP. If error persist, kindly refresh");
            });
    };


    return (
        <>
            <section className="">
                <form onSubmit={onFinish}>
                    <Input label="OTP" ref={formInput} placeholder="OTP" name='otp' className="mt-5" />
                    <div className="w-full mx-auto  pr-10 fixed bottom-0">
                        <Button type="submit" className="w-full"
                            loading={mutation.isLoading}
                            disabled={initiateEmailMutation.isLoading || mutation.isLoading}
                        >
                            Proceed
                        </Button>
                        <Button type="submit" variant="outline" className="w-full"
                            onClick={handleInitiateEmailVerification}
                            loading={initiateEmailMutation.isLoading}
                        >
                            Resend OTP
                        </Button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default VerifyEmailForm
