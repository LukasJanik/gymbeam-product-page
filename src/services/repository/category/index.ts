import { useQuery } from 'react-query';
import axios from 'axios';
import { GET_CATEGORY } from '../keys';
import { CategoryData, CategoryResponse } from './types';
import { mapCategoryResponse } from './mappers';

export const useGetCategory = () => {
    return useQuery<CategoryData>([GET_CATEGORY], async () =>
        axios
            .get<CategoryResponse>('/api', { headers: { 'Content-Type': 'application/json' } })
            .then(({ data }) => mapCategoryResponse(data))
    );
};
