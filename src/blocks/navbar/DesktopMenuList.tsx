"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
    const pathname = usePathname()
    return (
        <ul className={"hidden 2xl:flex items-center justify-between gap-x-20"}>
            {list.map((item) => (
                <li key={item.id}>
                    <Link href={`/${item.url}`} className={cn("font-helvetica font-normal text-lg first-letter:uppercase text-secondary/60 [&.active]:text-secondary",
                        item.url === pathname && "text-secondary"
                    )}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default DesktopMenuList;
