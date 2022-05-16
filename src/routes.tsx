import authenticatedRoutes from "./data/routesConfig";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/layout";

const Routes = () => {
  return (
    <Layout title={"Home"}>
      <Switch>
        {authenticatedRoutes.map((route) => (
          <Route
            path={route.path}
            key={route.path}
            component={route.component}
          />
        ))}

        {/* <Route path="*">
        <Redirect to="/login" />
      </Route> */}
      </Switch>
    </Layout>
  );
};

export default Routes;
