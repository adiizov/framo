import Image from "next/image"
import Container from "@/components/Container";
import DesktopMenuList from '@/blocks/navbar/DesktopMenuList';
import ArrowUp from "@/assets/ArrowUp";
import Btn from "@/components/Btn";
import Burger from "@/blocks/burger/Burger";
import { Button } from "@/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Container className="flex items-center justify-between">
                <Image src={"/logo.svg"} alt="framo logo" width={160} height={64} quality={100}/>
                <DesktopMenuList />
                <Btn url={"/contact"} variant={"dark"} className={"font-helveticaNeue font-medium text-base gap-y-2 hidden 2xl:flex"}>Cвязаться <ArrowUp /></Btn>
                <Burger>
                    <Button size={"icon"} variant={"dark"} className={"flex 2xl:hidden"}><Menu /></Button>
                </Burger>
            </Container>
        </nav>
    );
};

export default Navbar;