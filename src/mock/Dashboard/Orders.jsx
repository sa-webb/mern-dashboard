import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(date, name, tons, species, price, amount) {
  return { date, name, tons, species, price, amount };
}

const rows = [
  createData('07/08/2019', 'Chip Johnson', 31.2, 'Red Oak', 60, 1800.00),
  createData('07/08/2019', 'Gary Busby', 13.22, 'Red Oak', 60, 865.32),
  createData('07/09/2019', 'Gerald Pritchard', 29.6, 'White oak', 80, 1600.00),
  createData('07/08/2019', 'Chip Johnson', 33.40, 'Red Oak', 60, 1800.00),
  createData('07/08/2019', 'Gary Busby', 14.16, 'Red Oak', 60, 865.32),
  createData('07/09/2019', 'Gerald Pritchard', 30.06, 'White oak', 80, 1600.00)
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Tons</TableCell>
            <TableCell>Species</TableCell>
            <TableCell>Price</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.tons}</TableCell>
              <TableCell>{row.species}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="/">
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}