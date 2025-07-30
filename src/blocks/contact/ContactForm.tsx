"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from "@/ui/form"
import ArrowUp from "@/assets/ArrowUp";
import ContactInput from "@/blocks/contact/ContactInput";
import { InputMask } from "@react-input/mask";
import { Textarea } from "@/ui/textarea"

const formSchema = z.object({
    name: z.string().min(2).max(50),
    phone: z.string().min(2).max(50),
    comment: z.string().min(2).max(50).optional(),
})

const ContactForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            comment: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className={"flex items-center gap-x-7"}>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className={"gap-3 w-full"}>
                                <FormDescription className={"text-[14px] text-text-muted"}>
                                    Ваше имя
                                </FormDescription>
                                <FormControl>
                                    <ContactInput {...field}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className={"gap-3 w-full"}>
                                <FormDescription className={"text-[14px] text-text-muted"}>
                                    Ваш номер телефона
                                </FormDescription>
                                <FormControl>
                                    <InputMask
                                        component={ContactInput}
                                        mask="+998 __ ___ __ __"
                                        replacement={{ _: /\d/ }}
                                        placeholder="+998"
                                        type="tel"
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
                    name="name"
                    render={({ field }) => (
                        <FormItem className={"gap-3 w-full"}>
                            <FormDescription className={"text-[14px] text-text-muted"}>
                                Комментарий (опционально)
                            </FormDescription>
                            <FormControl>
                                <Textarea {...field}
                                    placeholder={"Введите комментарий"}
                                    className={"bg-transparent dark:bg-transparent shadow-none border-none focus-visible:ring-0 md:text-lg text-lg p-0 pb-4 rounded-none placeholder:text-text-primary placeholder:font-normal min-h-0"}
                                      style={{borderBottom: "1px solid rgba(102, 114, 131, 0.5)"}}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" value={"dark"} >Отправить <ArrowUp color={"white"}/></Button>
            </form>
        </Form>
    )
};

export default ContactForm;