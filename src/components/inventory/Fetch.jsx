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
import axios from 'axios';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    marginLeft: 15
  },
  button: {
    marginTop: 5,
    marginLeft: 5,
  },
  buttonn: {
    marginTop: 5,
    marginLeft: 5,
    color: 'red'
  },
  table: {
    minWidth: 650,
  },
  tableCell: {
    textTransform: 'capitalize'
  }
}));

const fs = require('fs');



const TotalLoads = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/invoices/total")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const showTotal = data.map((number) => 
  <Typography variant="h5" component="h3">
    Total Loads: {number.count}
  </Typography>
  )

  return (
    <ul>{showTotal}</ul>

  )
}

const Layout = () => (
  <React.Fragment>
    <TotalLoads />
    <DataLoader />
  </React.Fragment>
)

function DataLoader() {
  const classes = useStyles();

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/invoices/")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  console.log(data)

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
          {data.map(row => (
            <TableRow key={row._id}>
              <TableCell className={classes.tableCell} component="th" scope="row">
                {row.logger_name}
              </TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="right">{row.tons}</TableCell>
              <TableCell className={classes.tableCell} align="right">{row.species}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
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