import Image from "next/image"
import Container from "@/components/Container";
import DesktopMenuList from '@/blocks/navbar/DesktopMenuList';
import ArrowUp from "@/assets/ArrowUp";
import Btn from "@/components/Btn";
import Burger from "@/blocks/burger/Burger";
import { Button } from "@/ui/button";
import { Menu } from "lucide-react";

const Navbar = ({dark=false}:{dark?: boolean}) => {
    return (
        <nav className="navbar ">
            <Container className="flex items-center justify-between">
                <Image src={`${dark ? `/logo-dark.svg`: `/logo.svg`}`} alt="framo logo" width={160} height={64} quality={100}/>
                <DesktopMenuList dark={dark} />
                <Btn url={"/contact"} variant={dark ? "dark" : "light"} className={"font-medium text-base gap-y-2 hidden 2xl:flex "}>Cвязаться <ArrowUp dark={dark}/></Btn>
                <Burger>
                    <Button size={"icon"} variant={dark ? "dark" : "light"} className={"flex 2xl:hidden"}><Menu /></Button>
                </Burger>
            </Container>
        </nav>
    );
};

export default Navbar;