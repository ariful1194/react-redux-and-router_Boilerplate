import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { pages } from "./Routes";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Suspense fallback="loading........">
          <Routes>
            {pages.map((page, index) => (
              <Route key={index} element={<page.element />}>
                {page.children.map((pg, indx) => (
                  <Route key={indx} path={pg.path} element={<pg.element />} />
                ))}
              </Route>
            ))}
          </Routes>
        </Suspense>
      </Provider>
    </div>
  );
}

export default App;
