"use client"
import Image from "next/image"
import Container from "@/components/Container";
import DesktopMenuList from '@/blocks/navbar/DesktopMenuList';
import Btn from "@/components/Btn";
import Burger from "@/blocks/burger/Burger";
import { Button } from "@/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({dark=false, className}:{dark?: boolean, className?: string}) => {
    return (
        <nav className={cn("navbar py-[80px] [&_*]:overflow-hidden", className)} data-slot={"animate"}>
            <Container className="flex items-center justify-between">
                <Link href={"/"}><Image src={`${dark ? `/logo-dark.svg`: `/logo.svg`}`} alt="framo logo" width={160} height={64} quality={100} data-slot={"animate"}/></Link>
                <DesktopMenuList dark={dark} />
                <Btn data-slot={"animate"} url={"/contact"} variant={dark ? "dark" : "light"} className={"font-medium text-base gap-y-2 hidden 2xl:flex transition-none "} title={"Cвязаться"}/>
                <Burger>
                    <Button data-slot={"animate"} size={"icon"} variant={dark ? "dark" : "light"} className={"flex 2xl:hidden transition-none"}><Menu /></Button>
                </Burger>
            </Container>
        </nav>
    );
};

export default Navbar;