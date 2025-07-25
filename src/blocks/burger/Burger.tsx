import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/ui/sheet"
import { ReactNode } from "react";

const Burger = ({children}: {children: ReactNode}) => {
    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className={"bg-primary/50 border-none backdrop-blur-xl "}>
                <SheetHeader>
                    <SheetTitle className={"text-primary-foreground"}>Are you absolutely sure?</SheetTitle>
                    <SheetDescription className={"text-primary-foreground"}>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};

export default Burger;