"use client"
import Navbar from "@/blocks/navbar/Navbar";
import Image from "next/image"
import Container from "@/components/Container";
import { ReactNode, useEffect } from "react";
import { useAnimate } from "framer-motion";


const Header = ({children}: {children?: ReactNode}) => {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        ["img", "ul", "a", "button"].map(item => {
            animate(`${item}[data-slot='animate']`, { y: [100,0] }, {
                duration: 1.6,
                ease: [0.72, 0, 0, 0.99],
            })
        })

        animate(`p[data-slot='animate']`, {y: [100,0] }, {
            duration: 1.6,
            ease: [0.72, 0, 0, 0.99],
            delay: 0.5
        })

        animate(`h1[data-slot='animate']`, { y: [200,0] }, {
            duration: 1.6,
            ease: [0.72, 0, 0, 0.99],
            delay: 0.4
        })
    })
    return (
        <header className="bg-block-foreground py-[80px] h-dvh relative " ref={scope}>
            <div className="relative z-50 h-full">
                <Navbar className={"p-0"}/>
                {/*    CONTENT  */}
                <Container className="space-y-5 h-full flex flex-col justify-end overflow-hidden">
                    <div className={"overflow-hidden"}>
                        <p data-slot={"animate"} className={`font-helveticaNeue text-primary-foreground uppercase leading-[120%]
                            text-xs md:text-base lg:text-xl
                        `}>Веб-разработка / брендинг / <br/> UX / UI / стратегия</p>
                    </div>
                    <h1 data-slot={"animate"} className={`font-helveticaNowDisplay font-bold text-primary-foreground uppercase leading-[100%]
                        text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] 2xl:text-[160px] 
                        overflow-hidden`}>Framo studio</h1>
                </Container>
            </div>

            <Image src={"/images/header-bg.webp"} alt={"framo"} width={1080} height={1508} className={`absolute bottom-0 right-0 object-fit z-10 h-full object-center max-w-none w-full lg:max-w-[76%] object-contain md:object-cover `} />
        </header>
    );
};

export default Header;