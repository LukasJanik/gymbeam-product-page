import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider as QueryClientProviderO } from 'react-query';

type QueryClientProviderProps = {
    children: ReactNode;
};

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
        },
    },
});

const QueryClientProvider: FC<QueryClientProviderProps> = ({ children }) => {
    return <QueryClientProviderO client={queryClient}>{children}</QueryClientProviderO>;
};

export default QueryClientProvider;
