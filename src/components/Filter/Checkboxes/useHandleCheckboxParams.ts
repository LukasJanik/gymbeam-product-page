import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '@gymbeam/hooks';
import { formatSearchParamCode as formatCode } from '@gymbeam/helpers';
import { CheckIsSelected, UpdateSelection } from '../types';

const useHandleCheckboxParams = (): [CheckIsSelected, UpdateSelection] => {
    const [searchParams, setSearchParams] = useSearchParams();

    const checkIsChecked = (code: string, value: string) =>
        searchParams.get(formatCode(code)) === value;

    const updateValue = useDebounce((code: string, value: string) => {
        const formattedCode = formatCode(code);

        if (searchParams.has(formattedCode)) {
            searchParams.delete(formattedCode);
        } else {
            searchParams.set(formattedCode, value);
        }

        setSearchParams(searchParams);
    });

    return [checkIsChecked, updateValue];
};

export default useHandleCheckboxParams;
