import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import navbar from "./navbar";
import Dogs from "./Dogs";
import Cats from "./Cats";
import Sheeps from "./Sheeps";
import Goats from "./Goats";
class App extends Component {
  render() {
    return (
        <Router>
          <navbar />
          <Switch>
            <Route path='/' exact component={Dogs}  />
            <Route path='/cats' component={Cats} />
            <Route path='/sheeps' component={Sheeps} />
            <Route path='/goats' component={Goats} />
          </Switch>
        </Router>
      );
    }
}

export default App;