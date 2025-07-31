"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem, FormLabel,
    FormMessage,
} from "@/ui/form";
import ArrowUp from "@/assets/ArrowUp";
import ContactInput from "@/blocks/contact/ContactInput";
import { InputMask } from "@react-input/mask";
import { Textarea } from "@/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";
import { contactFormSelectData } from "@/blocks/contact/contactData";
import { Checkbox } from "@/ui/checkbox";
import { cn } from "@/lib/utils";

const formSchema = z.object({
    name: z.string().min(2).max(50),
    phone: z
        .string()
        .min(2)
        .max(50)
        .regex(
            /^\+998 \d{2} \d{3} \d{2} \d{2}$/,
            "Номер должен быть в формате +998 XX xxx xx xx",
        ),
    comment: z.string().max(50).optional(),
    interest: z.array(z.string()),
});

const ContactForm = ({select=false, className}:{select?: boolean, className?: string}) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            comment: "",
            interest: [],
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const payload = {
            ...values,
            interest: values.interest.join(", "),
            status: "активный"
        };
        try {
            await fetch(
                process.env.NEXT_PUBLIC_GOOGLE_SHEETS_ENDPOINT as string,
                {
                    method: "POST",
                    body: JSON.stringify(payload),
                },
            );
            toast.success("Форма отправлена");
        } catch (e) {
            console.error(e);
            toast.message("Попробуйте заново", {
                description: "Что то пошло не так",
            });
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={cn("space-y-8", className)}>
                {select && (
                    <FormField
                        control={form.control}
                        name="interest"
                        render={() => (
                            <FormItem className={"block space-y-8 mb-[50px]"}>
                                <FormLabel className="text-3xl text-text-muted font-normal ">Меня интересует...</FormLabel>
                                <div className={"flex flex-wrap gap-5"}>
                                    {contactFormSelectData.map((item) => (
                                        <FormField
                                            key={item.id}
                                            control={form.control}
                                            name="interest"
                                            render={({ field }) => {
                                                return (
                                                    <FormItem
                                                        key={item.id}
                                                        className="w-fit"
                                                    >
                                                        <FormControl className={"hidden"}>
                                                            <Checkbox
                                                                checked={field.value?.includes(item.name)}
                                                                onCheckedChange={(checked) => {
                                                                    return checked
                                                                        ? field.onChange([...field.value, item.name])
                                                                        : field.onChange(
                                                                            field.value?.filter(
                                                                                (value) => value !== item.name
                                                                            )
                                                                        )
                                                                }}
                                                            />
                                                        </FormControl>
                                                        <FormLabel className={cn("block shrink-0 text-base lg:text-xl font-medium py-3 px-4 rounded-full border border-text-primary", field.value.includes(item.name) && "bg-text-primary text-text-secondary")}>
                                                            {item.name}
                                                        </FormLabel>
                                                    </FormItem>
                                                )
                                            }}
                                        />
                                    ))}
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                )}
                <div className={"flex flex-col sm:flex-row items-center gap-7"}>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className={"gap-3 w-full"}>
                                <FormDescription
                                    className={"text-[14px] text-text-muted"}
                                >
                                    Ваше имя
                                </FormDescription>
                                <FormControl>
                                    <ContactInput
                                        {...field}
                                        placeholder={"Введите ваше имя"}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem className={"gap-3 w-full"}>
                                <FormDescription
                                    className={"text-[14px] text-text-muted"}
                                >
                                    Ваш номер телефона
                                </FormDescription>
                                <FormControl>
                                    <InputMask
                                        component={ContactInput}
                                        mask="+998 __ ___ __ __"
                                        replacement={{ _: /\d/ }}
                                        placeholder="+998"
                                        type="tel"
                                        className={"font-normal placeholder:font-normal"}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                        <FormItem className={"gap-3 w-full"}>
                            <FormDescription
                                className={"text-[14px] text-text-muted"}
                            >
                                Комментарий (опционально)
                            </FormDescription>
                            <FormControl>
                                <Textarea
                                    {...field}
                                    placeholder={"Введите комментарий"}
                                    className={
                                        "bg-transparent dark:bg-transparent shadow-none border-none focus-visible:ring-0 md:text-lg text-lg p-0 pb-4 rounded-none placeholder:text-text-primary placeholder:font-normal min-h-0"
                                    }
                                    style={{
                                        borderBottom:
                                            "1px solid rgba(102, 114, 131, 0.5)",
                                    }}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" value={"dark"} disabled={form.formState.isSubmitting} className={"w-full sm:w-fit"}>
                    Отправить
                    {form.formState.isSubmitting ? (
                        <Loader2Icon className="animate-spin" />
                        ): (
                        <ArrowUp dark />
                    )}
                </Button>
            </form>
        </Form>
    );
};

export default ContactForm;
