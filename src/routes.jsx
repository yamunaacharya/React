import { Routes, Route } from "react-router";

import ProductPage from "./pages/product";
import Homepage from "./pages/homePage";
import SingleProductPage from "./pages/product/SingleProduct";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="contact" element={<div>Contact pages</div>} />
            <Route path="product">
            <Route element={ProductPage } index/>
            <Route path=":id" elememt={<SingleProductPage />} />
            </Route>
        </Routes>
    );
}