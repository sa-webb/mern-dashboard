import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    width: '85%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    marginLeft: 40
  },
  table: {
    minWidth: 650,
  },
  button: {
    marginTop: 5,
    marginLeft: 5
  },
  buttonn: {
    marginTop: 5,
    marginLeft: 5,
    color: 'white',
    backgroundColor: 'red'
  },
  columnTitle: {
    fontWeight: 'bold'
  }
}));

function createData(id, date, vendor, customer, quantity, description, amount) {
  return { id, date, vendor, customer, quantity, description, amount };
}

const rows = [
  createData(121,'07/08/2019', 'TM Wood Products', 'Ferche Millworks',),
  createData(122,'07/09/2019', 'TM Wood Products', 'Menzer Lumber', ),
  createData(123,'07/10/2019', 'Volunteer Pallet', 'Volunteer Pallet',),
  createData(124,'07/11/2019', 'TM Wood Products', 'Mohawk Lumber',),
  createData(125,'07/12/2019', 'TM Wood Products', 'Mohawk Lumber',),
  createData(126,'07/13/2019', 'Pallet Factory', 'Pallet Factory',)
];

const Total = () => {
  return (
    <Typography variant="h5" component="h3">
      Total Loads: 6 Customers: 3
    </Typography>
  )
}

const Layout = () => {
  return (
    <React.Fragment>
      <Total />
      <MockFreight />
    </React.Fragment>
  )
}

function MockFreight() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.columnTitle}>Invoice Number</TableCell>
            <TableCell className={classes.columnTitle} align="left">Date</TableCell>
            <TableCell className={classes.columnTitle} align="center">Vendor</TableCell>
            <TableCell className={classes.columnTitle} align="center">Customer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="center">{row.vendor}</TableCell>
              <TableCell align="center">{row.customer}</TableCell>
              <Button className={classes.button} color="primary" variant="text" >Edit</Button>
              <Button className={classes.buttonn} variant="text" >Delete</Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default Layout;