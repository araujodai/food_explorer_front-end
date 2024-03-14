import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { NewDish } from "../pages/NewDish";
import { EditDish } from "../pages/EditDish";
import { Orders } from "../pages/Orders";
import { NewOrder } from "../pages/NewOrder";
import { OrderDetails } from "../pages/OrderDetails";
import { Favorites } from "../pages/Favorites";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/new" element={<NewDish />} />
      <Route path="/edit/:id" element={<EditDish />} />
      <Route path="/newOrder" element={<NewOrder />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/orders/:id" element={<OrderDetails />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};