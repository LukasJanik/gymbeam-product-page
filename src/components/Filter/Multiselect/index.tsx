import { FC } from 'react';
import { Box } from '@mui/material';
import { FilterMultiselect } from '@gymbeam/services/repository/category/types';
import SectionTitle from '../SectionTitle';
import Option from './Option';

type MultiselectProps = FilterMultiselect;

const Multiselect: FC<MultiselectProps> = ({ code, name, options }) => {
    return (
        <Box display="flex" flexDirection="column" gap={2}>
            <SectionTitle label={name}></SectionTitle>
            <Box display="flex" gap={1} flexWrap="wrap">
                {options.map((option) => (
                    <Option
                        option={option}
                        onClick={() => console.log('clicked')}
                        isSelected={false}
                        key={option.value}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Multiselect;
