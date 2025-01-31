import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AllProducts from "./components/AllProducts";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import CategoryProducts from "./components/CategoryProducts";
import Chekout from "./components/Checkout";

// Customer
import Register from "./components/customer/Register";
import Login from "./components/customer/Login";
import Dashboard from "./components/customer/Dashboard";
import Orders from "./components/customer/Orders";
import OrderSuccess from "./components/customer/OrderSuccess";
import OrderFailure from "./components/customer/OrderFailure";
import Wishlist from "./components/customer/Wishlist";
import Profile from "./components/customer/Profile";
import ChangePassword from "./components/customer/ChangePassword";
import AddressList from "./components/customer/AddressList";
import AddAddress from "./components/customer/AddAddress";

//Seller
import SellerRegister from "./components/seller/SellerRegister";
import SellerLogin from "./components/seller/SellerLogin";
import SellerDashboard from "./components/seller/SellerDashboard";
import SellerProducts from "./components/seller/SellerProducts";
import AddProduct from "./components/seller/AddProduct";
import VendorOrders from "./components/seller/VendorOrders";
import Customers from "./components/seller/Customers";
import VendorProfile from "./components/seller/VendorProfile";
import VendorChangePassword from "./components/seller/VendorChangePassword";
import Reports from "./components/seller/Reports";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route
            path="/product/:product_slug/:product_id"
            element={<ProductDetail />}
          />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/category/:category_slug/:category_id"
            element={<CategoryProducts />}
          />
          <Route path="/checkout" element={<Chekout />} />
          <Route path="/order/success" element={<OrderSuccess />} />
          <Route path="/order/failed" element={<OrderFailure />} />

          {/* customer */}
          <Route path="/customer/register" element={<Register />} />
          <Route path="/customer/login" element={<Login />} />
          <Route path="/customer/dashboard" element={<Dashboard />} />
          <Route path="/customer/orders" element={<Orders />} />
          <Route path="/customer/wishlist" element={<Wishlist />} />
          <Route path="/customer/profile" element={<Profile />} />
          <Route path="/customer/change-password" element={<ChangePassword />} />
          <Route path="/customer/addresses" element={<AddressList />} />
          <Route path="/customer/add-addresses" element={<AddAddress />} />

          {/* seller */}
          <Route path="/seller/seller-dashboard" element={<SellerDashboard />} />
          <Route path="/seller/seller-register" element={<SellerRegister />} />
          <Route path="/seller/seller-login" element={<SellerLogin />} />
          <Route path="/seller/products" element={<SellerProducts />} />
          <Route path="/seller/add-products" element={<AddProduct />} />
          <Route path="/seller/orders" element={<VendorOrders />} />
          <Route path="/seller/customers" element={<Customers />} />
          <Route path="/seller/profile" element={<VendorProfile />} />
          <Route path="/seller/change-password" element={<VendorChangePassword />} />
          <Route path="/seller/reports" element={<Reports />} />


        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
