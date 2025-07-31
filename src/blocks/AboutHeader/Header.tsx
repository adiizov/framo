import Navbar from "@/blocks/navbar/Navbar";
import Container from "@/components/Container";
import { Separator } from "@/ui/separator";
import BadgeSection from "@/components/BadgeSection";
import Image from "next/image"

const Header = () => {
    return (
        <header className={"py-[80px] space-y-[130px]"}>
            <Navbar dark />
            <Container className={"space-y-[60px]"}>
                <h1 className={"text-[120px] leading-[100%] tracking-tighter"}>
                    Мы не повторяемся <br /> — мы <em>создаём </em> новое
                </h1>
                <Separator />
                <div className={"flex justify-between"}>
                    <BadgeSection name={"Делаем невозможное"} />
                    <p className={"text-2xl leading-[150%] w-full lg:max-w-[50%]"}>
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
                <Image src={"/images/about-bg.webp"} alt={"about framo"} width={1680} height={700} quality={100} />
            </Container>
        </header>
    );
};

export default Header;
