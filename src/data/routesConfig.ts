import { Breaks } from "./../pages/index";
import { RouteProps } from "react-router-dom";

interface RoutesInterface extends RouteProps {
  name: string;
  path: string;
}

const authenticatedRoutes: RoutesInterface[] = [
  {
    path: "/breaks",
    name: "Breaks",
    component: Breaks,
  },
];

export default authenticatedRoutes;
