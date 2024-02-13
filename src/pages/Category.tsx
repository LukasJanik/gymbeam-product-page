import { FC } from 'react';
import { ContainerProps, Grid, styled } from '@mui/material';
import Filter from '@gymbeam/components/Filter';
import ProductList from '@gymbeam/components/ProductList';
import { useGetCategory } from '@gymbeam/services/repository/category';

const Category: FC = () => {
    const { data } = useGetCategory();

    return (
        <CategoryContainer container>
            <Grid item xs={3} pr={3} boxShadow={5}>
                <Filter filters={data?.filters} />
            </Grid>
            <Grid item xs={9} px={3} py={4}>
                <ProductList items={data?.items ?? []} />
            </Grid>
        </CategoryContainer>
    );
};

const CategoryContainer = styled(Grid)<ContainerProps>(() => ({
    height: '100%',
    overflow: 'hidden',

    '& .MuiGrid-item': {
        height: '100%',
        overflow: 'auto',
    },
}));

export default Category;
