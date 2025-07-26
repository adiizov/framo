import Container from "@/components/Container";
import BadgeSection from "@/components/BadgeSection";
import PriceCard from "@/blocks/price/PriceCard";
import { priceData } from "@/blocks/price/priceData";


const Price = () => {
    return (
        <Container className={"gap-16 flex flex-col 2xl:grid  2xl:grid-cols-12"}>
            <div className={"flex flex-col justify-between gap-y-7 w-full col-span-12 2xl:col-span-5"}>
                <BadgeSection name={"Стоимость услуг"}/>
                <h2 className={"font-medium text-[40px]"}>Мы создаём не просто сайты, а работающие решения под ваш бренд и цели.</h2>
                <span></span>
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-2 w-full gap-[30px] col-span-12 2xl:col-span-7"}>
                {priceData.map(item => (
                    <PriceCard data={item} key={item.id} />
                ))}
            </div>
        </Container>
    );
};

export default Price;