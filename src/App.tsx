import Category from '@gymbeam/pages/Category';
import QueryClientProvider from '@gymbeam/services/QueryClientProvider';

function App() {
    return (
        <QueryClientProvider>
            <Category />
        </QueryClientProvider>
    );
}

export default App;
