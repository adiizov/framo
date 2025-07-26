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

const PriceCard = ({data}:{data: PriceType}) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className={"font-medium text-2xl text-dark"}>{data.title}</CardTitle>
                <CardDescription className={"text-lg leading-[140%]"}>{data.description}</CardDescription>
            </CardHeader>
            <CardFooter>
                <p className={"text-2xl font-medium"}>от <strong className={"text-5xl font-medium"}>{data.price}</strong>$</p>
                <CardAction>
                    <Button size={"icon"} variant={"dark"}><ArrowUp /></Button>
                </CardAction>
            </CardFooter>
        </Card>
    );
};

export default PriceCard;