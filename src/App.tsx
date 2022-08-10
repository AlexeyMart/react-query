import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage/HomePage";
import { SuperHeroes } from "./components/pages/SuperHeroes/SuperHeroes";
import { AppRoutes } from "./constants";
import { Layout } from "./components/layout/Layout";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path={AppRoutes.Main} element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path={AppRoutes.SuperHeroes} element={<SuperHeroes />} />
      </Route>
    </Routes>
  );
}

export default App;
