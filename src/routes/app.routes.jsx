import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { NewDish } from "../pages/NewDish";
import { EditDish } from "../pages/EditDish";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/new" element={<NewDish />} />
      <Route path="/edit/:id" element={<EditDish />} />
    </Routes>
  );
};