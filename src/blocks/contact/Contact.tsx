import Container from "@/components/Container";
import ContactForm from "@/blocks/contact/ContactForm";
import ContactCard from "@/blocks/contact/ContactCard";
import { contactData } from "@/blocks/contact/contactData";

const Contact = () => {
    return (
        <Container>
            <div className="flex flex-col 2xl:flex-row py-[50px] xl:py-[100px] px-[30px] md:px-[80px] lg:px-[100px] xl:px-[180px] bg-block-accent rounded-3xl 2xl:rounded-[60px] justify-between items-center gap-x-[10%]">
                <div className={"w-full flex flex-col justify-between mb-20 2xl:mb-0"}>
                    <h2 className={"font-medium text-3xl 2xl:text-5xl mb-12"}>Оставьте заявку</h2>
                    <ContactForm />
                </div>
                <ul className={"space-y-5 w-full "}>
                    {contactData.map(item => (
                        <li key={item.id}>
                            <ContactCard data={item}/>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    );
};

export default Contact;