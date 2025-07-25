import Navbar from "@/blocks/navbar/Navbar";
import Image from "next/image"
import Container from "@/components/Container";

const Header = () => {
    return (
        <div className="bg-foreground py-[100px] h-dvh relative ">
            <div className="relative z-50 h-full">
                <Navbar />
                {/*    CONTENT  */}
                <Container className="space-y-5 h-full flex flex-col justify-end">
                    <p className={"font-helveticaNeue text-xl text-primary-foreground uppercase leading-[120%]"}>Веб-разработка / брендинг / <br/> UX / UI / стратегия</p>
                    <h1 className={"font-helveticaNowDisplay font-bold text-[160px] text-primary-foreground uppercase leading-[100%]"}>Framo studio</h1>
                </Container>
            </div>

            <Image src={"/images/header-bg.webp"} alt={"framo"} width={1080} height={1508} className={"absolute bottom-0 right-0 object-fit z-10 max-w-[76%] w-full h-full object-cover object-right"} />
        </div>
    );
};

export default Header;