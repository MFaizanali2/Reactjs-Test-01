import React from "react";
// import Index from "./Router/Index.jsx";
// import { Route, Routes } from "react-router";
import Home from "./Components/Pages/Home.jsx";

const App = () => {
  // const routes = Index();
  return (
    <div>
      {/* <Header/> */}
      {/* <Routes>
        {routes.map(({ path, element }, key) => (
          <Route key={key} path={path} element={element} />
        ))}
      </Routes> */}
      <Home />
    </div>
  )
}

export default App