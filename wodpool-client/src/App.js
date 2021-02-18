// import style
import './App.css';

//import packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

//import pages
import Admin from './Pages/adminPage';
import Home from './Pages/homePage';
import Pool from './Pages/poolPage';
import Store from './Pages/storePage';
import Userpage from './Pages/userPage';
import Landing from './Pages/landingPage';

//import util 
import AuthProvider from './util/AuthProvider';
import AdminProvider from './util/AdminProvider';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
        <Route path='/pool' component={Pool} />
        <Route path='/store' component={Store} />
        <Route path='/user' component={Userpage} />
        <Route path='/admin' component={Admin} />
      </Switch>
    </Router>

  );
}

export default App;
