export const priceData = [
    {
        id: 1,
        title: "Разработка сайта",
        description: "Создание современного и адаптивного сайта под ваши цели и аудиторию",
        price: 800,
        isSpecial: false,
    },
    {
        id: 2,
        title: "Разработка интернет-магазина",
        description: "Полноценный Ecommerce-проект с UX-дизайном, корзиной, фильтрами и системой оплаты",
        price: 1500,
        isSpecial: false,
    },
    {
        id: 3,
        title: "Разработка логотипа",
        description: "Уникальный логотип, отражающий суть вашего бренда. Исследование, концепты, адаптивные версии",
        price: 300,
        isSpecial: false,
    },
    {
        id: 4,
        title: "Полный комплекс",
        description: "Айдентика, сайт, логотип, телеграмм бот и фирменный стиль — полный цикл от идеи до запуска",
        price: 2000,
        isSpecial: true,
    },
]

export type PriceType = typeof priceData[number];