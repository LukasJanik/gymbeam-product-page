import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Category from '@gymbeam/pages/Category';
import QueryClientProvider from '@gymbeam/services/QueryClientProvider';

function App() {
    return (
        <BrowserRouter>
            <QueryClientProvider>
                <Routes>
                    <Route path="/sports-nutrition" element={<Category />} />
                    <Route path="*" element={<p>Path not resolved</p>} />
                </Routes>
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
