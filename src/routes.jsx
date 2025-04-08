import { Routes } from "react-router";
import HomePage from ".pages/homePage";
import SingleProductPage from "./pages/product/SingleProduct";
import ProductPage from "./product";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="contact" element={<div>Contact pages</div>} />
            <Route path="product">
            <Route element={ProductPage } index/>
            <Route path=":id" elememt={<SingleProductPage />} />
            </Route>
        </Routes>
    );
}