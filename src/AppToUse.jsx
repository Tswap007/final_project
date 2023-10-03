import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen"; // Import your LoadingScreen component

const LazyHome = React.lazy(() => import("./components/Home/Home"));
const LazyMintPage = React.lazy(() => import("./components/MintPage/MintPage"));

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Suspense fallback={<LoadingScreen />}>
                <LazyHome />
              </Suspense>
            }
          />
          <Route
            path="/mint"
            element={
              <Suspense fallback={<LoadingScreen />}>
                <LazyMintPage />
              </Suspense>
            }
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
