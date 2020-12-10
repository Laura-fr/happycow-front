import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//IMPORT CONTAINERS

import Resume from "./container/Resume";
import Home from "./container/Home";
import Result from "./container/Result";
import AllFood from "./container/AllFood";
import AllShop from "./container/AllShop";
import AllCosmetic from "./container/AllCosmetic";

//IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faKey,
  faSearch,
  faStar,
  faPhoneAlt,
  faMapMarkerAlt,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faEnvelope,
  faKey,
  faSearch,
  faStar,
  faPhoneAlt,
  faMapMarkerAlt,
  faGlobe
);

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/allfood">
          <AllFood />
        </Route>
        <Route path="/allshop">
          <AllShop />
        </Route>
        <Route path="/allcosmetic">
          <AllCosmetic />
        </Route>
        <Route path="/result/:search">
          <Result />
        </Route>
        <Route path="/resume/:id">
          <Resume />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
