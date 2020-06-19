import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {homeScreen} from "../screens/homeScreen";
import {contactScreen} from "../screens/contactScreen";
import {faqScreen} from "../screens/faqScreen";
import NavBar from "../components/navbar";

function Routes(props) {
  return (
    <Router>
      <div>
        <nav>
          <NavBar></NavBar>
        </nav>
        <Switch>
          <Route exact path="/" component={homeScreen} />
          <Route exact path={"/contact"} component={contactScreen} />
          <Route exact path={"/faq"} component={faqScreen} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
