import { FC, useState } from 'react';
import { Slider, Stack } from '@mui/material';
import {
    GetRangeValues,
    UpdateRangeValues,
    Range as RangeT,
} from '@gymbeam/components/Filter/types';
import { Title } from '@gymbeam/components/Filter/section';
import { FilterRange } from '@gymbeam/services/repository/category/types';
import useFixRange from './hooks/useFixRange';
import Labels from '@gymbeam/components/Filter/Ranges/Labels';

type RangeProps = {
    range: FilterRange;
    getRangeValues: GetRangeValues;
    updateRangeValues: UpdateRangeValues;
};

const getMarks = (min: number, max: number) => [
    {
        value: min,
        label: '',
    },
    { value: max, label: '' },
];

const Range: FC<RangeProps> = ({ range, getRangeValues, updateRangeValues }) => {
    const { name, min, max, code } = range;
    const [currentRange, setCurrentRange] = useState<RangeT>(getRangeValues(code) ?? [min, max]);

    const onChange = (newRange: RangeT) => {
        setCurrentRange(newRange);
        updateRangeValues(code, newRange);
    };

    useFixRange(min, max, currentRange, onChange);

    return (
        <Stack gap={2}>
            <Title>{name}</Title>
            <Stack px={3}>
                <Slider
                    marks={getMarks(min, max)}
                    step={1}
                    value={currentRange}
                    valueLabelDisplay="auto"
                    min={min}
                    max={max}
                    onChange={(_, newRange) => {
                        onChange(newRange as RangeT);
                    }}
                />
                <Labels min={min} max={max} />
            </Stack>
        </Stack>
    );
};

export default Range;
