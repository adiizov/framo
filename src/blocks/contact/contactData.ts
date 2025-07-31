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

export const contactFormSelectData = [
    {
        id: 1,
        name: "Разработка сайта"
    },
    {
        id: 2,
        name: "CRM система"
    },
    {
        id: 3,
        name: "Телеграм бот"
    },
    {
        id: 4,
        name: "Интеграция бота с чатами"
    },
    {
        id: 5,
        name: "Интернет-магазин"
    },
    {
        id: 6,
        name: "Создание логотипа"
    },
    {
        id: 7,
        name: "Разработка брендбука"
    },
];

export type ContactFormSelectType = typeof contactFormSelectData[number];