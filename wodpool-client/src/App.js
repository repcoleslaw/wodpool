// import style
import "./App.css";

//import packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

//import pages
import Home from "./Pages/homePage";
import Pool from "./Pages/poolPage";
// import Store from "./Pages/storePage";
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
import AuthenticationContextProvider from "./Components/AuthenticationContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import PublicRoute from "./Components/PublicRoute";
import useAxios from "./Components/useAxios";

// Set Authentication of login

function App() {
  useAxios();

  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <AuthenticationContextProvider>
            <Header />
            <Switch>
              {/* Private Routes */}
              <PublicRoute exact path="/" component={Home} />
              <ProtectedRoute exact path="/pool" component={Pool} />
              <ProtectedRoute exact path="/profile" component={Profile} />

              {/* Public Routes */}
              <PublicRoute exact path="/landing" component={Landing} />
  
              <PublicRoute
                exact
                path="/registration"
                component={Registration}
              />
              <PublicRoute exact path="/verify" component={Verify} />
              <PublicRoute exact path="/login" component={Login} />
              <Route exact path="/thanks" component={Thanks} />

              <Route component={NotFound} />
            </Switch>
          </AuthenticationContextProvider>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
