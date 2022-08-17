import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage/HomePage";
import { SuperHeroes } from "./components/pages/SuperHeroes/SuperHeroes";
import { SuperHero } from "./components/pages/SuperHero/SuperHero";
import { AppRoutes } from "./constants";
import { Layout } from "./components/layout/Layout";
import { NotFound } from "./components/pages/NotFound/NotFound";
import { ParallelQueries } from "./components/pages/ParallelQueries/ParallelQueries";
import { DependentQueries } from "./components/pages/DependentQueries/DependentQueries";
import "./App.css";
import { PaginatedQueries } from "./components/pages/PaginatedQueries/PaginatedQueries";

function App() {
  return (
    <Routes>
      <Route path={AppRoutes.Main} element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path={AppRoutes.SuperHeroes} element={<SuperHeroes />} />

        <Route path={AppRoutes.SuperHero} element={<SuperHero />} />

        <Route
          path={AppRoutes.Parallel}
          element={<ParallelQueries heroIds={["1", "3"]} />}
        />

        <Route
          path={AppRoutes.Dependent}
          element={<DependentQueries userId="userId" />}
        />

        <Route path={AppRoutes.Paginated} element={<PaginatedQueries />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
