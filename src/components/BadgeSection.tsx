import { Dot } from "lucide-react";
import { Badge } from "@/ui/badge";

const BadgeSection = ({name}: {name: string}) => {
    return (
        <Badge variant={"outline"} className={"text-xs  md:text-base"}>
            {" "}
            <Dot size={32} />
            {name}
        </Badge>
    );
};

export default BadgeSection;