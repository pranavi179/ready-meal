import React from "react";
import "./App.css";
// import View from "./Components/layout";
import Footer from "./Components/Footer";
// import Meallist from "./Components/meallist";
import Meallist from "./Components/meallist";
import Samplemeal from "./Components/samplemeal";
import Dates from "./Components/date";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Footerr from "./Components/Footer";
function App() {
  return (
    <div>
      {/* <Router>
        <Route path="/" component={Footerr} />

        {/* <Route exact path="/footer" component={Footerr} /> */}
      {/* <Redirect to="/samplemeal" />
      </Router> */}
      {/* <Samplemeal /> */}
      <Footerr />
    </div>
  );
}

export default App;
