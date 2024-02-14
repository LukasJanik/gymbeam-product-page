import { FC } from 'react';
import { Grid } from '@mui/material';
import { CategoryData } from '@gymbeam/services/repository/category/types';
import Product from './Product';
import { NoResultsState } from '@gymbeam/components/state';

type ProductListProps = {
    items: CategoryData['items'];
};

const ProductList: FC<ProductListProps> = ({ items }) => {
    if (!items.length) {
        return <NoResultsState />;
    }

    return (
        <Grid container>
            {items.map((item, index) => (
                <Grid item xs={12} lg={4} xl={3} key={index}>
                    <Product product={item} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductList;
