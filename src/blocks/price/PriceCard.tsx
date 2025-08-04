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

const PriceCard = ({data}:{data: PriceType}) => {
    const [scope, animate] = useAnimate()

    const onHover = () => {
        animate("div[data-animation='ellipse-1']", {scale: 6.5}, {duration: 1, ease: [0.72, 0, 0, 0.99],})
        animate("div[data-animation='ellipse-2']", {scale: 5.9}, {duration: 1.1, ease: [0.72, 0, 0, 0.99]})
    }
    const onLeave = () => {
        animate("div[data-animation='ellipse-1']", {scale: 1}, {duration: 1.3, ease: [0.72, 0, 0, 0.99]})
        animate("div[data-animation='ellipse-2']", {scale: 1}, {duration: 1, ease: [0.72, 0, 0, 0.99],})

    }


    return (
        <Card className={cn("justify-between p-[30px] rounded-3xl shadow-none relative overflow-hidden", data.isSpecial && " bg-block-accent")} ref={scope} onMouseEnter={onHover} onMouseLeave={onLeave}>
            <CardHeader className={"p-0"}>
                <CardTitle className={cn("font-medium text-2xl", data.isSpecial && "text-text-accent flex items-center gap-x-4 space-x-4")}>
                    {data.isSpecial &&  <span className={"block w-2.5 h-2.5 rounded-full bg-text-accent"}> </span>}
                    {data.title}
                </CardTitle>
                <CardDescription className={"text-lg leading-[140%] text-text-muted"}>{data.description}</CardDescription>
            </CardHeader>
            <CardFooter className={"justify-between p-0"}>
                <p className={"text-2xl font-medium"}>от <strong className={"text-5xl font-medium"}>{data.price}</strong>$</p>
                <CardAction>
                    <Button size={"icon"} variant={"dark"}><ArrowUp dark/></Button>
                </CardAction>
            </CardFooter>
            <div className={"absolute bottom-[-250%] left-[-100%] h-80 w-80 bg-[linear-gradient(90deg,_rgba(2,2,2,0.5)_0%,_rgba(2,2,2,0.6)_100%)] rounded-full"} data-animation={"ellipse-1"}></div>
            <div className={"absolute bottom-[-250%] left-[-100%] h-80 w-80 bg-[linear-gradient(90deg,_rgba(2,2,2,0.5)_0%,_rgba(2,2,2,0.6)_100%)] rounded-full"} data-animation={"ellipse-2"}></div>
        </Card>
    );
};

export default PriceCard;