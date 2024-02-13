import { FC } from 'react';
import { Box } from '@mui/material';
import { FilterMultiselect } from '@gymbeam/services/repository/category/types';
import SectionTitle from '../SectionTitle';
import Option from './Option';
import useHandleMultiselectParams from './useHandleMultiselectParams';

type MultiselectProps = FilterMultiselect;

const Multiselect: FC<MultiselectProps> = ({ code, name, options }) => {
    const [checkIsSelected, updateValue] = useHandleMultiselectParams();

    return (
        <Box display="flex" flexDirection="column" gap={2}>
            <SectionTitle label={name}></SectionTitle>
            <Box display="flex" gap={1} flexWrap="wrap">
                {options.map((option) => (
                    <Option
                        code={code}
                        option={option}
                        onClick={updateValue}
                        checkIsSelected={checkIsSelected}
                        key={option.value}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Multiselect;
