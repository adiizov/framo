import Navbar from "@/blocks/navbar/Navbar";
import Container from "@/components/Container";
import { Separator } from "@/ui/separator";
import BadgeSection from "@/components/BadgeSection";
import Image from "next/image"

const Header = () => {
    return (
        <header className={"space-y-[130px] mb-[160px]"}>
            <Navbar dark />
            <Container className={"space-y-8 lg:space-y-[60px]"}>
                <h1 className={"text-4xl md:text-5xl lg:text-6xl xl:text-[80px] 2xl:text-[120px] leading-[100%] tracking-tighter"}>
                    Мы не повторяемся <br /> — мы <em>создаём </em> новое
                </h1>
                <Separator />
                <div className={"flex flex-col lg:flex-row justify-between gap-6"}>
                    <BadgeSection name={"Делаем невозможное"} />
                    <p className={"text-xl lg:text-2xl leading-[150%] w-full lg:max-w-[50%]"}>
                        Framo — это команда дизайнеров и стратегов, объединённых
                        страстью к своему делу и вниманием к деталям. Мы создаём
                        уникальные цифровые продукты, где каждый элемент
                        осмыслен, а каждый проект — результат глубокой
                        проработки и вкуса.
                        <br />
                        <br />
                        За нашими плечами — проекты для компаний из разных сфер
                        и стран, от локального бизнеса до международных
                        стартапов. Такой опыт позволяет нам видеть шире,
                        предлагать нестандартные решения и выстраивать
                        долгосрочные партнёрства, а не просто «сдавать макеты».
                    </p>
                </div>
                <Image src={"/images/about-bg.webp"} alt={"about framo"} width={1680} height={700} quality={100} className={"w-full object-cover rounded-3xl sm:rounded-none aspect-[3/4] sm:aspect-auto"}/>
            </Container>
        </header>
    );
};

export default Header;
