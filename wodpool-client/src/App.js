// import style
import "./App.css";
import { Box, CircularProgress } from "@material-ui/core";
//import packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

//import pages
import Home from "./Pages/Home/homePage";
import Pool from "./Pages/Pool/poolPage";
// import Store from "./Pages/storePage";
import Landing from "./Pages/landingPage";
import NotFound from "./Pages/404";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Registration/Login";
import Thanks from "./Pages/thanks";
import Verify from "./Pages/Registration/verify";
import Profile from "./Pages/profile";

// import components
import Header from "./Components/HeaderFooter/Header";
import Footer from "./Components/HeaderFooter/Footer";

//import util
import AuthenticationContextProvider from "./Components/AuthenticationContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import PublicRoute from "./Components/PublicRoute";
import useAxios from "./Components/useAxios";
import { createMuiTheme, ThemeProvider  } from '@material-ui/core/styles';

//set theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#B00909"
    },
    secondary: {
      main: "#B00909"
    },
  },
});

// Set Authentication of login
const Routes = (r) => {
  return r.init ? (
    <Switch>
      <ProtectedRoute exact default path="/" component={Home} />
      <ProtectedRoute exact path="/pools" pool component={Pool} />
      <ProtectedRoute exact path="/profile" component={Profile} />

      {/* Public Routes */}
      <PublicRoute exact path="/landing" component={Landing} />
      <PublicRoute exact path="/registration" component={Registration} />
      <PublicRoute exact path="/verify" component={Verify} />
      <PublicRoute exact path="/login" component={Login} />
      <Route exact path="/thanks" component={Thanks} />

      <Route component={NotFound} />
    </Switch>
  ) : (
    <Box p={4} align="center">
      <CircularProgress />
    </Box>
  );
};

function App() {
  useAxios();

  return (
    <div className="page-container">
      <ThemeProvider theme={theme}>
      <div className="content-wrap">
        <Router>
          <AuthenticationContextProvider>
            <Routes />
          </AuthenticationContextProvider>
        </Router>
      </div>
      <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
