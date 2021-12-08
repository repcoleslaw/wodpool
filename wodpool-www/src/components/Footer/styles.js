import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  logo: {
    display: 'block',
    margin: '0 auto',
    height: 135,
    width: 95,

    '& img': {
      objectFit: 'contain !important',
    },
  },
}));
