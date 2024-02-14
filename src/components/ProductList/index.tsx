import { FC } from 'react';
import { Grid } from '@mui/material';
import { CategoryData } from '@gymbeam/services/repository/category/types';
import Product from './Product';

type ProductListProps = {
    items: CategoryData['items'];
};

const ProductList: FC<ProductListProps> = ({ items }) => (
    <Grid container>
        {items.map((item, index) => (
            <Grid item xs={12} lg={4} xl={3} key={index}>
                <Product product={item} />
            </Grid>
        ))}
    </Grid>
);

export default ProductList;
