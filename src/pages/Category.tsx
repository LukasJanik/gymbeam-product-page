import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ContainerProps, Grid, styled } from '@mui/material';
import Filter from '@gymbeam/components/Filter';
import ProductList from '@gymbeam/components/ProductList';
import { useGetCategory } from '@gymbeam/services/repository/category';
import LoadingState from '@gymbeam/components/LoadingState';
import useScrollTop from '@gymbeam/hooks/useScrollTop';

const Category: FC = () => {
    const [searchParams] = useSearchParams();
    const { data, isLoading, isFetching } = useGetCategory(searchParams.toString());
    const productListContainerRef = useScrollTop(searchParams);

    return (
        <>
            <LoadingState isLoading={isLoading || isFetching} />
            <CategoryContainer container>
                <Grid item xs={3} px={3} boxShadow={5} bgcolor="white">
                    <Filter filters={data?.filters} />
                </Grid>
                <Grid ref={productListContainerRef} item xs={9} px={3} py={4}>
                    <ProductList items={data?.items ?? []} />
                </Grid>
            </CategoryContainer>
        </>
    );
};

const CategoryContainer = styled(Grid)<ContainerProps>(({ theme: { palette } }) => ({
    height: 'calc(100% - 64px)',
    overflow: 'hidden',
    backgroundColor: palette.grey[100],

    '& .MuiGrid-item': {
        height: '100%',
        overflow: 'auto',
        scrollBehavior: 'smooth',
    },
}));

export default Category;
