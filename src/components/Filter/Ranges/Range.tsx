import { FC, useState } from 'react';
import { Box, Slider, Stack, Typography } from '@mui/material';
import { FilterRange } from '@gymbeam/services/repository/category/types';
import {
    GetRangeValues,
    UpdateRangeValues,
    Range as RangeT,
} from '@gymbeam/components/Filter/types';
import { Title } from '@gymbeam/components/Filter/section';

type RangeProps = {
    range: FilterRange;
    getRangeValues: GetRangeValues;
    updateRangeValues: UpdateRangeValues;
};

const Range: FC<RangeProps> = ({ range, getRangeValues, updateRangeValues }) => {
    const { name, min, max, code } = range;
    const [value, setValue] = useState<RangeT>(getRangeValues(code) ?? [min, max]);

    return (
        <Stack gap={2}>
            <Title>{name}</Title>
            <Stack px={3}>
                <Slider
                    marks={[
                        {
                            value: min,
                            label: '',
                        },
                        { value: max, label: '' },
                    ]}
                    step={10}
                    value={value}
                    valueLabelDisplay="auto"
                    min={min}
                    max={max}
                    onChange={(_, newValue) => {
                        const typedValue = newValue as RangeT;
                        setValue(typedValue);

                        updateRangeValues(code, typedValue);
                    }}
                />
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body2">{min}</Typography>
                    <Typography variant="body2">{max}</Typography>
                </Box>
            </Stack>
        </Stack>
    );
};

export default Range;
