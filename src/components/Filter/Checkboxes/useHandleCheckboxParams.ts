import { useSearchParams } from 'react-router-dom';
import { CheckIsSelected, UpdateSelection } from '../types';

const useHandleCheckboxParams = (): [CheckIsSelected, UpdateSelection] => {
    const [searchParams, setSearchParams] = useSearchParams();

    const checkIsSelected = (code: string, value: string) => searchParams.get(code) === value;

    const updateValue = (code: string, value: string) => {
        if (searchParams.has(code)) {
            searchParams.delete(code);
        } else {
            searchParams.set(code, value);
        }

        setSearchParams(searchParams);
    };

    return [checkIsSelected, updateValue];
};

export default useHandleCheckboxParams;
