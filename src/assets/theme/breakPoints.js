import { styled } from '@mui/material/styles';

const BreakPoints = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    backgroundColor: '#FFF',
  },
  [theme.breakpoints.up('md')]: {
    backgroundColor: '#bdbdbd',
  },
  [theme.breakpoints.up('lg')]: {
    backgroundColor: '#9e9e9e',
  },
}));

export default BreakPoints;