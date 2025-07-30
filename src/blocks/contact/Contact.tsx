import Container from "@/components/Container";
import ContactForm from "@/blocks/contact/ContactForm";
import ContactCard from "@/blocks/contact/ContactCard";
import { contactData } from "@/blocks/contact/contactData";

const Contact = () => {
    return (
        <Container>
            <div className="flex py-[100px] px-[180px] bg-block-accent rounded-[60px]">
                <div className={"w-full flex flex-col justify-between"}>
                    <h2 className={"font-medium text-5xl"}>Оставьте заявку</h2>
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