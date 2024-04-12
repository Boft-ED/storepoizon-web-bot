import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home"
import Catalog from "../Catalog/Catalog"
import { ROUTES } from "../../utils/router";

const AppRoutes = () => (
    <Routes>
        <Route index element={<Home />} />
        <Route path={ROUTES.CATALOG} element={<Catalog />} />
    </Routes>
);

export default AppRoutes