import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router';
// import HeroSection from './section/HeroSection';
import AppRoutes from './routes';
// import SingleProductPage from './pages/product/SingleProduct';
// import ProductPage from "./pages/product"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
);
