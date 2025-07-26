import BadgeSection from "@/components/BadgeSection";
import Link from "next/link";
import { Button } from "@/ui/button";
import Crown from "@/assets/Crown";
import Container from "@/components/Container";

const secvices = [
    {
        id: 1,
        title: "Разработка сайтов и магазинов",
        url: "#",
    },
    {
        id: 2,
        title: "Редизайн и улучшение",
    },
    {
        id: 3,
        title: "Разработка логотипа и брендбука",
        url: "#",
    },
    {
        id: 4,
        title: "Создание Телеграм бота",
        url: "#",
    },
    {
        id: 5,
        title: "СRM систем",
        url: "#",
    },
]

const Services = () => {
    return (
        <Container>
            <BadgeSection name={"Наши услуги"} />
            <ul className={"mt-8"}>
                {secvices.map(item => (
                    <li key={item.id}>
                        <Link href={item.url ?? "#"} className={"flex items-center border-b border-black/20 py-6"}>
                            <span className={"font-inter font-medium text-[18px] mr-[57px]"}>{`0${item.id}`}</span>
                            <h2 className={"text-2xl sm:text-3xl md:text-[40px] lg:text-[60px] xl:text-[72px] text-gray xl:leading-[90px] xl:tracking-[-4px]"}>{item.title}</h2>
                            <div className={"flex flex-1"}></div>
                            <Button variant={"outline"} size={"icon"} className={"size-14 [&_svg:not([class*='size-'])]:size-7"}><Crown /></Button>
                        </Link>
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export default Services;