import {
  lighten,
  makeStyles,
} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    margin: `${theme.spacing(2)} 0`,

    '& tbody:empty::before': {
      border: `2px solid ${theme.palette.background.default}`,
      content: '"No results"',
      display: 'table-row',
      lineHeight: 3,
    },

    '& tr': {
      '&.is-me td': {
        backgroundColor: `${lighten(
          theme.palette.secondary.main,
          0.65,
        )} !important`,
        color: theme.palette.secondary.main,
        fontWeight: 'bold',
      },
    },
  },
  points: {
    width: 135,
  },
  rank: {
    width: 85,
  },
}));
