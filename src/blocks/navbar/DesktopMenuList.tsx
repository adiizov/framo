import Link from "next/link";

const list = [
    {
        id: 1,
        title: "Главная",
        url: "/",
    },
    {
        id: 2,
        title: "О студии",
        url: "about",
    },
    {
        id: 3,
        title: "Проекты",
        url: "portfolio",
    },
    {
        id: 4,
        title: "Контакты",
        url: "contact",
    },
];

const DesktopMenuList = () => {
    return (
        <ul className={"hidden 2xl:flex items-center justify-between gap-x-20"}>
            {list.map((item) => (
                <li key={item.id}>
                    <Link href={`/${item.url}`} className={"font-helvetica font-normal text-lg first-letter:uppercase text-foreground-muted "}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default DesktopMenuList;
