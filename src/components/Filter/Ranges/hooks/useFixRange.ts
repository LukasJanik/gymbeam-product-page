import { useEffect } from 'react';
import { Range } from '@gymbeam/components/Filter/types';

const useFixRange = (
    min: number,
    max: number,
    currentRange: Range,
    onChange: (value: Range) => void
) => {
    useEffect(() => {
        const [currentMin, currentMax] = currentRange;
        const [newMin, newMax] = [
            currentMin < min ? min : currentMin,
            currentMax > max ? max : currentMax,
        ];

        if (newMin !== currentMin || newMax !== currentMax) {
            onChange([newMin, newMax]);
        }
    }, [min, max]);
};

export default useFixRange;
