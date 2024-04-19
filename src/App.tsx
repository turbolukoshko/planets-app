import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { PlanetsContainer } from "./components/Planets/PlanetsContainer/PlanetsContainer";
import { client } from "../api/client";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Favorites } from "./components/Favorites/Favorites";
import { NotFound } from "./components/NotFound/NotFound";
import { AppContainer } from "./App.styles";
import { ROUTES } from "../constants/routes";

function App() {
  const { planets, planet, favorites, notFound } = ROUTES;
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <Router>
          <AppContainer>
            <Sidebar />
            <Routes>
              <Route path={planet} element={<PlanetsContainer />} />
              <Route path={planets} element={<PlanetsContainer />} />
              <Route path={favorites} element={<Favorites />} />
              <Route index element={<Navigate to={planets} replace />} />
              <Route path={notFound} element={<NotFound />} />
            </Routes>
          </AppContainer>
        </Router>
      </ApolloProvider>
    </ErrorBoundary>
  );
}

export default App;
