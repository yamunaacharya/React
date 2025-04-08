import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Homepage from "./pages/home";
// import ReducerHook from './pages/reducerhook';
// import LoginPage from './pages/LoginPage';
// import LearnUseEffect from './pages/learnUseEffect';
// import Learn2 from './pages/learn2';
import { BrowserRouter } from 'react-router';
// import HeroSection from './section/HeroSection';
import AppRoutes from './routes';
import SingleProductPage from './pages/product/SingleProduct';
import ProductPage from "./product"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AppRoutes />
    <SingleProductPage />
    <ProductPage />
    </BrowserRouter>
  </StrictMode>,
);
