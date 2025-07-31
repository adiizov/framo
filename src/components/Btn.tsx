"use client"
import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "@/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const Btn = ({url, ...props}: {url?: string} & React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}) => {
    return (
        <motion.button>
            <Button {...props} asChild={!!url}>
                {url ? <Link href={url}>{props.children}</Link>: props.children}
            </Button>
        </motion.button>
    );
};

export default Btn;