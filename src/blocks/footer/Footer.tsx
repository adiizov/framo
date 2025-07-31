import Container from "@/components/Container";
import Image from "next/image"
import { Button } from "@/ui/button";
import ArrowUp from "@/assets/ArrowUp";
import Telegram from "@/assets/Telegram";
import Instagram from "@/assets/Instagram";
import Facebook from "@/assets/Facebook";
import { createElement } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Btn from "@/components/Btn";

const media = [
    {
        id: 1,
        name: "Telegram",
        icon: Telegram,
        url: "https://telegram.org/",
    },
    {
        id: 2,
        name: "Instagram",
        icon: Instagram,
        url: "https://www.instagram.com/",
    },
    {
        id: 3,
        name: "Facebook",
        icon: Facebook,
        url: "https://www.facebook.com/",
    },
]

const navigation = [
    {
        id: 1,
        title: "Навигация",
    },
    {
        id: 2,
        title: "Главная",
        url: "/",
    },
    {
        id: 3,
        title: "О нас",
        url: "about",
    },
    {
        id: 4,
        title: "Услуги",
        url: "services",
    },
    {
        id: 5,
        title: "Проекты",
        url: "projects",
    },
]

const contacts = [
    {
        id: 1,
        value: "framodsgnstudio@gmail.com",
        type: "email",
    },
    {
        id: 2,
        value: "+998950336434",
        type: "phone",
    },
]

const Footer = () => {
    return (
        <footer>
            <Container>
                <div className={"flex justify-between flex-col lg:flex-row gap-y-16 mb-10  md:mb-[106px] pt-[70px] border-t border-text-primary/50"}>
                    <div className={"flex flex-col gap-y-2 justify-between w-fit"}>
                        <Image src={"logo-dark.svg"} alt={"framo logo"} width={156} height={62} />
                        <Button variant={"dark"}>Cвязаться <ArrowUp dark/></Button>
                    </div>
                    <div>
                        <h4 className={"text-xs text-text-muted uppercase"}>Социальные сети</h4>
                        <ul className={"flex gap-x-3 mt-6"}>
                            {media.map(item => (
                                <li key={item.id}>
                                    <Btn url={item.url} size={"icon"} variant={"outline"} className={"[&_svg:not([class*='size-'])]:size-6"}>{createElement((item.icon))}</Btn>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <ul>
                        {navigation.map((item, index) => (
                            <li key={item.id} className={cn("mb-5", index === 0 && "text-xs text-text-muted uppercase mb-4")}>
                                {index !== 0 ? (
                                    <Link href={item.url ?? "#"} className={"text-base"}>{item.title}</Link>
                                ): item.title}
                            </li>
                        ))}
                    </ul>
                    <div>
                        <h4 className={"text-xs text-text-muted uppercase mb-4"}>контакты</h4>
                        <ul className={"space-y-2"}>
                            {contacts.map(item => (
                                <li key={item.id}>
                                    <a href={item.type === "email" ? `mailto:${item.value}`: `tel:${item.value}`} className={"text-base"}>{item.value}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;