"use client"
import Btn from "@/components/Btn";
import Crown from "@/assets/Crown";
import Link from "next/link";
import { useAnimate } from "framer-motion";
import { ServiceType } from "@/blocks/services/Services";
import Image from "next/image";
import { useEffect, useState } from "react";
import ArrowUp from "@/assets/ArrowUp";
import * as React from "react";
import { Button } from "@/ui/button";

const ServiceItem = ({data}: {data: ServiceType}) => {
    const [scope, animate] = useAnimate()
    const [hover, setHover] = useState(false);

    useEffect(() => {
        animate("img[data-animation='img']", {y: "100%"}, {duration: 0})
        animate("*[data-animated='icons']", {y: "-50%"}, {duration: 0});
    });

    const onHover = () => {
        animate("h2[data-animation='h2']", {color: "#030303"}, {duration: 0.5, ease: [0.72, 0, 0, 0.99]})
        animate("img[data-animation='img']", {y: 0}, {duration: 0.5, ease: [0.72, 0, 0, 0.99]})
        animate("*[data-animated='icons']", {y: 0}, {duration: 0.5, ease: [0.72, 0, 0, 0.99]});
        animate("*[data-animated='button']", {background: "#030303"}, {duration: 0.2, ease: [0.72, 0, 0, 0.99]});


    }
    const onLeave = () => {
        animate("h2[data-animation='h2']", {color: "#566271"}, {duration: 0.5, ease: [0.72, 0, 0, 0.99]})
        animate("img[data-animation='img']", {y: "100%"}, {duration: 0.5, ease: [0.72, 0, 0, 0.99]})
        animate("*[data-animated='icons']", {y: "-50%"}, {duration: 0.5, ease: [0.72, 0, 0, 0.99]});
        animate("*[data-animated='button']", {background: "#fff"}, {duration: 0.2, ease: [0.72, 0, 0, 0.99]});
    }
    return (
        <Link href={data.url ?? "#"} className={"flex items-center border-b border-black/20 py-6 h-[141px] relative"} ref={scope} onMouseEnter={onHover} onMouseLeave={onLeave}>
            <span className={"text-text-primary font-inter font-medium text-[18px] mr-[57px]"}>{`0${data.id}`}</span>
            <h2 data-animation={"h2"} className={"text-text-muted text-2xl sm:text-3xl md:text-[40px] lg:text-[60px] xl:text-[72px] text-gray xl:leading-[90px] xl:tracking-[-4px]"}>{data.title}</h2>
            <div className={"absolute right-40 top-[-50%] overflow-hidden"}>
                <Image data-animation={"img"} src={data.image} alt={`service ${data.title}`} width={297} height={221} className={""} quality={100}/>
            </div>
            <div className={"flex flex-1 "}>
            </div>
            <Btn variant={"outline"} size={"icon"} className={"size-14 [&_svg:not([class*='size-'])]:size-7"} data-animated={"button"}>
                <div className={"h-7 w-7 overflow-hidden"}>
                    <div className={"flex flex-col gap-y-1 shrink-0 "} data-animated={"icons"}>
                        <ArrowUp dark={true} className={"size-[22px] mx-auto mt-1"}/>
                        <Crown />
                    </div>
                </div>
            </Btn>
        </Link>
    );
};

export default ServiceItem;