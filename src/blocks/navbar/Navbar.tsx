import Image from "next/image"
import Container from "@/components/Container";
import DesktopMenuList from '@/blocks/navbar/DesktopMenuList';
import ArrowUp from "@/assets/ArrowUp";
import Btn from "@/components/Btn";

const Navbar = () => {
    return (
        <nav className="navbar ">
            <Container className="flex items-center justify-between">
                <Image src={"/logo.svg"} alt="framo logo" width={160} height={64} quality={100}/>
                <DesktopMenuList />
                <Btn url={"/contact"} variant={"dark"} className={"font-helveticaNeue font-medium text-base gap-y-2 "}>Cвязаться <ArrowUp /></Btn>
            </Container>
        </nav>
    );
};

export default Navbar;