import Navbar from "@/blocks/navbar/Navbar";
import Image from "next/image"

const Header = () => {
    return (
        <div className="bg-foreground py-[100px] h-dvh relative">
            <Navbar />
            <Image src={"/images/header-bg.webp"} alt={"framo"} width={1080} height={1508} className={"absolute bottom-0 right-0 object-fit z-10 max-w-[76%] w-full h-full object-cover object-right"} />
        </div>
    );
};

export default Header;