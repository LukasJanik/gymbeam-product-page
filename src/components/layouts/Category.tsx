import { FC, ReactNode, RefObject } from 'react';
import { ContainerProps, Grid, styled } from '@mui/material';

type CategoryProps = {
    productListContainerRef: RefObject<HTMLDivElement>;
    filter: ReactNode;
    productList: ReactNode;
};

const Category: FC<CategoryProps> = ({ productListContainerRef, filter, productList }) => (
    <CategoryContainer container>
        <Grid item id="product-filter-container" xs={12} md={4} lg={3}>
            {filter}
        </Grid>
        <Grid item id="product-list-container" ref={productListContainerRef} xs={12} md={8} lg={9}>
            {productList}
        </Grid>
    </CategoryContainer>
);

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
