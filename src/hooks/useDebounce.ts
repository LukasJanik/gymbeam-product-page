import { useEffect, useRef } from 'react';

const defaultDelay = 500;

const useDebounce = (callback: (...args: any[]) => void, delay: number = defaultDelay) => {
    const timeoutRef = useRef<any>(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (...args: any[]) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    };
};

export default useDebounce;
