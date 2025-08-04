"use client"
import { PriceType } from "@/blocks/price/priceData";
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/ui/card"
import { Button } from "@/ui/button";
import ArrowUp from "@/assets/ArrowUp";
import { cn } from "@/lib/utils";
import { Dot } from "lucide-react";
import { useAnimate } from "framer-motion";
import * as React from "react";

const PriceCard = ({data}:{data: PriceType}) => {
    const [scope, animate] = useAnimate()

    const onHover = async () => {
        animate("div[data-animation='title']", {color: "#fff"},  {duration: 0.2, ease: [0.72, 0, 0, 0.99], delay: 0.4});
        data.isSpecial && animate("span[data-animation='dot']", {background: "#fff"},  {duration: 0.2, ease: [0.72, 0, 0, 0.99], delay: 0.4});
        animate("div[data-animation='desc']", {color: "#fff"},  {duration: 0.2, ease: [0.72, 0, 0, 0.99], delay: 0.4});
        animate("p[data-animation='price']", {color: "#fff"},  {duration: 0.2, ease: [0.72, 0, 0, 0.99], delay: 0.4});
        animate("div[data-animation='ellipse-1']", {scale: 6.5}, {duration: 1, ease: [0.72, 0, 0, 0.99],})
        animate("div[data-animation='ellipse-2']", {scale: 5.9}, {duration: 1.1, ease: [0.72, 0, 0, 0.99]})
        animate("div[data-animation='icons']", {y: -36}, {duration: 1.5, ease: [0.72, 0, 0, 0.99]});
        animate("button[data-animation='button']", {background: "#fff"}, {duration: 1, ease: [0.72, 0, 0, 0.99], delay: 0.3});
    }
    const onLeave = async () => {
        const titleColor = data.isSpecial ? "#14B8A6" : "#030303";
        animate("div[data-animation='title']", {color: titleColor},  {duration: 0.3, ease: [0.72, 0, 0, 0.99], delay: 0.3});
        data.isSpecial && animate("span[data-animation='dot']", {background: titleColor},  {duration: 0.3, ease: [0.72, 0, 0, 0.99], delay: 0.3});
        animate("div[data-animation='desc']", {color: "#030303"},  {duration: 0.3, ease: [0.72, 0, 0, 0.99], delay: 0.3});
        animate("p[data-animation='price']", {color: "#030303"},  {duration: 0.3, ease: [0.72, 0, 0, 0.99], delay: 0.3});
        animate("div[data-animation='ellipse-1']", {scale: 1}, {duration: 1.3, ease: [0.72, 0, 0, 0.99]})
        animate("div[data-animation='ellipse-2']", {scale: 1}, {duration: 1, ease: [0.72, 0, 0, 0.99],})
        animate("div[data-animation='icons']", {y: 0}, {duration: 1, ease: [0.72, 0, 0, 0.99]});
        animate("button[data-animation='button']", {background: "#030303"}, {duration: 0.3, ease: [0.72, 0, 0, 0.99], delay: 0.4});
    }


    return (
        <Card className={cn("justify-between p-[30px] rounded-3xl shadow-none relative overflow-hidden", data.isSpecial && " bg-block-accent")} ref={scope} onMouseEnter={onHover} onMouseLeave={onLeave}>
            <CardHeader className={"p-0 relative z-20"}>
                <CardTitle className={cn("font-medium text-2xl", data.isSpecial && "text-text-accent flex items-center gap-x-4 space-x-4")} data-animation={"title"}>
                    {data.isSpecial &&  <span className={"block w-2.5 h-2.5 rounded-full bg-text-accent"} data-animation={"dot"}></span>}
                    {data.title}
                </CardTitle>
                <CardDescription className={"text-lg leading-[140%] text-text-muted"} data-animation={"desc"}>{data.description}</CardDescription>
            </CardHeader>
            <CardFooter className={"justify-between p-0 relative z-20"}>
                <p className={"text-2xl font-medium"} data-animation={"price"}>от <strong className={"text-5xl font-medium"}>{data.price}</strong>$</p>
                <CardAction>
                    <Button size={"icon"} variant={"dark"} data-animation={"button"} className={"[&_svg:not([class*='size-'])]:size-6 transition-none"} >
                        <div className={"h-6 w-6 overflow-hidden"}>
                            <div className={"flex flex-col gap-y-3 shrink-0"} data-animation={"icons"}>
                                <ArrowUp dark />
                                <ArrowUp />
                            </div>
                        </div>
                    </Button>
                </CardAction>
            </CardFooter>
            <div
                className={"absolute z-10 bottom-[-250%] left-[-100%] h-80 w-80 bg-[linear-gradient(90deg,_rgba(2,2,2,0.5)_0%,_rgba(2,2,2,0.4)_100%)] rounded-full"} data-animation={"ellipse-1"}></div>
            <div className={"absolute z-10 bottom-[-250%] left-[-100%] h-80 w-80 bg-[linear-gradient(90deg,_rgba(2,2,2,0.5)_0%,_rgba(2,2,2,0.7)_100%)] rounded-full"} data-animation={"ellipse-2"}></div>
        </Card>
    );
};

export default PriceCard;