import { RefObject, useEffect, useRef } from 'react';

const useScrollTop = (toWatch: any): RefObject<HTMLDivElement> => {
    const scrollElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollElement.current) {
            scrollElement.current.scrollTop = 0;
        }
    }, [toWatch]);

    return scrollElement;
};

export default useScrollTop;
