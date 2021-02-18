import React from 'react'

// Landing page will be the first screen seen handling authentication/
// single page for both login- and if not already, sign up.

//import components
import Signup from '../Components/Signup';
import Login from '../Components/Login';

function landingPage() {
  return (
    <div>
      <Login/>
      <Signup/>
    </div>
  )
}

export default landingPage
