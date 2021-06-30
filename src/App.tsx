// import React from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Route } from "react-router-dom";
import FormComponent from "./components/FormComponent";
import MusicDetail from "./components/MusicDetail";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route path="/" exact render={(routerProps) => <FormComponent {...routerProps}/>} />
          <Route path="/music-detail/:id" exact render={(routerProps) => <MusicDetail {...routerProps}/>} />
        </Switch>
      </div>
    </Router>
  );
}
