import Container from "@/components/Container";
import Image from "next/image"
import { Button } from "@/ui/button";
import ArrowUp from "@/assets/ArrowUp";
import Telegram from "@/assets/Telegram";
import Instagram from "@/assets/Instagram";
import Facebook from "@/assets/Facebook";
import { createElement } from "react";

const media = [
    {
        id: 1,
        name: "Telegram",
        icon: Telegram,
    },
    {
        id: 2,
        name: "Instagram",
        icon: Instagram,
    },
    {
        id: 3,
        name: "Facebook",
        icon: Facebook,
    },
]

const Footer = () => {
    return (
        <footer>
            <Container>
                <div>
                    <div className={"flex flex-col gap-y-2 justify-between w-fit"}>
                        <Image src={"logo-dark.svg"} alt={"framo logo"} width={156} height={62} />
                        <Button variant={"dark"}>Cвязаться <ArrowUp color={"white"}/></Button>
                    </div>
                    <div>
                        <h4 className={"text-xs text-text-muted uppercase"}>Социальные сети</h4>
                        <ul className={"flex gap-x-3"}>
                            {media.map(item => (
                                <li key={item.id}>
                                    <Button size={"icon"} variant={"outline"} className={"[&_svg:not([class*='size-'])]:size-6"}>{createElement((item.icon))}</Button>
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