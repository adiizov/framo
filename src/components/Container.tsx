import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const Container = ({
    className,
    children,
}: {
    className?: string;
    children: ReactNode;
}) => {
    return (
        <div
            className={cn(
                'w-full px-[20px] md:px-[60px] lg:px-[80px] xl:px-[120px] ',
                className,
            )}
        >
            {children}
        </div>
    );
};

export default Container;
