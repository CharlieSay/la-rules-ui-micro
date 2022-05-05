import authenticatedRoutes from "./data/routesConfig";
import { Redirect, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      {authenticatedRoutes.map((route) => (
        <Route
          exact
          path={route.path}
          key={route.path}
          component={route.component}
        />
      ))}

      <Route exact path="*">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
};

export default Routes;
