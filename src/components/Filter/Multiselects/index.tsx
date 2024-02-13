import { FC } from 'react';
import { CategoryFilters } from '@gymbeam/services/repository/category/types';
import Multiselect from './Multiselect';

type MultiselectProps = Pick<CategoryFilters, 'multiselects'>;

const Multiselects: FC<MultiselectProps> = ({ multiselects }) => (
    <>
        {multiselects.map((multiselect) => (
            <Multiselect {...multiselect} key={multiselect.code} />
        ))}
    </>
);

export default Multiselects;
