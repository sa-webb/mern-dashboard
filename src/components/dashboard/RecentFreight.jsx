import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function RecentFreight() {
  const classes = useStyles();

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/freight/")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  console.log(data)
  return (
    <React.Fragment>
      <Title>Recent Loads</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Invoice Number</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Vendor</TableCell>
            <TableCell>Customer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row._id}>
              <TableCell>{row.num}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.vendor}</TableCell>
              <TableCell>{row.customer}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="/">
          See more loads
        </Link>
      </div>
    </React.Fragment>
  );
}