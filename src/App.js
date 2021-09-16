import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Landing } from "./pages/Landing";
import { GlobalProvider } from "./context/GlobalState";
import { AuthProvider } from "./context/auth/Authstate";
import { MSignup } from "./pages/Signup";
import SignIn from "./pages/Signin";
import { Saved } from "./pages/Saved";
import { Visited } from "./pages/Visited";
function App() {
  return (
    <GlobalProvider>
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/home" component={Home} />
            <Route path="/signup" component={MSignup} />
            <Route path="/signin" component={SignIn} />
            <Route path="/saved" component={Saved} />
            <Route path="/visited" component={Visited} />
          </Switch>
        </Router>
      </AuthProvider>
    </GlobalProvider>
  );
}

export default App;
