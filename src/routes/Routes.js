import React from "react";
import { Route, Switch, Router, useHistory } from "react-router-dom";

import { BASE_URL, DETAILS, SUCCESS} from "../constants/routes";

//Components
import HomePage from "../pages/Home/HomePage";
import DetailsPage from "../pages/Details/DetailsPage";
import SuccessPage from "../pages/Success/SuccessPage";

export const Routes = () => {
    const history = useHistory();
  return (
    <Router history={history}>
      <main className="main-wrapper">
        <Switch>
          <Route exact path={BASE_URL} component={HomePage} />
          <Route exact path={DETAILS} component={DetailsPage} />
          <Route exact path={SUCCESS} component={SuccessPage} />
        </Switch>
      </main>
    </Router>
  );
};
