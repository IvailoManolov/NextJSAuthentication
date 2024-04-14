"use client";

import { CardWrapper } from "./card-wrapper";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { useEffect } from "react";
import { newVerification } from "@/actions/new-verification";
import { useState } from "react";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";

export const NewVerificationForm = () => {

    const searchParams = useSearchParams();
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();

    const token = searchParams.get("token");

    const onSubmit = useCallback(async () => {
        if (success || error)
            return;

        if (!token) {
            setError("Missing token!");
            return;
        }
        try {
            const response = await newVerification(token);

            if (response?.success) {
                setSuccess(response.success);
            }
            else {
                setError(response?.error);
            }
        } catch (err) {
            setError("Something went wrong!");
        }
    }, [token, success, error]);

    useEffect(() => {
        onSubmit();
    }, [onSubmit]);

    return (
        <CardWrapper
            headerLabel="Confirming your email"
            backButtonHref="/auth/login"
            backButtonLabel="Back to login!"
        >
            <div className="flex items-center w-full justify-center">
                {!success && !error && (
                    <BeatLoader />
                )}

                <FormSuccess message={success} />

                {!success && (
                    <FormError message={error} />
                )}
            </div>
        </CardWrapper>
    )
}