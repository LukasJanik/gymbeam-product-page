import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ErrorState, LoadingState } from '@gymbeam/components/state';
import { CategoryLayout } from '@gymbeam/components/layouts';
import Filter from '@gymbeam/components/Filter';
import ProductList from '@gymbeam/components/ProductList';
import useScrollTop from '@gymbeam/hooks/useScrollTop';
import { useGetCategory } from '@gymbeam/services/repository/category';

const Category: FC = () => {
    const [searchParams] = useSearchParams();
    const { data, isLoading, isFetching, isError } = useGetCategory(searchParams.toString());
    const productListContainerRef = useScrollTop(searchParams);

    if (isError) {
        return <ErrorState />;
    }

    return (
        <>
            <LoadingState isLoading={isLoading || isFetching} />
            <CategoryLayout
                productListContainerRef={productListContainerRef}
                filter={<Filter filters={data?.filters} />}
                productList={<ProductList items={data?.items ?? []} />}
            />
        </>
    );
};

export default Category;
