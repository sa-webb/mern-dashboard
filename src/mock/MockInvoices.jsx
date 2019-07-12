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
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    marginLeft: 15
  },
  button: {
    marginTop: 5,
    marginLeft: 5
  },
  buttonn: {
    marginTop: 5,
    marginLeft: 5,
    color: 'red'
  },
  table: {
    minWidth: 650,
  },
}));

function createData(date, name, tons, species, price, amount) {
  return { date, name, tons, species, price, amount };
}

const rows = [
  createData('07/08/2019', 'Chip Johnson', 26.0, 'Red Oak', 60, 1800.00),
  createData('07/08/2019', 'Gary Busby', 11.0, 'Red Oak', 60, 865.32),
  createData('07/09/2019', 'Gerald Pritchard', 20, 'White oak', 80, 1600.00),
  createData('07/08/2019', 'Chip Johnson', 26.0, 'Red Oak', 60, 1800.00),
  createData('07/08/2019', 'Gary Busby', 11.0, 'Red Oak', 60, 865.32),
  createData('07/09/2019', 'Gerald Pritchard', 20, 'White oak', 80, 1600.00)
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
      <MockInvoices />
    </React.Fragment>
  )
}

function MockInvoices() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="right">Tons</TableCell>
            <TableCell align="right">Species</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="right">{row.tons}</TableCell>
              <TableCell align="right">{row.species}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <Button className={classes.button} color="primary" to={`invoices/edit/${row._id}`} component={Link} variant="text">Edit</Button>
              <Button className={classes.buttonn} to={`invoices/delete/${row._id}`} component={Link} variant="text">Delete</Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default Layout;