import Container from "@/components/Container";
import BadgeSection from "@/components/BadgeSection";
import PriceCard from "@/blocks/price/PriceCard";
import { priceData } from "@/blocks/price/priceData";


const Price = () => {
    return (
        <Container className={"flex gap-x-12"}>
            <div className={"flex flex-col justify-between"}>
                <BadgeSection name={"Стоимость услуг"}/>
                <h2 className={"font-medium text-[40px]"}>Мы создаём не просто сайты, а работающие решения под ваш бренд и цели.</h2>
                <span></span>
            </div>
            <div className={"grid grid-cols-2 gap-2 w-full"}>
                {priceData.map(item => (
                    <PriceCard data={item} key={item.id} />
                ))}
            </div>
        </Container>
    );
};

export default Price;