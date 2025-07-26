import Navbar from "@/blocks/navbar/Navbar";
import Image from "next/image"
import Container from "@/components/Container";


const Header = () => {
    return (
        <div className="bg-block-foreground py-[100px] h-dvh relative">
            {/*<HeaderAnimation />*/}
            <div className="relative z-50 h-full">
                <Navbar />
                {/*    CONTENT  */}
                <Container className="space-y-5 h-full flex flex-col justify-end">
                    <p className={`font-helveticaNeue text-primary-foreground uppercase leading-[120%]
                        text-xs md:text-base lg:text-xl  
                    `}>Веб-разработка / брендинг / <br/> UX / UI / стратегия</p>
                    <h1 className={`font-helveticaNowDisplay font-bold text-primary-foreground uppercase leading-[100%]
                        text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] 2xl:text-[160px] 
                    `}>Framo studio</h1>
                </Container>
            </div>

            <Image src={"/images/header-bg.webp"} alt={"framo"} width={1080} height={1508} className={`absolute bottom-0 right-0 object-fit z-10 h-full object-center
                max-w-none w-full lg:max-w-[76%]
                object-contain md:object-cover 
                `} />
        </div>
    );
};

export default Header;