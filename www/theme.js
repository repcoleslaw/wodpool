module.exports = {
  palette: {
    primary: {
      light: '#09090b',
      main: '#09090b',
      dark: '#000',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#B00909',
      dark: '#910808',
      light: '#f12b2b',
      contrastText: '#FFF',
    },
    background: {
      default: '#1B1A21',
      paper: 'rgb(13, 13, 16)',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#1B1A21',
        },
      },
    },
    MuiTabPanel: {
      root: {
        padding: 0,
      },
    },
    MuiTableCell: {
      root: {
        border: `2px solid #1B1A21 !important`,
        padding: 16,
      },
      head: {
        backgroundColor: `#000 !important`,
      },
      body: {
        backgroundColor: `#09090b !important`,
      },
    },
    MuiOutlinedInput: {
      root: {
        '&$focused $notchedOutline': {
          color: '#FFF',
          borderColor: '#FFF',
        },
      },
      notchedOutline: {
        '&$focused': {
          borderColor: '#FFF',
        },
      },
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: '#FFF',
        },
      },
    },
    MuiFormHelperText: {
      root: {
        '&$focused': {
          color: '#FFF',
        },
      },
    },
  },
};
