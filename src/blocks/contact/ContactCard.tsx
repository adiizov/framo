import { ContactType } from "@/blocks/contact/contactData";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/ui/card"
import { createElement } from "react";
import { Button } from "@/ui/button";

const ContactCard = ({data}:{data: ContactType}) => {
    return (
        <Card className={"p-8 rounded-3xl border-custom-border gap-y-8"}>
            <CardHeader className={"flex items-center gap-x-4"}>
                <Button variant={"dark"} size={"icon"} className={"[&_svg:not([class*='size-'])]:size-8"}>
                    {createElement(data.icon)}
                </Button>
                <CardTitle className={"text-2xl"}>{data.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <a href={data.type === "email" ? `mailto:${data.value}`: data.type === "phone" ? `tel:${data.value}`: ''}>{data.value}</a>
            </CardContent>
        </Card>
    )
};

export default ContactCard;