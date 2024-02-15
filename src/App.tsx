import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Category from '@gymbeam/pages/Category';
import Head from '@gymbeam/components/Head';
import Navbar from '@gymbeam/components/Navbar';
import QueryClientProvider from '@gymbeam/services/QueryClientProvider';

function App() {

    return (
        <HelmetProvider>
            <Head />
            <BrowserRouter>
                <QueryClientProvider>
                    <Navbar />
                    <Routes>
                        <Route path="/sports-nutrition" element={<Category />} />
                        <Route path="*" element={<p>Path not resolved</p>} />
                    </Routes>
                </QueryClientProvider>
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;
