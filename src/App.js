import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";

function App() {
  return (
    //These are basically routes to different types of pages
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Navbar />
            <Checkout />
          </Route>

          <Route path="/login">
            <Navbar />
            <Login />
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
