import {Routes, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductListingPage from '../pages/ProductListingPage';
import ProductViewPage from '../pages/ProductViewPage';
import PageNotFound from '../pages/PageNotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/products/:id" element={<ProductViewPage />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}