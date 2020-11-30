import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import restaurantsList from "./assets/restaurants.json";
//IMPORT CONTAINERS

import Restaurant from "./container/Restaurant";
import Home from "./container/Home";
//IMPORT COMPONENTS
import Header from "./components/Header/index";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/restaurant/:id">
          <Restaurant />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
