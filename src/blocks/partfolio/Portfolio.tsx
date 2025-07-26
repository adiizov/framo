import Container from "@/components/Container";
import BadgeSection from "@/components/BadgeSection";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/ui/carousel"
import PortfolioCard from "@/blocks/partfolio/PortfolioCard";
import { portfolioData } from "@/blocks/partfolio/portfolioData";


const Portfolio = () => {
    return (
        <section className={"py-[160px]"}>
            <Container>
                <Carousel className={"space-y-7"}>
                    <div className={"flex justify-between"}>
                        <BadgeSection name={"Наши работы"} />
                        <div className={"flex space-x-4"}>
                            <CarouselPrevious className={"static translate-y-0 w-12 h-12"} />
                            <CarouselNext className={"static  translate-y-0 w-12 h-12"}/>
                        </div>
                    </div>
                    <CarouselContent className={""} >
                        {portfolioData.map(item => (
                            <CarouselItem className="basis-1/1 md:basis-1/2 xl:basis-1/3" key={item.id}>
                                <PortfolioCard data={item}/>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </Container>
        </section>
    );
};

export default Portfolio;