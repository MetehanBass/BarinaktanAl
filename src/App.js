import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/index";
import DonateCards from "./views/donateCards";
import Donate from "./views/donate";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/bagis" component={DonateCards} exact />
        <Route path="/bagis_yap" component={Donate} exact />
      </Switch>
    </Router>
  );
}

export default App;
