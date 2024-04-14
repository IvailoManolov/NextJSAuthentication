"use client";

import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";

import * as z from "zod";

import { ResetSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";

import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { reset } from "@/actions/reset";
import { FormSuccess } from "../form-success";



export const ResetForm = () => {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof ResetSchema>>({
        resolver: zodResolver(ResetSchema),
        defaultValues: {
            email: ""
        }
    });

    const onSubmit = async (values: z.infer<typeof ResetSchema>) => {
        setError("");
        setSuccess("");

        startTransition(async () => {
            const response = await reset(values);

            if (response?.error) {
                setError(response?.error);
            }
            else if (response?.success) {
                setSuccess(response?.success);
            }
        });
    }

    return (
        <CardWrapper
            headerLabel="Forgot your password?"
            backButtonLabel="Back to login"
            backButtonHref="/auth/login"
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    {/* Input Fields */}
                    <div className="space-y-4">
                        <FormField control={form.control} name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="john.doe@example/.come" type="email" disabled={isPending} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormError message={error} />
                    <FormSuccess message={success} />

                    <Button type="submit" className="w-full" disabled={isPending}>
                        Send reset email
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
}