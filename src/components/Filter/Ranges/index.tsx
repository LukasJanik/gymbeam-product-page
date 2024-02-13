import { FC } from 'react';
import { CategoryFilters } from '@gymbeam/services/repository/category/types';
import useHandleRangeParams from '@gymbeam/components/Filter/Ranges/useHandleRangeParams';
import Range from './Range';

type RangesProps = Pick<CategoryFilters, 'ranges'>;

const Ranges: FC<RangesProps> = ({ ranges }) => {
    const [getRangeValues, updateRangeValues] = useHandleRangeParams();

    return (
        <>
            {ranges.map((range) => (
                <Range
                    range={range}
                    getRangeValues={getRangeValues}
                    updateRangeValues={updateRangeValues}
                    key={range.code}
                />
            ))}
        </>
    );
};

export default Ranges;
