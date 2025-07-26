import Container from "@/components/Container";
import BadgeSection from "@/components/BadgeSection";
import PriceCard from "@/blocks/price/PriceCard";
import { priceData } from "@/blocks/price/priceData";


const Price = () => {
    return (
        <Container className={"flex"}>
            <div>
                <BadgeSection name={"Стоимость услуг"}/>
                <h2 className={"title"}>Мы создаём не просто сайты, а работающие решения под ваш бренд и цели.</h2>
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