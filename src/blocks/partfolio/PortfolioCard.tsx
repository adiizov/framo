"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/ui/card";
import { PortfolioType } from "@/blocks/partfolio/portfolioData";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

const PortfolioCard = ({ data }: { data: PortfolioType }) => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(
            "*[data-animation='h1']",
            { y: 100 },
            {duration: 0}
        );
        animate(
            "*[data-animation='p']",
            { y: 100 },
            {duration: 0}
        );
    });

    const onHover = () => {
        animate(
            "img[data-slot='animated']",
            { filter: "blur(0px)", scale: 1.15 },
            {
                duration: 1.7,
                ease: [0.72, 0, 0, 0.99],
            },
        );
        animate(
            "*[data-animation='h1']",
            { y: 0 },
            {duration: 1, ease: [0.72, 0, 0, 0.99]},
        );
        animate(
            "*[data-animation='p']",
            { y: 0 },
            {duration: 0.9, ease: [0.72, 0, 0, 0.99], delay: 0.2},
        );
    };

    const onLeave = () => {
        animate(
            "img[data-slot='animated']",
            { filter: "blur(2px)", scale: 1 },
            {
                duration: 1,
                ease: [0.72, 0, 0, 0.99],
            },
        );
        animate(
            "*[data-animation='h1']",
            { y: 100 },
            {
                duration: 1,
                ease: [0.72, 0, 0, 0.99],
            },
        );
        animate(
            "*[data-animation='p']",
            { y: 100 },
            {
                duration: 1,
                ease: [0.72, 0, 0, 0.99],
            },
        );
    };

    return (
        <Card
            className={"border-none shadow-none p-0 bg-transparent gap-0  "}
            ref={scope}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            <CardContent className={"p-0 overflow-hidden rounded-3xl"}>
                <Image
                    src={data.image}
                    alt={data.title}
                    width={540}
                    height={520}
                    data-slot={"animated"}
                    className={
                        " w-full object-fill rounded-3xl relative z-20 blur-[2px]"
                    }
                />
            </CardContent>
            <CardHeader
                className={"px-0 py-8"}
            >
                <div className={"overflow-hidden flex justify-between items-center "}>
                    <CardTitle
                        data-animation={"h1"}
                        className={"text-text-primary font-medium text-3xl"}
                    >
                        {data.title}
                    </CardTitle>
                    <CardDescription className={"text-text-muted text-xl"}  data-animation={"p"}>
                        {data.service}
                    </CardDescription>
                </div>
            </CardHeader>
        </Card>
    );
};

export default PortfolioCard;
