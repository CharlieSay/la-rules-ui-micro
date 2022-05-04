import { Campaigns, SalesArea, Breaks } from "./../pages/index";
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
  {
    path: "/campaigns",
    name: "Campaigns",
    component: Campaigns,
  },
  {
    path: "/sales-area",
    name: "Sales Area",
    component: SalesArea,
  },
];

export default authenticatedRoutes;
