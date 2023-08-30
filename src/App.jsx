import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pricing from "./pages/Pricing.jsx";
import NotFound from "./pages/NotFound.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import Homepage from "./pages/Homepage.jsx";
import Product from "./pages/Product.jsx";
import Login from "./pages/Login.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/products"} element={<Product />} />
        <Route path={"/pricing"} element={<Pricing />} />
        <Route path={"login"} element={<Login />} />
        <Route path={"app"} element={<AppLayout />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
