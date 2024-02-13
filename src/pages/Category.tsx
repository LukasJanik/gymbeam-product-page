import { FC } from 'react';
import { Grid } from '@mui/material';
import Filter from '@gymbeam/components/Filter';
import ProductList from '@gymbeam/components/ProductList';
import { useGetCategory } from '@gymbeam/services/repository/category';

const Category: FC = () => {
    const { data } = useGetCategory();

    return (
        <Grid container>
            <Grid item xs={3}>
                <Filter />
            </Grid>
            <Grid item xs={9}>
                <ProductList items={data?.items ?? []} />
            </Grid>
        </Grid>
    );
};

export default Category;
