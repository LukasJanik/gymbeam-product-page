import { FC } from 'react';
import { Box, Stack, styled } from '@mui/material';
import { FilterMultiselect } from '@gymbeam/services/repository/category/types';
import SectionTitle from '../SectionTitle';
import Option from './Option';
import useHandleMultiselectParams from './useHandleMultiselectParams';

type MultiselectProps = FilterMultiselect;

const Multiselect: FC<MultiselectProps> = ({ code, name, options }) => {
    const [checkIsSelected, updateValue] = useHandleMultiselectParams();

    return (
        <Stack gap={2}>
            <SectionTitle>{name}</SectionTitle>
            <OptionsContainer>
                {options.map((option) => (
                    <Option
                        code={code}
                        option={option}
                        onClick={updateValue}
                        checkIsSelected={checkIsSelected}
                        key={option.value}
                    />
                ))}
            </OptionsContainer>
        </Stack>
    );
};

const OptionsContainer = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    gap: spacing(1),
    flexWrap: 'wrap',
}));

export default Multiselect;
