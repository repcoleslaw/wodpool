import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';



function NotFound() {
  return (
    <div>
      <Container>

        <h1>404 - Page not found</h1>
        <Link to='/'>
        <Button>
          Go Home
        </Button>
        </Link>
      </Container>
    </div>
  )
}

export default NotFound
