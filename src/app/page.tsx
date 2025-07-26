import Header from "@/blocks/header/Header";
import About from "@/blocks/about/About";
import Portfolio from "@/blocks/partfolio/Portfolio";
import Services from "@/blocks/services/Services";
import { createElement } from "react";

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
    ]
  return (
    <div>
        <Header />
        <main>
            <section className={"min-h-dvh py-[160px]"}>
                {pages.map((item) => createElement(item.page, {key: item.id }))}
            </section>
        </main>
      </div>
  );
}
