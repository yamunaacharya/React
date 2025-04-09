import { Routes, Route, Outlet, Link } from "react-router";

import ProductPage from "./pages/product";
import Homepage from "./pages/homePage";
import SingleProductPage, {
  OverviewPage,
  ReviewPage,
} from "./pages/product/SingleProduct";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Navbar /> <Outlet /> <Footer />{" "}
          </div>
        }
      >
        <Route index element={<Homepage />} />
        <Route path="contact" element={<div>Contact pages</div>} />
        <Route path="product">
          <Route element={ProductPage} index />
          <Route path=":productID" elememt={<SingleProductPage />} />
          <Route path="review" elememt={<ReviewPage />} />
          <Route path="overview" elememt={<OverviewPage />} />
        </Route>
        <Route path="*" element>
          404
        </Route>
      </Route>
        <Route path="login" element={<div>Login Page</div>} />
        <Route path="register" element={<div>Register Page</div>} />
    </Routes>
  );
}

export function UserLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export function Navbar() {
  console.log("Navbar");
  return (
    <div>
      <div>Navbar</div>
      {["/", "/contact", "/product"].map((path) => (
        <Link key={path} to={path}>
          {path}
        </Link>
      ))}
    </div>
  );
}

export function Footer() {
  console.log("Footer");
  return (
    <div>
      <div>Footer</div>
    </div>
  );
}
