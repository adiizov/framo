import { cn } from "@/lib/utils";

const ArrowUp = ({dark=false, className}: {dark?: boolean, className?: string}) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("", className)}>
            <g clipPath="url(#clip0_2016_353)">
                <path d="M2.18164 13.816L13.8166 2.18099M13.8166 2.18099H5.09039M13.8166 2.18099V10.9072"
                      stroke={dark ? "white" : "#030303"} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_2016_353">
                    <rect width="16" height="16" fill={dark ? "white" : "#030303"} />
                </clipPath>
            </defs>
        </svg>

    );
};

export default ArrowUp;