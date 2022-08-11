import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage/HomePage";
import { SuperHeroes } from "./components/pages/SuperHeroes/SuperHeroes";
import { SuperHero } from "./components/pages/SuperHero/SuperHero";
import { AppRoutes } from "./constants";
import { Layout } from "./components/layout/Layout";
import "./App.css";
import { NotFound } from "./components/pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path={AppRoutes.Main} element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path={AppRoutes.SuperHeroes} element={<SuperHeroes />} />

        <Route path={AppRoutes.SuperHero} element={<SuperHero />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
