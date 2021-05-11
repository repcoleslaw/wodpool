import react from 'react';

import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles} from "@material-ui/core/styles";

// eslint-disable-next-line
export default () => {
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

  return{
    theme
  }
 
}

