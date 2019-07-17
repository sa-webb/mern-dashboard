import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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
  },
  buttonn: {
    marginTop: 5,
    color: 'red',
  },
  table: {
    minWidth: 650,
  },
  tableCell: {
    textTransform: 'capitalize'
  },
}));

function DataLoader() {
  const classes = useStyles();

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/freight/")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  console.log(data)

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="left">Invoice Number</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="center">Vendor</TableCell>
            <TableCell align="center">Customer</TableCell>
            <TableCell align="center" >Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row._id}>
              <TableCell className={classes.tableCell} component="th" scope="row">
                {row.num}
              </TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="right">{row.vendor}</TableCell>
              <TableCell className={classes.tableCell} align="right">{row.customer}</TableCell>
              <TableCell align="center" size="small">
                <Button className={classes.button} size="small" color="primary" to={`invoices/edit/${row._id}`} component={Link} variant="text">View</Button>
                <Button className={classes.buttonn} size="small" to={`invoices/delete/${row._id}`} component={Link} variant="text">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default DataLoader;