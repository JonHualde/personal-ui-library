import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ButtonPage from "../pages/buttons.js";

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <div>Testing </div>
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        {/* <Route path="/headers" component={} /> */}
      </Switch>
    </div>
  );
};

export default Main;
