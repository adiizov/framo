import { Input } from "@/ui/input";
import { ControllerRenderProps } from "react-hook-form";
import * as React from "react";

const ContactInput = ({ className, type, ...props }: React.ComponentProps<"input"> & ControllerRenderProps) => {
    return (
        <Input placeholder="shadcn" {...props} className={`
            aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-b-destructive
            focus-visible:ring-0
            dark:bg-transparent
            rounded-none
            border-none
            shadow-none
            p-0
            pb-4
            font-normal  
            text-lg
            md:text-lg  
            placeholder:text-text-primary  
            placeholder:font-normal  
            h-auto
            block
        `}
           style={{borderBottom: "1px solid rgba(102, 114, 131, 0.5)"}}
        />
    );
};

export default ContactInput;