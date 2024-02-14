import { FC } from 'react';
import { FilterMultiselect } from '@gymbeam/services/repository/category/types';
import Section from '../section/Section';
import Option from './Option';
import useHandleMultiselectParams from './useHandleMultiselectParams';

type MultiselectProps = FilterMultiselect;

const Multiselect: FC<MultiselectProps> = ({ code, name, options }) => {
    const [checkIsSelected, updateValue] = useHandleMultiselectParams();

    return (
        <Section title={name}>
            {options.map((option) => (
                <Option
                    code={code}
                    option={option}
                    onClick={updateValue}
                    checkIsSelected={checkIsSelected}
                    key={option.value}
                />
            ))}
        </Section>
    );
};

export default Multiselect;
