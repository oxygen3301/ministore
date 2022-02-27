import Dashboard from "./pages/Dashboard";
// import ManageProducts from "./pages/ManageProducts";
import Configure from "./pages/Configure";
import EditProduct from "./pages/EditProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ViewOrders from "./pages/ViewOrders";

function App() {
  const { isLoading } = useAuth0();
  if (isLoading)
    return (
      <div>
        <img src="./assets/splash.png" alt="" />
      </div>
    );

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        {/* <Route path="/manageproducts" element={<ManageProducts />} /> */}
        <Route path="/configure" element={<Configure />} />
        <Route path="/editproduct" element={<EditProduct />} />
        <Route path="/vieworders" element={<ViewOrders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
