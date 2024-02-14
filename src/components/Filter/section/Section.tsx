import { FC, ReactNode, useState } from 'react';
import { Box, Collapse, Stack, styled } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Title from './Title';

type SectionTitleProps = {
    title: string;
    children: ReactNode;
};

const Section: FC<SectionTitleProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Stack gap={2}>
            <Title
                component="div"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                onClick={() => setIsOpen((prevState) => !prevState)}
            >
                {title}
                {isOpen ? <ExpandLess /> : <ExpandMore />}
            </Title>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <ItemsContainer>{children}</ItemsContainer>
            </Collapse>
        </Stack>
    );
};

const ItemsContainer = styled(Box)(({ theme: { spacing } }) => ({
    display: 'flex',
    gap: spacing(1),
    flexWrap: 'wrap',
}));

export default Section;
