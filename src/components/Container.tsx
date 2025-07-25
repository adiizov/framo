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
                'w-full px-[120px] ',
                className,
            )}
        >
            {children}
        </div>
    );
};

export default Container;
