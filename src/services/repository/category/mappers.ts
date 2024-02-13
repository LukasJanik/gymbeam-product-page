import {
    CategoryData,
    CategoryFilterResponse,
    CategoryFilters,
    CategoryResponse,
    FilterMultiselect,
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

const getMultiselectFilter = (
    code: CategoryFilterResponse['code'],
    name: CategoryFilterResponse['name'],
    options: CategoryFilterResponse['options']
): FilterMultiselect => ({
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

const getCheckboxFilter = (
    code: CategoryFilterResponse['code'],
    name: CategoryFilterResponse['name'],
    options: CategoryFilterResponse['options']
) => ({
    code,
    name,
    count: options?.[0].count ?? 0,
    value: options?.[0].value ?? '',
});

const filterFilters = (filters: CategoryResponse['filters']) =>
    filters.reduce(
        (result, { type, code, name, options, min, max }) => {
            if (type === 'range') {
                result.ranges.push(getRangeFilter(code, name, min, max));

                return result;
            }

            if (type === 'multiselect') {
                result.multiselects.push(getMultiselectFilter(code, name, options));

                return result;
            }

            result.checkboxes.push(getCheckboxFilter(code, name, options));

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
