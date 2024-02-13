import { FC } from 'react';
import { CardActionArea, CardContent, CardMedia, Typography, Card, styled } from '@mui/material';
import { CategoryItem } from '@gymbeam/services/repository/category/types';
import Rating from './Rating';
import Actions from './Actions';

type ProductProps = {
    product: CategoryItem;
};

const Product: FC<ProductProps> = ({ product }) => {
    const { name, thumbnail, ratingSummary, reviewsCount, formattedPrice, productUrl } = product;

    return (
        <ProductCard>
            <CardActionArea href={productUrl}>
                <CardMedia component="img" image={thumbnail} alt={name} />
                <CardContent>
                    <ProductName gutterBottom variant="subtitle1">
                        {name}
                    </ProductName>
                    <Rating value={ratingSummary} reviewsCount={reviewsCount} />
                    <Typography mt={2} variant="subtitle1" color="info.main">
                        Od {formattedPrice}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Actions />
        </ProductCard>
    );
};

const ProductCard = styled(Card)(({ theme: { spacing, shadows } }) => ({
    minHeight: 508,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: shadows['3'],
    margin: spacing(1),
    '& .MuiCardMedia-media': {
        maxHeight: 281,
    },
    '& .MuiCardActionArea-root': {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 auto',
        justifyContent: 'start',
    },
    '& .MuiCardActions-root': {
        marginTop: 'auto',
        marginBottom: spacing(2),
        justifyContent: 'center',
    },
}));

const ProductName = styled(Typography)(({ theme: { spacing } }) => ({
    minHeight: spacing(7),
}));

export default Product;
