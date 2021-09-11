import React from "react";
import AffiliateRegistrationForm from "./components/forms/AffiliatesRegistrationForm";
import CrowdFundingForm from "./components/forms/CrowdFundingRegistrationForm";
import UserRegistrationForm from "./components/forms/UserRegistrationForm";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Login from './components/pages/Login';
// import Dashboard from "./components/pages/Dashboard";
// import PageNotFound from "./components/pages/PageNotFound";
// import UserRegistrationForm from "./components/forms/UserRegistrationForm";

const App = () => {

  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={Login}></Route>
    //     <Route path="/dashboard" component={Dashboard}></Route>
    //     <Route path="/forms" component={Form}></Route>
    //     <Route component={PageNotFound}></Route>
    //   </Switch>
    // </Router>
    <UserRegistrationForm />
  )
}

export default App;
