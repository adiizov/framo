"use client"
import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "@/ui/button";
import Link from "next/link";
import { motion, useAnimate } from "framer-motion";
import ArrowUp from "@/assets/ArrowUp";

const Btn = ({url, title, ...props}: {url?: string, title?: string} & React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}) => {
    const [scope, animate] = useAnimate();

    const onHover = () => {
        if(props.children) return
        animate("*[data-animated='icons']", {y: -21}, {duration: 1, ease: [0.72, 0, 0, 0.99]});
        animate(scope.current, {boxShadow: "0px 20px 15px rgba(0, 0, 0, 0.15)", scale: 1.03}, {duration: 1.2, ease: [0.72, 0, 0, 0.99], delay: 0.1});
    }
    const onLeave = () => {
        if(props.children) return
        animate("*[data-animated='icons']", {y: 0}, {duration: 1, ease: [0.72, 0, 0, 0.99]});
        animate(scope.current, {boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)", scale: 1}, {duration: 1.2, ease: [0.72, 0, 0, 0.99]});
    }


    return (
        <Button {...props} asChild={!!url} onMouseEnter={onHover} onMouseLeave={onLeave} ref={scope} className={"transition-none"}>
            {url
            ? <Link href={url}>
                {props.children
                    || (
                        <>
                            {title}
                            <AnimatedIcon dark={props.variant === "dark"}/>
                        </>
                    )}
            </Link>
            :
                props.children
                || (
                    <>
                        {title}
                        <AnimatedIcon dark={props.variant === "dark"}/>
                    </>
                )
            }
        </Button>
    );
};

export default Btn;

const AnimatedIcon = ({dark}: {dark?: boolean}) => {
    return (
        <div className={"h-4 w-4"}>
            <div className={"flex flex-col gap-y-1 shrink-0"} data-animated={"icons"}>
                <ArrowUp dark={dark}/>
                <ArrowUp dark={dark}/>
            </div>
        </div>
    )
}