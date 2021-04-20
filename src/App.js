import React, { useState, Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/pages/Home";
import NotFound from "./components/layout/pages/NotFound";

import User from "./components/Users/User";
import Search from "./components/Users/Search";
import Alert from "./components/layout/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./components/layout/pages/About";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
const App = () => {
  //foo = () => 'This is class function';

  const [alert, setAlert] = useState(null);

  //Show all github users using axios non async method. Here we cant set variable from axios get response. Setting state in then clause
  //Commenting this method as we dont need to show all users now on page load
  // componentDidMount() {
  //   console.log("Component did mount called");
  //   this.setState({
  //     loading: true,
  //   });
  //   axios
  //     .get(
  //       `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID} & client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
  //     )
  //     .then(
  //       (res) => {
  //         this.setState({
  //           users: res.data,
  //           loading: false,
  //         });
  //       },
  //       (error) => {
  //         console.log("There is some problem in fetching data");
  //       }
  //     );
  // }

  

  //const loading = false;
  //const name = 'Abhilash';
  //const bar = () => 'This is functional arrow function';

  return (
    <GithubState>
      <AlertState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                component={Home}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/users/:login" component={User} />
              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
      </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
