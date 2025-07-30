import Email from "@/assets/Email";
import Phone from "@/assets/Phone";

export const contactData = [
    {
        id: 1,
        name: "Почта",
        value: "framo@gmail.com",
        type: "email",
        icon: Email,
    },
    {
        id: 2,
        name: "Для связи",
        value: "(95) 033-64-34",
        type: "phone",
        icon: Phone,
    },
]

export type ContactType = typeof contactData[number];