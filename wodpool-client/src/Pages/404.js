import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

import NFgraphic from '../assets/undraw_page_not_found_su7k.svg';


function NotFound() {
  return (
    <div>
      <Box>

        <h1>404 - Page not found</h1>
        <Link to='/'>
        <Button>
          Go Home
        </Button>
        </Link>
      </Box>
    </div>
  )
}

export default NotFound
