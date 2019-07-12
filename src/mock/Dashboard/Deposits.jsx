import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  spacing: {
    marginTop: 10
  }
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Log Purchases</Title>
      <Typography className={classes.spacing} component="p" variant="h4">
        $4,629.60
      </Typography>
      <Typography className={classes.spacing} component="p" variant="h4">
        68.91 Tons
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        15 July, 2019
      </Typography>
      <div>
        <Link color="primary" href="/">
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}