import { useQuery } from 'react-query';
import axios from 'axios';
import { GET_CATEGORY } from '../keys';
import { CategoryData, CategoryResponse } from './types';
import { mapCategoryResponse } from './mappers';

const reformatSearchParams = (searchParams: string) => searchParams.replaceAll('=', '[]=');
const getCategoryPath = (searchParams: string) => {
    const defaultPath = '/api?category_ids[]=2416';

    return searchParams ? `${defaultPath}&${reformatSearchParams(searchParams)}` : defaultPath;
};

export const useGetCategory = (searchParams: string) =>
    useQuery<CategoryData>({
        queryKey: [GET_CATEGORY, searchParams],
        queryFn: async () =>
            axios
                .get<CategoryResponse>(getCategoryPath(searchParams), {
                    headers: { 'Content-Type': 'application/json' },
                })
                .then(({ data }) => mapCategoryResponse(data)),
        keepPreviousData: true,
    });
