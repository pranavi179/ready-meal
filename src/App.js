import React from "react";
import "./App.css";
// import View from "./Components/layout";
import Footer from "./Components/Footer";
// import Meallist from "./Components/meallist";
import Meallist from "./Components/meallist";
import Samplemeal from "./Components/samplemeal";
import Dates from "./Components/date";
import SignInForm from "./component/signinform";
import SignUpForm from "./component/signupform";
import Planmodal from "./component/planmodal";

import Checkout from "./check/Checkout";
import StickyFooter from "./check/StickyFooter";
import Cartreact from "./Components/cartreact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect
// } from "react-router-dom";
import Footerr from "./Components/Footer";
function App() {
  return (
    <div>
      {/* <h1>ierslkhnfhgn</h1>  */}
      <Router>
        <Route path="/" component={Footerr} />
      </Router>
      {/* <React.Fragment>
        <Switch>
          <Route exact path="/Signinform" component={SignInForm} />
          <Route exact path="/signupform" component={SignUpForm} />
        </Switch>
      </React.Fragment> */}
      {/* <Route exact path="/footer" component={Footerr} />
   <Redirect to="/samplemeal" /> */}
      {/* <Footerr />
      <Samplemeal /> */}
      {/* <Checkout />

      <StickyFooter /> */}
    </div>
  );
}
export default App;
