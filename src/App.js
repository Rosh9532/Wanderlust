import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Landing } from "./pages/Landing";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
