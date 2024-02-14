import { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

type TitleProps = Omit<TypographyProps, 'variant' | 'gutterBottom'>;

const Title: FC<TitleProps> = (props) => <Typography gutterBottom variant="h6" {...props} />;

export default Title;
