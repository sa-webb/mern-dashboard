import React, { useState, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InvoicesList from "../inventory/List";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

const Planet = props => (
  <TableRow>
    <TableCell>{props.invoice.name}</TableCell>
  </TableRow>
);

function invoiceList() {
  return this.state.planets.map(function(currentInvoice, i) {
      return <Planet invoice={currentInvoice} key={i} />;
  });
}

const Planets = () => {
  const classes = useStyles();

  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  async function fetchData() {
    const res = await fetch("http://localhost:5000/invoices/");
    res
      .json()
      .then(res => setPlanets(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(planets);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Tons</TableCell>
            <TableCell align="right">Species</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoiceList}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Planets;