import React from "react";
import Navbar from "./components/Navbar";
import Users from  "./components/pages/Users"
import Movies from './components/pages/Movies'
import Home from "./components/pages/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {

    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route path="/movies">
                            <Movies />
                        </Route>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/users">
                            <Users />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
  );
}

export default App;
