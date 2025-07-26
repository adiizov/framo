"use client"
import {
    Card,
    CardContent, CardDescription,
    CardHeader,
    CardTitle,
} from "@/ui/card";
import { PortfolioType } from "@/blocks/partfolio/portfolioData";
import Image from "next/image"

const PortfolioCard = ({data}: {data: PortfolioType}) => {
    return (
        <Card className={"border-none shadow-none p-0 bg-transparent gap-0"}>
            <CardContent className={"p-0 overflow-hidden rounded-3xl"}>
                <Image src={data.image} alt={data.title} width={540} height={520} className={" w-full object-fill rounded-3xl relative z-20 blur-[2px]"} />
            </CardContent>
            <CardHeader className={"flex justify-between items-center px-0 py-8"}>
                <CardTitle className={"font-medium text-3xl text-black"}>{data.title}</CardTitle>
                <CardDescription className={"text-black text-xl"}>{data.service}</CardDescription>
            </CardHeader>
        </Card>
    );
};

export default PortfolioCard;