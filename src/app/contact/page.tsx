import Navbar from "@/blocks/navbar/Navbar";
import Container from "@/components/Container";
import ContactForm from "@/blocks/contact/ContactForm";
import ContactList from "@/blocks/contact/ContactList";

const Page = () => {
    return (
        <div>
            <Navbar dark/>
            <Container className={"space-y-20"}>
                <h1 className={"title"}>Всегда на связи! <br/> когда вам удобно</h1>
                <div className={"flex flex-col lg:flex-row  max-w-none 2xl:max-w-[75%] w-full justify-between gap-y-16 gap-x-8 sm:gap-x-12 md:gap-x-14 lg:gap-x-20 xl:gap-x-[100px] 2xl:gap-x-[180px]"}>
                    <ContactForm select />
                    <ContactList className={"[&_[data-slot=card]]:bg-block-accent flex flex-col md:flex-row lg:flex-col  gap-x-6 gap-y-3"}/>
                </div>
            </Container>
        </div>
    );
};

export default Page;