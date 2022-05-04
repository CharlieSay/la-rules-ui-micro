import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/layout";
import Routes from "./routes";
import "./styles/app.style.scss";

const LARulesApp = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout title={"Home"}>
          <Routes />
        </Layout>
      </div>
    </BrowserRouter>
  );
};

export default LARulesApp;
