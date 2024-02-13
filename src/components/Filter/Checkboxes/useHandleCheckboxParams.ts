import { useSearchParams } from 'react-router-dom';
import { CheckIsSelected, UpdateSelection } from '../types';

const useHandleCheckboxParams = (): [CheckIsSelected, UpdateSelection] => {
    const [searchParams, setSearchParams] = useSearchParams();

    const checkIsChecked = (code: string, value: string) => searchParams.get(code) === value;

    const updateValue = (code: string, value: string) => {
        if (searchParams.has(code)) {
            searchParams.delete(code);
        } else {
            searchParams.set(code, value);
        }

        setSearchParams(searchParams);
    };

    return [checkIsChecked, updateValue];
};

export default useHandleCheckboxParams;
