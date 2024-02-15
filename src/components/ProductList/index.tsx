import { FC } from 'react';
import { Grid, Stack } from '@mui/material';
import { CategoryData } from '@gymbeam/services/repository/category/types';
import { NoResultsState } from '@gymbeam/components/state';
import Product from './Product';
import Header from './Header';

type ProductListProps = Partial<Pick<CategoryData, 'items' | 'totalNumberOfItems'>>;

const ProductList: FC<ProductListProps> = ({ items = [], totalNumberOfItems = 0 }) => {
    if (!items.length) {
        return (
            <Grid container>
                <NoResultsState />
            </Grid>
        );
    }

    return (
        <Stack>
            <Header totalNumberOfItems={totalNumberOfItems} />
            <Grid container>
                {items.map((item, index) => (
                    <Grid item xs={12} lg={4} xl={3} key={index}>
                        <Product product={item} />
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
};

export default ProductList;
