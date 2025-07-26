import { Dot } from "lucide-react";
import { Badge } from "@/ui/badge";

const BadgeSection = ({name}: {name: string}) => {
    return (
        <Badge variant={"outline"} className={"text-xs md:text-base border-text-muted text-text-muted"}>
            {" "}
            <Dot size={32} className={"text-text-muted"} />
            {name}
        </Badge>
    );
};

export default BadgeSection;