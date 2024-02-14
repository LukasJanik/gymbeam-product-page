import { useSearchParams } from 'react-router-dom';
import { GetRangeValues, UpdateRangeValues, Range } from '../types';
import useDebounce from '@gymbeam/hooks/useDebounce';

const getRangeValues = (range: string | null) => {
    const rangeValues = range?.split('-').map(parseInt);

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
