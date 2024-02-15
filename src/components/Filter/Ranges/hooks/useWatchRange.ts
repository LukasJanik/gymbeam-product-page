import { useEffect } from 'react';
import { Range } from '@gymbeam/components/Filter/types';

const useWatchRange = (
    min: number,
    max: number,
    currentRange: Range,
    getRangeFromParams: () => Range | null,
    onChange: (value: Range) => void,
    setCurrentRange: (value: Range) => void
) => {
    useEffect(() => {
        if (!getRangeFromParams()) {
            setCurrentRange([min, max]);

            return;
        }

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

export default useWatchRange;
