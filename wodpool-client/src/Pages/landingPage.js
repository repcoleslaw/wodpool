import { Button } from '@material-ui/core';
import React from 'react'
import {Link} from 'react-router-dom';

// Landing page will be the first screen seen handling authentication/
// single page for both login- and if not already, sign up.

//import components
import Login from './Registration/Login';

//import Assets


function landingPage() {
  return (
    <>
      <div className="Landing-Hero">
        <h1 className="hero-text">Welcome, Competitors!</h1>
        <Button 
        type="submit"
        variant="contained"
        color="#B00909"
        className="hero-btn"
      >
        <Link to="/signup">Sign Up</Link>
      </Button>
      </div>

      <Login/>
    </>
  )
}

export default landingPage