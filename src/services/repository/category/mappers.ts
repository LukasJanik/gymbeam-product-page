import {
    CategoryData,
    CategoryFilterResponse,
    CategoryFilters,
    CategoryResponse,
    FilterWithOptions,
    FilterWithRange,
} from '@gymbeam/services/repository/category/types';

const mapItems = (items: CategoryResponse['items']) =>
    items.map(
        ({ name, formatted_price, product_url, thumbnail, reviews_count, rating_summary }) => ({
            name,
            thumbnail,
            formattedPrice: formatted_price,
            productUrl: product_url,
            reviewsCount: reviews_count,
            ratingSummary: rating_summary,
        })
    );

const getFilterWithOptions = (
    code: CategoryFilterResponse['code'],
    name: CategoryFilterResponse['name'],
    options: CategoryFilterResponse['options']
): FilterWithOptions => ({
    code,
    name,
    options:
        options?.map(({ name, value, count }) => ({
            name,
            value,
            count,
        })) ?? [],
});

const getRangeFilter = (
    code: CategoryFilterResponse['code'],
    name: CategoryFilterResponse['name'],
    min: CategoryFilterResponse['min'],
    max: CategoryFilterResponse['max']
): FilterWithRange => ({
    code,
    name,
    min: min ?? 0,
    max: max ?? 0,
});

const filterFilters = (filters: CategoryResponse['filters']) =>
    filters.reduce(
        (result, { type, code, name, options, min, max }) => {
            if (type === 'range') {
                result.ranges.push(getRangeFilter(code, name, min, max));

                return result;
            }

            result[type === 'multiselect' ? 'multiselects' : 'checkboxes'].push(
                getFilterWithOptions(code, name, options)
            );

            return result;
        },
        {
            multiselects: [],
            checkboxes: [],
            ranges: [],
        } as CategoryFilters
    );
export const mapCategoryResponse = ({ items, filters }: CategoryResponse): CategoryData => ({
    items: mapItems(items),
    filters: filterFilters(filters),
});
