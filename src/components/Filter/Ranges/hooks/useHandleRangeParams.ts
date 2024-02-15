import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '@gymbeam/hooks';
import { GetRangeValues, UpdateRangeValues, Range } from '@gymbeam/components/Filter/types';

const getRangeValues = (range: string | null) => {
    const rangeValues = range?.split('-').map(Number);

    return rangeValues?.length === 2 ? (rangeValues as Range) : null;
};
const createRangeValues = (min: number, max: number) => `${min}-${max}`;

const useHandleRangeParams = (): [GetRangeValues, UpdateRangeValues] => {
    const [searchParams, setSearchParams] = useSearchParams();

    const getRangeParams = (code: string) => getRangeValues(searchParams.get(code));

    const updateValue = useDebounce((code: string, [min, max]) => {
        searchParams.set(code, createRangeValues(min, max));

        setSearchParams(searchParams);
    });

    return [getRangeParams, updateValue];
};

export default useHandleRangeParams;
