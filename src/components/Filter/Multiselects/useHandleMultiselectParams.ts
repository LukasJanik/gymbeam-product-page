import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '@gymbeam/hooks';
import { formatSearchParamCode as formatCode } from '@gymbeam/helpers';
import { CheckIsSelected, UpdateSelection } from '../types';

const useHandleMultiselectParams = (): [CheckIsSelected, UpdateSelection] => {
    const [searchParams, setSearchParams] = useSearchParams();

    const checkIsSelected = (code: string, value: string) =>
        Boolean(searchParams.getAll(formatCode(code)).find((paramsValue) => paramsValue === value));

    const updateValue = useDebounce((code: string, value: string) => {
        const formattedCode = formatCode(code);
        const currentValues = searchParams.getAll(formattedCode);

        searchParams.delete(formattedCode);

        const newValues = currentValues.filter((currentValue) => currentValue !== value);

        if (newValues.length === currentValues.length) {
            newValues.push(value);
        }

        newValues.forEach((value) => searchParams.append(formattedCode, value));

        setSearchParams(searchParams);
    });

    return [checkIsSelected, updateValue];
};

export default useHandleMultiselectParams;
