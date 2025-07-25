import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "@/ui/button";
import Link from "next/link";

const Btn = ({url, ...props}: {url?: string} & React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}) => {
    return (
        <Button {...props} asChild={!!url}>
            {url ? <Link href={url}>{props.children}</Link>: props.children}
        </Button>
    );
};

export default Btn;