import Header from "@/blocks/header/Header";
import About from "@/blocks/about/About";
import Portfolio from "@/blocks/partfolio/Portfolio";

export default function Home() {
  return (
    <div>
        <Header  />
        <main>
            <About />
            <Portfolio />
        </main>
      </div>
  );
}
