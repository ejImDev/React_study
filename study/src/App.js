import React from "react";
import Navbar from "./components/Navbar";
import Routes from "./Routes";
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
                        {routes.map(route => { {/*routes를 호출해준후에 map을 통해 배열로 담아둔 데이터를 가져옴*/}
                            return (
                                <Route key={route.path} path={route.path} exact>
                                    <route.component /> {/*{}형식 뿐만 아니라 <></> 형식으로도 표현 가능*/}
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
