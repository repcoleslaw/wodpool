// import style
import "./App.css";
import { Box, CircularProgress } from "@material-ui/core";
//import packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


//import pages
import Home from "./Pages/Home/homePage";
// import Pool from "./Pages/Pool/OLD_poolPage";
import Poolpage from "./Pages/Pool/pool";

// import Store from "./Pages/storePage";
import Landing from "./Pages/Landing/landingPage";
import NotFound from "./Pages/404/404";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Registration/Login";
import Thanks from "./Pages/Registration/thanks";
import Verify from "./Pages/Registration/verify";
import Profile from "./Pages/Profile/profile";
import Submit from "./Components/ScoreSubmit/ScoreSubmit";
import Faq from './Pages/Info/infoPage';

// import components
import Footer from "./Components/HeaderFooter/Footer";

//import util
import AuthenticationContextProvider from "./Components/AuthenticationContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import PublicRoute from "./Components/PublicRoute";
import useAxios from "./Components/useAxios";


//set theme
import { ThemeProvider } from '@material-ui/styles';
import theme from './util/ThemeProvider';

// Set Authentication of login
const Routes = (r) => {
  return r.init ? (
    <Switch>
      <ProtectedRoute exact default path="/" component={Home} />
      <ProtectedRoute exact path="/profile" component={Profile} />
      <ProtectedRoute exact path="/faq" component={Faq} />
      <ProtectedRoute exact path="/pools/:id" component={Poolpage} />
      <ProtectedRoute exact path="/pools/:id/submit" component={Submit} />
      

      {/* Public Routes */}
      <PublicRoute exact path="/landing" component={Landing} />
      <PublicRoute exact path="/registration" component={Registration} />
      <PublicRoute exact path="/verify" component={Verify} />
      <PublicRoute exact path="/login" component={Login} />
      <Route exact path="/thanks" component={Thanks} />
      {/* <Route exact path="/test" component={Test} /> */}

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
