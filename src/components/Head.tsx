import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

const Head: FC = () => (
    <Helmet
        htmlAttributes={{
            lang: 'sk',
            translate: 'no',
        }}
    >
        <title>Gymbeam - Category page</title>
    </Helmet>
);

export default Head;
