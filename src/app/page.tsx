import Header from "@/blocks/header/Header";
import About from "@/blocks/about/About";
import Portfolio from "@/blocks/partfolio/Portfolio";
import Services from "@/blocks/services/Services";
import { createElement } from "react";
import Price from "@/blocks/price/Price";
import Contact from "@/blocks/contact/Contact";
import Footer from "@/blocks/footer/Footer";

export default function Home() {
    const pages = [
        {
            id: 1,
            page: About,
            name: "About"
        },
        {
            id: 2,
            page: Portfolio,
            name: "Portfolio"
        },
        {
            id: 3,
            page: Services,
            name: "Services"
        },
        {
            id: 4,
            page: Price,
            name: "Price"
        },
        {
            id: 5,
            page: Contact,
            name: "Contact"
        },
    ];
    return (
        <>
            <Header />
            <main className="pt-[160px]">
                {pages.map((item) => (
                    <section className={"min-h-dvh pb-[160px]"} key={item.id} id={item.name}>
                        {createElement(item.page)}
                    </section>
                ))}
            </main>
            <Footer />
        </>
    );
}
