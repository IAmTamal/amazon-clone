import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    //These are basically routes to different types of pages
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout page</h1>
          </Route>

          <Route path="/login">
            <h1>login page</h1>
          </Route>

          <Route path="/">
            <Navbar />
            <h1>Home page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
