import React from "react";
import { Route, Switch, Router, useHistory } from "react-router-dom";

import { BASE_URL, HOME_PAGE} from "../constants/routes";

//Components
import HomePage from "../pages/Home/HomePage";

export const Routes = () => {
    const history = useHistory();
  return (
    <Router history={history}>
      <main className="main-wrapper">
        <Switch>
          <Route exact path={BASE_URL} component={HomePage} />
        </Switch>
      </main>
    </Router>
  );
};
