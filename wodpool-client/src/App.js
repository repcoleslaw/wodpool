// import style
import "./App.css";

//import packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

//import pages
import Admin from "./Pages/adminPage";
import Home from "./Pages/homePage";
import Pool from "./Pages/poolPage";
// import Store from "./Pages/storePage";
import Userpage from "./Pages/userPage";
import Landing from "./Pages/landingPage";
import NotFound from "./Pages/404";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Registration/Login";
import Thanks from "./Pages/thanks";
import Verify from "./Pages/Registration/verify";
import Profile from "./Pages/profile";

// import components
import Header from "./Components/Header";
import Footer from "./Components/Footer";

//import util

import AuthRoute from "./util/AuthRoute";

import AuthenticationContextProvider from "./Components/AuthenticationContext";
import useAxios from "./Components/useAxios";

// Set Authentication of login

function App() {
  useAxios();

  return (
    <div className="page-container">
      <div className="content-wrap">
        <AuthenticationContextProvider>
          <Router>
            <Header />
            <Switch>
              {/* Private Routes */}
              <AuthRoute exact path="/" component={Home} />

              {/* Public Routes */}
              <Route exact path="/landing" component={Landing} />
              <Route exact path="/pool" component={Pool} />
              <Route exact path="/user" component={Userpage} />
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/registration" component={Registration} />
              <Route exact path="/verify" component={Verify} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/thanks" component={Thanks} />
              <Route exact path="/profile" component={Profile} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </AuthenticationContextProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
