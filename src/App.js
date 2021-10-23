import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/index";
import DonateCards from "./views/donateCards";
import Donate from "./views/donate";
import DonateConfirm from "./views/donateConfirm";
import Adoption from "./views/adoption";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/sahiplen" component={Adoption} exact />
        <Route path="/bagis" component={DonateCards} exact />
        <Route path="/bagis_yap" component={Donate} exact />
        <Route path="/bagis_tamamla" component={DonateConfirm} exact />
      </Switch>
    </Router>
  );
}

export default App;
