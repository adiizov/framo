import Navbar from "@/blocks/navbar/Navbar";
import Container from "@/components/Container";
import Footer from "@/blocks/footer/Footer";
import { portfolioData } from "@/blocks/partfolio/portfolioData";
import PortfolioCard from "@/blocks/partfolio/PortfolioCard";

const Page = () => {
    return (
        <div>
            <Navbar dark/>
            <Container className={"mb-[160px] space-y-20"}>
                <h1 className={"title"}>Все проекты</h1>
                <div className={"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[30px]"}>
                    {portfolioData.map(item => (
                        <PortfolioCard data={item} key={item.id}/>
                    ))}
                </div>
            </Container>
            <Footer />
        </div>
    );
};

export default Page;