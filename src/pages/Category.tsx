import { FC } from 'react';
import { Grid } from '@mui/material';
import Filter from '@gymbeam/components/Filter';
import ProductList from '@gymbeam/components/ProductList';
import { useGetCategory } from '@gymbeam/services/repository/category';

const Category: FC = () => {
    const { data } = useGetCategory();

    return (
        <Grid container>
            <Grid item xs={4}>
                <Filter />
            </Grid>
            <Grid item xs={8}>
                <ProductList />
            </Grid>
        </Grid>
    );
};

export default Category;
