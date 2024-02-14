import { useSearchParams } from 'react-router-dom';
import useDebounce from '@gymbeam/hooks/useDebounce';
import { formatSearchParamCode as formatCode } from '@gymbeam/helpers';
import { CheckIsSelected, UpdateSelection } from '../types';

const divider = ',';
const unchainValues = (value: string | null) => value?.split(divider);
const chainValues = (values: string[]) => values.join(divider);

const useHandleMultiselectParams = (): [CheckIsSelected, UpdateSelection] => {
    const [searchParams, setSearchParams] = useSearchParams();

    const checkIsSelected = (code: string, value: string) =>
        Boolean(
            searchParams
                .get(formatCode(code))
                ?.split(',')
                .find((paramsValue) => paramsValue === value)
        );

    const updateValue = useDebounce((code: string, value: string) => {
        const formattedCode = formatCode(code);

        const currentValues = unchainValues(searchParams.get(formattedCode));

        if (currentValues) {
            if (currentValues.indexOf(value) !== -1) {
                const newValues = currentValues.filter((currentValue) => currentValue !== value);

                if (!newValues.length) {
                    searchParams.delete(formattedCode);
                } else {
                    searchParams.set(formattedCode, chainValues(newValues));
                }
            } else {
                searchParams.set(formattedCode, chainValues([...currentValues, value]));
            }
        } else {
            searchParams.set(formattedCode, value);
        }

        setSearchParams(searchParams);
    });

    return [checkIsSelected, updateValue];
};

export default useHandleMultiselectParams;
