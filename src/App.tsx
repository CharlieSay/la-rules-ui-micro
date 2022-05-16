import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "./styles/app.style.scss";

const LARulesApp = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default LARulesApp;
