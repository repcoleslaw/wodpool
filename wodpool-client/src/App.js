// import style
import "./App.css";

//import packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

//import pages
import Admin from "./Pages/adminPage";
import Home from "./Pages/homePage";
import Pool from "./Pages/poolPage";
import Store from "./Pages/storePage";
import Userpage from "./Pages/userPage";
import Landing from "./Pages/landingPage";
import NotFound from "./Pages/404";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Registration/Login";
import Thanks from "./Pages/thanks";
import Verify from "./Pages/Registration/verify";

// import components
import Header from "./Components/Header";
import Footer from "./Components/Footer";

//import util
import AuthProvider from "./util/AuthProvider";


// Set Authentication of login
const token = localStorage.FBIdToken;

function App() {
  // if you config a base URL at the top of your app
  // you don't need to reference it again per request
  axios.defaults.baseURL = process.env.REACT_APP_API;

  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          {/* <Header /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pool" component={Pool} />
            <Route exact path="/store" component={Store} />
            <Route exact path="/user" component={Userpage} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/verify" component={Verify} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/thanks" component={Thanks} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>

      <Footer />
    </div>
  );
}

export default App;
