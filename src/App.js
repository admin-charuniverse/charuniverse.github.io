import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route component={LandingPage} exact path="/" />
        <Route component={DetailPage} exact path="/:id" />
      </Switch>
    </Router>
  );
}

export default App;
