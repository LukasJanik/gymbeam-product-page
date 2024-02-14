import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ContainerProps, Grid, styled } from '@mui/material';
import Filter from '@gymbeam/components/Filter';
import ProductList from '@gymbeam/components/ProductList';
import { ErrorState, LoadingState } from '@gymbeam/components/state';
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
            <CategoryContainer container>
                <Grid item id="product-filter-container" xs={12} md={3}>
                    <Filter filters={data?.filters} />
                </Grid>
                <Grid item id="product-list-container" ref={productListContainerRef} xs={12} md={9}>
                    <ProductList items={data?.items ?? []} />
                </Grid>
            </CategoryContainer>
        </>
    );
};

const CategoryContainer = styled(Grid)<ContainerProps>(
    ({ theme: { palette, breakpoints, shadows, spacing } }) => ({
        height: 'calc(100% - 64px)',
        backgroundColor: palette.grey[100],
        position: 'relative',
        overflow: 'auto',

        '& > .MuiGrid-item': {
            overflow: 'auto',
            scrollBehavior: 'smooth',
        },

        '& #product-filter-container': {
            padding: spacing(0, 3),
        },

        '& #product-list-container': {
            padding: spacing(4, 3),
        },

        [breakpoints.up('md')]: {
            overflow: 'hidden',

            '& > .MuiGrid-item': {
                height: '100%',
            },

            '& #product-filter-container': {
                height: '100%',
                boxShadow: shadows[5],
                backgroundColor: palette.common.white,
            },
        },
    })
);

export default Category;
