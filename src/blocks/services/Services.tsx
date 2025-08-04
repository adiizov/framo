import BadgeSection from "@/components/BadgeSection";
import Link from "next/link";
import { Button } from "@/ui/button";
import Crown from "@/assets/Crown";
import Container from "@/components/Container";
import Btn from "@/components/Btn";
import { useAnimate } from "framer-motion";
import ServiceItem from "@/blocks/services/ServiceItem";

const secvices = [
    {
        id: 1,
        title: "Разработка сайтов и магазинов",
        url: "/about",
        image: "/images/services/1.png"
    },
    {
        id: 2,
        title: "Редизайн и улучшение",
        image: "/images/services/1.png"
    },
    {
        id: 3,
        title: "Разработка логотипа и брендбука",
        url: "/about",
        image: "/images/services/1.png"
    },
    {
        id: 4,
        title: "Создание Телеграм бота",
        url: "/about",
        image: "/images/services/1.png"
    },
    {
        id: 5,
        title: "СRM систем",
        url: "/about",
        image: "/images/services/1.png"
    },
]

export type ServiceType = typeof secvices[number]

const Services = () => {
    return (
        <Container>
            <BadgeSection name={"Наши услуги"} />
            <ul className={"mt-8"}>
                {secvices.map(item => (
                    <li key={item.id}>
                        <ServiceItem data={item}/>
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export default Services;