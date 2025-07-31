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
        url: "/about",
    },
    {
        id: 3,
        title: "Проекты",
        url: "/portfolio",
    },
    {
        id: 4,
        title: "Контакты",
        url: "/contact",
    },
];

const DesktopMenuList = ({dark=false}:{dark: boolean}) => {
    const pathname = usePathname()
    return (
        <ul className={"hidden 2xl:flex items-center justify-between gap-x-20"} data-slot={"animate"}>
            {list.map((item) => (
                <li key={item.id}>
                    <Link href={`${item.url}`} className={cn("font-helvetica font-normal text-lg first-letter:uppercase",
                        dark ? "text-text-primary/60": "text-text-secondary/60",
                        item.url === pathname && (dark ? "text-text-primary": "text-text-secondary"),
                    )}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default DesktopMenuList;
