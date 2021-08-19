import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CharacterCard from "../modules/CharacterCard";
import CharacterDetails from "../modules/CharacterDetails";
import CharacterList from "../modules/CharacterList";
import Error from "../modules/Error";
import Navbar from "../modules/Navbar";

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <PrivateRoute /> */}
        <Route exact path="/" component={CharacterList} />
        {/* <Route exact path="/characters/:id" component={CharacterCard} /> */}
        <Route
          exact
          path="/characters/:id/details"
          component={CharacterDetails}
        />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
};

export default Routes;
