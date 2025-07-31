"use client"
import Image from "next/image"
import Container from "@/components/Container";
import DesktopMenuList from '@/blocks/navbar/DesktopMenuList';
import ArrowUp from "@/assets/ArrowUp";
import Btn from "@/components/Btn";
import Burger from "@/blocks/burger/Burger";
import { Button } from "@/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAnimate } from "framer-motion";
import { useEffect } from "react";

const Navbar = ({dark=false, className}:{dark?: boolean, className?: string}) => {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        animate("img[data-slot='animate']", { y: [100,0] }, {
            duration: 1.6,
            ease: [0.72, 0, 0, 0.99],
        })
        animate("ul[data-slot='animate']", { y: [100,0] }, {
            duration: 1.6,
            ease: [0.72, 0, 0, 0.99],
        })
        animate("button[data-slot='animate']", { y: [100,0] }, {
            duration: 1.6,
            ease: [0.72, 0, 0, 0.99],
        })
        animate("a[data-slot='animate']", { y: [100,0] }, {
            duration: 1.6,
            ease: [0.72, 0, 0, 0.99],
        })
    })

    return (
        <nav className={cn("navbar py-[80px] [&_*]:overflow-hidden", className)} ref={scope}>
            <Container className="flex items-center justify-between">
                <Image src={`${dark ? `/logo-dark.svg`: `/logo.svg`}`} alt="framo logo" width={160} height={64} quality={100} data-slot={"animate"}/>
                <DesktopMenuList dark={dark} />
                <Btn data-slot={"animate"} url={"/contact"} variant={dark ? "dark" : "light"} className={"font-medium text-base gap-y-2 hidden 2xl:flex transition-none "}>Cвязаться <ArrowUp dark={dark}/></Btn>
                <Burger>
                    <Button data-slot={"animate"} size={"icon"} variant={dark ? "dark" : "light"} className={"flex 2xl:hidden transition-none"}><Menu /></Button>
                </Burger>
            </Container>
        </nav>
    );
};

export default Navbar;