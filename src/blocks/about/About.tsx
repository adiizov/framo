import Container from "@/components/Container";
import BadgeSection from "@/components/BadgeSection";

const aboutData = [
    {
        id: 1,
        title: "5+ лет",
        subtitle: "Опыта в создании digital-продуктов",
    },
    {
        id: 2,
        title: "50+ проектов",
        subtitle: "Реализовано для бизнеса",
    },
    {
        id: 3,
        title: "0 шаблонов",
        subtitle: "Только индивидуальные решения",
    },
];

const About = () => {
    return (
        <section className="min-h-dvh py-[160px]">
            <Container>
                <div className="lg:space-y-8 mb-20">
                    <BadgeSection name={"О нас"}/>
                    <p className={`font-medium leading-[150%] tracking-tighter lg:max-w-[70%]
                        text-xl lg:text-2xl xl:text-3xl 2xl:text-[40px] 
                    `}>
                        Студия, где дизайн — это инструмент а не украшение. Мы
                        создаём сайты, которые не просто выглядят красиво — они
                        усиливают доверие, выделяют бренд и приносят результат.
                        Никаких шаблонов — только индивидуальные решения под цели
                        клиента.
                    </p>
                </div>
                <ul className={"space-y-20"}>
                    {aboutData.map((item) => (
                        <li key={item.id} className={"block space-y-4"}>
                            <h5 className={"font-medium text-[48px] tracking-tighter"}>{item.title}</h5>
                            <p className={"text-xl"}>{item.subtitle}</p>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
};

export default About;
