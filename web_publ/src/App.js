import React from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import routes from "./Routes";
import route from "react-router-dom/es/Route";

function App() {
  return (
      <Router>
          <div className="App">
              <Navbar />
              <div className="container">
                  <Switch>
                      {routes.map(route => {
                          return (
                              <Route key={route.path} path={route.path} exact>
                                  <route.component />
                              </Route>
                          )
                      })}
                  </Switch>
              </div>
          </div>
      </Router>
  );
}

export default App;
