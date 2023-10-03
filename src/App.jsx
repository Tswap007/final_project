import { Route, Routes } from "react-router-dom";
import React, { Suspense, useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

const LazyHome = React.lazy(() => import("./components/Home/Home"));
const LazyMintPage = React.lazy(() => import("./components/MintPage/MintPage"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<LoadingScreen />}>
              {isLoading ? <LoadingScreen /> : <LazyHome />}
            </Suspense>
          }
        />
        <Route
          path="/mint"
          element={
            <Suspense fallback={<LoadingScreen />}>
              {isLoading ? <LoadingScreen /> : <LazyMintPage />}
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
