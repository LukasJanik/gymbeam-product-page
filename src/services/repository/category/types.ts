type CategoryItemResponse = {
    id: number;
    sku: string;
    name: string;
    price: number;
    formatted_price: string;
    product_url: string;
    image: string;
    thumbnail: string;
    small_image: string;
    reviews_count: number;
    rating_summary: number;
    saleable: boolean;
    form_inputs: string;
    form_action: string;
    labels: string[];
};

export type CategoryFilterOption = {
    name: string;
    slug: string;
    value: string;
    count: number;
};

export type CategoryFilterResponse = {
    name: string;
    code: string;
    global_name: string;
    display_mode: string;
    type: 'multiselect' | 'checkbox' | 'range';
    position: string;
    options?: CategoryFilterOption[];
    min?: number;
    max?: number;
};

export type CategoryResponse = {
    items: CategoryItemResponse[];
    filters: CategoryFilterResponse[];
    meta: {
        total: number;
    };
};

export type CategoryItem = Pick<CategoryItemResponse, 'name' | 'thumbnail'> & {
    formattedPrice: CategoryItemResponse['formatted_price'];
    productUrl: CategoryItemResponse['product_url'];
    reviewsCount: CategoryItemResponse['reviews_count'];
    ratingSummary: CategoryItemResponse['rating_summary'];
};

type FilterCommon = Pick<CategoryFilterResponse, 'code' | 'name'>;

export type FilterOption = Pick<CategoryFilterOption, 'name' | 'value' | 'count'>;

export type FilterMultiselect = FilterCommon & {
    options: FilterOption[];
};

export type FilterRange = FilterCommon & { min: number; max: number };

export type FilterCheckbox = FilterCommon & Pick<CategoryFilterOption, 'value' | 'count'>;

export type CategoryFilters = {
    multiselects: FilterMultiselect[];
    checkboxes: FilterCheckbox[];
    ranges: FilterRange[];
};

export type CategoryData = {
    items: CategoryItem[];
    filters: CategoryFilters;
    totalNumberOfItems: number;
};
