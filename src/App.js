import React from "react";
import logo from "./logo.svg";
import "./App.css";

import SignInForm from "./component/signinform";
import SignUpForm from "./component/signupform";
import { Switch, Route } from "react-router-dom";
import Planmodal from "./component/planmodal";

function App() {
  const [setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <h1>ierslkhnfhgn</h1>

      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <div className="Modal">
        <Planmodal />
      </div>

      <React.Fragment>
        <Switch>
          <Route exact path="/signinform" component={SignInForm} />
          <Route exact path="/signupform" component={SignUpForm} />
        </Switch>
      </React.Fragment>
    </div>
  );
}

export default App;
