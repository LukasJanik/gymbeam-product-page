import { FC } from 'react';
import { FilterMultiselect } from '@gymbeam/services/repository/category/types';
import Multiselect from './Multiselect';

type MultiselectProps = { multiselects: FilterMultiselect[] };

const Multiselects: FC<MultiselectProps> = ({ multiselects }) => (
    <>
        {multiselects.map((multiselect) => (
            <Multiselect {...multiselect} key={multiselect.code} />
        ))}
    </>
);

export default Multiselects;
