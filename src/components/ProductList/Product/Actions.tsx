import { FC } from 'react';
import { Button, CardActions } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Actions: FC = () => {
    return (
        <CardActions>
            <Button variant="contained" endIcon={<AddShoppingCartIcon />}>
                Pridať do košíka
            </Button>
        </CardActions>
    );
};

export default Actions;
