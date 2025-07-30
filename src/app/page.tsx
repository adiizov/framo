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
            id:1,
            page: About
        },
        {
            id:2,
            page: Portfolio
        },
        {
            id:3,
            page: Services
        },
        {
            id: 4,
            page: Price
        },
        {
            id: 5,
            page: Contact
        },
    ]
  return (
    <div>
        <Header />
        <main className="pt-[160px]">
            {pages.map((item) => (
                <section className={"min-h-dvh pb-[160px]"} key={item.id}>
                    {createElement(item.page)}
                </section>
            ))}
        </main>
        <Footer />
      </div>
  );
}
