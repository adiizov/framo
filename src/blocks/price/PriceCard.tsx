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

const PriceCard = ({data}:{data: PriceType}) => {
    return (
        <Card className={cn("justify-between p-[30px] rounded-3xl shadow-none", data.isSpecial && " bg-block-accent")}>
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
                    <Button size={"icon"} variant={"dark"}><ArrowUp color={"white"}/></Button>
                </CardAction>
            </CardFooter>
        </Card>
    );
};

export default PriceCard;