import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DisplayUsers from "./Components/DisplayUsers";
import { UserForm } from "./Components/UserForm";

export const Routing = () => {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">UserForm </Link>
            </li>
            <li>
              <Link to="/table">Display User</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <UserForm />
          </Route>
          <Route path="/table">
            <DisplayUsers />
          </Route>
        </Switch>
      </div>
    </>
  );
};
