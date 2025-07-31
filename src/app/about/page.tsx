"use client"
import Header from "@/blocks/AboutHeader/Header";
import { createElement } from "react";
import Footer from "@/blocks/footer/Footer";
import Partners from "@/blocks/Partners/Partners";

const Page = () => {
    const pages = [
        {
            id: 1,
            page: Partners,
        },
    ];
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
};

export default Page;