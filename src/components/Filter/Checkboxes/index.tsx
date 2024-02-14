import { FC } from 'react';
import { CategoryFilters } from '@gymbeam/services/repository/category/types';
import Section from '../section/Section';
import Checkbox from './Checkbox';
import useHandleCheckboxParams from './useHandleCheckboxParams';

type CheckboxProps = Pick<CategoryFilters, 'checkboxes'>;

const Checkboxes: FC<CheckboxProps> = ({ checkboxes }) => {
    const [checkIsChecked, updateValue] = useHandleCheckboxParams();

    return checkboxes.length ? (
        <Section title="Filtrovať podľa">
            {checkboxes.map((checkbox) => (
                <Checkbox
                    checkbox={checkbox}
                    onClick={updateValue}
                    checkIsChecked={checkIsChecked}
                    key={checkbox.code}
                />
            ))}
        </Section>
    ) : null;
};

export default Checkboxes;
