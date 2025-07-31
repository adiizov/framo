import { contactData } from "@/blocks/contact/contactData";
import ContactCard from "@/blocks/contact/ContactCard";
import { cn } from "@/lib/utils";

const ContactList = ({className}:{className?: string}) => {
    return (
        <ul className={cn("space-y-5 w-full", className)}>
            {contactData.map(item => (
                <li key={item.id} className={"w-full"}>
                    <ContactCard data={item} />
                </li>
            ))}
        </ul>
    );
};

export default ContactList;