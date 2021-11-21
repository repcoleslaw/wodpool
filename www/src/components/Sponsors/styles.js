import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    position: 'relative',
    zIndex: 1,

    '& span': {
      display: 'inline-block',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: theme.spacing(2),
      position: 'relative',

      '&::before': {
        background: theme.palette.secondary.main,
        content: '""',
        display: 'block',
        bottom: 4,
        opacity: 0.55,
        position: 'absolute',
        height: 8,
        left: 0,
        right: 0,
        zIndex: -1,
        transform: 'skew(12deg)',
      },
    },
  },
  img: {
    height: 95,
    width: 225,

    '& img': {
      objectFit: 'contain !important',
    },
  },
}));
