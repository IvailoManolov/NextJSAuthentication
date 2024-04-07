"use client";

import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";

import * as z from "zod";

import { LoginSchema } from "@/schemas";
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
import { login } from "@/actions/login";
import { FormSuccess } from "../form-success";


export const LoginForm = () => {

    const searchParams = useSearchParams();
    const urlError = searchParams.get("error") === "OAuthAccountNotLinked" ? "Email already in use with different provider" : "";

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = async (values: z.infer<typeof LoginSchema>) => {

        setError("");
        setSuccess("");

        startTransition(async () => {
            const response = await login(values);

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
            headerLabel="Welcome back!"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
            showSocial
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

                        <FormField control={form.control} name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Password
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="*********" type="password" disabled={isPending} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormError message={error || urlError} />
                    <FormSuccess message={success} />

                    <Button type="submit" className="w-full" disabled={isPending}>
                        Login
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
}