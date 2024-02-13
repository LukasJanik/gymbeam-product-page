import { useSearchParams } from 'react-router-dom';
import { CheckIsSelected, UpdateSelection } from '../types';
import useDebounce from '@gymbeam/hooks/useDebounce';

const divider = ',';
const unchainValues = (value: string | null) => value?.split(divider);
const chainValues = (values: string[]) => values.join(divider);

const useHandleMultiselectParams = (): [CheckIsSelected, UpdateSelection] => {
    const [searchParams, setSearchParams] = useSearchParams();

    const checkIsSelected = (code: string, value: string) =>
        Boolean(
            searchParams
                .get(code)
                ?.split(',')
                .find((paramsValue) => paramsValue === value)
        );

    const updateValue = useDebounce((code: string, value: string) => {
        const currentValues = unchainValues(searchParams.get(code));

        if (currentValues) {
            if (currentValues.indexOf(value) !== -1) {
                const newValues = currentValues.filter((currentValue) => currentValue !== value);

                if (!newValues.length) {
                    searchParams.delete(code);
                } else {
                    searchParams.set(code, chainValues(newValues));
                }
            } else {
                searchParams.set(code, chainValues([...currentValues, value]));
            }
        } else {
            searchParams.set(code, value);
        }

        setSearchParams(searchParams);
    });

    return [checkIsSelected, updateValue];
};

export default useHandleMultiselectParams;
