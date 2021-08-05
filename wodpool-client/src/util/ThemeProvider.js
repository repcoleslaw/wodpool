import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  //palette color definitions
  palette: {
    primary: {
      // light: will be calculated from pallette.primary.main
      main: "#300300"
      //dark: will 
    },
    secondary: {
      main: "#c4c4c4"
    },
    text:{
      primary:"#fff",
      secondary:"rbga(255,255,255,0.75)",
      disabled:"rbga(255,255,255,0.5)"
    },
    action:{
      active:"#fff",
      hover:"rbga(255,255,255,0.08)",
      selected:"rbga(255,255,255,0.16)",
      disabled:"rbga(255,255,255,0.3)",
      disabledBackground:"rbga(255,255,255,0.12)",
    },
  },
  // TYPOGRAPHY
  typography:{
    fontFamily:"Montserrat, DINPro",
    h1:{},
    h2:{},
    h3:{},
    h4:{},
    h5:{},
    h6:{},
    subtitle1:{},
    subtitle2:{},
    body1:{},
    body2:{},
    button:{},
    caption:{},
    overline:{},
  },
  // SPACING
  spacing: 8,
  
});

export default theme;