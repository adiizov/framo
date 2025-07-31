"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem, CarouselNext, CarouselPrevious,
} from "@/ui/carousel";
import Image from "next/image"
import AutoScroll from "embla-carousel-auto-scroll";
import Container from "@/components/Container";


const partners = [
    {
        id: 1,
        name: "unsplash",
    },
    {
        id: 2,
        name: "bettermotion",
    },
    {
        id: 3,
        name: "bubblehouse",
    },
    {
        id: 4,
        name: "metafy",
    },
    {
        id: 5,
        name: "skale",
    },
    {
        id: 6,
        name: "sololearn",
    },
]

const Partners = () => {
    return (
        <Container>
            <h2 className={"title mb-20"}>Работаем с <br/> клиентами по <br/> всему миру</h2>
            <Carousel plugins={[AutoScroll()]} opts={{align:"start",  loop:true}}>
                <CarouselContent className={"m-0 items-center "}>
                    {partners.map((item) => (
                        <CarouselItem key={item.id} className={"p-0 basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4  2xl:basis-1/5"}><Image src={`/images/partners/${item.name}.png`} alt={`partner ${item.name}`} width={162} height={62} className={"object-contain"} quality={100}/></CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </Container>
    );
};

export default Partners;