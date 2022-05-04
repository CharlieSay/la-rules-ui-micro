import authenticatedRoutes from "./data/routesConfig";
import { Redirect, Route, Switch } from "react-router-dom";
import { Login } from "./pages";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
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
