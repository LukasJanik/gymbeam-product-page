import { FC } from 'react';
import {
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Card,
    styled,
    Button,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CategoryItem } from '@gymbeam/services/repository/category/types';
import Rating from './Rating';

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
            <CardActions>
                <Button variant="contained" endIcon={<AddShoppingCartIcon />}>
                    Pridať do košíka
                </Button>
            </CardActions>
        </ProductCard>
    );
};

const ProductCard = styled(Card)(({ theme: { spacing } }) => ({
    minHeight: 508,
    display: 'flex',
    flexDirection: 'column',
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
