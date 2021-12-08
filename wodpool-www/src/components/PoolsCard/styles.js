import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  action: {
    alignSelf: 'center',
    margin: `0 ${theme.spacing(1)}`,
    opacity: 0.5,
  },
  content: {
    '& span:last-of-type': {
      fontSize: '0.833rem',
    },
  },
  card: {
    height: '100%',

    '& > a': {
      height: '100%',
    },
  },
}));
