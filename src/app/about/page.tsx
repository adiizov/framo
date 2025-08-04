"use client"
import Header from "@/blocks/AboutHeader/Header";
import { createElement } from "react";
import Footer from "@/blocks/footer/Footer";
import Price from "@/blocks/price/Price";
import Contact from "@/blocks/contact/Contact";
import { cn } from "@/lib/utils";
import Partners from "@/blocks/partners/Partners";

const Page = () => {
    const pages = [
        {
            id: 1,
            page: Partners,
        },
        {
            id: 2,
            page: Price,
        },
        {
            id: 3,
            page: Contact,
        },
    ];
    return (
        <div>
            <Header />
            <main>
                {pages.map((item) => (
                    <section className={cn("min-h-dvh pb-[80px] lg:pb-[160px]", item.page === Partners && "min-h-0")} key={item.id}>
                        {createElement(item.page)}
                    </section>
                ))}
            </main>
            <Footer />
        </div>
    );
};

export default Page;