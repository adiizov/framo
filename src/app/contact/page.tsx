import Navbar from "@/blocks/navbar/Navbar";
import Container from "@/components/Container";
import ContactForm from "@/blocks/contact/ContactForm";

const Page = () => {
    return (
        <div>
            <Navbar dark/>
            <Container>
                <div>
                    <ContactForm select/>
                </div>
            </Container>
        </div>
    );
};

export default Page;