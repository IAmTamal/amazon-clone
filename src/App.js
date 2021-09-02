import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  return (
    //These are basically routes to different types of pages
    <Router>
      <div className="app">
        <Switch>

          <Route path="/checkout">
            <Navbar />
            <h1>Checkout page</h1>
          </Route>

          <Route path="/login">
            <Navbar />
            <h1>login page</h1>
          </Route>

          <Route path="/">
            <Navbar />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
